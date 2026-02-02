<script lang="ts">
  import { ArrowRight, Anchor, Fingerprint } from "lucide-svelte";

  let activePhase = $state(2);

  const phases = [
    {
      id: 1,
      title: "Exploration",
      subtitle: "Divergent Concepts",
      icon: Anchor,
    },
    { id: 2, title: "Convergence", subtitle: "Synthesis", icon: ArrowRight },
    {
      id: 3,
      title: "Final Narrative",
      subtitle: "The Andalusian Cipher",
      icon: Fingerprint,
    },
  ];
</script>

<div class="w-full">
  <div class="flex flex-row justify-between items-center mb-8 relative px-4">
    <!-- Connector Line -->
    <div
      class="absolute top-6 left-10 right-10 h-0.5 bg-ocean/10 dark:bg-gold/20 -z-10"
    ></div>

    {#each phases as phase}
      <button
        onclick={() => (activePhase = phase.id)}
        class={`flex flex-col items-center group relative z-10 transition-all duration-300 ${activePhase === phase.id ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
      >
        <div
          class={`w-12 h-12 rounded-none transform rotate-45 flex items-center justify-center border transition-colors duration-300 bg-parchment dark:bg-ocean-dark ${
            activePhase === phase.id
              ? "border-teal dark:border-gold text-teal dark:text-gold shadow-[0_0_15px_rgba(0,91,91,0.3)] dark:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              : "border-ocean/30 dark:border-gold/30 text-ocean/50 dark:text-parchment/50"
          }`}
        >
          <div class="transform -rotate-45">
            <phase.icon class="w-5 h-5" />
          </div>
        </div>
        <div class="mt-6 text-center">
          <span
            class={`text-[10px] uppercase tracking-widest block mb-1 ${activePhase === phase.id ? "text-teal dark:text-gold" : "text-ocean/50 dark:text-parchment/50"}`}
            >{phase.title}</span
          >
        </div>
      </button>
    {/each}
  </div>

  <div class="mt-4 min-h-[150px]">
    {#if activePhase === 1}
      <div class="animate-[fadeIn_0.5s_ease-out] grid grid-cols-1 gap-4">
        <div
          class="bg-white dark:bg-ocean p-4 border-l-2 border-teal/30 dark:border-gold/30"
        >
          <h4 class="font-bold mb-1 text-ocean-dark dark:text-gold">
            Concept: Poseidon
          </h4>
          <p class="text-xs text-ocean/70 dark:text-parchment/70">
            Mythological, maritime power, recovering fragments of a god.
          </p>
        </div>
        <div
          class="bg-white dark:bg-ocean p-4 border-l-2 border-teal/30 dark:border-gold/30"
        >
          <h4 class="font-bold mb-1 text-ocean-dark dark:text-gold">
            Concept: Digital Heist
          </h4>
          <p class="text-xs text-ocean/70 dark:text-parchment/70">
            Elite crews, infiltration, high-pressure modern cinema.
          </p>
        </div>
      </div>
    {:else if activePhase === 2}
      <div
        class="animate-[fadeIn_0.5s_ease-out] text-center p-4 border border-ocean/10 dark:border-gold/10 bg-ocean/5 dark:bg-gold/5"
      >
        <p class="text-ocean-dark dark:text-parchment italic mb-4">
          "Merging the spirit of exploration with the tension of a heist."
        </p>
        <div
          class="flex justify-center items-center gap-2 text-xs font-mono text-teal dark:text-teal-bright/80 uppercase"
        >
          <span>Maritime</span>
          <span>+</span>
          <span>Strategy</span>
          <span>+</span>
          <span>History</span>
        </div>
      </div>
    {:else if activePhase === 3}
      <div
        class="animate-[fadeIn_0.5s_ease-out] bg-gradient-to-r from-ocean/10 to-transparent dark:from-ocean dark:to-transparent p-6 border-l-4 border-teal dark:border-gold"
      >
        <h3
          class="text-xl font-serif font-bold mb-2 text-ocean-dark dark:text-gold"
        >
          The Digital Argonauts
        </h3>
        <p class="text-ocean/70 dark:text-parchment/70 text-sm leading-relaxed">
          Participants are ethical hackers recovering lost scientific knowledge
          from the Golden Age, fragmented across the digital realm. Every CTF
          challenge is a piece of the Cipher.
        </p>
      </div>
    {/if}
  </div>
</div>
