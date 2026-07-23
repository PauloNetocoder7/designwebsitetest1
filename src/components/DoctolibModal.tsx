import React, { useState } from 'react';
import { StyleConfig, BookingDetails } from '../types';
import { X, Calendar, Clock, Video, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { DoctolibLogo } from './DoctolibLinkedInBanner';

interface DoctolibModalProps {
  isOpen: boolean;
  styleConfig: StyleConfig;
  onClose: () => void;
}

export const DoctolibModal: React.FC<DoctolibModalProps> = ({ isOpen, styleConfig, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [booking, setBooking] = useState<BookingDetails>({
    modality: 'visio',
    consultationType: 'standard',
    date: '2026-07-28',
    time: '14:30',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSubmitted(true);
    }
  };

  const availableSlots = [
    '09:00', '10:15', '11:30', '14:00', '15:15', '16:30', '17:45'
  ];

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="relative w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl sm:rounded-3xl shadow-2xl border overflow-hidden transition-all my-auto"
        style={{
          backgroundColor: styleConfig.colors.cardBg,
          borderColor: `${styleConfig.colors.accent}40`,
        }}
      >
        {/* Header */}
        <div
          className="p-4 sm:p-6 text-white flex items-center justify-between shrink-0"
          style={{ backgroundColor: styleConfig.colors.primary }}
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <DoctolibLogo className="w-5 h-5 sm:w-6 sm:h-6 rounded-md" />
            </div>
            <div>
              <h3
                className="text-base sm:text-lg font-semibold leading-tight"
                style={{ fontFamily: styleConfig.fontSerif }}
              >
                Prise de rendez-vous Doctolib
              </h3>
              <p className="text-[11px] sm:text-xs text-orange-100/80">
                Célia Coll • Psychologue Clinicienne
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleNext} className="space-y-6">
              
              {/* Step 1: Type, Modality & Slot */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Modality */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                      1. Choisissez le lieu de consultation
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, modality: 'visio' })}
                        className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                          booking.modality === 'visio'
                            ? 'bg-orange-500/10 border-orange-500 font-semibold'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Video className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">Consultation en Visio</span>
                          <span className="text-[11px] text-slate-500">Depuis chez vous</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, modality: 'cabinet' })}
                        className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                          booking.modality === 'cabinet'
                            ? 'bg-orange-500/10 border-orange-500 font-semibold'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">Cabinet Toulouse</span>
                          <span className="text-[11px] text-slate-500">En présentiel</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                      2. Choisissez le type de motif
                    </label>
                    <div className="space-y-2.5">
                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, consultationType: 'standard' })}
                        className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          booking.consultationType === 'standard'
                            ? 'bg-orange-500/10 border-orange-500 font-semibold'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">Séance Standard (45min - 1h)</span>
                          <span className="text-[11px] text-slate-500">Suivi individuel, TCC, gestion anxiété & burn-out</span>
                        </div>
                        <span className="text-sm font-bold text-slate-800">65€</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, consultationType: 'emdr' })}
                        className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          booking.consultationType === 'emdr'
                            ? 'bg-orange-500/10 border-orange-500 font-semibold'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">Séance Longue EMDR (1h30)</span>
                          <span className="text-[11px] text-slate-500">Retraitement des traumatismes et désensibilisation</span>
                        </div>
                        <span className="text-sm font-bold text-slate-800">95€</span>
                      </button>
                    </div>
                  </div>

                  {/* Date & Time Slot Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        3. Date souhaitée
                      </label>
                      <input
                        type="date"
                        value={booking.date}
                        min="2026-07-22"
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500 bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        Créneau horaire
                      </label>
                      <select
                        value={booking.time}
                        onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500 bg-white"
                      >
                        {availableSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-sm font-semibold text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-95"
                    style={{ backgroundColor: styleConfig.colors.primary }}
                  >
                    <span>Continuer vers vos coordonnées</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Patient Form */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                    >
                      ← Modifier le créneau
                    </button>
                    <span className="text-xs font-bold text-orange-800 bg-orange-100 px-3 py-1 rounded-full">
                      {booking.consultationType === 'emdr' ? 'EMDR (95€)' : 'Standard (65€)'} • {booking.date} à {booking.time}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">Prénom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Marie"
                        value={booking.firstName}
                        onChange={(e) => setBooking({ ...booking, firstName: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">Nom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Dupont"
                        value={booking.lastName}
                        onChange={(e) => setBooking({ ...booking, lastName: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="votre.email@exemple.com"
                      value={booking.email}
                      onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 00 00 00 00"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Remarques / Motif (Optionnel)</label>
                    <textarea
                      rows={2}
                      placeholder="Précisez succinctement si vous le souhaitez..."
                      value={booking.notes}
                      onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500 resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Données confidentielles transmises en toute sécurité via Doctolib.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-sm font-semibold text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-95"
                    style={{ backgroundColor: styleConfig.colors.primary }}
                  >
                    <span>Confirmer la réservation Doctolib</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              )}

            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4
                className="text-2xl font-normal text-slate-900"
                style={{ fontFamily: styleConfig.fontSerif }}
              >
                Demande de Rendez-vous Validée !
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                Merci <strong>{booking.firstName}</strong>. Votre consultation pour une <strong>{booking.consultationType === 'emdr' ? 'Séance EMDR' : 'Séance Standard'}</strong> en <strong>{booking.modality === 'visio' ? 'Visio' : 'Cabinet'}</strong> le <strong>{booking.date} à {booking.time}</strong> a bien été pré-réservée.
              </p>

              <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-xs text-slate-700 text-left space-y-2">
                <div className="flex items-center gap-2 font-semibold text-orange-950">
                  <Clock className="w-4 h-4" />
                  <span>Prochaine étape :</span>
                </div>
                <p>
                  Un e-mail de confirmation accompagné du lien de connexion sécurisé Doctolib vient de vous être envoyé à <strong>{booking.email}</strong>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.doctolib.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Ouvrir sur Doctolib.fr</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-xs font-medium border border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
