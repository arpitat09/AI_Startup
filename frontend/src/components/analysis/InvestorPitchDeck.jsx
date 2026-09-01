import { useState } from "react";
import { Presentation, Download, Copy, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { exportPitchDeckMarkdown } from "../../utils/exportUtils";
import { useProject } from "../../context/ProjectContext";

export function InvestorPitchDeck({ pitch = {}, report }) {
  const slides = pitch.slides || [];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [copiedSlide, setCopiedSlide] = useState(false);
  const { showToast } = useProject();

  const currentSlide = slides[activeSlideIndex] || slides[0] || {};

  const handleCopySlide = async () => {
    if (!currentSlide) return;
    const text = `Slide ${currentSlide.slideNumber}: ${currentSlide.title}\n\n${currentSlide.headline}\n\n${(currentSlide.bullets || []).map(b => `- ${b}`).join("\n")}\n\nSpeaker Notes:\n${currentSlide.speakerNotes || ""}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSlide(true);
      showToast("Slide content copied to clipboard!", "success");
      setTimeout(() => setCopiedSlide(false), 2000);
    } catch {
      showToast("Failed to copy", "error");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm">
        <div className="flex items-center gap-2">
          <Presentation className="w-5 h-5 text-[#E76F3C]" />
          <div>
            <h3 className="text-base font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
              12-Slide Investor Pitch Deck
            </h3>
            <p className="text-xs text-[#66635D] dark:text-[#85857E]">
              Investor-ready pitch narrative with key traction assumptions and speaker notes.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => exportPitchDeckMarkdown(report)}
            variant="secondary"
            size="sm"
            icon={Download}
          >
            Download Pitch (.md)
          </Button>

          <Button
            onClick={handleCopySlide}
            variant="ghost"
            size="sm"
            icon={copiedSlide ? Check : Copy}
          >
            {copiedSlide ? "Copied" : "Copy Slide"}
          </Button>
        </div>
      </div>

      {/* Elevator Pitch Box */}
      {pitch.elevatorPitch && (
        <Card glass className="border-[#E76F3C]/30 bg-[#FCE8DF]/20 dark:bg-[#241B17]/40 shadow-sm">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#E76F3C] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-xs uppercase tracking-wider text-[#C9542D] dark:text-[#F5B08C]">
                Executive Elevator Pitch
              </span>
              <p className="text-xs sm:text-sm text-[#1C1C1A] dark:text-[#F5F5F0] mt-1 leading-relaxed font-medium">
                "{pitch.elevatorPitch}"
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Interactive Deck Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Slide Selector List */}
        <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlideIndex(idx)}
              className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                activeSlideIndex === idx
                  ? "bg-[#E76F3C] text-white font-bold shadow-md shadow-[#E76F3C]/20 border-transparent"
                  : "bg-white dark:bg-[#1A1A18] border-[#E3DED6] dark:border-[#34342F] text-[#66635D] dark:text-[#B6B6AE] hover:bg-[#F4F1EC] dark:hover:bg-[#242421]"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] ${activeSlideIndex === idx ? "bg-white/20 text-white" : "bg-[#FAF8F5] dark:bg-[#242421] text-[#85857E]"}`}>
                  {s.slideNumber || idx + 1}
                </span>
                <span className="truncate">{s.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Active Slide Stage */}
        <div className="lg:col-span-2">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#171717] text-[#F5F5F0] border border-[#34342F] shadow-2xl min-h-[450px] flex flex-col justify-between relative overflow-hidden">
            {/* Background subtle orange glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E76F3C]/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              {/* Slide Header */}
              <div className="flex items-center justify-between gap-4 border-b border-[#34342F] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm">
                    SLIDE {currentSlide.slideNumber || activeSlideIndex + 1} OF {slides.length}
                  </Badge>
                  <span className="text-xs font-semibold text-[#85857E]">
                    {report?.meta?.startupName || "Startup"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveSlideIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeSlideIndex === 0}
                    className="p-1.5 rounded-lg bg-[#242421] hover:bg-[#34342F] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-[#F5F5F0]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveSlideIndex((prev) => Math.min(slides.length - 1, prev + 1))}
                    disabled={activeSlideIndex === slides.length - 1}
                    className="p-1.5 rounded-lg bg-[#242421] hover:bg-[#34342F] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-[#F5F5F0]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slide Title & Headline */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase tracking-widest text-[#F5B08C] font-bold">
                  {currentSlide.title}
                </h4>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F0] leading-snug">
                  {currentSlide.headline}
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-xs sm:text-sm text-[#B6B6AE]">
                {(currentSlide.bullets || []).map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E76F3C] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Speaker Notes */}
            {currentSlide.speakerNotes && (
              <div className="mt-8 pt-4 border-t border-[#34342F] text-[11px] text-[#85857E] italic bg-[#1A1A18] p-3 rounded-xl border border-[#292925]">
                <strong className="text-[#F5B08C] not-italic block mb-0.5 font-bold">Presenter Speaker Notes:</strong>
                "{currentSlide.speakerNotes}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
