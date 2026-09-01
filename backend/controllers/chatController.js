/**
 * Chat Controller
 */
import { validateChatInput } from "../validators/analysisValidator.js";
import { askCoFounderChat } from "../services/ai/chatService.js";

export async function chatHandler(req, res, next) {
  try {
    const { message, idea, context } = validateChatInput(req.body);
    const reply = await askCoFounderChat(message, idea, context);

    return res.status(200).json({
      success: true,
      data: {
        reply,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
}
