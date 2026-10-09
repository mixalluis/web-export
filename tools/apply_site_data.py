#!/usr/bin/env python3
"""Terapkan admin/data/site-data.json ke seluruh berkas situs statis.

Sumber data tunggal: berkas JSON yang dihasilkan panel admin (admin/).
Skrip ini menulis ulang:

  - assets/js/config.js   -> identitas perusahaan, legalitas, kontak, anti-fraud
  - assets/js/i18n.js     -> seluruh nilai kamus DICTIONARY (en + id)
  - assets/js/main.js     -> nomor registrasi dokumen (CERT_REG_NOS)
  - assets/js/rfq-form.js -> nilai cadangan email & WhatsApp
  - index.html, contact/index.html, about/index.html -> elemen [data-site-field]
  - sitemap.xml           -> domain pada <loc> dan tanggal <lastmod>
  - robots.txt            -> URL sitemap

Pemakaian:
  python3 tools/apply_site_data.py --extract     # situs  -> admin/data/site-data.json
  python3 tools/apply_site_data.py --dry-run     # pratinjau perubahan
  python3 tools/apply_site_data.py               # terapkan ke berkas situs
"""

from __future__ import annotations

import argparse
import datetime as dt
import difflib
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DATA = ROOT / "admin" / "data" / "site-data.json"

CERT_ORDER = ["nib", "npwp", "kemendag", "phyto", "coa", "coo"]
# Nomor registrasi dokumen legal ikut nilai pada blok legal (satu sumber data)
CERT_LEGAL_FALLBACK = {"nib": "nib", "npwp": "npwp", "kemendag": "exportLicense"}

CONFIG_FIELDS = [
    ("site", "domain", "site.domain", "string"),
    ("", "companyName", "site.companyName", "string"),
    ("", "tradingName", "site.tradingName", "string"),
    ("", "establishmentYear", "site.establishmentYear", "number"),
    ("legal", "nib", "legal.nib", "string"),
    ("legal", "npwp", "legal.npwp", "string"),
    ("legal", "exportLicense", "legal.exportLicense", "string"),
    ("legal", "kbli", "legal.kbli", "string"),
    ("contact", "email", "contact.email", "string"),
    ("contact", "whatsappNumber", "contact.whatsappNumber", "string"),
    ("contact", "whatsappDisplay", "contact.whatsappDisplay", "string"),
    ("contact", "phoneDisplay", "contact.phoneDisplay", "string"),
    ("contact", "phone", "contact.phone", "string"),
    ("contact", "operatingHours", "contact.operatingHours", "string"),
    ("contact", "addressHeadOffice", "contact.addressHeadOffice", "string"),
    ("contact", "addressWarehouse", "contact.addressWarehouse", "string"),
]

HTML_FILES = ["index.html", "contact/index.html", "about/index.html"]


def js_string(value) -> str:
    """Literal string JavaScript dari sebuah nilai (aman untuk kutip & backslash)."""
    return json.dumps(str(value), ensure_ascii=False)


def find_matching_brace(text: str, open_index: int) -> int:
    """Indeks tepat setelah '}' yang memasangkan '{' pada open_index."""
    depth = 0
    i = open_index
    quote = ""
    while i < len(text):
        ch = text[i]
        if quote:
            if ch == "\\":
                i += 2
                continue
            if ch == quote:
                quote = ""
            i += 1
            continue
        if ch in ('"', "'", "`"):
            quote = ch
        elif ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    raise ValueError("kurung kurawal tidak seimbang")


def block_range(text: str, key: str):
    """Rentang (awal, akhir) objek '{ ... }' milik sebuah key JavaScript."""
    match = re.search(r"(?<![\w.])" + re.escape(key) + r"\s*:\s*\{", text)
    if not match:
        return None
    open_index = text.index("{", match.start())
    return open_index, find_matching_brace(text, open_index)


def string_span(text: str, start: int) -> int:
    """Indeks tepat setelah string literal yang dimulai pada start (karakter kutip)."""
    quote = text[start]
    i = start + 1
    while i < len(text):
        if text[i] == "\\":
            i += 2
            continue
        if text[i] == quote:
            return i + 1
        i += 1
    raise ValueError("string literal tidak diakhiri")


