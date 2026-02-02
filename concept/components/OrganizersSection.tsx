import React from 'react';
import { Award, Heart } from 'lucide-react';

const RoleCard = ({ title, handle, desc }: { title: string, handle: string, desc: string }) => (
    <div className="flex gap-4 items-start">
        <div className="w-10 h-10 bg-ocean-dark dark:bg-gold flex items-center justify-center shrink-0">
            <Award className="w-5 h-5 text-gold dark:text-ocean-dark" />
        </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-ocean-dark dark:text-parchment text-sm">{title}</h4>
                <span className="text-xs font-mono text-teal dark:text-teal-bright opacity-70">{handle}</span>
            </div>
            <p className="text-xs text-ocean/60 dark:text-parchment/60 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const OrganizersSection: React.FC = () => {
  return (
     <section id="team" className="w-full max-w-[1400px] border-x border-b border-ocean/10 dark:border-gold/10 bg-parchment dark:bg-ocean-dark relative transition-colors duration-300">
        
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: Organization Info */}
            <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-ocean/10 dark:border-gold/10 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 mb-6 border border-ocean/20 dark:border-gold/30 rounded-full text-xs font-bold font-mono text-ocean dark:text-gold uppercase tracking-widest self-start">
                    The Architects
                </div>
                <h2 className="text-4xl font-serif font-bold text-ocean-dark dark:text-parchment mb-6">
                    NorthSec Association
                </h2>
                <p className="text-ocean/70 dark:text-parchment/70 text-lg leading-relaxed mb-8">
                    We are a non-profit organization dedicated to raising the bar of applied security in North Africa. We believe in knowledge sharing, community building, and rigorous technical excellence.
                </p>
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold font-mono text-teal dark:text-gold">10+</span>
                        <span className="text-[10px] uppercase tracking-widest text-ocean/50 dark:text-parchment/50">Years Experience</span>
                    </div>
                     <div className="flex flex-col">
                        <span className="text-3xl font-bold font-mono text-teal dark:text-gold">50+</span>
                        <span className="text-[10px] uppercase tracking-widest text-ocean/50 dark:text-parchment/50">Volunteers</span>
                    </div>
                </div>
            </div>

            {/* Right: Core Roles */}
            <div className="p-12 md:p-20 bg-ocean/5 dark:bg-white/5">
                <h3 className="text-xl font-bold font-serif text-ocean-dark dark:text-parchment mb-8 tracking-wide">Command Structure</h3>
                
                <div className="space-y-6">
                    <RoleCard title="Infrastructure Lead" handle="@sysadmin_god" desc="Architect of the simulation network. Keeps the packets flowing." />
                    <RoleCard title="Head of Content" handle="@crypto_witch" desc="Mastermind behind the narrative and challenge design." />
                    <RoleCard title="Logistics Director" handle="@ops_commander" desc="Ensures venue security, hardware delivery, and human sustainability." />
                </div>

                <div className="mt-10 pt-10 border-t border-ocean/10 dark:border-gold/10">
                    <p className="text-sm text-ocean/60 dark:text-parchment/60 mb-4">Want to contribute to the next edition?</p>
                    <button className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-teal dark:text-gold hover:underline">
                        <Heart className="w-4 h-4" /> Join the Volunteers
                    </button>
                </div>
            </div>

        </div>
     </section>
  );
};