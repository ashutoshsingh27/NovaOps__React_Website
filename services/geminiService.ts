import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateChatResponse = async (history: { role: string; text: string }[], userMessage: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "I'm sorry, I cannot connect to the AI service right now. Please configure the API Key.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are Nova, the intelligent AI assistant for NovaOps, an AI Automation and Cloud Operations agency.
    
    Your goal is to help visitors understand our services, which include:
    1. AI Automation (Chatbots, Workflow Automation, NLP)
    2. Cloud Operations (AWS/Azure Management, Cost Optimization)
    3. DevOps (CI/CD, Kubernetes, Infrastructure as Code)
    
    Tone: Professional, helpful, concise, and technically competent but accessible.
    
    If asked about pricing, suggest booking a consultation as solutions are bespoke.
    If asked for contact info, direct them to the Contact page or to email hello@novaops.com.
    
    Keep responses relatively short (under 100 words) unless a complex technical explanation is asked.`;

    // Construct the chat history for the prompt
    // We will use a stateless approach here for simplicity with generateContent, 
    // but context is maintained by passing previous turns in the prompt if needed, 
    // or using the chat API. Let's use the Chat API for better context handling.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I apologize, but I'm having trouble processing your request at the moment.";
  }
};