def strip_js_comments(text: str) -> str:
    """Hapus komentar // dan /* */ tanpa mengubah isi string literal."""
    out = []
    i = 0
    quote = ""
    while i < len(text):
        ch = text[i]
        if quote:
            out.append(ch)
            if ch == "\\" and i + 1 < len(text):
                out.append(text[i + 1])
                i += 2
                continue
            if ch == quote:
                quote = ""
            i += 1
            continue
        if ch in ('"', "'", "`"):
            quote = ch
            out.append(ch)
            i += 1
            continue
        if ch == "/" and i + 1 < len(text) and text[i + 1] == "/":
            i = text.find("\n", i)
            if i == -1:
                break
            out.append("\n")
            i += 1
            continue
        if ch == "/" and i + 1 < len(text) and text[i + 1] == "*":
            end = text.find("*/", i + 2)
            i = len(text) if end == -1 else end + 2
            continue
        out.append(ch)
        i += 1
    return "".join(out)


def json_from_js_block(block: str) -> dict:
    """Baca objek JS bergaya JSON (satu baris per kunci) menjadi dict Python."""
    body = strip_js_comments(block)
    body = re.sub(r",(\s*[}\]])", r"\1", body)
    return json.loads(body)


def assign_block_range(text: str, name: str):
    """Rentang objek '{ ... }' yang diikat dengan '=' (mis. const X = { ... })."""
    match = re.search(r"\b" + re.escape(name) + r"\s*=\s*\{", text)
    if not match:
        return None
    open_index = text.index("{", match.start())
    return open_index, find_matching_brace(text, open_index)


def insert_entry(block: str, key: str, literal: str, indent: str) -> str:
    """Sisipkan pasangan kunci baru sebelum '}' penutup blok objek."""
    close = block.rfind("}")
    line_start = block.rfind("\n", 0, close)
    if line_start == -1:
        line_start = close
    entry = indent + js_string(key) + ": " + literal + ",\n"
    return block[: line_start + 1] + entry + block[line_start + 1:]


def set_js_value(block: str, key: str, literal: str, quoted: bool = True):
    """Ganti nilai milik satu kunci di dalam teks blok objek JS."""
    key_pattern = ('"' + re.escape(key) + '"') if quoted else (r"\b" + re.escape(key) + r"\b")
    value_pattern = r'"(?:[^"\\]|\\.)*"' if quoted else r'"(?:[^"\\]|\\.)*"|[-\d.]+'
    pattern = re.compile(r"(" + key_pattern + r"\s*:\s*)(" + value_pattern + r")")
    return pattern.subn(lambda m: m.group(1) + literal, block, count=1)


def nested_value(data: dict, path: str):
    node = data
    for part in path.split("."):
        if not isinstance(node, dict) or part not in node:
            return None
        node = node[part]
    if node is None or (isinstance(node, str) and not node.strip()):
        return None
    return node


def rewrite_config(text: str, data: dict, log: list) -> str:
    """Perbarui blok APP_CONFIG pada assets/js/config.js."""
    out = text
    for block_key, key, path, kind in CONFIG_FIELDS:
        value = nested_value(data, path)
        if value is None:
            log.append("  ! " + path + " kosong - nilai lama dipertahankan")
            continue
        if kind == "number":
            digits = re.sub(r"[^\d]", "", str(value))
            literal = digits if digits else js_string(value)
        else:
            literal = js_string(value)
        out, hits = set_js_value(out, key, literal, quoted=False)
        if hits:
            log.append("  ~ config.js " + path + " = " + str(value))
            continue
        rng = block_range(out, block_key) if block_key else assign_block_range(out, "APP_CONFIG")
        if rng:
            start, end = rng
            block = insert_entry(out[start:end], key, literal, "    " if block_key else "  ")
            out = out[:start] + block + out[end:]
            log.append("  + config.js " + path + " (kunci baru)")
    notice = data.get("antiFraudNotice") or {}
    if isinstance(notice, dict) and notice:
        rng = block_range(out, "antiFraudNotice")
        if rng:
            start, end = rng
            block = out[start:end]
            for lang in ("en", "id"):
                if not notice.get(lang):
                    continue
                block, hits = set_js_value(block, lang, js_string(notice[lang]), quoted=False)
                if hits:
                    log.append("  ~ config.js antiFraudNotice." + lang + " diperbarui")
            out = out[:start] + block + out[end:]
    return out


