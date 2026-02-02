<script lang="ts">
  import { Compass, Hexagon, Binary } from "lucide-svelte";

  const layers = [
    {
      title: "Heritage",
      icon: Hexagon,
      desc: "Zellige patterns & Geometry.",
      image:
        "https://images.unsplash.com/photo-1547190027-9156686aa2f0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Exploration",
      icon: Compass,
      desc: "Maps & Navigation.",
      image:
        "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cyber",
      icon: Binary,
      desc: "Terminal & Glitch.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
  ];
</script>

<div
  class="grid grid-cols-1 md:grid-cols-3 w-full border-t border-ocean/10 dark:border-gold/10"
>
  {#each layers as layer}
    <div
      class="group relative h-64 md:h-80 border-b md:border-b-0 border-r border-ocean/10 dark:border-gold/10 overflow-hidden bg-white dark:bg-ocean-dark hover:bg-gold/5 transition-colors duration-300"
    >
      <div class="absolute inset-0">
        <img
          src={layer.image}
          alt={layer.title}
          class="w-full h-full object-cover opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-parchment-paper via-transparent to-transparent dark:from-ocean-dark dark:via-ocean-dark/50 dark:to-transparent"
        ></div>
      </div>

      <div class="absolute inset-0 p-8 flex flex-col justify-end">
        <div class="flex items-center justify-between mb-2">
          <h3
            class="text-2xl font-mono font-bold text-ocean-dark dark:text-parchment uppercase tracking-wider"
          >
            {layer.title}
          </h3>
          <div
            class="text-teal dark:text-gold opacity-50 group-hover:opacity-100 group-hover:animate-pulse"
          >
            <layer.icon class="w-5 h-5" />
          </div>
        </div>
        <p
          class="text-teal dark:text-teal-bright text-xs font-mono uppercase tracking-widest"
        >
          {layer.desc}
        </p>

        <!-- Hover Effect Line -->
        <div
          class="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 bg-teal dark:bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
        ></div>
      </div>
    </div>
  {/each}
</div>
