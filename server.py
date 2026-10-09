#!/usr/bin/env python3
"""
Python Static Server for Anurika Nusantara Agro Export Website
PRD Versi 2.0 | Oktober 2026

Fungsi utama server.py:
1. Menyajikan file statis dari folder public/ (atau root bila public/ tidak ada).
2. Clean URLs: Otomatis mencari index.html pada path direktori (misal /about/ -> public/about/index.html).
3. Fallback 404.html jika file tidak ditemukan.
4. Header keamanan dasar (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, CSP).
5. Cache-Control untuk aset gambar, css, dan js.
6. Penolakan akses ke file tersembunyi (.git, .env, dll).
"""

import sys
import os
import mimetypes
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import unquote, urlparse

DEFAULT_PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public") if os.path.exists(os.path.join(BASE_DIR, "public")) else BASE_DIR

class ExportStaticRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def end_headers(self):
        # Security Headers
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        
        # CSP allowing Tailwind CDN & Google Fonts
        csp_policy = (
            "default-src 'self' 'unsafe-inline' https:; "
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com data:; "
            "img-src 'self' data: https: blob:; "
            "connect-src 'self' https:;"
        )
        self.send_header("Content-Security-Policy", csp_policy)

        # Cache-Control Strategy
        path = self.path.split("?")[0]
        if any(path.endswith(ext) for ext in [".webp", ".png", ".jpg", ".jpeg", ".svg", ".ico", ".woff2"]):
            self.send_header("Cache-Control", "public, max-age=604800, immutable") # 7 hari
        elif any(path.endswith(ext) for ext in [".css", ".js"]):
            self.send_header("Cache-Control", "public, max-age=86400") # 1 hari
        else:
            self.send_header("Cache-Control", "no-cache, must-revalidate")

        super().end_headers()

    def do_GET(self):
        # Parse path
        parsed_url = urlparse(self.path)
        clean_path = unquote(parsed_url.path)

        # Block access to hidden files
        parts = clean_path.strip("/").split("/")
        if any(p.startswith(".") for p in parts if p):
            self.send_error_404()
            return

        # Resolve clean directory URLs to index.html
        fs_path = self.translate_path(self.path)
        if os.path.isdir(fs_path):
            index_path = os.path.join(fs_path, "index.html")
            if not os.path.exists(index_path):
                # Disable directory listing
                self.send_error_404()
                return

        # If file doesn't exist, try appending /index.html or send 404
        if not os.path.exists(fs_path):
            # Try path as directory with index.html
            alt_index = os.path.join(PUBLIC_DIR, clean_path.strip("/"), "index.html")
            if os.path.exists(alt_index):
                self.path = clean_path.rstrip("/") + "/index.html"
            else:
                self.send_error_404()
                return

        return super().do_GET()

    def send_error_404(self):
        not_found_file = os.path.join(PUBLIC_DIR, "404.html")
        if os.path.exists(not_found_file):
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            with open(not_found_file, "rb") as f:
                self.wfile.write(f.read())
        else:
            self.send_error(404, "Page Not Found (404)")

    def log_message(self, format, *args):
        # Clean logging format
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def run():
    port = DEFAULT_PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Port tidak valid '{sys.argv[1]}'. Menggunakan port default {DEFAULT_PORT}.")

    server_address = ("", port)
    httpd = HTTPServer(server_address, ExportStaticRequestHandler)
    print("=" * 60)
    print(" PT NUSANTARA KOMODITAS EKSPOR - STATIC WEB SERVER")
    print("=" * 60)
    print(f" Directory yang disajikan : {PUBLIC_DIR}")
    print(f" Akses Lokal              : http://localhost:{port}")
    print(f" Stop Server              : Tekan Ctrl + C")
    print("=" * 60)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan oleh pengguna.")
        httpd.server_close()

if __name__ == "__main__":
    run()
