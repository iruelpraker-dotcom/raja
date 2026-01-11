
import { GoogleGenAI } from "@google/genai";

export const generateMarketingCopy = async (topic: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Buatkan kalimat promosi singkat (copywriting) dalam Bahasa Indonesia untuk jasa "Raja Mampet Ryan Bali" dengan topik: ${topic}. Kalimat harus menarik, profesional, dan menekankan pada solusi cepat dan bergaransi di Bali. Jangan terlalu panjang, maksimal 3 kalimat.`,
    });
    
    return response.text || "Gagal menghasilkan konten AI.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Terjadi kesalahan saat menghubungi AI.";
  }
};
