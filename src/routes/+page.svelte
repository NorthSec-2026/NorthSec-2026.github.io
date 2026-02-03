<script lang="ts">
  import Marquee from "$lib/components/Marquee.svelte";
  import HeroSection from "$lib/sections/HeroSection.svelte";
  import MissionSection from "$lib/sections/MissionSection.svelte";
  import GameplaySection from "$lib/sections/GameplaySection.svelte";
  import IntelSection from "$lib/sections/IntelSection.svelte";
  import LoreSection from "$lib/sections/LoreSection.svelte";
  import OrganizersSection from "$lib/sections/OrganizersSection.svelte";
  import Footer from "$lib/sections/Footer.svelte";

  // Partners Data with Logos
  const partners = [
    { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud" },
    { name: "CrowdStrike", logo: "https://cdn.simpleicons.org/crowdstrike" },
    { name: "Splunk", logo: "https://cdn.simpleicons.org/splunk" },
    { name: "HackTheBox", logo: "https://cdn.simpleicons.org/hackthebox" },
    { name: "Wiz", logo: "https://cdn.simpleicons.org/wiz" },
    { name: "SentinelOne", logo: "https://cdn.simpleicons.org/sentinelone" },
    { name: "Tenable", logo: "https://cdn.simpleicons.org/tenable" },
    "OffSec",
    "DarkTrace",
  ];
</script>

<!-- HERO SECTION -->
<HeroSection />

<!-- PARTNERS MARQUEE -->
<div
  class="w-full border-y border-ocean/10 dark:border-gold/10 bg-parchment-paper dark:bg-ocean-dark"
>
  <Marquee items={partners} direction="left" speed={40} />
</div>
<Marquee
  text="JOIN THE QUEST /// RECOVER THE DATA /// PROTECT THE NORTH"
  speed={25}
/>

<!-- MISSION BRIEFING SECTION -->
<MissionSection />

<!-- GAMEPLAY SECTION -->
<GameplaySection />

<!-- INTEL SECTION -->
<IntelSection />

<!-- LORE SECTION -->
<LoreSection />

<!-- ORGANIZERS SECTION -->
<OrganizersSection />

<!-- FOOTER -->
<Footer />
