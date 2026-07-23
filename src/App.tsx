import React, { useState, useEffect } from 'react';
import { STYLE_CONFIGS } from './data';
import { Header, PageId } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DoctolibModal } from './components/DoctolibModal';
import { DoctolibLogo } from './components/DoctolibLinkedInBanner';
import { Home, User, Stethoscope, Mail, ArrowRight, Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  // Router state synchronized with location hash
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '');
    if (['accueil', 'qui-suis-je', 'consultations', 'contact'].includes(hash)) {
      return hash as PageId;
    }
    return 'accueil';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['accueil', 'qui-suis-je', 'consultations', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const styleConfig = STYLE_CONFIGS.ref2;

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500 font-sans selection:bg-orange-100 selection:text-slate-900 pb-20 md:pb-0"
      style={{
        backgroundColor: styleConfig.colors.bg,
        color: styleConfig.colors.textDark,
        fontFamily: styleConfig.fontSans,
      }}
    >
      {/* Header Navigation */}
      <Header
        styleConfig={styleConfig}
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1 pt-20 animate-in fade-in duration-300">
        
        {/* PAGE 1: ACCUEIL */}
        {currentPage === 'accueil' && (
          <div>
            <Hero
              styleConfig={styleConfig}
              onOpenBooking={() => setIsBookingOpen(true)}
              onNavigate={navigateTo}
            />

            {/* Quick Navigation Cards on Home Page */}
            <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
              {/* White filled container containing icons & titles */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/70">
                <div className="flex items-center gap-4 mb-10">
                  <h2
                    className="text-2xl sm:text-4xl font-normal shrink-0 capitalize"
                    style={{
                      fontFamily: "'Alex Brush', cursive",
                      color: styleConfig.colors.accent,
                    }}
                  >
                    Découvrir le cabinet
                  </h2>
                  <div className="flex-1 h-[1px] bg-slate-300/80" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="space-y-3 pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-slate-200/80 md:pr-6 flex flex-col justify-between">
                    <div>
                      <User className="w-6 h-6 mb-2" style={{ color: styleConfig.colors.primary }} />
                      <h3 className="text-lg font-bold" style={{ color: styleConfig.colors.primary }}>Qui suis-je ?</h3>
                      <p className="text-xs leading-relaxed mt-2 opacity-90" style={{ color: styleConfig.colors.primary }}>
                        Psychologue clinicienne spécialisée dans les approches humaniste, TCC et EMDR.
                      </p>
                    </div>
                    <button
                      onClick={() => navigateTo('qui-suis-je')}
                      className="inline-flex items-center gap-1 text-xs font-semibold hover:underline pt-2 cursor-pointer"
                      style={{ color: styleConfig.colors.accent }}
                    >
                      <span>Mon parcours</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2 */}
                  <div className="space-y-3 pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-slate-200/80 md:pr-6 flex flex-col justify-between">
                    <div>
                      <Stethoscope className="w-6 h-6 mb-2" style={{ color: styleConfig.colors.primary }} />
                      <h3 className="text-lg font-bold" style={{ color: styleConfig.colors.primary }}>Consultations</h3>
                      <p className="text-xs leading-relaxed mt-2 opacity-90" style={{ color: styleConfig.colors.primary }}>
                        Accompagnement de l'anxiété, du deuil, des traumatismes et des douleurs chroniques.
                      </p>
                    </div>
                    <button
                      onClick={() => navigateTo('consultations')}
                      className="inline-flex items-center gap-1 text-xs font-semibold hover:underline pt-2 cursor-pointer"
                      style={{ color: styleConfig.colors.accent }}
                    >
                      <span>Motifs de consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3 */}
                  <div className="space-y-3 pb-6 md:pb-0 flex flex-col justify-between">
                    <div>
                      <Mail className="w-6 h-6 mb-2" style={{ color: styleConfig.colors.primary }} />
                      <h3 className="text-lg font-bold" style={{ color: styleConfig.colors.primary }}>Contact</h3>
                      <p className="text-xs leading-relaxed mt-2 opacity-90" style={{ color: styleConfig.colors.primary }}>
                        Consultation au cabinet à Toulouse ou en téléconsultation visio sur Doctolib.
                      </p>
                    </div>
                    <button
                      onClick={() => navigateTo('contact')}
                      className="inline-flex items-center gap-1 text-xs font-semibold hover:underline pt-2 cursor-pointer"
                      style={{ color: styleConfig.colors.accent }}
                    >
                      <span>Me contacter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 2: QUI SUIS-JE */}
        {currentPage === 'qui-suis-je' && (
          <div className="py-8">
            <AboutSection styleConfig={styleConfig} />
          </div>
        )}

        {/* PAGE 3: CONSULTATIONS */}
        {currentPage === 'consultations' && (
          <div className="py-8 space-y-4">
            <ServicesSection
              styleConfig={styleConfig}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
            <PricingSection
              styleConfig={styleConfig}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </div>
        )}

        {/* PAGE 5: CONTACT */}
        {currentPage === 'contact' && (
          <div className="py-8">
            <ContactSection
              styleConfig={styleConfig}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        styleConfig={styleConfig}
        onNavigate={navigateTo}
      />

      {/* Mobile App Navigation Bar (iOS & Android) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-1.5 px-3 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[calc(0.375rem+env(safe-area-inset-bottom))]">
        <button
          onClick={() => navigateTo('accueil')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            currentPage === 'accueil' ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
          style={{ color: currentPage === 'accueil' ? styleConfig.colors.accent : undefined }}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Accueil</span>
        </button>

        <button
          onClick={() => navigateTo('qui-suis-je')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            currentPage === 'qui-suis-je' ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
          style={{ color: currentPage === 'qui-suis-je' ? styleConfig.colors.accent : undefined }}
        >
          <User className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Qui suis-je</span>
        </button>

        <button
          onClick={() => navigateTo('consultations')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            currentPage === 'consultations' ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
          style={{ color: currentPage === 'consultations' ? styleConfig.colors.accent : undefined }}
        >
          <Stethoscope className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Services</span>
        </button>

        <button
          onClick={() => navigateTo('contact')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            currentPage === 'contact' ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
          style={{ color: currentPage === 'contact' ? styleConfig.colors.accent : undefined }}
        >
          <Mail className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Contact</span>
        </button>
      </div>

      {/* Interactive Doctolib Booking Modal */}
      <DoctolibModal
        isOpen={isBookingOpen}
        styleConfig={styleConfig}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
