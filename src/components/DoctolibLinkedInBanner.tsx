import React from 'react';
import { Calendar, ExternalLink, Video } from 'lucide-react';
import { StyleConfig } from '../types';

interface DoctolibLinkedInBannerProps {
  styleConfig: StyleConfig;
  onOpenBooking: () => void;
  className?: string;
  compact?: boolean;
}

export const LinkedInLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.74a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2M7.85 18.5V10.13H5.08V18.5h2.77z"/>
  </svg>
);

export const DoctolibLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <img
    src="https://i.ibb.co/7NnHNLPv/Screenshot-3.png"
    alt="Doctolib"
    className={`object-cover rounded-md inline-block shrink-0 ${className}`}
  />
);

export const DoctolibLinkedInBanner: React.FC<DoctolibLinkedInBannerProps> = ({
  styleConfig,
  onOpenBooking,
  className = '',
  compact = false,
}) => {
  if (compact) {
    return (
      <div className={`flex flex-col sm:flex-row items-center gap-2.5 w-full ${className}`}>
        {/* Doctolib Button */}
        <button
          onClick={onOpenBooking}
          className="w-full flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-medium text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xs transition-all hover:border-slate-300 hover:shadow-sm cursor-pointer"
        >
          <DoctolibLogo className="w-5 h-5" />
          <span>Prendre RDV sur Doctolib</span>
        </button>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/celiacoll11/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-white text-slate-700 hover:text-[#0A66C2] border border-slate-200 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all hover:border-[#0A66C2]/40 hover:bg-slate-50 cursor-pointer"
        >
          <LinkedInLogo className="w-5 h-5" />
          <span>LinkedIn</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex flex-col md:flex-row items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-slate-200/90 shadow-xl backdrop-blur-md max-w-2xl mx-auto w-full transition-all hover:border-slate-300 ${className}`}
    >
      {/* Doctolib Primary CTA */}
      <button
        onClick={onOpenBooking}
        className="w-full md:flex-1 py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold text-sm sm:text-base flex items-center justify-between sm:justify-start gap-3 shadow-xs transition-all transform hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 cursor-pointer group"
        style={{
          fontFamily: styleConfig.fontSans,
        }}
      >
        <div className="flex items-center gap-3">
          <div className="group-hover:scale-105 transition-transform">
            <DoctolibLogo className="w-8 h-8 shadow-sm" />
          </div>
          <div className="text-left">
            <span className="block font-semibold leading-snug text-slate-800">Prendre RDV sur Doctolib</span>
            <span className="text-[11px] text-slate-500 font-normal flex items-center gap-1">
              <Video className="w-3 h-3 text-slate-400" /> Consultation Visio & Cabinet
            </span>
          </div>
        </div>
        <Calendar className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:rotate-12 transition-all" />
      </button>

      {/* Divider on desktop */}
      <div className="hidden md:block w-px h-10 bg-slate-200" />

      {/* LinkedIn CTA */}
      <a
        href="https://www.linkedin.com/in/celiacoll11/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto py-3.5 px-5 rounded-xl bg-slate-50 hover:bg-slate-100/90 text-slate-800 border border-slate-200/80 font-medium text-sm flex items-center justify-center gap-2.5 shadow-xs transition-all hover:border-[#0A66C2]/40 hover:text-[#0A66C2] cursor-pointer group"
      >
        <div className="group-hover:scale-105 transition-transform">
          <LinkedInLogo className="w-7 h-7" />
        </div>
        <span className="whitespace-nowrap font-medium text-slate-800 group-hover:text-[#0A66C2] transition-colors">Profil LinkedIn</span>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A66C2] transition-colors" />
      </a>
    </div>
  );
};

