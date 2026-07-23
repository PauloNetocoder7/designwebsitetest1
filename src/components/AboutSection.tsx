import React from 'react';
import { StyleConfig } from '../types';
import { Stethoscope, Sparkles } from 'lucide-react';
import celiaProfile from '../assets/images/celia-profile.jpg';
import { celiaProfileBase64 } from '../assets/images/celiaProfileBase64';

interface AboutSectionProps {
  styleConfig: StyleConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ styleConfig }) => {
  return (
    <section id="qui-suis-je" className="py-8 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* White filled container containing "Qui suis-je ?" title and Profile Portrait */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-sm border border-slate-200/70 mb-8 sm:mb-12">
          
          {/* Section Title */}
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <span
              className="text-xl sm:text-3xl font-normal block mb-1"
              style={{ color: styleConfig.colors.accent, fontFamily: "'Alex Brush', cursive" }}
            >
              Parcours & engagement
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal"
              style={{
                fontFamily: styleConfig.fontSerif,
                color: styleConfig.colors.primary,
              }}
            >
              Qui suis-je ?
            </h2>
          </div>

          {/* Psychologist Profile Portrait & Credentials */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-52 h-52 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 shadow-xl transition-all duration-500 hover:scale-[1.02] shrink-0"
              style={{
                borderColor: styleConfig.colors.accent,
                boxShadow: `0 8px 24px ${styleConfig.colors.accent}25`,
                backgroundColor: styleConfig.colors.cardBg,
                borderRadius: '50%',
              }}
            >
              {/* Full circular profile avatar */}
              <img
                src={celiaProfileBase64 || celiaProfile}
                alt="Célia Psychologue Clinicienne"
                className="w-full h-full object-cover object-center rounded-full transition-transform duration-700 hover:scale-[1.05]"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '50%',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.triedFallback1) {
                    target.dataset.triedFallback1 = "true";
                    target.src = celiaProfile;
                  } else if (!target.dataset.triedFallback2) {
                    target.dataset.triedFallback2 = "true";
                    target.src = "/celia-profile.jpg";
                  } else if (!target.dataset.triedFallback3) {
                    target.dataset.triedFallback3 = "true";
                    target.src = "https://i.ibb.co/99m4LFch/C-lia-profile-photo.jpg";
                  }
                }}
              />
            </div>

            {/* Quick Credentials Line */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-center w-full max-w-sm">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold mb-1 text-slate-800">
                <span>N° ADELI / RPPS :</span>
              </div>
              <p className="text-xs text-slate-500">
                Master 2 Psychologie Clinique & Santé • Université Toulouse II Jean-Jaurès (2025)
              </p>
            </div>
          </div>

        </div>

        {/* Remaining Content on Normal Site Background */}
        <div className="space-y-12">
          
          {/* Mon Approche Thérapeutique */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
              <h3
                className="text-2xl sm:text-4xl font-normal shrink-0 capitalize"
                style={{
                  fontFamily: "'Alex Brush', cursive",
                  color: styleConfig.colors.accent,
                }}
              >
                Mon approche thérapeutique
              </h3>
              <div className="flex-1 h-[1px] bg-slate-300/80 hidden sm:block" />
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Inscrite dans une <strong className="text-slate-900">posture humaniste</strong>, je considère que chaque personne possède en elle les ressources pour évoluer. Mon rôle est de vous accompagner avec bienveillance, respect et sans jugement, en vous prenant en compte dans votre globalité et non à travers vos seules difficultés. L'alliance thérapeutique et la qualité de la relation sont pour moi au cœur de la réussite du suivi.
              </p>

              <p>
                Ma pratique s'appuie sur les <strong className="text-slate-900">Thérapies Cognitives et Comportementales (TCC)</strong>, qui constituent le cœur de ma formation clinique. En pratique, cette approche permet de comprendre comment nos pensées, nos émotions et nos comportements s'influencent mutuellement, et de mettre en place des changements concrets pour favoriser votre bien-être.
              </p>

              <p>
                Je suis également formée à l'<strong className="text-slate-900">EMDR (niveau 1)</strong>, une approche complémentaire particulièrement indicada dans la prise en charge des traumatismes, que je peux vous proposer selon vos besoins.
              </p>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
              <h3
                className="text-2xl sm:text-4xl font-normal shrink-0 capitalize"
                style={{
                  fontFamily: "'Alex Brush', cursive",
                  color: styleConfig.colors.accent,
                }}
              >
                Mon expérience clinique
              </h3>
              <div className="flex-1 h-[1px] bg-slate-300/80 hidden sm:block" />
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              À l'issue de mon parcours universitaire, j'ai exercé pendant un an en milieu hospitalier au sein de nombreux services de médecine générale : <strong className="text-slate-900">soins palliatifs et oncologie, urgences et soins de suite, réanimation, chirurgie digestive, cardiologie, neurologie et neurochirurgie</strong>, entre autres. Cette expérience m'a permis d'accompagner des patients confrontés à la maladie grave, aux annonces diagnostiques, à la douleur chronique ou à la fin de vie, et m'a sensibilisée aux liens étroits entre le corps et l'esprit.
            </p>
          </div>

          {/* Formations Section */}
          <div className="pt-8 border-t border-slate-200/60">
            
            {/* Header with Horizontal Line */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <h3
                className="text-2xl sm:text-4xl font-normal shrink-0 capitalize"
                style={{
                  fontFamily: "'Alex Brush', cursive",
                  color: styleConfig.colors.accent,
                }}
              >
                Parcours & formation
              </h3>
              <div className="flex-1 h-[1px] bg-slate-300/80 hidden sm:block" />
            </div>

            {/* Formations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              
              {/* Column 1: Diplômes & Titre */}
              <div className="space-y-6">
                <h4
                  className="text-xs sm:text-sm uppercase tracking-widest font-bold block pb-1 border-b font-montserrat"
                  style={{ color: styleConfig.colors.accent, borderColor: `${styleConfig.colors.accent}40`, fontFamily: "'Montserrat', sans-serif" }}
                >
                  DIPLÔME D'ÉTAT & REGISTRE
                </h4>

                <div className="space-y-4 text-slate-700">
                  <div className="space-y-1">
                    <h5 className="font-semibold text-slate-800 text-base sm:text-lg leading-snug">
                      Master 2 Psychologie Clinique, Psychopathologie et Psychologie de la Santé
                    </h5>
                    <p className="italic text-slate-600 text-sm">
                      Université Toulouse II Jean-Jaurès (2025)
                    </p>
                  </div>

                  <div className="pt-2 space-y-1 border-t border-slate-200/60">
                    <p className="font-medium text-slate-800 text-sm">
                      <strong>N° ADELI / RPPS :</strong>
                    </p>
                    <p className="text-xs text-slate-500">
                      Psychologue clinicienne enregistrée auprès de l'Agence Régionale de Santé (ARS).
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: Formation complémentaire */}
              <div className="space-y-6">
                <h4
                  className="text-xs sm:text-sm uppercase tracking-widest font-bold block pb-1 border-b font-montserrat"
                  style={{ color: styleConfig.colors.accent, borderColor: `${styleConfig.colors.accent}40`, fontFamily: "'Montserrat', sans-serif" }}
                >
                  FORMATION COMPLÉMENTAIRE
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5
                      className="font-semibold text-base sm:text-lg leading-snug"
                      style={{ color: styleConfig.colors.primary }}
                    >
                      Formation EMDR (Niveau 1)
                    </h5>
                    <p className="text-slate-600 text-sm mt-1">
                      Approche thérapeutique spécialisée dans le traitement des traumatismes psychologiques et des événements de vie douloureux.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
