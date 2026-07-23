import React from 'react';
import { StyleConfig } from '../types';
import { PageId } from './Header';

interface HeroProps {
  styleConfig: StyleConfig;
  onOpenBooking?: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ styleConfig }) => {
  return (
    <section
      id="accueil"
      className="relative isolate flex items-center h-32 sm:h-[30vh] sm:min-h-[220px] py-6 sm:py-16 w-full overflow-hidden"
    >
      {/* Background Image with Dynamic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 -z-10 filter brightness-[1.08] contrast-[1.05]"
        style={{
          backgroundImage: `url(${styleConfig.heroBgUrl || 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg'})`,
        }}
      />
      <div
        className="absolute inset-0 transition-all duration-700 -z-10"
        style={{
          background: styleConfig.heroOverlay || 'linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.1) 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-center sm:justify-start">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* Title */}
          <h1
            className="text-lg sm:text-4xl md:text-5xl font-medium tracking-wide drop-shadow-md capitalize text-center sm:text-left text-white leading-tight"
            style={{
              fontFamily: styleConfig.fontSerif,
            }}
          >
            Psychologue Clinicienne
          </h1>
        </div>
      </div>
    </section>
  );
};

