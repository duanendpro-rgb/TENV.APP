import React, { useState } from 'react';

export default function ClientsView() {
  const [selectedClient, setSelectedClient] = useState({
    id: 1,
    name: 'Inès Bernard',
    email: 'ines.bernard@email.com',
    phone: '06 12 34 56 78',
    status: 'active',
    pack: 'Forfait 10 séances (6 restantes)',
    goal: '+10 kg au squat d'ici décembre',
    lastSession: 'Jeudi 24 oct.',
  });

  const [aiStatus, setAiStatus] = useState('idle');

  return (
    <div className="p-8 space-y-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0F1A14]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Clients</h1>
          <p className="text-[#5B6A60] text-sm">34 clients actifs · 3 à relancer</p>
        </div>
        <button className="h-[44px] bg-[#C6F432] text-[#0F1A14] px-6 rounded-lg font-bold text-sm hover:bg-[#b3de2a] transition-colors">
          + Nouveau client
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DDE3D8] text-xs text-[#5B6A60]">
                  <th className="pb-3 font-semibold">Nom</th>
                  <th className="pb-3 font-semibold">Statut</th>
                  <th className="pb-3 font-semibold">Dernière séance</th>
                  <th className="pb-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDE3D8] text-sm">
                {[
                  { id: 1, name: 'Inès Bernard', status: 'Actif', last: 'Jeudi 24 oct.', alert: false },
                  { id: 2, name: 'Thomas L.', status: 'Inactif 19j', last: '05 oct.', alert: true },
                  { id: 3, name: 'Sarah M.', status: 'Forfait épuisé', last: '18 oct.', alert: true },
                  { id: 4, name: 'Lucas P.', status: 'Actif', last: 'Hier', alert: false },
                ].map((c) => (
                  <tr key={c.id} className="hover:bg-[#F3F5F0]/50 cursor-pointer" onClick={() => setSelectedClient({...selectedClient, name: c.name})}>
                    <td className="py-3 font-bold text-[#0F1A14]">{c.name}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.alert ? 'bg-[#FBEBD0] text-[#8A4B08]' : 'bg-[#E4F2D9] text-[#1F4D36]'}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 text-[#5B6A60]">{c.last}</td>
                    <td className="py-3 text-right">
                      <button className="text-xs font-semibold text-[#0F1A14] underline">Voir la fiche</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{selectedClient.name}</h2>
                <p className="text-xs text-[#5B6A60]">{selectedClient.email}</p>
              </div>
              <span className="bg-[#E4F2D9] text-[#1F4D36] text-xs font-semibold px-2 py-0.5 rounded">Actif</span>
            </div>

            <div className="border-t border-[#DDE3D8] pt-3 text-sm space-y-2">
              <p><strong className="text-[#5B6A60]">Objectif :</strong> {selectedClient.goal}</p>
              <p><strong className="text-[#5B6A60]">Formule :</strong> {selectedClient.pack}</p>
            </div>

            <div className="bg-[#F3F5F0] p-4 rounded-lg border border-[#DDE3D8] space-y-3">
              <div className="flex items-center gap-2">
                <span>✨</span>
                <span className="text-xs font-bold uppercase text-[#5B6A60]">Suggestion IA</span>
              </div>
              
              {aiStatus === 'idle' && (
                <>
                  <p className="text-xs text-[#0F1A14]">Préparer le message de suivi de mi-parcours pour {selectedClient.name}.</p>
                  <button 
                    onClick={() => setAiStatus('prepared')}
                    className="w-full h-[44px] bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-xs hover:bg-[#b3de2a]"
                  >
                    Préparer la relance
                  </button>
                </>
              )}

              {aiStatus === 'prepared' && (
                <>
                  <div className="p-3 bg-white rounded border border-[#DDE3D8] text-xs text-[#5B6A60]">
                    "Bonjour {selectedClient.name}, félicitations pour tes progrès cette semaine ! Prêt(e) pour la suite ?"
                  </div>
                  <p className="text-[11px] font-semibold text-[#8A4B08] bg-[#FBEBD0] px-2 py-1 rounded">
                    Message préparé — À valider avant envoi
                  </p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setAiStatus('validated')}
                      className="flex-1 h-[44px] bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-xs"
                    >
                      Valider et envoyer
                    </button>
                    <button 
                      onClick={() => setAiStatus('idle')}
                      className="h-[44px] px-3 border border-[#DDE3D8] bg-white rounded-lg text-xs"
                    >
                      Ignorer
                    </button>
                  </div>
                </>
              )}

              {aiStatus === 'validated' && (
                <p className="text-xs font-bold text-[#1F4D36] bg-[#E4F2D9] p-2 rounded text-center">
                  ✓ Message validé et envoyé
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}