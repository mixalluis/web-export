import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileText, ChevronRight } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/i18n';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  activePage: string;
  onNavigate: (page: string, param?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  activePage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang].nav;

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'products', label: t.products },
    { id: 'logistics', label: t.logistics },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar: Brand on left, Navigation Links & Language Toggle grouped cleanly on right */}
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900 hover:text-emerald-800 transition-colors focus:outline-none"
            >
              Anurika Nusantara Agro
            </button>

            {/* Zone 2: Navigation Links (Desktop) & Language Action */}
            <div className="flex items-center gap-4 sm:gap-5">
              <nav className="hidden lg:flex items-center gap-6 sm:gap-7 text-sm font-medium text-slate-600">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id || (link.id === 'products' && activePage.startsWith('product-detail'));
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`relative py-1 transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-emerald-700 font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Language Toggle button - close and tidy next to rightmost menu item */}
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-200 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label={`Switch to ${currentLang === 'en' ? 'Indonesian' : 'English'}`}
                title={`Switch to ${currentLang === 'en' ? 'Bahasa Indonesia' : 'English'}`}
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.languageToggle}</span>
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="px-4 py-6 space-y-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id || (link.id === 'products' && activePage.startsWith('product-detail'));
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-left text-base rounded-lg transition-colors ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-800 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/30 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
