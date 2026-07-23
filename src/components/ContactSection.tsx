import React, { useState } from 'react';
import { StyleConfig } from '../types';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { DoctolibLinkedInBanner } from './DoctolibLinkedInBanner';

interface ContactSectionProps {
  styleConfig: StyleConfig;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ styleConfig, onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [messageForm, setMessageForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/collcelia3@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: messageForm.name,
          email: messageForm.email,
          _subject: messageForm.subject || "Nova mensagem pelo site",
          message: messageForm.message,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setFormError(data.message || "Ocorreu um erro ao enviar. Por favor, tente novamente.");
      }
    } catch (err) {
      setFormError("Não foi possível enviar a mensagem no momento. Verifique sua conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Card */}
        <div
          className="p-5 sm:p-12 rounded-2xl sm:rounded-3xl border shadow-xl relative overflow-hidden"
          style={{
            backgroundColor: styleConfig.colors.cardBg,
            borderColor: `${styleConfig.colors.accent}40`,
          }}
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
            <span
              className="text-2xl sm:text-4xl font-normal block mb-1"
              style={{ color: styleConfig.colors.accent, fontFamily: "'Alex Brush', cursive" }}
            >
              Échangeons
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal"
              style={{
                fontFamily: styleConfig.fontSerif,
                color: styleConfig.colors.primary,
              }}
            >
              Prendre rendez-vous
            </h2>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              Vous souhaitez échanger, poser une question ou simplement faire le premier pas ? Contactez-moi !
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Le moyen le plus simple reste de prendre rendez-vous directement en ligne sur Doctolib, où vous pourrez consulter mes créneaux disponibles. Je m'efforce de répondre avec réactivité et bienveillance !
            </p>
          </div>

          {/* Quick Details Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-slate-100">
            <a
              href="tel:0678070619"
              className="flex items-center gap-3 p-3.5 px-4 sm:px-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200/80 group"
            >
              <div
                className="p-2 rounded-xl group-hover:scale-110 transition-transform shrink-0"
                style={{ backgroundColor: `${styleConfig.colors.accent}20`, color: styleConfig.colors.accent }}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[10px] font-bold text-slate-400 block uppercase truncate">Téléphone</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">06 78 07 06 19</span>
              </div>
            </a>

            <a
              href="mailto:collcelia3@gmail.com"
              className="flex items-center gap-3 p-3.5 px-4 sm:px-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200/80 group"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-700 group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[10px] font-bold text-slate-400 block uppercase truncate">Email direct</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">collcelia3@gmail.com</span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3.5 px-4 sm:px-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[10px] font-bold text-slate-400 block uppercase truncate">Localisation</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">Toulouse & En Ligne</span>
              </div>
            </div>
          </div>

          {/* Doctolib Direct Banner Button */}
          <div className="text-center mb-12">
            <DoctolibLinkedInBanner styleConfig={styleConfig} onOpenBooking={onOpenBooking} />
          </div>

          {/* Contact Message Form */}
          <div className="max-w-2xl mx-auto pt-8 border-t border-slate-100">
            <h3
              className="text-xl font-normal text-center mb-6"
              style={{
                fontFamily: styleConfig.fontSerif,
                color: styleConfig.colors.primary,
              }}
            >
              Envoyer un message privé
            </h3>

            {!formSubmitted ? (
              <form onSubmit={handleMessageSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Votre Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nom Prénom"
                      value={messageForm.name}
                      onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Votre Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="exemple@domaine.com"
                      value={messageForm.email}
                      onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">Sujet *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Demande de renseignements / Premier contact"
                    value={messageForm.subject}
                    onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">Votre Message *</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Posez votre question ou décrivez votre situation..."
                    value={messageForm.message}
                    onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  style={{ backgroundColor: styleConfig.colors.primary }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 text-emerald-900">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-semibold">Message envoyé avec succès !</h4>
                <p className="text-xs text-emerald-700">
                  Merci <strong>{messageForm.name}</strong>, Célia vous répondra dans les plus brefs délais à l'adresse <strong>{messageForm.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setMessageForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="text-xs text-emerald-800 underline font-medium pt-2 block mx-auto hover:text-emerald-950 transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
