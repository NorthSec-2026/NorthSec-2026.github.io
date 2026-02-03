<script lang="ts">
  import {
    Terminal,
    Shield,
    Target,
    Cpu,
    Zap,
    ArrowRight,
    Users,
  } from "lucide-svelte";
</script>

<!-- MISSION BRIEFING SECTION -->
<div
  id="mission"
  class="w-full pt-16 max-w-[1400px] border-x border-b border-ocean/10 dark:border-gold/10 bg-parchment-paper dark:bg-ocean-dark p-8 md:p-16 relative overflow-hidden transition-colors duration-300"
>
  <!-- Background Grid -->
  <div
    class="absolute inset-0 bg-[linear-gradient(to_right,#005B5B_1px,transparent_1px),linear-gradient(to_bottom,#005B5B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5 dark:opacity-10 pointer-events-none"
  ></div>

  <div
    class="relative z-10 p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  >
    <!-- Left Side: Text Briefing -->
    <div class="lg:col-span-5 flex flex-col justify-center h-full">
      <div class="flex items-center gap-2 text-ocean dark:text-gold mb-6">
        <Terminal class="w-5 h-5 animate-pulse" />
        <span class="font-mono text-sm uppercase tracking-widest"
          >Mission Directive</span
        >
      </div>
      <h2
        class="text-4xl md:text-5xl font-serif font-bold text-ocean-dark dark:text-parchment mb-6 leading-tight"
      >
        The Premier <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-teal to-ocean dark:from-gold dark:to-teal"
          >Cybersecurity</span
        > Event
      </h2>
      <p
        class="text-ocean/70 dark:text-parchment/70 text-lg leading-relaxed mb-8"
      >
        NorthSec is North Africa's largest applied security event. We bridge the
        gap between theoretical knowledge and real-world combat. This is not
        just a simulation; it is a live-fire exercise in digital defense and
        offense.
      </p>
      <div
        class="flex gap-8 mb-8 border-t border-ocean/10 dark:border-gold/10 pt-8"
      >
        <div>
          <div
            class="text-4xl font-bold text-ocean-dark dark:text-parchment font-mono mb-1"
          >
            48<span class="text-teal dark:text-gold text-xl">H</span>
          </div>
          <div
            class="text-[10px] text-teal dark:text-teal-bright uppercase tracking-widest"
          >
            Continuous Hacking
          </div>
        </div>
        <div>
          <div
            class="text-4xl font-bold text-ocean-dark dark:text-parchment font-mono mb-1"
          >
            500<span class="text-teal dark:text-gold text-xl">+</span>
          </div>
          <div
            class="text-[10px] text-teal dark:text-teal-bright uppercase tracking-widest"
          >
            Elite Operators
          </div>
        </div>
      </div>
      <button
        class="self-start px-6 py-3 border border-ocean/20 dark:border-gold/30 text-ocean dark:text-gold text-xs font-mono uppercase tracking-widest hover:bg-ocean/5 dark:hover:bg-gold/10 transition-colors"
      >
        [ Read Manifesto ]
      </button>
    </div>

    <!-- Right Side: Cyber Mosaic Grid -->
    <div class="lg:col-span-7 h-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <!-- 1. Defensive Operations (Standard) -->
        <div
          class="relative group bg-white/50 dark:bg-ocean/40 border border-ocean/10 dark:border-gold/10 p-6 hover:border-teal/50 dark:hover:border-gold/50 transition-colors backdrop-blur-sm"
        >
          <!-- HUD Corners -->
          <div
            class="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div
            class="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div class="flex justify-between items-start mb-4">
            <Shield class="w-8 h-8 text-teal dark:text-gold" />
            <span
              class="text-[10px] font-mono text-ocean/60 dark:text-teal-bright"
              >01</span
            >
          </div>
          <h3
            class="text-xl font-bold text-ocean-dark dark:text-parchment font-mono mb-2"
          >
            Defensive Ops
          </h3>
          <p
            class="text-sm text-ocean/60 dark:text-parchment/60 leading-relaxed"
          >
            Master blue team strategies. Harden infrastructure, detect
            intrusions, and mitigate threats in real-time.
          </p>
        </div>

        <!-- 2. CTF Challenges (Tall Feature) -->
        <div
          class="relative group md:row-span-2 bg-gradient-to-br from-teal/10 to-ocean/20 dark:from-ocean dark:to-ocean-dark border border-teal/30 p-8 overflow-hidden"
        >
          <!-- HUD Corners -->
          <div
            class="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-teal"
          ></div>
          <div
            class="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-teal"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-teal"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-teal"
          ></div>
          <!-- Background graphic -->
          <div
            class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80')] opacity-5 dark:opacity-10 mix-blend-overlay bg-cover bg-center"
          ></div>

          <div class="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div class="flex justify-between items-start mb-6">
                <div class="p-2 bg-teal/20 rounded-sm">
                  <Target class="w-10 h-10 text-teal dark:text-teal-bright" />
                </div>
                <span
                  class="text-xs font-mono text-teal dark:text-teal-bright/50 border border-teal/30 dark:border-teal-bright/30 px-2 py-1"
                  >PRIORITY</span
                >
              </div>
              <h3
                class="text-2xl font-bold text-ocean-dark dark:text-parchment font-mono mb-4"
              >
                CTF Challenges
              </h3>
              <p
                class="text-sm text-ocean/70 dark:text-parchment/70 leading-relaxed mb-6"
              >
                Engage in high-level exploitation. The core of NorthSec. Pwn,
                Reverse Engineering, Web Exploitation, and Cryptography
                challenges designed to break the unprepared.
              </p>
            </div>
            <div class="space-y-2">
              <div
                class="w-full h-1 bg-white/20 dark:bg-ocean-dark overflow-hidden"
              >
                <div
                  class="h-full bg-teal dark:bg-gold w-[70%] animate-pulse"
                ></div>
              </div>
              <div
                class="flex justify-between text-[10px] font-mono text-teal dark:text-gold"
              >
                <span>DIFFICULTY: EXTREME</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Workshops (Standard) -->
        <div
          class="relative group bg-white/50 dark:bg-ocean/40 border border-ocean/10 dark:border-gold/10 p-6 hover:border-teal/50 dark:hover:border-gold/50 transition-colors backdrop-blur-sm"
        >
          <!-- HUD Corners -->
          <div
            class="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div
            class="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-ocean/20 dark:border-gold/20 group-hover:border-teal dark:group-hover:border-gold"
          ></div>
          <div class="flex justify-between items-start mb-4">
            <Cpu class="w-8 h-8 text-teal dark:text-parchment" />
            <span
              class="text-[10px] font-mono text-ocean/60 dark:text-teal-bright"
              >03</span
            >
          </div>
          <h3
            class="text-xl font-bold text-ocean-dark dark:text-parchment font-mono mb-2"
          >
            Workshops
          </h3>
          <p
            class="text-sm text-ocean/60 dark:text-parchment/60 leading-relaxed"
          >
            Hands-on training from industry leaders. Gain deep insights into the
            latest zero-day vulnerabilities.
          </p>
        </div>

        <!-- 4. Community (Wide Banner) -->
        <div
          class="relative group md:col-span-2 bg-gradient-to-r from-ocean/5 to-ocean/10 dark:from-ocean dark:to-ocean/50 border-t border-b border-ocean/10 dark:border-gold/10 p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-gold/5 transition-colors"
        >
          <div class="flex items-center gap-4">
            <div class="p-2 bg-gold/10 rounded-full">
              <Users class="w-5 h-5 text-teal dark:text-gold" />
            </div>
            <div>
              <h3
                class="font-bold text-ocean-dark dark:text-parchment font-mono text-sm"
              >
                ELITE COMMUNITY ACCESS
              </h3>
              <p
                class="text-[10px] text-teal dark:text-teal-bright uppercase tracking-widest"
              >
                Join 2000+ members on Discord
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Zap class="w-4 h-4 text-gold" />
            <span class="text-xs font-mono text-gold">NETWORKING_ONLINE</span>
            <ArrowRight
              class="w-4 h-4 text-ocean dark:text-parchment group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
