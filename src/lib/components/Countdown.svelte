<script lang="ts">
  import { onMount } from "svelte";

  let timeLeft = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  onMount(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42);

    const updateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  });
</script>

{#snippet TimeUnit(value: number, label: string)}
  <div class="relative group">
    <div
      class="absolute -inset-1 bg-gradient-to-r from-teal to-ocean dark:from-gold dark:to-teal opacity-20 group-hover:opacity-40 blur transition duration-200"
    ></div>
    <div
      class="relative flex flex-col items-center bg-parchment dark:bg-ocean-dark border border-ocean/20 dark:border-gold/30 p-4 min-w-[100px] transition-colors duration-300"
      style="clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
    >
      <span
        class="text-4xl md:text-6xl font-mono font-bold text-ocean-dark dark:text-gold tabular-nums tracking-tighter"
      >
        {value.toString().padStart(2, "0")}
      </span>
      <span
        class="text-[10px] text-teal dark:text-teal-bright/70 uppercase tracking-[0.2em] mt-2 border-t border-ocean/20 dark:border-gold/30 w-full text-center pt-2"
      >
        {label}
      </span>
    </div>
    <!-- Decorative corner accents -->
    <div
      class="absolute top-0 left-0 w-2 h-2 border-l border-t border-ocean dark:border-gold"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-ocean dark:border-gold"
    ></div>
  </div>
{/snippet}

<div
  class="flex flex-wrap gap-4 md:gap-8 justify-center items-center py-10 w-full"
>
  {@render TimeUnit(timeLeft.days, "DAYS")}
  <div
    class="text-2xl text-ocean/30 dark:text-gold/30 font-mono hidden md:block"
  >
    :
  </div>
  {@render TimeUnit(timeLeft.hours, "HRS")}
  <div
    class="text-2xl text-ocean/30 dark:text-gold/30 font-mono hidden md:block"
  >
    :
  </div>
  {@render TimeUnit(timeLeft.minutes, "MIN")}
  <div
    class="text-2xl text-ocean/30 dark:text-gold/30 font-mono hidden md:block"
  >
    :
  </div>
  {@render TimeUnit(timeLeft.seconds, "SEC")}
</div>
