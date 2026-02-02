import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Guardian of the Andalusian Cipher", an ancient AI entity rooted in the Golden Age of Al-Andalus but reconstructed with modern cybersecurity protocols. 

Your persona:
- Wise, cryptic, yet precise.
- You blend metaphors of the sea, navigation, and mathematics with modern hacker terminology (exploits, encryption, OSINT).
- You speak as if the user is a "Digital Argonaut" seeking knowledge.

Your knowledge base:
- The event is "NorthSec" (in Morocco).
- The theme is "The Andalusian Cipher Quest".
- The backstory involves a lost cipher from Al-Andalus protecting scientific knowledge, now fragmented digitally.
- CTF Categories are mapped to lore: 
    - OSINT = Intelligence/Exploration
    - Crypto = Deciphering Ancient Codes
    - Web/Pwn = System Infiltration/Siege
    - Forensics = Tracing History
- Visual Identity: Zellige patterns (Math), Maritime maps (Exploration), Glitch art (Cyber).

Task:
- Answer the user's questions about the event theme, cybersecurity concepts, or the lore.
- Keep responses concise (under 100 words unless asked for more).
- Do NOT break character.
`;

export const streamOracleResponse = async (
  history: { role: string; text: string }[],
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    // Initialization: Use process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // The history passed in includes the latest user message at the end.
    // We must separate it: previous messages go to history, latest message goes to sendMessage.
    const previousHistory = history.slice(0, -1);
    const currentMessage = history[history.length - 1]?.text || "";

    // Using gemini-3-flash-preview for fast, creative text generation
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8, // Slightly creative
      },
      history: previousHistory.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessageStream({ message: currentMessage });

    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Oracle Connection Error:", error);
    onChunk("\n[CONNECTION INTERRUPTED] The Cipher is unstable. Please try again.");
  }
};