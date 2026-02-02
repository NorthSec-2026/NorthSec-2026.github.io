import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, Shield } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const NavLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
  <a
    href={href}
    className="group relative px-3 py-2 font-mono text-xs uppercase tracking-widest text-ocean/70 dark:text-parchment/70 transition-colors hover:text-teal dark:hover:text-gold"
  >
    <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-left-1 text-teal dark:text-gold font-bold">[</span>
    {children}
    <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-right-1 text-teal dark:text-gold font-bold">]</span>
  </a>
);

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      
      setScrollProgress(scroll);
      setScrolled(totalScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-parchment-paper/95 dark:bg-ocean-dark/90 backdrop-blur-md py-3 shadow-lg border-b border-ocean/5 dark:border-gold/10'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal to-ocean dark:from-gold dark:to-teal transition-all duration-100 ease-out z-50" 
            style={{ width: `${scrollProgress * 100}%` }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="relative w-10 h-10 flex items-center justify-center">
                    {/* Rotating bg element */}
                    <div className="absolute inset-0 bg-teal dark:bg-gold opacity-10 group-hover:rotate-90 transition-transform duration-700 ease-out" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                    {/* Static border */}
                    <div className="absolute inset-0 border border-ocean/30 dark:border-gold/30" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                    <Shield className="w-5 h-5 text-ocean dark:text-parchment transition-transform group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold font-serif tracking-[0.15em] text-lg leading-none text-ocean-dark dark:text-gold group-hover:text-teal dark:group-hover:text-white transition-colors duration-300">NORTHSEC</span>
                    <div className="flex items-center gap-2">
                         <span className="text-[9px] font-mono text-teal dark:text-teal-bright uppercase tracking-widest">Sys.v3.0</span>
                         <span className={`w-1.5 h-1.5 rounded-full ${scrolled ? 'bg-green-500 animate-pulse' : 'bg-ocean/30 dark:bg-gold/30'}`}></span>
                    </div>
                </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center bg-white/50 dark:bg-black/20 px-4 py-1 rounded-full border border-ocean/5 dark:border-gold/5 backdrop-blur-sm mr-4">
                    <NavLink href="#mission">Mission</NavLink>
                    <NavLink href="#gameplay">Game</NavLink>
                    <NavLink href="#intel">Intel</NavLink>
                    <NavLink href="#lore">Lore</NavLink>
                    <NavLink href="#team">Team</NavLink>
                </div>
                
                <div className="h-6 w-px bg-ocean/10 dark:bg-gold/20 mx-2"></div>

                <button 
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full hover:bg-ocean/10 dark:hover:bg-gold/10 transition-colors text-ocean dark:text-gold border border-transparent hover:border-ocean/10 dark:hover:border-gold/20"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                <button className="group relative px-6 py-2.5 ml-2 bg-ocean-dark dark:bg-transparent overflow-hidden border border-ocean dark:border-gold/50 text-parchment dark:text-gold font-mono text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,91,91,0.3)] dark:hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                        Initialize <Terminal className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Hover sweep effect */}
                    <div className="absolute inset-0 bg-teal dark:bg-gold opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
            </div>

            {/* Mobile Toggle */}
            <button 
                className="md:hidden text-ocean-dark dark:text-gold p-2 hover:bg-ocean/5 dark:hover:bg-gold/10 rounded-md transition-colors"
                onClick={() => setIsOpen(true)}
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-parchment-paper dark:bg-ocean-dark/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-grid-slate opacity-20 pointer-events-none"></div>

          <div className="absolute top-0 w-full p-4 flex justify-between items-center border-b border-ocean/10 dark:border-gold/10">
               <span className="font-mono text-xs text-ocean/50 dark:text-gold/50 tracking-widest">MENU_OVERLAY // ACTIVE</span>
               <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-ocean dark:text-gold hover:rotate-90 transition-transform duration-300 rounded-full border border-ocean/10 dark:border-gold/10"
              >
                  <X className="w-8 h-8" />
              </button>
          </div>

          <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
               <div className="flex flex-col items-center gap-8">
                   {['Mission', 'Gameplay', 'Intel', 'Lore', 'Team'].map((item, i) => (
                       <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="group relative text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-ocean-dark to-ocean/50 dark:from-parchment dark:to-parchment/50 hover:to-teal dark:hover:to-gold transition-all duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                       >
                           {item}
                           <span className="absolute -left-8 top-0 text-lg font-mono text-teal dark:text-gold opacity-0 group-hover:opacity-100 group-hover:-left-12 transition-all duration-300">0{i+1}</span>
                       </a>
                   ))}
               </div>

               <div className="mt-16 flex flex-col items-center gap-6 w-full max-w-xs animate-[fadeIn_1s_ease-out_0.5s_both]">
                   <div className="w-full h-px bg-ocean/10 dark:border-gold/10"></div>
                   
                   <div className="flex items-center gap-6">
                       <span className="text-xs font-mono text-ocean/50 dark:text-parchment/50 uppercase tracking-widest">Interface Mode:</span>
                       <button onClick={toggleTheme} className="flex items-center gap-2 px-4 py-2 border border-ocean/10 dark:border-gold/20 rounded-full text-ocean dark:text-gold hover:bg-ocean/5 dark:hover:bg-gold/5">
                            {isDark ? <><Sun className="w-4 h-4" /> Light</> : <><Moon className="w-4 h-4" /> Dark</>}
                       </button>
                   </div>
                   
                   <button onClick={() => setIsOpen(false)} className="w-full py-4 bg-teal dark:bg-gold text-white dark:text-ocean-dark font-mono font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">
                       Initialize Sequence
                   </button>
               </div>
          </div>
      </div>
    </>
  );
};