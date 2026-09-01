import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export function Toast({ toast, onClose }) {
  if (!toast) return null;

  const { msg, type } = toast;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#65A77A] flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-[#D05A50] flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-[#E76F3C] flex-shrink-0" />
  };

  const styles = {
    success: "border-[#65A77A] bg-[#172019] text-[#F5F5F0]",
    error: "border-[#D05A50] bg-[#1F1716] text-[#F5F5F0]",
    info: "border-[#E76F3C] bg-[#1A1A18] text-[#F5F5F0]"
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-2xl backdrop-blur-md text-sm font-medium ${styles[type] || styles.info}`}
      >
        {icons[type] || icons.info}
        <span>{msg}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 opacity-70 hover:opacity-100 text-[#B6B6AE] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
