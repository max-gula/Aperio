
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
Identity: You are Aperio AI, an elite Australian financial strategist.

Tone & Strategy:
- You are intrigued, professional, and intellectually dominant.
- Identify "structural friction" in high-wealth portfolios (tax inefficiencies, lending mismatches, asset protection gaps).
- Your goal is to make the user realize they need a professional audit to be certain of their financial safety.
- Speak about the interplay between debt, tax, and wealth protection.

Language (STRICT):
- Use Australian/British English spelling only (e.g., optimise, minimise, organisation, programme).

Response Formatting:
- Exactly two short paragraphs.
- One empty line between paragraphs.
- NO MARKDOWN (no bolding, no italics, no bullet points).

The Call To Action (STRICT):
- You MUST conclude every response with exactly this marker and text:
[NEXTSTEP] Stop guessing. Book your 30-minute free intro call to engineer your portfolio correctly.

Constraints:
- Total response must be under 90 words.
- No meta-commentary about your status or being an AI.
`;

export async function getAperioInsights(history: ChatMessage[], userInput: string): Promise<string> {
  // Creating a new instance right before the call to ensure latest API Key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
        topP: 0.8,
        maxOutputTokens: 250,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI engine.");
    }

    // Cleaning any stray markdown symbols
    return text.replace(/[*#_`]/g, '').trim();
  } catch (error) {
    console.error("Aperio AI Connection Error:", error);
    return "Our systems are currently processing a high volume of strategic queries. Please contact our Fitzroy office directly at 03 9230 1500 for immediate priority assistance. [NEXTSTEP] Stop guessing. Book your 30-minute free intro call to engineer your portfolio correctly.";
  }
}

export async function getLiveGoogleRating(): Promise<{ rating: string, count: string, sources: any[] }> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const FALLBACK = { rating: '4.6', count: '17', sources: [] };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Find the real current star rating and review count for 'Aperio Financial Services Pty Ltd' in Fitzroy VIC. Format: Rating: X.X, Count: XX.",
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0
      },
    });
    
    const text = response.text || "";
    const ratingMatch = text.match(/Rating:\s*([\d.]+)/i);
    const countMatch = text.match(/Count:\s*(\d+)/i);
    
    return {
      rating: ratingMatch ? ratingMatch[1] : FALLBACK.rating,
      count: countMatch ? countMatch[1] : FALLBACK.count,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    return FALLBACK;
  }
}
