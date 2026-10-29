import React, { useState } from 'react';

export default function MobileClientSpace() {
  const [warmup, setWarmup] = useState([
    { id: 1, label: '5 min vélo / rameur', done: true },
    { id: 2, label: 'Mobilisation chevilles & hanches', done: false },
    { id: 3, label: '3 × 10 Squats au poids du corps', done: false },
  ]);

  const toggleWarmup = (id) => {
    setWarmup(warmup.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0F1A14] p-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      
      {/* FRAME MOBILE 390x844 */}
      <div className="w-[390px] h-[844px] bg-[#F3F5F0] text-[#0F1A14] rounded-[36px] overflow-hidden flex flex-col justify-between border-8 border-[#0F1A14] shadow-2xl relative">
        
        {/* CONTENU DEFILANT */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          
          {/* EN-TÊTE */}
          <header className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <h1 className="text-2xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Bonjour Inès 👋</h1>
              <span className="text-xs bg-[#E4F2D9] text-[#1F4D36] font-bold px-2.5 py-1 rounded-full">Semaine 8</span>
            </div>
            <p className="text-[#5B6A60] text-sm font-medium">Objectif : Squat 80 kg</p>
          </header>

          {/* CARTE PROGRESSION */}
          <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-4 shadow-sm">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-semibold text-[#5B6A60]">PROGRESSION SQUAT</span>
              <span className="text-lg font-bold text-[#1F4D36]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>72 / 80 kg</span>
            </div>
            <div className="w-full bg-[#F3F5F0] h-3 rounded-full overflow-hidden p-0.5 border border-[#DDE3D8]">
              <div className="bg-[#C6F432] h-full rounded-full transition-all" style={{ width: '90%' }}></div>
            </div>
          </section>

          {/* PROCHAINE SÉANCE */}
          <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="bg-[#FBEBD0] text-[#8A4B08] text-xs font-bold px-2 py-0.5 rounded">Demain · 09:00</span>
                <h2 className="text-base font-bold mt-1" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Séance avec Marc Coach</h2>
              </div>
            </div>
            <button className="w-full h-[44px] bg-[#C6F432] text-[#0F1A14] rounded-lg font-bold text-sm flex items-center justify-center hover:bg-[#b3de2a] transition-colors">
              Voir le programme
            </button>
          </section>

          {/* ÉCHAUFFEMENT DU JOUR */}
          <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-4 shadow-sm">
            <h2 className="text-sm font-bold mb-3 uppercase text-[#5B6A60]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Échauffement du jour
            </h2>
            <div className="space-y-2">
              {warmup.map((item) => (
                <label 
                  key={item.id} 
                  onClick={() => toggleWarmup(item.id)}
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-[#DDE3D8] bg-[#F3F5F0] cursor-pointer min-h-[44px]"
                >
                  <input 
                    type="checkbox" 
                    checked={item.done} 
                    onChange={() => {}} 
                    className="w-5 h-5 accent-[#1F4D36] rounded"
                  />
                  <span className={`text-xs font-medium ${item.done ? 'line-through text-[#5B6A60]' : 'text-[#0F1A14]'}`}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </section>

        </div>

        {/* NAVIGATION BASSE */}
        <nav className="bg-white border-t border-[#DDE3D8] px-4 py-2 flex justify-between items-center min-h-[60px]">
          {[
            { label: 'Accueil', active: true, icon: '🏠' },
            { label: 'Séances', active: false, icon: '📅' },
            { label: 'Progrès', active: false, icon: '📈' },
            { label: 'Messages', active: false, icon: '💬' },
          ].map((item, idx) => (
            <button key={idx} className="flex flex-col items-center justify-center flex-1 h-[44px]">
              <span className="text-base">{item.icon}</span>
              <span className={`text-[10px] font-medium ${item.active ? 'text-[#0F1A14] font-bold' : 'text-[#5B6A60]'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

      </div>
    </div>
  );
}