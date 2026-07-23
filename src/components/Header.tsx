import React, { useState, useEffect } from 'react';
import { StyleConfig } from '../types';
import { Menu, X, Phone } from 'lucide-react';
import { DoctolibLinkedInBanner, DoctolibLogo } from './DoctolibLinkedInBanner';

export type PageId = 'accueil' | 'qui-suis-je' | 'consultations' | 'contact';

interface HeaderProps {
  styleConfig: StyleConfig;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  styleConfig,
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'qui-suis-je', label: 'Qui suis-je' },
    { id: 'consultations', label: 'Consultations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, pageId: PageId) => {
    e.preventDefault();
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled
          ? styleConfig.colors.headerBg
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        borderBottom: isScrolled ? `1px solid ${styleConfig.colors.accent}20` : '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={(e) => handleNavClick(e, 'accueil')}
          className="text-center text-2xl sm:text-3xl font-semibold tracking-wide transition-opacity hover:opacity-80 cursor-pointer"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: styleConfig.colors.primary,
          }}
        >
          Célia Coll
          <span
            className="text-xs block font-normal tracking-widest uppercase font-sans -mt-1 text-center"
            style={{ color: styleConfig.colors.primary }}
          >
            Psychologue
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`text-sm font-medium transition-all cursor-pointer py-1 border-b-2 ${
                      isActive
                        ? 'font-bold opacity-100'
                        : 'opacity-75 hover:opacity-100 border-transparent hover:border-slate-300'
                    }`}
                    style={{
                      color: isActive ? styleConfig.colors.accent : styleConfig.colors.textDark,
                      borderColor: isActive ? styleConfig.colors.accent : 'transparent',
                      fontFamily: styleConfig.fontSans,
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-black/5 cursor-pointer transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
          style={{
            backgroundColor: styleConfig.colors.cardBg,
            borderColor: `${styleConfig.colors.accent}30`,
          }}
        >
          <div className="px-5 py-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-base font-medium py-3 px-3 rounded-xl border-b border-slate-100/80 flex items-center justify-between text-left cursor-pointer transition-colors active:bg-slate-100/60 min-h-[44px]"
                  style={{
                    fontFamily: styleConfig.fontSans,
                    color: isActive ? styleConfig.colors.accent : styleConfig.colors.textDark,
                    fontWeight: isActive ? '700' : '500',
                    backgroundColor: isActive ? `${styleConfig.colors.accent}10` : 'transparent',
                  }}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">{isActive ? '●' : '→'}</span>
                </button>
              );
            })}

            <div className="pt-3 flex flex-col gap-2.5">
              <DoctolibLinkedInBanner
                styleConfig={styleConfig}
                onOpenBooking={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                compact={true}
              />

              <a
                href="tel:0678070619"
                className="w-full py-3 rounded-full text-xs font-semibold text-center border flex items-center justify-center gap-2 transition-colors active:bg-slate-50 min-h-[44px]"
                style={{
                  borderColor: styleConfig.colors.primary,
                  color: styleConfig.colors.primary,
                }}
              >
                <Phone className="w-4 h-4" />
                <span>Appeler : 06 78 07 06 19</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
