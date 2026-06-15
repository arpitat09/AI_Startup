import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function callClaude(systemPrompt, userMessage) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
  });

  const rawText = response.choices[0].message.content;
  const cleaned = rawText.replace(/```json|```/g, "").trim();
  return JSON.parse(cleaned);
}