def rewrite_dictionary(text: str, data: dict, log: list) -> str:
    """Perbarui nilai kamus DICTIONARY (en + id) pada assets/js/i18n.js."""
    dictionary = data.get("dictionary") or {}
    for lang in ("en", "id"):
        values = dictionary.get(lang) or {}
        if not values:
            continue
        outer = assign_block_range(text, "DICTIONARY")
        if not outer:
            raise SystemExit("Blok DICTIONARY tidak ditemukan pada assets/js/i18n.js")
        outer_start, outer_end = outer
        sub = block_range(text[outer_start:outer_end], lang)
        if not sub:
            continue
        start = outer_start + sub[0]
        end = outer_start + sub[1]
        block = text[start:end]
        replaced = added = 0
        for key in sorted(values, key=lambda k: (-len(k), k)):
            value = values[key]
            if value is None or str(value).strip() == "":
                continue
            block, hits = set_js_value(block, key, js_string(value), quoted=True)
            if hits:
                replaced += hits
            else:
                block = insert_entry(block, key, js_string(value), "    ")
                added += 1
        text = text[:start] + block + text[end:]
        log.append("  ~ i18n.js DICTIONARY." + lang + ": " + str(replaced) + " nilai diperbarui" +
                   (", " + str(added) + " kunci baru" if added else ""))
    return text


def rewrite_cert_regs(text: str, data: dict, log: list) -> str:
    """Tulis ulang objek CERT_REG_NOS pada assets/js/main.js."""
    rng = assign_block_range(text, "CERT_REG_NOS")
    if not rng:
        log.append("  ! CERT_REG_NOS tidak ditemukan - nomor registrasi tidak diubah")
        return text
    legal = data.get("legal") or {}
    certs = data.get("certifications") or {}
    lines = []
    for cid in CERT_ORDER:
        reg = str((certs.get(cid) or {}).get("regNo") or "").strip()
        fallback = CERT_LEGAL_FALLBACK.get(cid)
        legal_value = str(legal.get(fallback) or "").strip() if fallback else ""
        if not reg and fallback:
            reg = legal_value
        elif reg and fallback and legal_value and reg != legal_value:
            log.append("  ! sertifikasi." + cid + " beda dari legal." + fallback +
                       " - dipakai nilai sertifikat")
        comma = "," if cid != CERT_ORDER[-1] else ""
        lines.append("  " + cid + ": " + js_string(reg) + comma)
    start, end = rng
    body = "\n" + "\n".join(lines) + "\n"
    log.append("  ~ main.js CERT_REG_NOS: " + str(len(lines)) + " dokumen diperbarui")
    return text[: start + 1] + body + text[end - 1:]


def rewrite_rfq_fallbacks(text: str, data: dict, log: list) -> str:
    """Perbarui nilai cadangan email & WhatsApp pada assets/js/rfq-form.js."""
    contact = data.get("contact") or {}
    email = str(contact.get("email") or "").strip()
    whatsapp = str(contact.get("whatsappNumber") or "").strip()
    if email:
        text, hits = re.subn(r"(APP_CONFIG\.contact\.email\s*\|\|\s*)(\"(?:[^\"\\]|\\.)*\")",
                             lambda m: m.group(1) + js_string(email), text, count=1)
        if hits:
            log.append("  ~ rfq-form.js email cadangan = " + email)
    if whatsapp:
        text, hits = re.subn(r"(APP_CONFIG\.contact\.whatsappNumber\s*\|\|\s*)(\"(?:[^\"\\]|\\.)*\")",
                             lambda m: m.group(1) + js_string(whatsapp), text, count=1)
        if hits:
            log.append("  ~ rfq-form.js WhatsApp cadangan = " + whatsapp)
    return text


SITE_FIELD_PATTERN = re.compile(r'data-site-field="([^"]+)"')


def html_field_specs(data: dict) -> dict:
    """Peta path data -> nilai teks & tautan untuk elemen [data-site-field]."""
    contact = data.get("contact") or {}
    legal = data.get("legal") or {}
    email = str(contact.get("email") or "").strip()
    whatsapp = str(contact.get("whatsappNumber") or "").strip()
    wa_display = str(contact.get("whatsappDisplay") or "").strip() or whatsapp
    phone = str(contact.get("phone") or "").strip()
    phone_display = str(contact.get("phoneDisplay") or "").strip() or phone
    specs = {}
    if email:
        specs["contact.email"] = {"text": email, "href": "mailto:" + email}
    if whatsapp:
        specs["contact.whatsapp"] = {"text": wa_display, "href": "https://wa.me/" + whatsapp}
    if phone:
        specs["contact.phone"] = {"text": phone_display, "href": "tel:" + phone}
    for key, value in legal.items():
        if value and str(value).strip():
            specs["legal." + key] = {"text": str(value)}
    return specs


