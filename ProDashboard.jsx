import React from 'react';

export default function ProDashboard() {
  return (
    <div className="min-h-screen bg-[#F3F5F0] text-[#0F1A14] font-sans pb-10">
      
      {/* HEADER MOBILE */}
      <header className="bg-[#0F1A14] text-white p-4 sticky top-0 z-40">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl text-[#C6F432]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Tenvo.</h1>
            <p className="text-[10px] text-gray-400 font-mono">ESPACE COACH</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs">MC</div>
        </div>
      </header>

      {/* CONTENU MOBILE */}
      <main className="p-4 space-y-6">
        
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Votre journée, Marc</h2>
          <p className="text-sm text-[#5B6A60]">18 séances cette semaine · 3 bilans en attente</p>
        </div>

        {/* PLANNING MOBILE */}
        <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-4 shadow-sm space-y-4">
          <h3 className="font-bold border-b border-[#DDE3D8] pb-2 text-sm uppercase text-[#5B6A60]">Prochaines Séances</h3>
          
          <div className="flex gap-3">
            <div className="text-right w-12">
              <span className="block font-bold text-lg leading-none">09:00</span>
              <span className="text-[10px] text-[#5B6A60]">Individuel</span>
            </div>
            <div className="flex-1 bg-[#F3F5F0] rounded-lg p-3">
              <p className="font-bold text-sm">Inès Bernard</p>
              <p className="text-[11px] text-[#5B6A60] mt-1">Objectif: Squat 80kg</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-right w-12">
              <span className="block font-bold text-lg leading-none">11:00</span>
              <span className="text-[10px] text-[#5B6A60]">Groupe</span>
            </div>
            <div className="flex-1 bg-[#FBEBD0] text-[#8A4B08] rounded-lg p-3">
              <p className="font-bold text-sm">Groupe Santé (5 pers)</p>
              <p className="text-[11px] mt-1">À confirmer</p>
            </div>
          </div>
        </section>

        {/* ACTION IA MOBILE */}
        <section className="bg-[#C6F432]/20 border border-[#C6F432]/50 rounded-[14px] p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">✨</span>
            <h3 className="font-bold text-[#0F1A14] text-sm">Rapport IA Prêt</h3>
          </div>
          <p className="text-xs text-[#0F1A14] mb-3">
            Le bilan de mi-parcours de <strong>Thomas L.</strong> a été généré.
          </p>
          <button className="w-full bg-[#0F1A14] text-white py-2.5 rounded-lg text-xs font-bold">
            Lire & Valider
          </button>
        </section>

      </main>
    </div>
  );
}