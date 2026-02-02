import React from 'react';

export interface MarqueeItem {
    name: string;
    logo?: string;
}

interface MarqueeProps {
  text?: string;
  items?: (string | MarqueeItem)[]; // For logos or partner names
  direction?: 'left' | 'right';
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, items, direction = 'left', speed = 25 }) => {
  const content = (
    <div className="flex shrink-0 gap-12 md:gap-16 py-6 items-center px-4">
      {text ? (
        // Text mode
        Array.from({ length: 8 }).map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase text-ocean-dark dark:text-gold">
              {text}
            </span>
            <span className="text-teal dark:text-teal-bright text-xl font-mono">///</span>
          </React.Fragment>
        ))
      ) : (
        // Items/Partners mode
        items?.map((item, i) => {
             const name = typeof item === 'string' ? item : item.name;
             const logo = typeof item === 'string' ? undefined : item.logo;

             return (
              <React.Fragment key={i}>
                <div className="group flex items-center gap-3 cursor-pointer transition-opacity duration-300">
                    {logo ? (
                        <div className="relative h-6 md:h-8 w-auto min-w-[24px]">
                           {/* Light Mode Logo: Grayscale -> Color on hover */}
                           <img 
                                src={logo} 
                                alt={name} 
                                className="h-full w-auto object-contain dark:hidden filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                           />
                           {/* Dark Mode Logo: White -> Color on hover */}
                           <img 
                                src={logo} 
                                alt={name} 
                                className="h-full w-auto object-contain hidden dark:block filter brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-300" 
                           />
                        </div>
                    ) : null}
                    <span className={`text-lg md:text-xl font-bold font-sans tracking-wide uppercase text-ocean/60 dark:text-parchment/60 group-hover:text-ocean dark:group-hover:text-parchment transition-colors ${logo ? 'hidden lg:block' : ''}`}>
                      {name}
                    </span>
                </div>
                {/* Separator */}
                <div className="w-1.5 h-1.5 bg-teal dark:bg-gold rounded-full opacity-50"></div>
              </React.Fragment>
            );
        })
      )}
    </div>
  );

  return (
    <div className="relative flex overflow-hidden w-full border-y border-ocean/10 dark:border-gold/10 bg-parchment-paper dark:bg-ocean-dark backdrop-blur-sm select-none z-20 transition-colors duration-300">
        <div 
          className="animate-marquee flex whitespace-nowrap items-center" 
          style={{ animationDuration: `${speed}s`, animationDirection: direction === 'right' ? 'reverse' : 'normal' }}
        >
            {content}
            {content}
            {content}
            {content}
        </div>
    </div>
  );
};