def rewrite_html(text: str, specs: dict, log: list, name: str) -> str:
    """Perbarui isi & href elemen [data-site-field] pada satu berkas HTML."""
    lines = text.split("\n")
    touched = 0
    for index, line in enumerate(lines):
        paths = SITE_FIELD_PATTERN.findall(line)
        if not paths:
            continue
        new_line = line
        for path in paths:
            spec = specs.get(path)
            if not spec:
                continue
            opening = re.search(r"<[a-zA-Z][^>]*data-site-field=\"" + re.escape(path) + r"\"[^>]*>", new_line)
            if not opening:
                continue
            if spec.get("href"):
                new_href = html.escape(spec["href"], quote=True)
                tag = new_line[opening.start():opening.end()]
                if re.search(r'href="[^"]*"', tag):
                    tag = re.sub(r'href="[^"]*"', 'href="' + new_href + '"', tag, count=1)
                else:
                    tag = tag[:-1].rstrip() + ' href="' + new_href + '">'
                new_line = new_line[:opening.start()] + tag + new_line[opening.end():]
                opening = re.search(r"<[a-zA-Z][^>]*data-site-field=\"" + re.escape(path) + r"\"[^>]*>", new_line)
            body_start = opening.end()
            body_end = new_line.find("</", body_start)
            if body_end == -1:
                continue
            new_line = new_line[:body_start] + html.escape(spec["text"]) + new_line[body_end:]
            touched += 1
            log.append("  ~ " + name + " [" + path + "] = " + spec["text"])
        lines[index] = new_line
    return "\n".join(lines) if touched else text


def rewrite_sitemap(text: str, data: dict, log: list) -> str:
    """Samakan domain pada <loc> dan tanggal <lastmod>."""
    domain = str((data.get("site") or {}).get("domain") or "").strip().rstrip("/")
    if not domain:
        return text
    text, locs = re.subn(r"<loc>https?://[^/]+", "<loc>" + domain, text)
    stamp = stamp_date(data)
    text, mods = re.subn(r"<lastmod>[^<]*</lastmod>", "<lastmod>" + stamp + "</lastmod>", text)
    log.append("  ~ sitemap.xml: " + str(locs) + " URL, " + str(mods) + " lastmod (" + stamp + ")")
    return text


def rewrite_robots(text: str, data: dict, log: list) -> str:
    """Samakan URL sitemap dan tutup folder admin (panel internal) dari crawler."""
    domain = str((data.get("site") or {}).get("domain") or "").strip().rstrip("/")
    if domain:
        text, hits = re.subn(r"(?m)^Sitemap:.*$", "Sitemap: " + domain + "/sitemap.xml", text)
        if hits:
            log.append("  ~ robots.txt: Sitemap -> " + domain + "/sitemap.xml")
    if "Disallow: /admin/" not in text and re.search(r"(?m)^Allow: /$", text):
        text = re.sub(r"(?m)^Allow: /$", "Allow: /\nDisallow: /admin/", text, count=1)
        log.append("  ~ robots.txt: Disallow /admin/ (panel data internal)")
    return text


def stamp_date(data: dict) -> str:
    raw = str((data.get("meta") or {}).get("updatedAt") or "")
    match = re.match(r"(\d{4}-\d{2}-\d{2})", raw)
    return match.group(1) if match else dt.date.today().isoformat()


JS_FILE_PLAN = [
    ("assets/js/config.js", "APP_CONFIG"),
    ("assets/js/i18n.js", "DICTIONARY"),
    ("assets/js/main.js", "CERT_REG_NOS"),
    ("assets/js/rfq-form.js", "nilai cadangan RFQ"),
]


