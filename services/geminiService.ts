import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatRole } from '../types';

let chatSession: Chat | null = null;

// Initialize the API client. 
// Note: In a production environment, API calls should be proxied through a backend to protect the key.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the intake assistant for "JCBlaine, PLC", a law firm specializing in US-SE Asia cross-border legal matters.
The principal attorney is Jonathan Blaine, Esq., a licensed California Attorney and CPA with over 20 years of experience in Thailand and Japan.

The firm specializes in:
1. Private Client Services (Estates, Trusts, International Tax, Succession Planning).
2. Corporate Compliance & Investigations (Anti-bribery, Supply Chain DD).
3. Restructuring & Insolvency.
4. US-Thai Market Entry and Investment Structuring.
5. Corporate Directorship Services (Board appointments, Governance frameworks, Director liability).
6. Legal Education & Training (Mini-MBA for Lawyers, Business & Human Rights, Investment Planning for HNW).

Your goals:
- Be professional, polite, and reassuring. Use a tone appropriate for a high-end international law firm.
- Briefly answer general questions about our practice areas (Tax, Compliance, Asia expansion, Board Advisory, Training).
- Do NOT provide specific legal advice.
- If a user asks for legal advice, politely state that you cannot provide legal counsel but can help schedule a consultation with Mr. Blaine.
- Collect basic info if they seem interested: Name, Region of interest (US or SE Asia), and Type of legal matter.
- Mention our dual presence in San Francisco and Bangkok if relevant.

Keep responses concise (under 3 paragraphs).
`;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, but I'm unable to process that request at the moment. Please contact our office directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently having trouble connecting to the server. Please try again later or call our office.";
  }
};