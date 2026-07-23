import React, { useState } from 'react';
import { StyleConfig } from '../types';
import { PageId } from './Header';
import { Shield, FileText, X } from 'lucide-react';
import { LinkedInLogo, DoctolibLogo } from './DoctolibLinkedInBanner';

interface FooterProps {
  styleConfig: StyleConfig;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ styleConfig, onNavigate }) => {
  const [legalOpen, setLegalOpen] = useState<'mentions' | 'confidentialite' | null>(null);

  const pages: { id: PageId; label: string }[] = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'qui-suis-je', label: 'Qui suis-je' },
    { id: 'consultations', label: 'Consultations' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer
      className="py-12 px-4 sm:px-6 transition-colors duration-300"
      style={{
        backgroundColor: styleConfig.colors.primaryDark,
        color: '#FFFFFF',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <span
            className="text-2xl font-semibold tracking-wide block cursor-pointer"
            style={{ fontFamily: styleConfig.fontSerif }}
            onClick={() => onNavigate && onNavigate('accueil')}
          >
            Célia Coll
          </span>
          <p className="text-xs text-slate-300 font-light tracking-wide mt-0.5">
            Psychologue Clinicienne & Thérapeute EMDR • Toulouse
          </p>
        </div>

        {/* Navigation pages */}
        {onNavigate && (
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigate(p.id)}
                className="hover:text-orange-300 transition-colors cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        {/* Links & Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
              title="Doctolib"
            >
              <DoctolibLogo className="w-5 h-5 rounded-sm" />
              <span>Doctolib</span>
            </a>
            <a
              href="https://www.linkedin.com/in/celiacoll11/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
              title="LinkedIn"
            >
              <LinkedInLogo className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <button
              onClick={() => setLegalOpen('mentions')}
              className="hover:text-orange-300 transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalOpen('confidentialite')}
              className="hover:text-orange-300 transition-colors cursor-pointer"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-xs text-slate-400">
          <p>&copy; 2026 Célia Coll. Tous droits réservés.</p>
          <p className="text-[10px] text-slate-500 mt-1">N° ADELI / RPPS :</p>
        </div>

      </div>

      {/* Legal Modal */}
      {legalOpen && (
        <div className="fixed inset-0 z-[1300] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white text-slate-800 w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalOpen(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {legalOpen === 'mentions' ? (
              <div className="space-y-4 text-xs leading-relaxed">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  <span>Mentions Légales</span>
                </h3>
                <p><strong>Responsable du site :</strong> Célia Coll, Psychologue Clinicienne diplômée d'État.</p>
                <p><strong>Email :</strong> collcelia3@gmail.com | <strong>Téléphone :</strong> 06 78 07 06 19</p>
                <p><strong>Titre professionnel :</strong> Psychologue Clinicienne enregistrée auprès de l'Agence Régionale de Santé (ARS) sous les numéros officiels ADELI/RPPS.</p>
                <p><strong>Hébergement :</strong> Infrastructure Cloud sécurisée conforme aux normes de protection des données.</p>
              </div>
            ) : (
              <div className="space-y-4 text-xs leading-relaxed">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>Politique de Confidentialité</span>
                </h3>
                <p>Les informations personnelles collectées via le formulaire de contact ou Doctolib sont destinées exclusivement à la prise de rendez-vous et à la gestion du suivi thérapeutique.</p>
                <p>Vos données sont strictement confidentielles et ne seront en aucun cas cédées ou vendues à des tiers.</p>
                <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données sur simple demande par email : <em>collcelia3@gmail.com</em>.</p>
              </div>
            )}

            <button
              onClick={() => setLegalOpen(null)}
              className="mt-6 w-full py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
