import { Sparkles } from "lucide-react";
import { Button } from "./Button";

export function EmptyState({
  title = "No Data Available",
  description = "Analyze a startup idea to generate deep market intelligence, competitor moats, and financial models.",
  actionText = "Analyze My Startup",
  onAction,
  icon: Icon = Sparkles
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40">
      <div className="w-14 h-14 rounded-2xl bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">{description}</p>
      {onAction && (
        <Button onClick={onAction} variant="primary" icon={Icon}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
