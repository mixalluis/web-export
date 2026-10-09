/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './data/i18n';
import { PRODUCTS_DATA, ProductItem } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeFeatured } from './components/HomeFeatured';
import { ExportWorkflow } from './components/ExportWorkflow';
import { AboutPage } from './components/AboutPage';
import { ProductsCatalog } from './components/ProductsCatalog';
import { ProductDetailPage } from './components/ProductDetailPage';
import { LogisticsPage } from './components/LogisticsPage';
import { ContactRFQPage } from './components/ContactRFQPage';
import { PrivacyPage } from './components/PrivacyPage';
import { SpecSheetModal } from './components/SpecSheetModal';
import { CertificateModal } from './components/CertificateModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  // Read initial language from query parameter ?lang=, then localStorage, defaulting to 'en'
  const [lang, setLang] = useState<Language>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'id' || urlLang === 'en') return urlLang;

      const saved = localStorage.getItem('nusantara_export_lang');
      if (saved === 'id' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'en';
  });

  // Active page state
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeProductId, setActiveProductId] = useState<string>('vanilla-beans');
  const [rfqPreselectedProduct, setRfqPreselectedProduct] = useState<string>('');

  // Modals state
  const [specSheetModalProduct, setSpecSheetModalProduct] = useState<ProductItem | null>(null);
  const [certificateModalId, setCertificateModalId] = useState<string | null>(null);

  // Sync <html lang> and localStorage when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('nusantara_export_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // Toggle language handler
  const handleToggleLang = () => {
    const nextLang: Language = lang === 'en' ? 'id' : 'en';
    setLang(nextLang);
    // update URL parameter quietly
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', nextLang);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  // Navigation handler
  const handleNavigate = (page: string, param?: string) => {
    if (page === 'product-detail' && param) {
      setActiveProductId(param);
      setCurrentPage('product-detail');
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick quote trigger from a product card
  const handleQuickQuote = (productName: string) => {
    setRfqPreselectedProduct(productName);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active product
  const activeProduct = PRODUCTS_DATA.find((p) => p.id === activeProductId) || PRODUCTS_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-700 selection:text-white">
      {/* Responsive Top Bar Navbar */}
      <Navbar
        currentLang={lang}
        onToggleLang={handleToggleLang}
        activePage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              currentLang={lang}
              onNavigate={handleNavigate}
              onOpenCertificateModal={(id) => setCertificateModalId(id)}
            />
            <HomeFeatured
              currentLang={lang}
              onNavigate={handleNavigate}
              onQuickQuote={handleQuickQuote}
            />
            <ExportWorkflow
              currentLang={lang}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            currentLang={lang}
            onNavigate={handleNavigate}
            onOpenCertificateModal={(id) => setCertificateModalId(id)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsCatalog
            currentLang={lang}
            onNavigate={handleNavigate}
            onQuickQuote={handleQuickQuote}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            product={activeProduct}
            currentLang={lang}
            onBack={() => handleNavigate('products')}
            onRequestQuote={handleQuickQuote}
            onOpenSpecSheetModal={(p) => setSpecSheetModalProduct(p)}
          />
        )}

        {currentPage === 'logistics' && (
          <LogisticsPage
            currentLang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactRFQPage
            currentLang={lang}
            preselectedProduct={rfqPreselectedProduct}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage
            currentLang={lang}
            onBack={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        currentLang={lang}
        onNavigate={handleNavigate}
        onOpenCertificateModal={(id) => setCertificateModalId(id)}
      />

      {/* Floating Contextual WhatsApp Trigger */}
      <FloatingWhatsApp
        currentLang={lang}
        activeProductContext={currentPage === 'product-detail' ? activeProduct.name[lang] : undefined}
      />

      {/* Spec Sheet Printable / PDF Modal */}
      <SpecSheetModal
        product={specSheetModalProduct}
        currentLang={lang}
        onClose={() => setSpecSheetModalProduct(null)}
      />

      {/* Official Certificate Verification Modal */}
      <CertificateModal
        certId={certificateModalId}
        currentLang={lang}
        onClose={() => setCertificateModalId(null)}
      />
    </div>
  );
}
