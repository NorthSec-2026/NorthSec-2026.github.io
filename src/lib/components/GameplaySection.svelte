<script lang="ts">
  import { Cpu, Server, Trophy, Users, Zap, Clock } from "lucide-svelte";
</script>

<section
  id="gameplay"
  class="w-full max-w-[1400px] border-x border-b border-ocean/10 dark:border-gold/10 bg-parchment-paper dark:bg-ocean-dark py-20 px-8 md:px-16 relative overflow-hidden transition-colors duration-300"
>
  <!-- Background Tech Patterns -->
  <div
    class="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"
  ></div>

  <div class="flex p-20 flex-col md:flex-row gap-16">
    <!-- Left Column: Headers -->
    <div class="md:w-1/3">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 border border-ocean/20 dark:border-gold/30 bg-ocean/5 dark:bg-gold/5 text-ocean dark:text-gold text-[10px] font-mono uppercase tracking-widest mb-6"
      >
        <Zap class="w-3 h-3" /> Operational Parameters
      </div>
      <h2
        class="text-4xl md:text-5xl font-serif font-bold text-ocean-dark dark:text-parchment mb-6 leading-none"
      >
        The Battlefield
      </h2>
      <p
        class="text-ocean/70 dark:text-parchment/70 text-lg leading-relaxed mb-8"
      >
        NorthSec is not a standard jeopardy CTF. It is a simulation of a
        realistic corporate network under siege.
      </p>

      <div class="space-y-6">
        <div class="flex gap-4 items-start group">
          <div
            class="p-3 bg-teal/10 dark:bg-gold/10 border border-teal/20 dark:border-gold/20 text-teal dark:text-gold rounded-sm group-hover:bg-teal group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-ocean-dark transition-all"
          >
            <Users class="w-6 h-6" />
          </div>
          <div>
            <h4 class="font-bold text-ocean-dark dark:text-parchment font-mono">
              Squad Size
            </h4>
            <p class="text-sm text-ocean/60 dark:text-parchment/60">
              Max 8 Operators per team.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-start group">
          <div
            class="p-3 bg-teal/10 dark:bg-gold/10 border border-teal/20 dark:border-gold/20 text-teal dark:text-gold rounded-sm group-hover:bg-teal group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-ocean-dark transition-all"
          >
            <Clock class="w-6 h-6" />
          </div>
          <div>
            <h4 class="font-bold text-ocean-dark dark:text-parchment font-mono">
              Duration
            </h4>
            <p class="text-sm text-ocean/60 dark:text-parchment/60">
              48 Hours Non-Stop.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Cards -->
    <div class="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Card 1: The Badge -->
      <div
        class="bg-white dark:bg-ocean/30 border border-ocean/10 dark:border-gold/10 p-8 hover:border-teal dark:hover:border-gold transition-colors duration-300 relative group overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
        >
          <Cpu class="w-24 h-24 text-teal dark:text-gold transform rotate-12" />
        </div>
        <Cpu class="w-8 h-8 text-teal dark:text-gold mb-4" />
        <h3
          class="text-xl font-bold font-serif text-ocean-dark dark:text-parchment mb-3"
        >
          Hardware Warfare
        </h3>
        <p
          class="text-sm text-ocean/70 dark:text-parchment/70 leading-relaxed mb-4"
        >
          Every participant receives a custom PCB badge. It's not just a
          souvenir; it's a key. Reverse engineer the firmware, hack the
          hardware, and unlock physical access to hidden challenge layers.
        </p>
        <ul
          class="text-xs font-mono text-ocean/50 dark:text-parchment/50 space-y-1"
        >
          <li>> JTAG / SWD Debugging</li>
          <li>> UART Interception</li>
          <li>> Custom Firmware Reversing</li>
        </ul>
      </div>

      <!-- Card 2: The Network -->
      <div
        class="bg-white dark:bg-ocean/30 border border-ocean/10 dark:border-gold/10 p-8 hover:border-teal dark:hover:border-gold transition-colors duration-300 relative group overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
        >
          <Server
            class="w-24 h-24 text-teal dark:text-gold transform -rotate-12"
          />
        </div>
        <Server class="w-8 h-8 text-teal dark:text-gold mb-4" />
        <h3
          class="text-xl font-bold font-serif text-ocean-dark dark:text-parchment mb-3"
        >
          Living Infrastructure
        </h3>
        <p
          class="text-sm text-ocean/70 dark:text-parchment/70 leading-relaxed mb-4"
        >
          The CTF runs on a simulated internet. 500+ VMs representing a
          fictional nation's digital backbone. Attack banking systems, power
          grids, and military comms in a safe, isolated environment.
        </p>
        <ul
          class="text-xs font-mono text-ocean/50 dark:text-parchment/50 space-y-1"
        >
          <li>> Active Directory Forest</li>
          <li>> SCADA / PLCs</li>
          <li>> Cloud Containers</li>
        </ul>
      </div>

      <!-- Card 3: Scoring -->
      <div
        class="md:col-span-2 bg-gradient-to-r from-teal/5 to-transparent dark:from-gold/5 border border-teal/20 dark:border-gold/20 p-6 flex flex-col md:flex-row items-center gap-6"
      >
        <div
          class="shrink-0 p-4 bg-teal dark:bg-gold text-white dark:text-ocean-dark font-bold rounded-full"
        >
          <Trophy class="w-6 h-6" />
        </div>
        <div>
          <h3
            class="text-lg font-bold font-serif text-ocean-dark dark:text-parchment mb-1"
          >
            Dynamic Scoring Engine
          </h3>
          <p class="text-sm text-ocean/70 dark:text-parchment/70">
            Points decay based on the number of solves. First blood grants bonus
            points. The leaderboard is live, displaying real-time territory
            control maps.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
