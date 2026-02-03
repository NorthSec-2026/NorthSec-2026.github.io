<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children } = $props();

  // Theme State
  let isDark = $state(true);

  // Effect to apply dark mode class to html element
  $effect(() => {
    if (typeof document !== "undefined") {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });

  function toggleTheme() {
    isDark = !isDark;
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>NorthSec 2026 | Andalusian Cipher</title>
</svelte:head>

<div
  class="min-h-screen bg-parchment-paper dark:bg-ocean-dark font-sans text-ocean-dark dark:text-parchment selection:bg-gold/30 selection:text-gold bg-grid-slate overflow-x-hidden transition-colors duration-300"
>
  <!-- SVG Definitions for Masks -->
  <svg class="absolute w-0 h-0">
    <defs>
      <clipPath id="tech-card-mask" clipPathUnits="objectBoundingBox">
        <path d="M0,0 L0.75,0 L0.80,0.12 L1,0.12 L1,0.85 L0.75,1 L0,1 Z" />
      </clipPath>
      <clipPath id="button-mask" clipPathUnits="objectBoundingBox">
        <path d="M0.05,0 L1,0 L1,0.8 L0.95,1 L0,1 L0,0.2 Z" />
      </clipPath>
    </defs>
  </svg>

  <Navbar {isDark} {toggleTheme} />

  <main
    class="pt-20 flex flex-col items-center w-full transition-colors duration-300"
  >
    {@render children()}
  </main>
</div>
