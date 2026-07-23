import React, { useState } from 'react';
import { StyleConfig, CategoryFilter } from '../types';
import { SERVICES } from '../data';
import { Quote } from 'lucide-react';

interface ServicesSectionProps {
  styleConfig: StyleConfig;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ styleConfig, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'Toutes les situations' },
    { id: 'emotional', label: 'Émotionnel & Anxiété' },
    { id: 'addictions', label: 'Addictions & Sevrage' },
    { id: 'trauma', label: 'Trauma & EMDR' },
    { id: 'health', label: 'Maladie & Somatique' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="consultations" className="py-8 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title with Horizontal Rule */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8">
          <h2
            className="text-2xl sm:text-4xl font-normal shrink-0 capitalize"
            style={{
              fontFamily: "'Alex Brush', cursive",
              color: styleConfig.colors.accent,
            }}
          >
            Dans quelles situations puis-je vous accompagner ?
          </h2>
          <div className="flex-1 h-[1px] bg-slate-300/80 hidden sm:block" />
        </div>

        <p className="text-base text-slate-700 mb-8 max-w-3xl leading-relaxed">
          Propose un accompagnement psychologique pour adolescents et adultes confrontés à diverses difficultés, qu'elles soient liées à un moment de vie éprouvant, à une souffrance psychique persistante ou à la maladie. Voici les principales situations pour lesquelles vous pouvez me consulter :
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-white shadow-xs scale-102'
                    : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80'
                }`}
                style={{
                  backgroundColor: isActive ? styleConfig.colors.primary : undefined,
                  fontFamily: styleConfig.fontSans,
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Service Straight Single-Column List */}
        <div className="space-y-10 max-w-4xl">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="space-y-3 pb-8 border-b border-slate-200/80"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h3
                  className="text-xl sm:text-2xl font-normal leading-snug"
                  style={{
                    fontFamily: styleConfig.fontSerif,
                    color: styleConfig.colors.primary,
                  }}
                >
                  {service.title}
                </h3>
                {service.badge && (
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: styleConfig.colors.accent }}
                  >
                    {service.badge}
                  </span>
                )}
              </div>

              <p
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: styleConfig.colors.accent }}
              >
                {service.subtitle}
              </p>

              <p className="text-sm leading-relaxed text-slate-700 mb-4">
                {service.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-200/50">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Axe d'accompagnement :
                </span>
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-1 text-xs text-slate-600">
                    <span>- {detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">Consultation 45min - 1h30</span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  style={{ color: styleConfig.colors.primary }}
                >
                  <span>Prendre RDV</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Note Box */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200/80 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
          <Quote className="w-8 h-8 mx-auto" style={{ color: styleConfig.colors.primary }} />
          <p
            className="text-base sm:text-lg leading-relaxed text-slate-800"
            style={{ fontFamily: styleConfig.fontSerif }}
          >
            Gardez à l'esprit qu'il n'est pas nécessaire d'être au plus mal pour franchir la porte d'un cabinet. Vous pouvez tout à fait consulter pour faire un point ponctuel, prendre le temps de déposer une situation qui vous pèse, être écouté(e) sans jugement ou simplement mieux comprendre ce que vous traversez. Il n'y a pas de "bonne" ni de "mauvaise" raison pour se lancer !
          </p>
          <span
            className="block text-xs font-semibold uppercase tracking-widest pt-2 border-t border-slate-100 max-w-xs mx-auto font-montserrat"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: styleConfig.colors.primary,
            }}
          >
            Célia Coll — Psychologue
          </span>
        </div>

      </div>
    </section>
  );
};
