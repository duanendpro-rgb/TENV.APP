import React from 'react';

export default function ProDashboard() {
  return (
    <div className="flex min-h-screen bg-[#F3F5F0] text-[#0F1A14]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      
      {/* BARRE LATÉRALE */}
      <aside className="w-64 bg-[#0F1A14] text-white flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-2xl text-[#C6F432] mb-10" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Tenvo.</h1>
          <nav className="space-y-4">
            <a href="#" className="block text-[#C6F432] font-medium">Tableau de bord</a>
            <a href="#" className="block text-gray-400 hover:text-white">Clients</a>
            <a href="#" className="block text-gray-400 hover:text-white">Planning</a>
            <a href="#" className="block text-gray-400 hover:text-white">Programmes</a>
            <a href="#" className="block text-gray-400 hover:text-white">Facturation</a>
          </nav>
        </div>
        <div className="p-6 border-t border-gray-800">
          <p className="font-bold">Marc Coach</p>
          <p className="text-sm text-gray-400">Indépendant</p>
          <p className="text-xs text-[#C6F432] mt-2">Modules : Sport · Clubs</p>
        </div>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-1 p-8">
        
        {/* EN-TÊTE */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Votre journée, Marc</h2>
          <button className="h-[44px] bg-[#C6F432] text-[#0F1A14] px-6 rounded-lg font-bold flex items-center hover:bg-[#b3de2a] transition-colors">
            Nouvelle séance
          </button>
        </header>

        {/* 4 INDICATEURS */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Séances semaine', value: '18', sub: 'dont 6 collectives' },
            { label: 'Clients actifs', value: '34', sub: '3 à relancer', alert: true },
            { label: 'Revenus du mois', value: '3 240 €', sub: 'Prévisionnel' },
            { label: 'Présence moyenne', value: '92 %', sub: 'Sur 4 semaines' }
          ].map((kpi, index) => (
            <div key={index} className="bg-white rounded-[14px] border border-[#DDE3D8] p-5 shadow-sm">
              <p className="text-[#5B6A60] text-sm mb-1">{kpi.label}</p>
              <p className="text-3xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{kpi.value}</p>
              <p className={`text-sm mt-2 font-medium ${kpi.alert ? 'text-[#8A4B08] bg-[#FBEBD0] inline-block px-2 py-1 rounded' : 'text-[#5B6A60]'}`}>
                {kpi.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE : PLANNING */}
          <div className="col-span-2 space-y-6">
            <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Planning du jour</h3>
              
              {/* Item Planning */}
              <div className="flex items-start justify-between border-b border-[#DDE3D8] pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-lg">09:00</span>
                    <span className="bg-[#E4F2D9] text-[#1F4D36] px-2 py-0.5 rounded text-sm font-medium">Séance individuelle</span>
                  </div>
                  <p className="font-medium text-[#0F1A14]">Inès Bernard</p>
                  <p className="text-[#5B6A60] text-sm">Objectif : Squat 80kg - Séance 5/10</p>
                </div>
                <div className="flex gap-2">
                  <button className="h-[44px] px-4 border border-[#DDE3D8] rounded-lg text-sm font-medium hover:bg-gray-50">Prévenir</button>
                  <button className="h-[44px] px-4 border border-[#DDE3D8] rounded-lg text-sm font-medium hover:bg-gray-50">Modifier</button>
                </div>
              </div>
              
              {/* Message de principe */}
              <p className="text-sm text-[#5B6A60] italic mt-4 text-center">Aucune modification ou message n'est envoyé sans votre validation.</p>
            </section>
          </div>

          {/* COLONNE DROITE : IA & À RELANCER */}
          <div className="space-y-6">
            
            {/* Assistant IA */}
            <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✨</span>
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Suggestions IA</h3>
              </div>
              <div className="bg-[#F3F5F0] p-4 rounded-lg mb-4">
                <p className="text-sm font-medium mb-2">Message préparé pour Inès Bernard :</p>
                <p className="text-sm text-[#5B6A60] mb-4">"Bonjour Inès, prête pour la séance de demain ? On va cibler les 74kg au squat. Repose-toi bien ce soir !"</p>
                <div className="flex gap-2">
                  <button className="h-[44px] flex-1 bg-[#C6F432] text-[#0F1A14] rounded-lg font-medium text-sm">Valider</button>
                  <button className="h-[44px] flex-1 border border-[#DDE3D8] bg-white rounded-lg font-medium text-sm">Ignorer</button>
                </div>
              </div>
            </section>

            {/* À Relancer */}
            <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>À relancer</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">Thomas L.</p>
                    <p className="text-xs text-[#8A4B08] bg-[#FBEBD0] px-1.5 py-0.5 rounded inline-block mt-1">Inactif 19 jours</p>
                  </div>
                  <button className="text-sm text-[#5B6A60] underline">Préparer msg</button>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">Sarah M.</p>
                    <p className="text-xs text-[#8A4B08] bg-[#FBEBD0] px-1.5 py-0.5 rounded inline-block mt-1">Forfait épuisé</p>
                  </div>
                  <button className="text-sm text-[#5B6A60] underline">Préparer msg</button>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}