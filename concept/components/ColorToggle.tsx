import React from 'react';
import { ColorMode } from '../types';

interface ColorToggleProps {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
}

export const ColorToggle: React.FC<ColorToggleProps> = ({ mode, setMode }) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex bg-black/80 backdrop-blur border border-white/10 rounded-full p-1 shadow-2xl">
        <button
            onClick={() => setMode('blue')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                mode === 'blue' 
                ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' 
                : 'text-gray-400 hover:text-white'
            }`}
        >
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            Maritime
        </button>
        <button
            onClick={() => setMode('gold')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                mode === 'gold' 
                ? 'bg-amber-600 text-white shadow-[0_0_15px_rgba(217,119,6,0.5)]' 
                : 'text-gray-400 hover:text-white'
            }`}
        >
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            Heritage
        </button>
    </div>
  );
};