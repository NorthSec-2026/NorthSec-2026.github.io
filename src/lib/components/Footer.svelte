<script lang="ts">
  import {
    Twitter,
    Github,
    Mail,
    MessageSquare,
    ArrowRight,
  } from "lucide-svelte";
</script>

<footer
  class="w-full max-w-[1400px] border-x border-b border-ocean/10 dark:border-gold/10 bg-parchment dark:bg-ocean-dark transition-colors duration-300 relative overflow-hidden"
>
  <!-- Decorative Top Gradient Line -->
  <div
    class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 dark:via-gold/30 to-transparent"
  ></div>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-12 p-12 md:p-16">
    <!-- Brand Column -->
    <div class="md:col-span-4 flex flex-col gap-6">
      <div>
        <h3
          class="text-2xl font-bold font-serif text-ocean-dark dark:text-gold tracking-widest"
        >
          NORTHSEC
        </h3>
        <p
          class="text-[10px] text-teal dark:text-teal-bright uppercase tracking-[0.2em] font-mono mt-1"
        >
          The Andalusian Cipher
        </p>
      </div>
      <p
        class="text-ocean/70 dark:text-parchment/70 text-sm leading-relaxed max-w-sm font-sans"
      >
        North Africa's premier applied security event. Recovering lost
        knowledge, defending the future.
      </p>
      <div class="flex gap-4">
        <a
          href="#"
          aria-label="Twitter"
          class="w-8 h-8 flex items-center justify-center border border-ocean/20 dark:border-gold/20 text-ocean/60 dark:text-parchment/60 hover:border-teal dark:hover:border-gold hover:text-teal dark:hover:text-gold hover:bg-ocean/5 dark:hover:bg-gold/5 transition-all duration-300"
        >
          <Twitter size={16} />
        </a>
        <a
          href="#"
          aria-label="GitHub"
          class="w-8 h-8 flex items-center justify-center border border-ocean/20 dark:border-gold/20 text-ocean/60 dark:text-parchment/60 hover:border-teal dark:hover:border-gold hover:text-teal dark:hover:text-gold hover:bg-ocean/5 dark:hover:bg-gold/5 transition-all duration-300"
        >
          <Github size={16} />
        </a>
        <a
          href="#"
          aria-label="Discord"
          class="w-8 h-8 flex items-center justify-center border border-ocean/20 dark:border-gold/20 text-ocean/60 dark:text-parchment/60 hover:border-teal dark:hover:border-gold hover:text-teal dark:hover:text-gold hover:bg-ocean/5 dark:hover:bg-gold/5 transition-all duration-300"
        >
          <MessageSquare size={16} />
        </a>
        <a
          href="#"
          aria-label="Email"
          class="w-8 h-8 flex items-center justify-center border border-ocean/20 dark:border-gold/20 text-ocean/60 dark:text-parchment/60 hover:border-teal dark:hover:border-gold hover:text-teal dark:hover:text-gold hover:bg-ocean/5 dark:hover:bg-gold/5 transition-all duration-300"
        >
          <Mail size={16} />
        </a>
      </div>
    </div>

    <!-- Links Column 1 -->
    <div class="md:col-span-2 md:col-start-6">
      <h4
        class="font-mono text-xs font-bold text-ocean-dark dark:text-parchment uppercase tracking-widest mb-6 flex items-center gap-2"
      >
        <span class="w-1 h-1 bg-teal dark:bg-gold rounded-full"></span> Navigation
      </h4>
      <ul
        class="space-y-3 text-sm font-mono text-ocean/60 dark:text-parchment/60"
      >
        <li>
          <a
            href="#mission"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">Mission Brief</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#intel"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">Intel / Stats</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#lore"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">The Archives</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">Sponsors</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Links Column 2 -->
    <div class="md:col-span-2">
      <h4
        class="font-mono text-xs font-bold text-ocean-dark dark:text-parchment uppercase tracking-widest mb-6 flex items-center gap-2"
      >
        <span class="w-1 h-1 bg-teal dark:bg-gold rounded-full"></span> Resources
      </h4>
      <ul
        class="space-y-3 text-sm font-mono text-ocean/60 dark:text-parchment/60"
      >
        <li>
          <a
            href="#"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">Code of Conduct</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">Press Kit</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">Privacy Policy</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="relative group hover:text-teal dark:hover:text-gold transition-colors inline-block"
          >
            <span class="relative z-10">Contact Ops</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-px bg-teal dark:bg-gold group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Newsletter Column -->
    <div class="md:col-span-4">
      <h4
        class="font-mono text-xs font-bold text-ocean-dark dark:text-parchment uppercase tracking-widest mb-6 flex items-center gap-2"
      >
        <span class="w-1 h-1 bg-teal dark:bg-gold rounded-full"></span> Stay Encrypted
      </h4>
      <p class="text-xs text-ocean/60 dark:text-parchment/60 mb-4 font-sans">
        Receive mission updates, challenge hints, and secure transmissions.
      </p>
      <div class="flex gap-2">
        <input
          type="email"
          placeholder="EMAIL_ADDRESS"
          class="bg-white/50 dark:bg-black/20 border border-ocean/20 dark:border-gold/20 px-4 py-3 text-xs font-mono w-full focus:outline-none focus:border-teal dark:focus:border-gold text-ocean-dark dark:text-parchment placeholder-ocean/30 dark:placeholder-parchment/30 transition-colors"
        />
        <button
          class="bg-teal dark:bg-gold hover:bg-teal-bright dark:hover:bg-white text-white dark:text-ocean-dark px-4 py-3 transition-colors border border-transparent"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div
    class="border-t border-ocean/5 dark:border-gold/5 p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-ocean/40 dark:text-parchment/40 uppercase tracking-widest"
  >
    <div>© 2026 NorthSec Association. All rights reserved.</div>
    <div class="flex gap-8">
      <span>EST. 2024</span>
      <span>TANGIER, MA</span>
      <span class="flex items-center gap-1"
        ><span class="w-1.5 h-1.5 rounded-full bg-green-500/50"></span> SYSTEM_ONLINE</span
      >
    </div>
  </div>
</footer>
