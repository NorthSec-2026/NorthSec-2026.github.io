<script lang="ts">
  import StoryTimeline from "$lib/components/StoryTimeline.svelte";
</script>

<!-- LORE SECTION -->
<div
  id="lore"
  class="w-full max-w-[1400px] border-x border-b border-ocean/10 dark:border-gold/10 p-8 md:p-16 bg-parchment-paper dark:bg-ocean-dark relative transition-colors duration-300"
>
  <div
    class="absolute inset-0 bg-grid-slate opacity-50 pointer-events-none"
  ></div>
  <div class="relative pt-20 z-10 flex flex-col items-center text-center">
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
