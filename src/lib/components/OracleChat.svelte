<script lang="ts">
  import type { ColorMode, ChatMessage } from "$lib/types";
  import { Send, Terminal, Sparkles } from "lucide-svelte";

  let { colorMode }: { colorMode: ColorMode } = $props();

  let input = $state("");
  let messages = $state<ChatMessage[]>([
    {
      id: "init",
      role: "model",
      text: "Greetings, Digital Argonaut. I am the Guardian of the Cipher. Query me regarding the Quest, the Lore, or the challenges that await.",
    },
  ]);
  let isLoading = $state(false);
  let scrollContainer: HTMLDivElement | null = $state(null);

  const themeColors = {
    blue: {
      border: "border-cyan-500",
      text: "text-cyan-400",
      bg: "bg-cyan-950/30",
      button: "bg-cyan-600 hover:bg-cyan-500",
      userBubble: "bg-cyan-900/50",
      modelBubble: "bg-slate-900/80",
    },
    gold: {
      border: "border-amber-500",
      text: "text-amber-400",
      bg: "bg-amber-950/30",
      button: "bg-amber-600 hover:bg-amber-500",
      userBubble: "bg-amber-900/50",
      modelBubble: "bg-stone-900/80",
    },
  };

  let currentTheme = $derived(themeColors[colorMode]);

  $effect(() => {
    messages;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input; // capture value
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: userText,
    };

    const botMsgId = (Date.now() + 1).toString();
    const botMsg: ChatMessage = {
      id: botMsgId,
      role: "model",
      text: "",
      isStreaming: true,
    };

    messages = [...messages, userMsg, botMsg];
    input = "";
    isLoading = true;

    try {
      const historyForApi = messages.filter((m) => m.id !== botMsgId);

      const response = await fetch("/api/oracle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: historyForApi }),
      });

      if (!response.body) throw new Error("No response body");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        messages = messages.map((m) =>
          m.id === botMsgId ? { ...m, text: m.text + chunk } : m,
        );
      }
    } catch (e) {
      console.error(e);
      messages = messages.map((m) =>
        m.id === botMsgId
          ? { ...m, text: "\n[CONNECTION INTERRUPTED] The Cipher is unstable." }
          : m,
      );
    }

    messages = messages.map((m) =>
      m.id === botMsgId ? { ...m, isStreaming: false } : m,
    );
    isLoading = false;
  };
</script>

<div
  class={`w-full max-w-2xl mx-auto border backdrop-blur-md rounded-lg overflow-hidden flex flex-col h-[600px] shadow-2xl ${currentTheme.border} ${currentTheme.bg}`}
>
  <!-- Header -->
  <div
    class={`p-4 border-b border-white/10 flex items-center gap-3 ${currentTheme.bg}`}
  >
    <div class={`p-2 rounded-full bg-black/40 border border-white/10`}>
      <Sparkles class={`w-5 h-5 ${currentTheme.text}`} />
    </div>
    <div>
      <h3 class={`font-mono font-bold text-lg text-white`}>Oracle Link</h3>
      <div class="flex items-center gap-2">
        <span class="relative flex h-2 w-2">
          <span
            class={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colorMode === "blue" ? "bg-cyan-400" : "bg-amber-400"}`}
          ></span>
          <span
            class={`relative inline-flex rounded-full h-2 w-2 ${colorMode === "blue" ? "bg-cyan-500" : "bg-amber-500"}`}
          ></span>
        </span>
        <span
          class={`text-[10px] uppercase tracking-widest ${currentTheme.text}`}
          >Online</span
        >
      </div>
    </div>
  </div>

  <!-- Messages -->
  <div
    bind:this={scrollContainer}
    class="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-hide"
  >
    {#each messages as msg (msg.id)}
      <div
        class={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
      >
        <div
          class={`max-w-[85%] p-4 rounded-lg border border-white/5 ${msg.role === "user" ? currentTheme.userBubble + " rounded-tr-none" : currentTheme.modelBubble + " rounded-tl-none"}`}
        >
          {#if msg.role === "model"}
            <div
              class="flex items-center gap-2 mb-1 opacity-50 text-xs uppercase tracking-widest"
            >
              <Terminal class="w-3 h-3" /> Guardian
            </div>
          {/if}
          <p class="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
          {#if msg.isStreaming}
            <span class="animate-pulse">_</span>
          {/if}
        </div>
      </div>
    {/each}
    {#if isLoading && !messages.some((m) => m.isStreaming && m.role === "model")}
      <!-- Loading state that doesn't track streaming yet? -->
    {/if}
  </div>

  <!-- Input -->
  <form
    onsubmit={handleSubmit}
    class="p-4 border-t border-white/10 bg-black/60"
  >
    <div class="relative flex gap-2">
      <div
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <Terminal class={`w-4 h-4 ${currentTheme.text} opacity-50`} />
      </div>
      <input
        type="text"
        bind:value={input}
        placeholder="Enter query..."
        class={`w-full bg-black/50 border border-white/20 rounded pl-10 pr-4 py-3 focus:outline-none focus:border-opacity-100 transition-colors ${currentTheme.text} ${currentTheme.border} placeholder-gray-600`}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        class={`px-4 rounded font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed ${currentTheme.button} text-white`}
      >
        <Send class="w-5 h-5" />
      </button>
    </div>
  </form>
</div>
