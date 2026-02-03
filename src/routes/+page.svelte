<script lang="ts">
  import {
    Terminal,
    ArrowRight,
    Shield,
    Globe,
    Activity,
    Code,
    Database,
    Flag,
    Lock,
    Target,
    Cpu,
    Zap,
    Users,
  } from "lucide-svelte";
  import Countdown from "$lib/components/Countdown.svelte";
  import Marquee from "$lib/components/Marquee.svelte";
  import VisualExplorer from "$lib/components/VisualExplorer.svelte";
  import StoryTimeline from "$lib/components/StoryTimeline.svelte";
  import GameplaySection from "$lib/components/GameplaySection.svelte";
  import OrganizersSection from "$lib/components/OrganizersSection.svelte";
  import Footer from "$lib/components/Footer.svelte";

  // Partners Data with Logos
  const partners = [
    { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud" },
    { name: "CrowdStrike", logo: "https://cdn.simpleicons.org/crowdstrike" },
    { name: "Splunk", logo: "https://cdn.simpleicons.org/splunk" },
    { name: "HackTheBox", logo: "https://cdn.simpleicons.org/hackthebox" },
    { name: "Wiz", logo: "https://cdn.simpleicons.org/wiz" },
    { name: "SentinelOne", logo: "https://cdn.simpleicons.org/sentinelone" },
    { name: "Tenable", logo: "https://cdn.simpleicons.org/tenable" },
    "OffSec",
    "DarkTrace",
  ];

  const challenges = [
    { title: "L'ILE DES CRYPTES", icon: Database, desc: "Cryptography" },
    { title: "LES SIRENES DU CODE", icon: Code, desc: "Reverse Engineering" },
    { title: "LE PORT DES MACHINES", icon: Lock, desc: "Pwn/Exploitation" },
    { title: "LE LABYRINTHE", icon: Flag, desc: "Forensics" },
  ];
</script>

<!-- ADVANCED HERO SECTION -->
<div
  class="w-full max-w-[1400px] border-x border-ocean/10 dark:border-gold/10 min-h-[90vh] flex flex-col relative bg-parchment-paper dark:bg-ocean-dark transition-colors duration-300"
>
  <!-- Background Decorations -->
  <div
    class="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none"
  ></div>
  <div
    class="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 dark:bg-teal/10 rounded-full blur-[120px] pointer-events-none"
  ></div>

  <div class="flex-1 grid grid-cols-1 lg:grid-cols-12 relative z-10">
    <!-- Left Content (Text) -->
    <div
      class="lg:col-span-7 flex flex-col justify-center px-8 md:px-16 py-12 relative border-b lg:border-b-0 lg:border-r border-ocean/10 dark:border-gold/10"
    >
      <div class="inline-flex items-center gap-3 mb-8">
        <span
          class="px-2 py-1 border border-ocean/20 dark:border-gold/30 text-[10px] font-mono text-ocean dark:text-gold uppercase tracking-widest bg-ocean/5 dark:bg-gold/5"
        >
          Protocol v3.0 Initiated
        </span>
        <div class="h-px w-12 bg-ocean/20 dark:bg-gold/30"></div>
      </div>

      <h1
        class="text-6xl md:text-8xl xl:text-9xl font-bold font-serif text-ocean-dark dark:text-parchment tracking-tighter mb-4 leading-[0.85] z-10"
      >
        ANDALUSIAN
      </h1>
      <div class="relative">
        <h1
          class="text-6xl md:text-8xl xl:text-9xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal to-ocean dark:from-gold dark:to-teal tracking-tighter mb-10 leading-[0.85] animate-glitch"
        >
          CIPHER
        </h1>
        <!-- Decorative Glitch lines -->
        <div
          class="absolute top-1/2 left-0 w-full h-1 bg-gold/20 transform -translate-y-1/2"
        ></div>
      </div>

      <p
        class="max-w-xl text-ocean/70 dark:text-parchment/60 text-lg leading-relaxed font-light mb-12 border-l-2 border-teal/50 dark:border-gold/50 pl-6"
      >
        Recover the fragmented wisdom of the Golden Age. A CTF narrative woven
        into the history of the North.
      </p>

      <div class="flex flex-wrap gap-6 items-center">
        <button
          class="px-8 py-4 bg-ocean-dark dark:bg-gold text-parchment dark:text-ocean-dark text-sm font-mono font-bold uppercase tracking-widest hover:bg-ocean dark:hover:bg-white transition-colors flex items-center gap-2"
          style="clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)"
        >
          <Terminal class="w-4 h-4" /> Start Operation
        </button>
        <button
          class="px-8 py-4 border border-ocean/20 dark:border-gold/30 text-ocean-dark dark:text-gold text-sm font-mono font-bold uppercase tracking-widest hover:bg-ocean/5 dark:hover:bg-gold/10 transition-colors flex items-center gap-2"
        >
          View Intel <ArrowRight class="w-4 h-4" />
        </button>
      </div>

      <!-- Countdown Integrated in Hero -->
      <div class="mt-16 w-full">
        <div
          class="text-[10px] font-mono text-teal dark:text-teal-bright uppercase tracking-widest mb-2"
        >
          Time until breach
        </div>
        <Countdown />
      </div>
    </div>

    <!-- Right Visual (Advanced Masked Image) -->
    <div
      class="lg:col-span-5 relative min-h-[600px] lg:min-h-auto flex items-center justify-center p-8 lg:p-12 transition-colors duration-300"
    >
      <div class="relative w-full max-w-md aspect-[3/4] group">
        <!-- Animated Glow Behind -->
        <div
          class="absolute -inset-4 bg-gradient-to-b from-teal/20 to-gold/20 dark:from-teal/10 dark:to-gold/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"
        ></div>

        <!-- Main Image Container with Mask -->
        <div
          class="relative w-full h-full"
          style="clip-path: url(#tech-card-mask)"
        >
          <!-- Base Image -->
          <div
            class="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style="background-image: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80')"
          >
            <div
              class="absolute inset-0 bg-ocean-dark/40 mix-blend-multiply"
            ></div>
          </div>

          <!-- Glitch Layer (Cyan Shift) - Visible on Hover -->
          <div
            class="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-200 mix-blend-screen"
            style="background-image: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80'); transform: translateX(-5px)"
          ></div>

          <!-- Glitch Layer (Red Shift) - Visible on Hover -->
          <div
            class="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-200 mix-blend-screen"
            style="background-image: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80'); transform: translateX(5px)"
          ></div>

          <!-- Scanning Line Animation -->
          <div
            class="absolute inset-0 w-full h-[15%] bg-gradient-to-b from-transparent via-teal/50 dark:via-gold/50 to-transparent -translate-y-full animate-scan z-10 pointer-events-none"
          ></div>

          <!-- Tech Grid Overlay -->
          <div
            class="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] z-10 pointer-events-none"
          ></div>
        </div>

        <!-- SVG Border Overlay (Matches Mask) -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L75,0 L80,12 L100,12 L100,85 L75,100 L0,100 Z"
            vector-effect="non-scaling-stroke"
            class="fill-none stroke-ocean/20 dark:stroke-gold/30 stroke-[2px]"
          />
          <!-- Animated Stroke Segments -->
          <path
            d="M0,0 L75,0 L80,12 L100,12 L100,85 L75,100 L0,100 Z"
            vector-effect="non-scaling-stroke"
            class="fill-none stroke-teal dark:stroke-gold stroke-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            stroke-dasharray="10, 200"
            stroke-dashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-210"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <!-- Floating HUD Elements -->
        <div
          class="absolute top-[15%] -right-8 lg:-right-12 z-30 transition-transform duration-500 group-hover:translate-x-2"
        >
          <div
            class="bg-parchment-paper/90 dark:bg-ocean-dark/90 border border-ocean/20 dark:border-gold/30 p-4 shadow-xl backdrop-blur-md relative"
          >
            <!-- HUD Corners -->
            <div
              class="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-gold/30"
            ></div>
            <div
              class="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-gold/30"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-gold/30"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-gold/30"
            ></div>
            <div class="flex items-center gap-3 mb-2">
              <Globe
                class="w-4 h-4 text-teal dark:text-gold animate-spin-slow"
              />
              <span
                class="text-[10px] font-mono font-bold text-ocean-dark dark:text-parchment tracking-widest"
                >GEOLOCATION</span
              >
            </div>
            <div
              class="font-mono text-xl font-bold text-ocean-dark dark:text-gold"
            >
              35.719° N
            </div>
            <div
              class="text-[10px] text-teal dark:text-teal-bright mt-1 font-mono"
            >
              TARGET LOCKED
            </div>
          </div>
        </div>

        <div
          class="absolute bottom-[20%] -left-6 lg:-left-10 z-30 transition-transform duration-500 group-hover:-translate-x-2"
        >
          <div class="flex items-center gap-0 shadow-xl">
            <div
              class="w-14 h-14 bg-teal dark:bg-gold flex items-center justify-center text-parchment dark:text-ocean-dark font-bold border border-ocean/20"
            >
              <Shield class="w-7 h-7" />
            </div>
            <div
              class="bg-parchment-paper/90 dark:bg-ocean-dark/90 p-3 border-y border-r border-ocean/20 dark:border-gold/20 h-14 flex flex-col justify-center backdrop-blur-md min-w-[140px]"
            >
              <div
                class="flex justify-between items-center text-[10px] font-mono text-ocean/50 dark:text-parchment/50 mb-1"
              >
                <span>DEFENSE</span>
                <Activity class="w-3 h-3 text-green-500" />
              </div>
              <div
                class="text-xs font-mono font-bold text-teal dark:text-gold tracking-widest"
              >
                ACTIVE // 98%
              </div>
              <!-- Mini Progress Bar -->
              <div class="w-full h-1 bg-ocean/10 dark:bg-white/10 mt-1">
                <div class="h-full w-[98%] bg-teal dark:bg-gold"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative Corner Numbers -->
        <div
          class="absolute top-2 left-4 font-mono text-[9px] text-teal/50 dark:text-gold/50 z-30"
        >
          ID: 8492-AX
        </div>
        <div
          class="absolute bottom-2 right-4 font-mono text-[9px] text-teal/50 dark:text-gold/50 z-30 group-hover:text-teal dark:group-hover:text-gold transition-colors"
        >
          SYS.READY
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PARTNERS MARQUEE -->
<div
  class="w-full border-y border-ocean/10 dark:border-gold/10 bg-parchment-paper dark:bg-ocean-dark"
>
  <Marquee items={partners} direction="left" speed={40} />
</div>
<Marquee
  text="JOIN THE QUEST /// RECOVER THE DATA /// PROTECT THE NORTH"
  speed={25}
/>

<!-- MISSION BRIEFING SECTION -->
<div
  id="mission"
  class="w-full max-w-[1400px] border-x border-b border-ocean/10 dark:border-gold/10 bg-parchment-paper dark:bg-ocean-dark p-8 md:p-16 relative overflow-hidden transition-colors duration-300"
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

<!-- NEW GAMEPLAY SECTION -->
<GameplaySection />

<!-- GRID CONTENT LAYOUT -->
<div
  id="intel"
  class="w-full max-w-[1400px] p-6 border-x border-ocean/10 dark:border-gold/10 grid grid-cols-1 lg:grid-cols-3"
>
  <!-- Cell 1: Intro Text -->
  <div
    class="lg:col-span-2 p-8 md:p-16 border-b border-ocean/10 dark:border-gold/10 lg:border-r"
  >
    <h2
      class="text-4xl font-serif font-bold text-ocean-dark dark:text-parchment mb-6"
    >
      The Origin Sequence
    </h2>
    <p
      class="text-ocean/70 dark:text-parchment/70 text-lg leading-relaxed font-light mb-8"
    >
      We didn't just build a CTF. We excavated a legend. From the depths of
      Poseidon's mythology to the tension of a digital heist, discover how we
      forged a new identity for the region's premier cybersecurity event.
    </p>
    <div class="flex gap-6">
      <div
        class="flex items-center gap-2 text-xs font-mono text-teal dark:text-teal-bright uppercase tracking-widest"
      >
        <Shield class="w-4 h-4 text-teal dark:text-gold" /> Secure Environment
      </div>
      <div
        class="flex items-center gap-2 text-xs font-mono text-teal dark:text-teal-bright uppercase tracking-widest"
      >
        <Flag class="w-4 h-4 text-teal dark:text-gold" /> 50+ Challenges
      </div>
    </div>
  </div>

  <!-- Cell 2: Stats / Date -->
  <div
    class="p-8 md:p-16 border-b border-ocean/10 dark:border-gold/10 bg-gold/[0.05] dark:bg-gold/[0.02]"
  >
    <div class="flex flex-col h-full justify-between">
      <div>
        <div
          class="text-xs font-mono text-teal dark:text-teal-bright uppercase mb-2 tracking-widest"
        >
          Location
        </div>
        <div
          class="text-3xl font-bold text-ocean-dark dark:text-parchment mb-8"
        >
          Tangier, Morocco
        </div>

        <div
          class="text-xs font-mono text-teal dark:text-teal-bright uppercase mb-2 tracking-widest"
        >
          Prize Pool
        </div>
        <div class="text-5xl font-mono font-bold text-teal dark:text-gold mb-8">
          $25,000
        </div>
      </div>
      <button
        class="w-full py-4 border border-ocean/20 dark:border-gold/20 text-xs font-mono uppercase tracking-widest hover:bg-ocean/5 dark:hover:bg-gold/10 transition-colors text-ocean/60 dark:text-parchment/60 hover:text-ocean dark:hover:text-parchment"
      >
        Download Sponsor Deck
      </button>
    </div>
  </div>

  <!-- Cell 3: Full Width Visuals -->
  <div class="lg:col-span-3 border-b border-ocean/10 dark:border-gold/10">
    <VisualExplorer />
  </div>

  <!-- Cell 4: Challenges -->
  <div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {#each challenges as item, i}
      <div
        class="p-10 border-b lg:border-b-0 border-r border-ocean/10 dark:border-gold/10 hover:bg-gold/5 transition-colors group relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowRight class="w-4 h-4 text-teal dark:text-gold -rotate-45" />
        </div>
        <div
          class="mb-6 text-teal dark:text-gold opacity-60 group-hover:opacity-100 transition-opacity scale-100 group-hover:scale-110 duration-300 origin-left"
        >
          <item.icon class="w-6 h-6" />
        </div>
        <h3
          class="font-bold font-serif text-xl text-ocean-dark dark:text-parchment mb-2"
        >
          {item.title}
        </h3>
        <p class="text-sm text-teal dark:text-teal-bright font-mono">
          {item.desc}
        </p>
      </div>
    {/each}
  </div>
</div>

<!-- LORE SECTION -->
<div
  id="lore"
  class="w-full max-w-[1400px] p-20 border-x border-b border-ocean/10 dark:border-gold/10 p-8 md:p-16 bg-parchment-paper dark:bg-ocean-dark relative transition-colors duration-300"
>
  <div
    class="absolute inset-0 bg-grid-slate opacity-50 pointer-events-none"
  ></div>
  <div class="relative z-10 flex flex-col items-center text-center">
    <div
      class="inline-block px-3 py-1 mb-6 border border-ocean/20 dark:border-gold/30 bg-ocean/5 dark:bg-gold/5 text-ocean dark:text-gold text-[10px] font-mono uppercase tracking-widest"
    >
      Archive Access Granted
    </div>
    <h2
      class="text-5xl font-serif font-bold text-ocean-dark dark:text-parchment mb-6"
    >
      The Andalusian Archives
    </h2>
    <p
      class="text-ocean/70 dark:text-parchment/70 mb-12 max-w-2xl text-lg leading-relaxed"
    >
      The Cipher is not just a challenge; it is a story fragmented across time.
      Uncover the layers of history, technology, and mythology that define the
      NorthSec identity.
    </p>
    <div class="w-full max-w-4xl">
      <StoryTimeline />
    </div>
  </div>
</div>

<!-- NEW ORGANIZERS SECTION -->
<OrganizersSection />

<!-- FOOTER -->
<Footer />