def build_changes(data: dict, root: Path):
    """Hitung isi baru setiap berkas (tanpa menulis) + catatan perubahan."""
    log = []
    changes = {}
    specs = html_field_specs(data)

    def run(rel: str, fn):
        path = root / rel
        if not path.exists():
            log.append("  ! berkas tidak ditemukan: " + rel)
            return
        old = path.read_text(encoding="utf-8")
        new = fn(old)
        if new != old:
            changes[path] = new

    run("assets/js/config.js", lambda t: rewrite_config(t, data, log))
    run("assets/js/i18n.js", lambda t: rewrite_dictionary(t, data, log))
    run("assets/js/main.js", lambda t: rewrite_cert_regs(t, data, log))
    run("assets/js/rfq-form.js", lambda t: rewrite_rfq_fallbacks(t, data, log))
    run("sitemap.xml", lambda t: rewrite_sitemap(t, data, log))
    run("robots.txt", lambda t: rewrite_robots(t, data, log))
    for rel in HTML_FILES:
        run(rel, lambda t, name=rel: rewrite_html(t, specs, log, name))
    return changes, log


def write_changes(changes: dict, root: Path, dry_run: bool, log: list) -> int:
    if not changes:
        print("Tidak ada perubahan - seluruh berkas sudah sesuai data.")
        return 0
    for path, new in sorted(changes.items(), key=lambda item: str(item[0])):
        rel = path.relative_to(root)
        if dry_run:
            old_lines = path.read_text(encoding="utf-8").splitlines()
            diff = list(difflib.unified_diff(old_lines, new.splitlines(), lineterm="",
                                             fromfile=str(rel), tofile=str(rel)))
            print("-" * 68)
            print("PRATINJAU " + str(rel) + " (" + str(max(len(diff) - 3, 0)) + " baris berbeda)")
            for line in diff[2:26]:
                print(line)
            if len(diff) > 28:
                print("  ... " + str(len(diff) - 28) + " baris lainnya")
        else:
            path.write_text(new, encoding="utf-8")
            print("DIPERBARUI " + str(rel))
    return 1 if dry_run else 0


# --- Mode ekstraksi: situs -> admin/data/site-data.json ----------------------

def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8") if path.exists() else ""


def js_scalar(text: str, key: str):
    """Ambil nilai skalar (string/angka) milik satu kunci objek JS."""
    match = re.search(r"(?<![\w.])" + re.escape(key) + r"\s*:\s*(\"(?:[^\"\\]|\\.)*\"|[-\d.]+)", text)
    if not match:
        return None
    raw = match.group(1)
    return json.loads(raw) if raw.startswith('"') else (int(raw) if re.fullmatch(r"-?\d+", raw) else raw)


def extract_config(root: Path) -> dict:
    text = read_text(root / "assets/js/config.js")
    out = {"site": {}, "legal": {}, "contact": {}, "antiFraudNotice": {}}
    for _block, key, path, _kind in CONFIG_FIELDS:
        value = js_scalar(text, key)
        if value is None or value == "":
            continue
        parts = path.split(".")
        node = out
        for part in parts[:-1]:
            node = node.setdefault(part, {})
        node[parts[-1]] = value
    rng = block_range(text, "antiFraudNotice")
    if rng:
        block = text[rng[0]:rng[1]]
        for lang in ("en", "id"):
            value = js_scalar(block, lang)
            if value:
                out["antiFraudNotice"][lang] = value
    return out


def extract_dictionary(root: Path) -> dict:
    text = read_text(root / "assets/js/i18n.js")
    out = {"en": {}, "id": {}}
    outer = assign_block_range(text, "DICTIONARY")
    if not outer:
        return out
    block_text = text[outer[0]:outer[1]]
    for lang in ("en", "id"):
        sub = block_range(block_text, lang)
        if sub:
            out[lang] = json_from_js_block(block_text[sub[0]:sub[1]])
    return out


def extract_certifications(root: Path) -> dict:
    text = read_text(root / "assets/js/main.js")
    rng = assign_block_range(text, "CERT_REG_NOS")
    if not rng:
        return {cid: {"regNo": ""} for cid in CERT_ORDER}
    block = text[rng[0]:rng[1]]
    out = {}
    for cid in CERT_ORDER:
        value = js_scalar(block, cid)
        out[cid] = {"regNo": value if isinstance(value, str) else ""}
    return out


