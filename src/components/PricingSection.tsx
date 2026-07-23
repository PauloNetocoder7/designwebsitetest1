import React from 'react';
import { StyleConfig } from '../types';
import { Clock, CreditCard } from 'lucide-react';

interface PricingSectionProps {
  styleConfig: StyleConfig;
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ styleConfig, onOpenBooking }) => {
  return (
    <section id="tarifs" className="py-8 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* White filled container from Tarifs et modalités de paiement up to before Modalités pratiques */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/70 mb-12">
          
          {/* Section Header with Horizontal Line */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
              <h2
                className="text-2xl sm:text-4xl font-normal shrink-0 capitalize"
                style={{
                  fontFamily: "'Alex Brush', cursive",
                  color: styleConfig.colors.accent,
                }}
              >
                Tarifs et modalités de paiements
              </h2>
              <div className="flex-1 h-[1px] bg-slate-300/80 hidden sm:block" />
            </div>
            <p className="text-base text-slate-700 max-w-2xl">
              Consultations individuelles en visio via Doctolib.
            </p>
          </div>

          {/* Straight Text Single-Column Tarif List */}
          <div className="space-y-8 max-w-3xl">
            
            {/* Tarif Standard */}
            <div className="pb-8 border-b border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    Séance Standard
                  </span>
                  <span className="text-base font-semibold text-slate-900">
                    - 65 €
                  </span>
                </div>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5" style={{ color: styleConfig.colors.accent }} />
                  <span>45 min à 1h</span>
                </span>
              </div>

              <ul className="space-y-2 text-sm text-slate-700 pt-3 border-t border-slate-200/60">
                <li className="flex items-start gap-1">
                  <span>- Suivi individuel, soutien & TCC</span>
                </li>
                <li className="flex items-start gap-1">
                  <span>- Consultation à distance via Doctolib</span>
                </li>
              </ul>
            </div>

            {/* Tarif Longue (EMDR) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    Séance Longue (EMDR)
                  </span>
                  <span className="text-base font-semibold text-slate-900">
                    - 95 €
                  </span>
                </div>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5" style={{ color: styleConfig.colors.accent }} />
                  <span>1h30</span>
                </span>
              </div>

              <ul className="space-y-2 text-sm text-slate-700 pt-3 border-t border-slate-200/60">
                <li className="flex items-start gap-1">
                  <span>- Séance allongée, indiquée pour le travail en EMDR</span>
                </li>
                <li className="flex items-start gap-1">
                  <span>- Protocole de retraitement des traumatismes</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Modalités pratiques */}
        <div className="pt-8 border-t border-slate-200/80">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-6 font-montserrat"
            style={{ color: styleConfig.colors.accent, fontFamily: "'Montserrat', sans-serif" }}
          >
            MODALITÉS PRATIQUES
          </h3>
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: styleConfig.colors.accent }} />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  Prise de rendez-vous et paiement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Les rendez-vous se prennent en ligne sur Doctolib, qui gère également le règlement de la consultation.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                Annulation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toute séance non annulée au moins 24h à l'avance est due.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                Confidentialité
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toutes les séances sont strictement couvertes par le secret professionnel.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
