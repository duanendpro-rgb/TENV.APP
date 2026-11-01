import React, { useState } from 'react';

export default function MobileClientSpace() {
  const [warmup, setWarmup] = useState([
    { id: 1, label: '5 min marche / vélo doux', done: true },
    { id: 2, label: 'Mobilité chevilles & genoux', done: false },
    { id: 3, label: '3 × 10 étirements', done: false },
  ]);

  const toggleWarmup = (id) => {
    setWarmup(warmup.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="min-h-screen bg-[#F3F5F0] text-[#0F1A14] font-sans pb-20 relative">
      
      {/* HEADER MOBILE PRATIQUANT */}
      <header className="bg-white p-4 sticky top-0 z-40 border-b border-[#DDE3D8]">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Bonjour Inès 👋</h1>
          <div className="w-8 h-8 rounded-full bg-[#E4F2D9] flex items-center justify-center font-bold text-xs text-[#1F4D36]">IB</div>
        </div>
      </header>

      {/* CONTENU MOBILE */}
      <main className="p-4 space-y-4">
        
        {/* CARTE SCORE */}
        <section className="bg-[#0F1A14] text-white rounded-[16px] p-5 shadow-lg">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Score Santé</p>
              <p className="text-3xl font-bold text-[#C6F432] leading-none mt-1">78</p>
            </div>
            <span className="bg-white/10 text-xs px-2 py-1 rounded">Semaine 8</span>
          </div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div className="bg-[#C6F432] h-full" style={{ width: '78%' }}></div>
          </div>
        </section>

        {/* PROCHAINE SÉANCE */}
        <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-4 shadow-sm">
          <span className="bg-[#FBEBD0] text-[#8A4B08] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Demain · 09:00</span>
          <h2 className="text-base font-bold mt-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Séance avec Marc (Coach)</h2>
          <p className="text-xs text-[#5B6A60] mb-3">Maison Sport-Santé</p>
          <button className="w-full bg-[#C6F432] text-[#0F1A14] py-2.5 rounded-lg text-xs font-bold">
            Programme de la séance
          </button>
        </section>

        {/* CARNET QUOTIDIEN */}
        <section className="bg-white rounded-[14px] border border-[#DDE3D8] p-4 shadow-sm">
          <h2 className="text-sm font-bold mb-3 uppercase text-[#5B6A60]">Objectifs du jour</h2>
          <div className="space-y-2">
            {warmup.map((item) => (
              <label 
                key={item.id} 
                className="flex items-center gap-3 p-3 rounded-lg border border-[#DDE3D8] bg-[#F3F5F0] cursor-pointer"
              >
                <input 
                  type="checkbox" 
                  checked={item.done} 
                  onChange={() => toggleWarmup(item.id)} 
                  className="w-5 h-5 accent-[#1F4D36] rounded"
                />
                <span className={`text-sm font-medium ${item.done ? 'line-through text-[#5B6A60]' : 'text-[#0F1A14]'}`}>
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </section>

      </main>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-[#DDE3D8] pb-safe">
        <div className="flex justify-around items-center h-16 px-2">
          <button className="flex flex-col items-center flex-1 text-[#0F1A14]">
            <span className="text-xl mb-1">🏠</span>
            <span className="text-[10px] font-bold">Accueil</span>
          </button>
          <button className="flex flex-col items-center flex-1 text-[#5B6A60]">
            <span className="text-xl mb-1">📋</span>
            <span className="text-[10px]">Carnet</span>
          </button>
          <button className="flex flex-col items-center flex-1 text-[#5B6A60]">
            <span className="text-xl mb-1">📊</span>
            <span className="text-[10px]">Bilan</span>
          </button>
        </div>
      </nav>
    </div>
  );
}