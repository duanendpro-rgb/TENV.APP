import React, { useState } from 'react';

export default function ClientProfile() {
  const [activeTab, setActiveTab] = useState('Aperçu');

  return (
    <div className="min-h-screen bg-[#F3F5F0] text-[#0F1A14] p-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      
      {/* RETOUR & EN-TÊTE CLIENT */}
      <div className="max-w-6xl mx-auto space-y-6">
        
        <a href="#" className="inline-flex items-center gap-2 text-sm text-[#5B6A60] hover:text-[#0F1A14] font-medium">
          ← Retour au tableau de bord
        </a>

        <div className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Inès Bernard</h1>
              <span className="bg-[#E4F2D9] text-[#1F4D36] text-xs font-semibold px-2.5 py-1 rounded-full">Actif</span>
            </div>
            <p className="text-[#5B6A60] text-sm">
              <span className="font-semibold text-[#0F1A14]">Objectif :</span> +10 kg au squat d'ici décembre
            </p>
          </div>

          <div className="text-right">
            <span className="bg-[#F3F5F0] border border-[#DDE3D8] px-3 py-1.5 rounded-lg text-sm font-medium inline-block mb-1">
              Forfait 10 séances
            </span>
            <p className="text-xs text-[#5B6A60] font-semibold">6 séances restantes</p>
          </div>
        </div>

        {/* ONGLETS DE NAVIGATION */}
        <div className="border-b border-[#DDE3D8] flex gap-8">
          {['Aperçu', 'Séances', 'Programme', 'Bilans', 'Paiements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === tab ? 'text-[#0F1A14] font-bold' : 'text-[#5B6A60] hover:text-[#0F1A14]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C6F432] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* CONTENU PRINCIPAL DE L'APERÇU */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE (2/3) : COURBE & SÉANCE DU JOUR */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* COURBE DE PROGRESSION (SQUAT) */}
            <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Progression Squat</h2>
                  <p className="text-xs text-[#5B6A60]">S1 à S8 · Objectif 80 kg</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[#1F4D36]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>72 kg</span>
                  <span className="text-xs text-[#5B6A60] block">actuel (+12 kg)</span>
                </div>
              </div>

              {/* Représentation visuelle de la progression */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs text-[#5B6A60] font-medium">
                  <span>S1 (60 kg)</span>
                  <span className="font-bold text-[#0F1A14]">S8 (72 kg)</span>
                  <span>Objectif S12 (80 kg)</span>
                </div>
                <div className="w-full bg-[#F3F5F0] h-4 rounded-full overflow-hidden p-0.5 border border-[#DDE3D8]">
                  <div className="bg-[#C6F432] h-full rounded-full transition-all" style={{ width: '60%' }}></div>
                </div>
              </div>
            </section>

            {/* TABLEAU DE LA SÉANCE DE JEUDI */}
            <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Séance du jeudi 24 oct.</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#DDE3D8] text-xs text-[#5B6A60]">
                      <th className="pb-3 font-semibold">Exercice</th>
                      <th className="pb-3 font-semibold text-center">Séries × Reps</th>
                      <th className="pb-3 font-semibold text-right">Charge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDE3D8] text-sm">
                    <tr>
                      <td className="py-3 font-medium">Squat barre arrière</td>
                      <td className="py-3 text-center">4 × 8</td>
                      <td className="py-3 text-right font-bold">72 kg</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Fentes marchées avec haltères</td>
                      <td className="py-3 text-center">3 × 10 / jambe</td>
                      <td className="py-3 text-right font-bold">14 kg / main</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Presse à cuisses inclinée</td>
                      <td className="py-3 text-center">3 × 12</td>
                      <td className="py-3 text-right font-bold">110 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* COLONNE DROITE (1/3) : BROUILLON DE BILAN IA */}
          <div className="space-y-6">
            <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">✨</span>
                  <h2 className="text-lg font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Bilan mi-parcours (IA)</h2>
                </div>

                <div className="bg-[#F3F5F0] p-3 rounded-lg mb-4 border border-[#DDE3D8]">
                  <p className="text-xs text-[#5B6A60] font-medium">
                    <strong className="text-[#0F1A14]">Sources :</strong> 8 séances analysées · 2 bilans précédents
                  </p>
                </div>

                <div className="space-y-3 text-sm text-[#0F1A14] bg-white border border-[#DDE3D8] p-4 rounded-lg mb-4">
                  <p className="font-semibold text-xs text-[#5B6A60] uppercase tracking-wider">Brouillon proposé :</p>
                  <p>
                    "Excellente progression sur 8 semaines. Inès a gagné 12 kg au squat avec une technique constante. La régularité est au rendez-vous (100% de présence). L'objectif des 80 kg pour décembre est pleinement réalisable."
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-[#5B6A60] italic mb-4">
                  🔒 Ce brouillon est privé. Il ne sera visible par Inès qu'après votre validation.
                </p>

                <div className="flex gap-2">
                  <button className="h-[44px] flex-1 border border-[#DDE3D8] bg-white rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
                    Modifier
                  </button>
                  <button className="h-[44px] flex-1 bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-sm hover:bg-[#b3de2a] transition-colors">
                    Valider et envoyer
                  </button>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}