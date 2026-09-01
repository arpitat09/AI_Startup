import { Sparkles, Shield, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#E3DED6] dark:border-[#34342F] py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#66635D] dark:text-[#85857E] no-print">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center border border-[#E76F3C]/20">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0]">
            AI Co-Founder Platform
          </span>
          <span>•</span>
          <span>Deterministic Startup Intelligence</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-[#E76F3C]" />
            <span>LLM + Deterministic Math</span>
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-[#65A77A]" />
            <span>Zero Data Leakage</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
