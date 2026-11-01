import React, { useState } from 'react';
import InteractiveShowcase from './components/InteractiveShowcase';
import ProDashboard from './components/ProDashboard';
import MobileClientSpace from './components/MobileClientSpace';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('interactive-story');

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-[#0F1A14]">
      {/* Navigation Mobile Minimaliste */}
      {currentScreen !== 'interactive-story' && (
        <div className="bg-[#0F1A14] text-white p-2 flex justify-between items-center border-b border-gray-800 text-xs font-medium z-50">
          <span className="text-[#C6F432] font-bold">TENVO.APP</span>
          <button
            onClick={() => setCurrentScreen('interactive-story')}
            className="px-3 py-1.5 bg-gray-800 rounded-lg text-white"
          >
            ← Retour au Reel
          </button>
        </div>
      )}

      {/* Rendu dynamique : Occupe 100% de la hauteur sur mobile */}
      <div className={currentScreen !== 'interactive-story' ? "h-[calc(100dvh-40px)] overflow-y-auto" : "h-[100dvh]"}>
        {currentScreen === 'interactive-story' && <InteractiveShowcase onNavigate={(screen) => setCurrentScreen(screen)} />}
        {currentScreen === 'pro-dashboard' && <ProDashboard />}
        {currentScreen === 'mobile-space' && <MobileClientSpace />}
      </div>
    </div>
  );
}