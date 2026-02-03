<script lang="ts">
  import {
    Shield,
    Flag,
    Code,
    Database,
    Lock,
    ArrowRight,
  } from "lucide-svelte";
  import VisualExplorer from "$lib/components/VisualExplorer.svelte";

  const challenges = [
    { title: "L'ILE DES CRYPTES", icon: Database, desc: "Cryptography" },
    { title: "LES SIRENES DU CODE", icon: Code, desc: "Reverse Engineering" },
    { title: "LE PORT DES MACHINES", icon: Lock, desc: "Pwn/Exploitation" },
    { title: "LE LABYRINTHE", icon: Flag, desc: "Forensics" },
  ];
</script>

<!-- GRID CONTENT LAYOUT -->
<div
  id="intel"
  class="w-full pt-24 max-w-[1400px] p-6 border-x border-ocean/10 dark:border-gold/10 grid grid-cols-1 lg:grid-cols-3"
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