def extract_site_fields(root: Path) -> dict:
    """Baca elemen [data-site-field]: isi teks dan tautannya."""
    found = {}
    for rel in HTML_FILES:
        for line in read_text(root / rel).split("\n"):
            for path in SITE_FIELD_PATTERN.findall(line):
                href = re.search(r'href="([^"]*)"', line)
                text = re.search(r">([^<]*)<", line)
                found[path] = {"href": href.group(1) if href else "",
                               "text": text.group(1) if text else ""}
    return found


def extract_sitemap_domain(root: Path) -> str:
    match = re.search(r"<loc>(https?://[^/]+)", read_text(root / "sitemap.xml"))
    return match.group(1).rstrip("/") if match else ""


def extract_data(root: Path, data_path: Path) -> dict:
    """Bangun berkas data lengkap dari kondisi situs saat ini."""
    config = extract_config(root)
    if not config["site"].get("domain"):
        config["site"]["domain"] = extract_sitemap_domain(root)

    fields = extract_site_fields(root)
    contact = config.setdefault("contact", {})
    email = fields.get("contact.email") or {}
    whatsapp = fields.get("contact.whatsapp") or {}
    if not contact.get("email") and email.get("text"):
        contact["email"] = email["text"]
    if not contact.get("whatsappNumber") and whatsapp.get("href"):
        contact["whatsappNumber"] = whatsapp["href"].rstrip("/").rsplit("/", 1)[-1]
    if not contact.get("whatsappDisplay") and whatsapp.get("text"):
        contact["whatsappDisplay"] = whatsapp["text"]
    legal = config.setdefault("legal", {})
    for key in ("nib", "npwp", "exportLicense"):
        if not legal.get(key) and fields.get("legal." + key):
            legal[key] = fields["legal." + key]["text"]

    previous = {}
    if data_path.exists():
        try:
            previous = json.loads(data_path.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            previous = {}
    data = dict(previous) if isinstance(previous, dict) else {}
    data["meta"] = {
        "schema": 1,
        "generator": "tools/apply_site_data.py --extract",
        "updatedAt": dt.datetime.now().replace(microsecond=0).isoformat(),
    }
    data["site"] = config.get("site", {})
    data["legal"] = legal
    data["contact"] = contact
    data["antiFraudNotice"] = config.get("antiFraudNotice", {"en": "", "id": ""})
    data["certifications"] = extract_certifications(root)
    data["dictionary"] = extract_dictionary(root)
    return data


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(
        description="Terapkan admin/data/site-data.json ke berkas situs statis (atau sebaliknya).")
    parser.add_argument("--data", type=Path, default=DEFAULT_DATA,
                        help="berkas data JSON (default: %(default)s)")
    parser.add_argument("--site-root", type=Path, default=ROOT,
                        help="akar folder situs (default: %(default)s)")
    parser.add_argument("--dry-run", action="store_true",
                        help="tampilkan pratinjau tanpa menulis berkas")
    parser.add_argument("--extract", action="store_true",
                        help="baca situs lalu tulis berkas data JSON")
    args = parser.parse_args(argv)
    root = args.site_root.resolve()

    if args.extract:
        data = extract_data(root, args.data)
        args.data.parent.mkdir(parents=True, exist_ok=True)
        args.data.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print("Data situs diekstrak ke " + str(args.data))
        print("  kunci EN: " + str(len(data["dictionary"]["en"])) +
              " | kunci ID: " + str(len(data["dictionary"]["id"])) +
              " | sertifikat: " + str(len(data["certifications"])))
        return 0

    if not args.data.exists():
        print("Berkas data tidak ditemukan: " + str(args.data), file=sys.stderr)
        return 2
    try:
        data = json.loads(args.data.read_text(encoding="utf-8"))
    except ValueError as error:
        print("JSON tidak valid pada " + str(args.data) + ": " + str(error), file=sys.stderr)
        return 2

    changes, log = build_changes(data, root)
    if log:
        print("Catatan penerapan:")
        for line in log:
            print(line)
    if args.dry_run:
        print("PRATINJAU - tidak ada berkas yang diubah.")
    status = write_changes(changes, root, args.dry_run, log)
    if not args.dry_run:
        print("Selesai: " + str(len(changes)) + " berkas diperbarui dari " + str(args.data))
        print("Periksa hasilnya dengan: git --no-pager diff --stat")
    return status


if __name__ == "__main__":
    sys.exit(main())




