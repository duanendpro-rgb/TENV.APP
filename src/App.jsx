import React, { useState } from 'react';
import ProDashboard from './components/ProDashboard';
import ClientProfile from './components/ClientProfile';
import MobileClientSpace from './components/MobileClientSpace';
import ClubDashboard from './components/ClubDashboard';
import ClientsView from './components/ClientsView';
import PlanningView from './components/PlanningView';
import FacturationView from './components/FacturationView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('pro-dashboard');

  return (
    <div>
      {/* Navigation de démo pour basculer entre les 7 vues de l'application */}
      <div className="bg-[#0F1A14] text-white p-3 flex flex-wrap justify-center items-center gap-2 border-b border-gray-800 text-xs md:text-sm font-medium sticky top-0 z-50">
        <span className="text-[#C6F432] font-bold mr-2">TENVO DEMO :</span>
        <button
          onClick={() => setCurrentScreen('pro-dashboard')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            currentScreen === 'pro-dashboard' ? 'bg-[#C6F432] text-[#0F1A14] font-bold' : 'hover:bg-gray-800 text-gray-300'
          }`}
        >
          1. TdB Pro
        </button>
        <button
          onClick={() => setCurrentScreen('clients-view')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            currentScreen === 'clients-view' ? 'bg-[#C6F432] text-[#0F1A14] font-bold' : 'hover:bg-gray-800 text-gray-300'
          }`}
        >
          2. Vue Clients
        </button>
        <button
          onClick={() => setCurrentScreen('client-profile')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            currentScreen === 'client-profile' ? 'bg-[#C6F432] text-[#0F1A14] font-bold' : 'hover:bg-gray-800 text-gray-300'
          }`}
        >
          3. Fiche Client (Inès)
        </button>
        <button
          onClick={() => setCurrentScreen('planning-view')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            currentScreen === 'planning-view' ? 'bg-[#C6F432] text-[#0F1A14] font-bold' : 'hover:bg-gray-800 text-gray-300'
          }`}
        >
          4. Planning
        </button>
        <button
          onClick={() => setCurrentScreen('facturation-view')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            currentScreen === 'facturation-view' ? 'bg-[#C6F432] text-[#0F1A14] font-bold' : 'hover:bg-gray-800 text-gray-300'
          }`}
        >
          5. Facturation
        </button>
        <button
          onClick={() => setCurrentScreen('mobile-space')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            currentScreen === 'mobile-space' ? 'bg-[#C6F432] text-[#0F1A14] font-bold' : 'hover:bg-gray-800 text-gray-300'
          }`}
        >
          6. Particulier Mobile
        </button>
        <button
          onClick={() => setCurrentScreen('club-dashboard')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            currentScreen === 'club-dashboard' ? 'bg-[#C6F432] text-[#0F1A14] font-bold' : 'hover:bg-gray-800 text-gray-300'
          }`}
        >
          7. Club / Organisation
        </button>
      </div>

      {/* Rendu dynamique de l'écran actif */}
      {currentScreen === 'pro-dashboard' && <ProDashboard />}
      {currentScreen === 'clients-view' && <ClientsView />}
      {currentScreen === 'client-profile' && <ClientProfile />}
      {currentScreen === 'planning-view' && <PlanningView />}
      {currentScreen === 'facturation-view' && <FacturationView />}
      {currentScreen === 'mobile-space' && <MobileClientSpace />}
      {currentScreen === 'club-dashboard' && <ClubDashboard />}
    </div>
  );
}