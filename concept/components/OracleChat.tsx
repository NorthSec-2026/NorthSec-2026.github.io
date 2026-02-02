import React, { useState, useEffect, useRef } from 'react';
import { Send, Terminal, Sparkles, AlertTriangle } from 'lucide-react';
import { streamOracleResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const OracleChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: 'Greetings, Digital Argonaut. I am the Guardian of the Cipher. Query me regarding the Quest, the Lore, or the challenges that await.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Locked Maritime Theme
  const theme = {
    border: 'border-cyan-500',
    text: 'text-cyan-400',
    bg: 'bg-cyan-950/20',
    button: 'bg-cyan-600 hover:bg-cyan-500',
    userBubble: 'bg-cyan-900/40',
    modelBubble: 'bg-slate-900/90',
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: modelMsgId, role: 'model', text: '', isStreaming: true },
    ]);

    let fullText = '';
    
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    history.push({ role: userMsg.role, text: userMsg.text });

    await streamOracleResponse(history, (chunk) => {
      fullText += chunk;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === modelMsgId ? { ...m, text: fullText } : m
        )
      );
    });

    setMessages((prev) =>
      prev.map((m) => (m.id === modelMsgId ? { ...m, isStreaming: false } : m))
    );
    setIsLoading(false);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto border ${theme.border} rounded-sm overflow-hidden backdrop-blur-md relative font-mono shadow-[0_0_30px_rgba(6,182,212,0.1)]`}>
        {/* Header */}
        <div className={`p-4 ${theme.bg} border-b ${theme.border} flex items-center justify-between`}>
            <div className="flex items-center gap-2">
                <Terminal className={`w-5 h-5 ${theme.text}`} />
                <h3 className={`text-lg font-bold ${theme.text} uppercase tracking-widest`}>
                    Oracle Uplink
                </h3>
            </div>
            <div className="flex items-center gap-2 text-xs opacity-70 font-mono">
                <span className="animate-pulse w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                SYSTEM ONLINE
            </div>
        </div>

        {/* Chat Area */}
        <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 space-y-6 bg-black/80 scrollbar-hide"
        >
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`max-w-[85%] p-4 border border-white/10 ${
                            msg.role === 'user' 
                                ? `${theme.userBubble} border-cyan-500/30 rounded-tl-lg rounded-tr-lg rounded-bl-lg` 
                                : `${theme.modelBubble} border-white/5 rounded-tr-lg rounded-br-lg rounded-bl-lg`
                        }`}
                    >
                        {msg.role === 'model' && (
                            <div className={`text-[10px] ${theme.text} mb-2 flex items-center gap-2 tracking-widest uppercase opacity-80`}>
                                <Sparkles className="w-3 h-3" /> Guardian Node
                            </div>
                        )}
                        <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base text-gray-200">{msg.text}</p>
                        {msg.isStreaming && (
                            <span className={`inline-block w-2 h-4 ml-1 ${theme.button} animate-pulse`}></span>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className={`p-4 bg-black border-t ${theme.border}`}>
            <div className="flex gap-4">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Establish connection..."
                        className="w-full bg-slate-900/50 border border-white/20 p-4 font-mono text-sm focus:outline-none focus:border-cyan-500 text-cyan-100 placeholder-cyan-900/50 transition-colors"
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/5"></div>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-2 text-white font-bold uppercase tracking-wider transition-all disabled:opacity-50 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] ${theme.button}`}
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
            <div className="mt-2 text-[10px] text-gray-600 flex items-center gap-1 font-mono uppercase">
                 <AlertTriangle className="w-3 h-3" /> Secure Channel // Response Variance Expected
            </div>
        </form>
    </div>
  );
};