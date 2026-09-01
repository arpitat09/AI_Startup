import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, User, RefreshCw, Zap } from "lucide-react";
import { Button } from "../common/Button";
import { useProject } from "../../context/ProjectContext";
import { sendChatMessageApi } from "../../services/api";

const SUGGESTED_PROMPTS = [
  "Challenge my idea & find critical blindspots",
  "How can I cut customer acquisition cost (CAC)?",
  "Suggest a simpler 2-week MVP scope",
  "What is the best pricing model for early adopters?",
  "How do I defend against fast-following competitors?"
];

export function AICoFounderChat() {
  const { isChatOpen, setIsChatOpen, currentReport } = useProject();
  const counterRef = useRef(1);
  const [messages, setMessages] = useState([
    {
      id: "m_welcome",
      role: "assistant",
      text: "Hey! I'm your AI Co-Founder. I've analyzed your startup strategy and market metrics. Ask me anything about go-to-market execution, pricing, product trade-offs, or ask me to challenge your assumptions!",
      timestamp: "2026-09-01T00:00:00.000Z"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  if (!isChatOpen) return null;

  const handleSend = async (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    counterRef.current += 1;
    const currentId = `msg_u_${counterRef.current}`;
    const userMsg = {
      id: currentId,
      role: "user",
      text: query,
      timestamp: "now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      let replyText = "";
      try {
        const res = await sendChatMessageApi(
          query,
          currentReport?.input?.idea || "",
          {
            startupName: currentReport?.meta?.startupName,
            industry: currentReport?.meta?.industry,
            score: currentReport?.score,
            executive: currentReport?.executive
          }
        );
        replyText = res.data?.reply || "";
      } catch {
        replyText = `Based on your startup model (${currentReport?.meta?.startupName || "your product"}), here is the strategic recommendation:\n\n1. **Focus on high-pain beachhead:** Validate willingness-to-pay with 10 direct customer interviews before scaling.\n2. **De-risk unit economics:** Keep CAC low by using founder-led outreach and organic thought leadership before spending on paid ads.\n3. **Tighten MVP scope:** Eliminate secondary features and measure weekly active engagement on the single core problem-solving feature.`;
      }

      counterRef.current += 1;
      const aiId = `msg_ai_${counterRef.current}`;
      setMessages((prev) => [
        ...prev,
        {
          id: aiId,
          role: "assistant",
          text: replyText,
          timestamp: "now"
        }
      ]);
    } catch {
      counterRef.current += 1;
      const errId = `msg_err_${counterRef.current}`;
      setMessages((prev) => [
        ...prev,
        {
          id: errId,
          role: "assistant",
          text: "I encountered an error connecting to the intelligence server. Please check your backend connection.",
          timestamp: "now"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-[#FAF8F5] dark:bg-[#111111] shadow-2xl flex flex-col border-l border-[#E3DED6] dark:border-[#34342F] animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-4 border-b border-[#E3DED6] dark:border-[#34342F] flex items-center justify-between bg-white/80 dark:bg-[#171717]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FCE8DF] dark:bg-[#1F1F1F] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center shadow-md border border-[#E76F3C]/40">
            <Bot className="w-4 h-4 text-[#E76F3C]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#1C1C1A] dark:text-[#F5F5F0] flex items-center gap-1.5">
              AI Co-Founder Chat
              <span className="w-2 h-2 rounded-full bg-[#65A77A] animate-pulse" />
            </h3>
            <p className="text-[11px] text-[#66635D] dark:text-[#85857E]">
              Context-Aware Strategic Advisor
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsChatOpen(false)}
          className="p-1.5 rounded-lg text-[#85857E] hover:text-[#1C1C1A] dark:hover:text-white hover:bg-[#F4F1EC] dark:hover:bg-[#1F1F1F] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="px-4 py-2.5 bg-[#FAF8F5] dark:bg-[#171717] border-b border-[#E3DED6] dark:border-[#292925]">
        <div className="flex items-center gap-1 mb-1.5 text-[10px] uppercase font-bold text-[#85857E] tracking-wider">
          <Zap className="w-3 h-3 text-[#E76F3C]" />
          <span>Quick Prompts</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {SUGGESTED_PROMPTS.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p)}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#1F1F1F] border border-[#E3DED6] dark:border-[#34342F] text-[11px] font-medium text-[#1C1C1A] dark:text-[#F5F5F0] hover:border-[#E76F3C] hover:text-[#C9542D] dark:hover:text-[#F5B08C] whitespace-nowrap transition-all flex-shrink-0"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs ${
                  isUser
                    ? "bg-[#E76F3C] text-white"
                    : "bg-[#FCE8DF] dark:bg-[#1F1F1F] text-[#C9542D] dark:text-[#E76F3C] border border-[#E76F3C]/40"
                }`}
              >
                {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                  isUser
                    ? "bg-[#E76F3C] text-white rounded-tr-none shadow-[0_4px_20px_rgba(231,111,60,0.2)]"
                    : "bg-white dark:bg-[#1F1F1F] text-[#1C1C1A] dark:text-[#F5F5F0] rounded-tl-none border border-[#E3DED6] dark:border-[#34342F]"
                }`}
              >
                {m.text}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FCE8DF] dark:bg-[#1F1F1F] text-[#E76F3C] border border-[#E76F3C]/40 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="p-3 rounded-2xl bg-white dark:bg-[#1F1F1F] text-xs text-[#85857E] flex items-center gap-2 border border-[#E3DED6] dark:border-[#34342F]">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#E76F3C]" />
              <span>AI Co-Founder is strategizing...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-[#E3DED6] dark:border-[#34342F] bg-white/90 dark:bg-[#171717] flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Ask a strategic startup question..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          disabled={isLoading}
          className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#111111] text-xs sm:text-sm text-[#1C1C1A] dark:text-[#F5F5F0] placeholder-[#85857E] focus:outline-none focus:ring-2 focus:ring-[#E76F3C] focus:border-[#E76F3C]"
        />

        <Button
          type="submit"
          variant="primary"
          size="sm"
          disabled={!inputMessage.trim() || isLoading}
          icon={Send}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
