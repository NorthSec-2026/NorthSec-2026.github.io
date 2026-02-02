import React, { useState } from 'react';
import { ArrowRight, Anchor, Fingerprint } from 'lucide-react';

export const StoryTimeline: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(2);

  const phases = [
    {
      id: 1,
      title: "Exploration",
      subtitle: "Divergent Concepts",
      icon: <Anchor className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white dark:bg-ocean p-4 border-l-2 border-teal/30 dark:border-gold/30">
            <h4 className="font-bold mb-1 text-ocean-dark dark:text-gold">Concept: Poseidon</h4>
            <p className="text-xs text-ocean/70 dark:text-parchment/70">Mythological, maritime power, recovering fragments of a god.</p>
          </div>
          <div className="bg-white dark:bg-ocean p-4 border-l-2 border-teal/30 dark:border-gold/30">
            <h4 className="font-bold mb-1 text-ocean-dark dark:text-gold">Concept: Digital Heist</h4>
            <p className="text-xs text-ocean/70 dark:text-parchment/70">Elite crews, infiltration, high-pressure modern cinema.</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Convergence",
      subtitle: "Synthesis",
      icon: <ArrowRight className="w-5 h-5" />,
      content: (
        <div className="text-center p-4 border border-ocean/10 dark:border-gold/10 bg-ocean/5 dark:bg-gold/5">
            <p className="text-ocean-dark dark:text-parchment italic mb-4">"Merging the spirit of exploration with the tension of a heist."</p>
            <div className="flex justify-center items-center gap-2 text-xs font-mono text-teal dark:text-teal-bright/80 uppercase">
                <span>Maritime</span>
                <span>+</span>
                <span>Strategy</span>
                <span>+</span>
                <span>History</span>
            </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Final Narrative",
      subtitle: "The Andalusian Cipher",
      icon: <Fingerprint className="w-5 h-5" />,
      content: (
        <div className="bg-gradient-to-r from-ocean/10 to-transparent dark:from-ocean dark:to-transparent p-6 border-l-4 border-teal dark:border-gold">
            <h3 className="text-xl font-serif font-bold mb-2 text-ocean-dark dark:text-gold">The Digital Argonauts</h3>
            <p className="text-ocean/70 dark:text-parchment/70 text-sm leading-relaxed">
                Participants are ethical hackers recovering lost scientific knowledge from the Golden Age, fragmented across the digital realm.
                Every CTF challenge is a piece of the Cipher.
            </p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center mb-8 relative px-4">
        {/* Connector Line */}
        <div className="absolute top-6 left-10 right-10 h-0.5 bg-ocean/10 dark:bg-gold/20 -z-10"></div>
        
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`flex flex-col items-center group relative z-10 transition-all duration-300 ${activePhase === phase.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
          >
            <div className={`w-12 h-12 rounded-none transform rotate-45 flex items-center justify-center border transition-colors duration-300 bg-parchment dark:bg-ocean-dark ${
              activePhase === phase.id ? 'border-teal dark:border-gold text-teal dark:text-gold shadow-[0_0_15px_rgba(0,91,91,0.3)] dark:shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-ocean/30 dark:border-gold/30 text-ocean/50 dark:text-parchment/50'
            }`}>
              <div className="transform -rotate-45">{phase.icon}</div>
            </div>
            <div className="mt-6 text-center">
              <span className={`text-[10px] uppercase tracking-widest block mb-1 ${activePhase === phase.id ? 'text-teal dark:text-gold' : 'text-ocean/50 dark:text-parchment/50'}`}>{phase.title}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[150px]">
         {phases.map((phase) => (
             activePhase === phase.id && (
                 <div key={phase.id} className="animate-[fadeIn_0.5s_ease-out]">
                     {phase.content}
                 </div>
             )
         ))}
      </div>
    </div>
  );
};