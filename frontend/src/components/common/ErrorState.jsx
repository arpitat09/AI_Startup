import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "./Button";

export function ErrorState({
  title = "Analysis Error",
  message = "We encountered an issue processing your request. Please try again or switch to demo mode.",
  onRetry,
  onDemo
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 max-w-xl mx-auto my-8">
      <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">{message}</p>
      
      <div className="flex flex-wrap items-center justify-center gap-3">
        {onRetry && (
          <Button onClick={onRetry} variant="danger" icon={RefreshCw}>
            Try Again
          </Button>
        )}
        {onDemo && (
          <Button onClick={onDemo} variant="secondary">
            Explore Demo Mode
          </Button>
        )}
      </div>
    </div>
  );
}
