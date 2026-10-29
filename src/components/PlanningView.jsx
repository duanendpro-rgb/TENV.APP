import React, { useState } from 'react';

export default function PlanningView() {
  const [status, setStatus] = useState('idle');

  return (
    <div className="p-8 space-y-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0F1A14]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Planning</h1>
          <p className="text-[#5B6A60] text-sm">Jeudi 24 octobre 2026</p>
        </div>
        <button className="h-[44px] bg-[#C6F432] text-[#0F1A14] px-6 rounded-lg font-bold text-sm hover:bg-[#b3de2a]">
          + Ajouter un créneau
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Séances du jour</h2>
          
          <div className="space-y-3">
            {[
              { time: '09:00 - 10:00', client: 'Inès Bernard', type: 'Individuel', status: 'Confirmé' },
              { time: '11:00 - 12:00', client: 'Lucas P.', type: 'Individuel', status: 'Confirmé' },
              { time: '14:30 - 15:30', client: 'Groupe Seniors (6 pers.)', type: 'Collectif', status: 'Complet' },
              { time: '17:00 - 18:00', client: 'Sarah M.', type: 'Individuel', status: 'À confirmer' },
            ].map((s, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 rounded-lg border border-[#DDE3D8] bg-[#F3F5F0]/30">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#5B6A60]">{s.time}</span>
                  <p className="font-bold text-[#0F1A14] text-base">{s.client}</p>
                  <span className="text-xs bg-[#E4F2D9] text-[#1F4D36] px-2 py-0.5 rounded font-medium">{s.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-[44px] px-4 border border-[#DDE3D8] bg-white rounded-lg text-xs font-semibold hover:bg-gray-50">
                    Modifier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm space-y-4 h-fit">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <h2 className="text-lg font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Optimisation IA</h2>
          </div>

          <div className="bg-[#F3F5F0] p-4 rounded-lg border border-[#DDE3D8] space-y-3">
            <p className="text-xs text-[#0F1A14] font-medium">Prévenir les participants de la séance de 14:30 du changement de salle (Salle 1).</p>
            
            {status === 'idle' && (
              <button 
                onClick={() => setStatus('prepared')}
                className="w-full h-[44px] bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-xs"
              >
                Préparer le rappel
              </button>
            )}

            {status === 'prepared' && (
              <div className="space-y-3">
                <p className="text-[11px] font-semibold text-[#8A4B08] bg-[#FBEBD0] p-2 rounded">
                  Message préparé — À valider avant envoi
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setStatus('done')}
                    className="flex-1 h-[44px] bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-xs"
                  >
                    Valider et envoyer
                  </button>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="h-[44px] px-3 border border-[#DDE3D8] bg-white rounded-lg text-xs"
                  >
                    Ignorer
                  </button>
                </div>
              </div>
            )}

            {status === 'done' && (
              <p className="text-xs font-bold text-[#1F4D36] bg-[#E4F2D9] p-2 rounded text-center">
                ✓ Rappels envoyés aux 6 participants
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}