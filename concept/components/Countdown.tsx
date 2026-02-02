import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42); 
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-teal to-ocean dark:from-gold dark:to-teal opacity-20 group-hover:opacity-40 blur transition duration-200"></div>
      <div className="relative flex flex-col items-center bg-parchment dark:bg-ocean-dark border border-ocean/20 dark:border-gold/30 p-4 min-w-[100px] clip-path-slant transition-colors duration-300">
        <span className="text-4xl md:text-6xl font-mono font-bold text-ocean-dark dark:text-gold tabular-nums tracking-tighter shadow-cyan-glow">
          {value.toString().padStart(2, '0')}
        </span>
        <span className="text-[10px] text-teal dark:text-teal-bright/70 uppercase tracking-[0.2em] mt-2 border-t border-ocean/20 dark:border-gold/30 w-full text-center pt-2">
          {label}
        </span>
      </div>
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-ocean dark:border-gold"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-ocean dark:border-gold"></div>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center py-10 w-full">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <div className="text-2xl text-ocean/30 dark:text-gold/30 font-mono hidden md:block">:</div>
      <TimeUnit value={timeLeft.hours} label="HRS" />
      <div className="text-2xl text-ocean/30 dark:text-gold/30 font-mono hidden md:block">:</div>
      <TimeUnit value={timeLeft.minutes} label="MIN" />
      <div className="text-2xl text-ocean/30 dark:text-gold/30 font-mono hidden md:block">:</div>
      <TimeUnit value={timeLeft.seconds} label="SEC" />
    </div>
  );
};