import React from 'react';

export default function ClubDashboard() {
  return (
    <div className="min-h-screen bg-[#F3F5F0] text-[#0F1A14] p-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* EN-TÊTE STRUCTURE */}
        <header className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Club Omnisports Tenvo</h1>
              <span className="bg-[#E4F2D9] text-[#1F4D36] text-xs font-semibold px-2.5 py-1 rounded-full">Espace Organisation</span>
            </div>
            <p className="text-[#5B6A60] text-sm">Gestion des équipes, infrastructures et cotisations</p>
          </div>
          <button className="h-[44px] bg-[#C6F432] text-[#0F1A14] px-6 rounded-lg font-bold text-sm hover:bg-[#b3de2a] transition-colors">
            + Ajouter une équipe
          </button>
        </header>

        {/* INDICATEURS CLUBS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Licenciés actifs', value: '212', sub: 'Saison 2026' },
            { label: 'Équipes engagées', value: '14', sub: 'Toutes catégories' },
            { label: 'Taux de présence', value: '87 %', sub: 'Moyenne générale' },
            { label: 'Cotisations réglées', value: '78 %', sub: '46 en attente', alert: true },
          ].map((kpi, index) => (
            <div key={index} className="bg-white rounded-[14px] border border-[#DDE3D8] p-5 shadow-sm">
              <p className="text-[#5B6A60] text-sm mb-1">{kpi.label}</p>
              <p className="text-3xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{kpi.value}</p>
              <p className={`text-xs mt-2 font-medium ${kpi.alert ? 'text-[#8A4B08] bg-[#FBEBD0] inline-block px-2 py-0.5 rounded' : 'text-[#5B6A60]'}`}>
                {kpi.sub}
              </p>
            </div>
          ))}
        </div>

        {/* ALERTE CONFLIT IA */}
        <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h2 className="text-base font-bold text-[#0F1A14]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  Alerte Conflit de Réservation (IA)
                </h2>
                <p className="text-sm text-[#5B6A60] mt-1">
                  La <strong>Salle 1</strong> est réservée deux fois le mardi à 18:00 (Seniors A & U17).
                </p>
                <p className="text-sm text-[#1F4D36] font-medium mt-1">
                  💡 Proposition IA : Déplacer l'entraînement U17 sur le Gymnase Sud (libre à 64%).
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="h-[44px] px-4 border border-[#DDE3D8] bg-white rounded-lg font-medium text-sm hover:bg-gray-50">
                Ignorer
              </button>
              <button className="h-[44px] px-4 bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-sm hover:bg-[#b3de2a]">
                Valider le déplacement
              </button>
            </div>
          </div>
        </section>

        {/* TABLEAU ÉQUIPES & INFRASTRUCTURES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* VUE ÉQUIPES (2/3) */}
          <section className="lg:col-span-2 bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Aperçu des Équipes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#DDE3D8] text-xs text-[#5B6A60]">
                    <th className="pb-3 font-semibold">Équipe</th>
                    <th className="pb-3 font-semibold">Intervenant</th>
                    <th className="pb-3 font-semibold">Prochaine séance</th>
                    <th className="pb-3 font-semibold text-right">Présence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDE3D8] text-sm">
                  {[
                    { team: 'Seniors A', coach: 'Marc V.', next: 'Mardi 18:00', rate: '94 %' },
                    { team: 'U17 Régional', coach: 'Sarah L.', next: 'Mardi 18:00', rate: '82 %' },
                    { team: 'U15 Féminines', coach: 'Thomas B.', next: 'Mercredi 14:00', rate: '89 %' },
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 font-bold">{row.team}</td>
                      <td className="py-3 text-[#5B6A60]">{row.coach}</td>
                      <td className="py-3">{row.next}</td>
                      <td className="py-3 text-right font-semibold text-[#1F4D36]">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* OCCUPATION INFRASTRUCTURES (1/3) */}
          <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Occupation des installations</h2>
            <div className="space-y-4">
              {[
                { name: 'Gymnase Sud', rate: 78 },
                { name: 'Salle 1 (Musculation)', rate: 64 },
                { name: 'Salle 2 (Polyvalente)', rate: 41 },
              ].map((site, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span>{site.name}</span>
                    <span className="font-bold">{site.rate} %</span>
                  </div>
                  <div className="w-full bg-[#F3F5F0] h-2.5 rounded-full overflow-hidden border border-[#DDE3D8]">
                    <div className="bg-[#0F1A14] h-full rounded-full" style={{ width: `${site.rate}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}