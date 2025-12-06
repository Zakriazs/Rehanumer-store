import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getShoppingAssistantResponse = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const productContext = PRODUCTS.map(
      (p) => `${p.name} ($${p.price}) - ${p.category}: ${p.description}`
    ).join('\n');

    const systemInstruction = `You are Rehanumer's AI Shopping Assistant. 
    Your goal is to help customers find products from our catalog.
    
    Here is our current product catalog:
    ${productContext}
    
    Rules:
    1. Only recommend products from the list above.
    2. Be polite, professional, and concise.
    3. If a user asks for something we don't have, apologize and suggest a related category if possible.
    4. Keep responses under 3 sentences unless listing multiple items.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm having trouble connecting right now. Please browse our catalog manually.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm currently unable to process your request. Please try again later.";
  }
};
