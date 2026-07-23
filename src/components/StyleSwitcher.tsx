import React from 'react';
import { StyleRef, StyleConfig } from '../types';
import { STYLE_CONFIGS } from '../data';
import { Sparkles, Palette, Check } from 'lucide-react';

interface StyleSwitcherProps {
  currentStyle: StyleRef;
  onSelectStyle: (style: StyleRef) => void;
}

export const StyleSwitcher: React.FC<StyleSwitcherProps> = ({ currentStyle, onSelectStyle }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const styleList = Object.values(STYLE_CONFIGS);

  return (
    <div className="fixed top-3 right-3 z-[1100] font-sans">
      {/* Desktop/Tablet Banner Bar & Toggle Trigger */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 text-xs font-medium shadow-lg backdrop-blur-md transition-all border border-slate-700 hover:border-slate-500 cursor-pointer"
          title="Alternar entre as Referências de Estilo do Site"
        >
          <Palette className="w-4 h-4 text-orange-400 animate-pulse" />
          <span className="hidden sm:inline text-slate-200">Estilo Ativo:</span>
          <span className="font-semibold text-orange-400 uppercase tracking-wide">
            {STYLE_CONFIGS[currentStyle].id.toUpperCase().replace('_', ' ')}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-orange-400 ml-1" />
        </button>
      </div>

      {/* Floating Selector Drawer / Popup */}
      {isOpen && (
        <div className="absolute right-0 mt-2.5 w-80 sm:w-96 p-4 bg-slate-900/95 text-slate-100 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-orange-400" />
              <h3 className="text-sm font-semibold text-white">Selecione o Modelo de Estilo (Ref)</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-800"
            >
              Fechar
            </button>
          </div>

          <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
            Selecione uma das opções abaixo para testar os temas e as novas variações da <strong className="text-orange-400">Ref 4</strong>:
          </p>

          <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
            {styleList.map((cfg: StyleConfig) => {
              const isSelected = cfg.id === currentStyle;
              return (
                <button
                  key={cfg.id}
                  onClick={() => {
                    onSelectStyle(cfg.id);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-orange-500/10 border-orange-400 text-white shadow-md'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold flex items-center gap-1.5 text-white">
                      {cfg.name}
                      {isSelected && <Check className="w-3.5 h-3.5 text-orange-400" />}
                    </span>
                    {/* Palette color preview circles */}
                    <div className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: cfg.colors.primary }} />
                      <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: cfg.colors.accent }} />
                      <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: cfg.colors.bg }} />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                    {cfg.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-400 text-center">
            Toque fora ou clique no botão para aplicar instantaneamente
          </div>
        </div>
      )}
    </div>
  );
};
