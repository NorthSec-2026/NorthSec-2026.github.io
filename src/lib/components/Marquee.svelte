<script lang="ts">
  interface MarqueeItem {
    name: string;
    logo?: string;
  }

  let {
    text,
    items,
    direction = "left",
    speed = 25,
  }: {
    text?: string;
    items?: (string | MarqueeItem)[];
    direction?: "left" | "right";
    speed?: number;
  } = $props();
</script>

{#snippet textContent()}
  <div class="flex shrink-0 gap-12 md:gap-16 py-6 items-center px-4">
    {#each Array(8) as _, i}
      <span
        class="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase text-ocean-dark dark:text-gold"
      >
        {text}
      </span>
      <span class="text-teal dark:text-teal-bright text-xl font-mono">///</span>
    {/each}
  </div>
{/snippet}

{#snippet itemsContent()}
  <div class="flex shrink-0 gap-12 md:gap-16 py-6 items-center px-4">
    {#each items ?? [] as item, i}
      {@const name = typeof item === "string" ? item : item.name}
      {@const logo = typeof item === "string" ? undefined : item.logo}
      <div
        class="group flex items-center gap-3 cursor-pointer transition-opacity duration-300"
      >
        {#if logo}
          <div class="relative h-6 md:h-8 w-auto min-w-[24px]">
            <!-- Light Mode Logo: Grayscale -> Color on hover -->
            <img
              src={logo}
              alt={name}
              class="h-full w-auto object-contain dark:hidden filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
            <!-- Dark Mode Logo: White -> Color on hover -->
            <img
              src={logo}
              alt={name}
              class="h-full w-auto object-contain hidden dark:block filter brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        {/if}
        <span
          class={`text-lg md:text-xl font-bold font-sans tracking-wide uppercase text-ocean/60 dark:text-parchment/60 group-hover:text-ocean dark:group-hover:text-parchment transition-colors ${logo ? "hidden lg:block" : ""}`}
        >
          {name}
        </span>
      </div>
      <!-- Separator -->
      <div
        class="w-1.5 h-1.5 bg-teal dark:bg-gold rounded-full opacity-50"
      ></div>
    {/each}
  </div>
{/snippet}

<div
  class="relative flex overflow-hidden w-full border-y border-ocean/10 dark:border-gold/10 bg-parchment-paper dark:bg-ocean-dark backdrop-blur-sm select-none z-20 transition-colors duration-300"
>
  <div
    class="animate-marquee flex whitespace-nowrap items-center"
    style="animation-duration: {speed}s; animation-direction: {direction ===
    'right'
      ? 'reverse'
      : 'normal'}"
  >
    {#if text}
      {@render textContent()}
      {@render textContent()}
      {@render textContent()}
      {@render textContent()}
    {:else if items}
      {@render itemsContent()}
      {@render itemsContent()}
      {@render itemsContent()}
      {@render itemsContent()}
    {/if}
  </div>
</div>
