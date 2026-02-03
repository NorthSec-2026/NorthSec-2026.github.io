<script lang="ts">
  import { Award, Heart } from "lucide-svelte";
</script>

<section
  id="team"
  class="w-full max-w-[1400px] p-10 border-x border-b border-ocean/10 dark:border-gold/10 bg-parchment dark:bg-ocean-dark relative transition-colors duration-300"
>
  <div class="grid pt-20 grid-cols-1 md:grid-cols-2">
    <!-- Left: Organization Info -->
    <div
      class="p-12 md:p-20 border-b md:border-b-0 md:border-r border-ocean/10 dark:border-gold/10 flex flex-col justify-center"
    >
      <div
        class="inline-block px-3 py-1 mb-6 border border-ocean/20 dark:border-gold/30 rounded-full text-xs font-bold font-mono text-ocean dark:text-gold uppercase tracking-widest self-start"
      >
        The Architects
      </div>
      <h2
        class="text-4xl font-serif font-bold text-ocean-dark dark:text-parchment mb-6"
      >
        NorthSec Association
      </h2>
      <p
        class="text-ocean/70 dark:text-parchment/70 text-lg leading-relaxed mb-8"
      >
        We are a non-profit organization dedicated to raising the bar of applied
        security in North Africa. We believe in knowledge sharing, community
        building, and rigorous technical excellence.
      </p>
      <div class="flex gap-8">
        <div class="flex flex-col">
          <span class="text-3xl font-bold font-mono text-teal dark:text-gold"
            >10+</span
          >
          <span
            class="text-[10px] uppercase tracking-widest text-ocean/50 dark:text-parchment/50"
            >Years Experience</span
          >
        </div>
        <div class="flex flex-col">
          <span class="text-3xl font-bold font-mono text-teal dark:text-gold"
            >50+</span
          >
          <span
            class="text-[10px] uppercase tracking-widest text-ocean/50 dark:text-parchment/50"
            >Volunteers</span
          >
        </div>
      </div>
    </div>

    <!-- Right: Core Roles -->
    <div class="p-12 md:p-20 bg-ocean/5 dark:bg-white/5">
      <h3
        class="text-xl font-bold font-serif text-ocean-dark dark:text-parchment mb-8 tracking-wide"
      >
        Command Structure
      </h3>

      <div class="space-y-6">
        <!-- Role Card 1 -->
        <div class="flex gap-4 items-start">
          <div
            class="w-10 h-10 bg-ocean-dark dark:bg-gold flex items-center justify-center shrink-0"
          >
            <Award class="w-5 h-5 text-gold dark:text-ocean-dark" />
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h4 class="font-bold text-ocean-dark dark:text-parchment text-sm">
                Infrastructure Lead
              </h4>
              <span
                class="text-xs font-mono text-teal dark:text-teal-bright opacity-70"
                >@sysadmin_god</span
              >
            </div>
            <p
              class="text-xs text-ocean/60 dark:text-parchment/60 leading-relaxed"
            >
              Architect of the simulation network. Keeps the packets flowing.
            </p>
          </div>
        </div>

        <!-- Role Card 2 -->
        <div class="flex gap-4 items-start">
          <div
            class="w-10 h-10 bg-ocean-dark dark:bg-gold flex items-center justify-center shrink-0"
          >
            <Award class="w-5 h-5 text-gold dark:text-ocean-dark" />
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h4 class="font-bold text-ocean-dark dark:text-parchment text-sm">
                Head of Content
              </h4>
              <span
                class="text-xs font-mono text-teal dark:text-teal-bright opacity-70"
                >@crypto_witch</span
              >
            </div>
            <p
              class="text-xs text-ocean/60 dark:text-parchment/60 leading-relaxed"
            >
              Mastermind behind the narrative and challenge design.
            </p>
          </div>
        </div>

        <!-- Role Card 3 -->
        <div class="flex gap-4 items-start">
          <div
            class="w-10 h-10 bg-ocean-dark dark:bg-gold flex items-center justify-center shrink-0"
          >
            <Award class="w-5 h-5 text-gold dark:text-ocean-dark" />
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h4 class="font-bold text-ocean-dark dark:text-parchment text-sm">
                Logistics Director
              </h4>
              <span
                class="text-xs font-mono text-teal dark:text-teal-bright opacity-70"
                >@ops_commander</span
              >
            </div>
            <p
              class="text-xs text-ocean/60 dark:text-parchment/60 leading-relaxed"
            >
              Ensures venue security, hardware delivery, and human
              sustainability.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-10 border-t border-ocean/10 dark:border-gold/10">
        <p class="text-sm text-ocean/60 dark:text-parchment/60 mb-4">
          Want to contribute to the next edition?
        </p>
        <button
          class="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-teal dark:text-gold hover:underline"
        >
          <Heart class="w-4 h-4" /> Join the Volunteers
        </button>
      </div>
    </div>
  </div>
</section>
