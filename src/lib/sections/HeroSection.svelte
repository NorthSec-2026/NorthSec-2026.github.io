<script lang="ts">
  import { Terminal, ArrowRight, Shield, Globe, Activity } from "lucide-svelte";
  import Countdown from "$lib/components/Countdown.svelte";
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
