import React, { useState, useEffect } from 'react';

export default function InteractiveShowcase({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1284);

  const slides = [
    {
      id: 0,
      actorTag: "VISION TENVO",
      title: "Le coaching, sans le chaos.",
      subtitle: "Découvre Tenvo en 60s ✨",
      bgGradient: "from-slate-900 via-[#0F1A14] to-black",
      badgeColor: "bg-[#C6F432] text-[#0F1A14]",
      icon: "⚡",
      content: (
        <div className="space-y-4 text-center my-auto px-4">
          <div className="w-20 h-20 bg-[#C6F432]/10 border-2 border-[#C6F432] rounded-full flex items-center justify-center text-4xl mx-auto shadow-2xl animate-pulse">
            ✨
          </div>
          <h2 className="text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            L&apos;IA au service du mouvement
          </h2>
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
            La plateforme collaborative qui connecte <strong>Coachs</strong>, <strong>Pratiquants</strong> et <strong>Clubs</strong>.
          </p>
        </div>
      ),
      actionText: "Voir l'espace Coach",
      targetScreen: "pro-dashboard",
    },
    {
      id: 1,
      actorTag: "ESPACE PRATIQUANT",
      title: "L'application dans leur poche",
      subtitle: "Carnet de suivi & programmes",
      bgGradient: "from-teal-950 via-[#0F1A14] to-black",
      badgeColor: "bg-[#C6F432] text-[#0F1A14]",
      icon: "📱",
      content: (
        <div className="space-y-3 my-auto px-4">
          <div className="mx-auto w-full max-w-[260px] bg-[#1a2e22] border-4 border-gray-800 rounded-[24px] p-4 shadow-2xl text-left space-y-3">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>SEMAINE 8</span>
              <span className="text-[#C6F432] font-bold">SCORE 78/100</span>
            </div>
            <p className="text-sm font-bold text-white">Bonjour Inès 👋</p>
            <div className="bg-white/10 p-3 rounded-lg text-xs text-gray-200 space-y-1.5">
              <p>✓ 5 min vélo doux</p>
              <p>⏳ 3x10 étirements</p>
            </div>
            <button className="w-full bg-[#C6F432] text-[#0F1A14] text-xs font-bold py-2 rounded-lg">
              Voir mon programme
            </button>
          </div>
        </div>
      ),
      actionText: "Tester l'App Mobile",
      targetScreen: "mobile-space",
    },
    {
      id: 2,
      actorTag: "DÉMO INTERACTIVE",
      title: "Prêt à tester ?",
      subtitle: "Choisis un profil pour explorer",
      bgGradient: "from-lime-950 via-[#0F1A14] to-black",
      badgeColor: "bg-[#C6F432] text-[#0F1A14]",
      icon: "🚀",
      content: (
        <div className="space-y-6 my-auto text-center px-4">
          <div className="w-16 h-16 bg-[#C6F432] text-[#0F1A14] rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl">
            T.
          </div>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            Exploration Libre
          </h2>
          
          <div className="flex flex-col gap-3 pt-4">
            <button 
              onClick={(e) => { e.stopPropagation(); onNavigate('pro-dashboard'); }}
              className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-left font-medium text-white transition-colors flex items-center gap-3"
            >
              <span className="text-2xl">🏋️‍♂️</span>
              <div>
                <p className="font-bold">Espace Coach</p>
                <p className="text-[10px] text-gray-300">Tableau de bord IA</p>
              </div>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onNavigate('mobile-space'); }}
              className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-left font-medium text-white transition-colors flex items-center gap-3"
            >
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-bold">App Pratiquant</p>
                <p className="text-[10px] text-gray-300">Suivi et séances</p>
              </div>
            </button>
          </div>
        </div>
      ),
      actionText: "Rejouer la présentation",
      targetScreen: "interactive-story", // Reset
    }
  ];

  // Auto-play story segments
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeSlide, isPlaying, slides.length]);

  const handleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
  };

  const slide = slides[activeSlide];

  return (
    <div className="w-full h-full bg-black relative">
      
      {/* FRAME PLEIN ECRAN (100dvh) */}
      <div className={`w-full h-full bg-gradient-to-b ${slide.bgGradient} relative flex flex-col justify-between p-4 transition-all duration-700`}>
        
        {/* BARRES DE PROGRESSION TOP */}
        <div className="flex gap-1.5 z-20 pt-2">
          {slides.map((s, idx) => (
            <div 
              key={s.id} 
              className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
            >
              <div 
                className={`h-full bg-white transition-all duration-300 ${
                  idx < activeSlide ? 'w-full' : idx === activeSlide && isPlaying ? 'animate-pulse w-full' : idx === activeSlide ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* EN-TÊTE DU REEL */}
        <div className="flex justify-between items-center z-20 pt-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C6F432] rounded-full flex items-center justify-center font-bold text-[#0F1A14] text-xs shadow-md">
              T.
            </div>
            <div>
              <span className="font-bold text-sm text-white drop-shadow-md">Tenvo.app</span>
              <p className="text-[10px] text-gray-200 drop-shadow-md">Présentation Mobile</p>
            </div>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
            className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-xs text-white backdrop-blur"
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>

        {/* ZONE CLIQUABLE GAUCHE/DROITE POUR NAVIGUER */}
        <div className="absolute inset-0 flex z-10">
          <div 
            className="w-1/3 h-full" 
            onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} 
          />
          <div 
            className="w-1/3 h-full" 
            onClick={() => setIsPlaying(!isPlaying)} 
          />
          <div 
            className="w-1/3 h-full" 
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)} 
          />
        </div>

        {/* CONTENU PRINCIPAL DU SLIDE */}
        <div className="z-20 flex-1 flex flex-col justify-center pointer-events-none">
          {slide.content}
        </div>

        {/* BAS DE L'ÉCRAN : BADGE + ACTION + INTERACTIONS */}
        <div className="z-20 space-y-4 pb-4">
          
          <div className="pointer-events-none">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${slide.badgeColor}`}>
              {slide.actorTag}
            </span>
            <h1 className="text-xl font-extrabold text-white mt-2 drop-shadow-md" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              {slide.title}
            </h1>
            <p className="text-sm text-gray-200 mt-1 drop-shadow-md">{slide.subtitle}</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (slide.targetScreen === 'interactive-story') {
                 setActiveSlide(0);
                 setIsPlaying(true);
              } else {
                 onNavigate(slide.targetScreen);
              }
            }}
            className="w-full h-[54px] bg-white text-black font-bold text-sm rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-xl"
          >
            <span>{slide.icon}</span>
            <span>{slide.actionText}</span>
          </button>

          <div className="flex justify-between items-center text-xs text-white px-2 pt-2">
            <button onClick={handleLike} className="flex flex-col items-center gap-1 active:scale-90 transition-transform">
              <span className={liked ? 'text-red-500 text-2xl drop-shadow' : 'text-2xl drop-shadow'}>{liked ? '❤️' : '🤍'}</span>
              <span className="drop-shadow-md font-medium">{likeCount}</span>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard?.writeText(window.location.href);
                alert("Lien copié !");
              }}
              className="flex flex-col items-center gap-1 active:scale-90 transition-transform"
            >
              <span className="text-2xl drop-shadow">📤</span>
              <span className="drop-shadow-md font-medium">Partager</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}