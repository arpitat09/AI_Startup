import express from "express";
import { callClaude } from "../helpers/callClaude.js";

const router = express.Router();

const chatSystemPrompt = `You are an expert startup mentor with 20 years of experience advising founders.
Answer follow-up questions helpfully and concisely.
Return plain text responses, not JSON.`;

router.post("/chat", async (req, res) => {
  const { message, idea } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  try {
    const fullContext = `The startup idea being discussed: ${idea}\n\nUser question: ${message}`;
    const reply = await callClaude(chatSystemPrompt, fullContext);
    res.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Chat failed" });
  }
});

export default router;
