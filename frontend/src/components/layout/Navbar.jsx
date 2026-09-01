import { useState } from "react";
import {
  Sparkles,
  Sun,
  Moon,
  Bot,
  Download,
  PlusCircle,
  Play,
  FolderKanban,
  FileText,
  FileCode,
  Copy,
  ChevronDown,
  Trash2,
  Check
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useProject } from "../../context/ProjectContext";
import { Button } from "../common/Button";
import { Badge } from "../common/Badge";
import { exportToJson, copyMarkdownSummary, exportPitchDeckMarkdown, printReport } from "../../utils/exportUtils";

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const {
    currentReport,
    isDemo,
    savedProjects,
    loadProject,
    deleteProject,
    triggerDemo,
    resetAnalysis,
    isChatOpen,
    setIsChatOpen,
    showToast
  } = useProject();

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!currentReport) return;
    const success = await copyMarkdownSummary(currentReport);
    if (success) {
      setCopied(true);
      showToast("Markdown executive brief copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E3DED6] dark:border-[#34342F] bg-[#FAF8F5]/90 dark:bg-[#111111]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={resetAnalysis}>
          <div className="w-10 h-10 rounded-xl bg-[#FCE8DF] dark:bg-[#1F1F1F] flex items-center justify-center text-[#C9542D] dark:text-[#E76F3C] shadow-md border border-[#E76F3C]/40 flex-shrink-0">
            <Sparkles className="w-5 h-5 text-[#E76F3C]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#1C1C1A] dark:text-[#F5F5F0] text-lg tracking-tight">
                AI Co-Founder
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#1A1A18] text-[#F5B08C] border border-[#E76F3C]/40">
                v2.0
              </span>
            </div>
            <p className="text-[11px] text-[#66635D] dark:text-[#85857E] hidden sm:block">
              Startup Intelligence & Validation Engine
            </p>
          </div>
        </div>

        {/* Center / Status info */}
        {currentReport && (
          <div className="hidden md:flex items-center gap-2">
            <Badge variant={isDemo ? "warning" : "primary"} size="sm">
              {isDemo ? "DEMO MODE" : "LIVE ANALYSIS"}
            </Badge>
            <span className="text-xs font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] truncate max-w-[200px]">
              {currentReport.meta?.startupName || "Startup Report"}
            </span>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* New Analysis Button */}
          {currentReport && (
            <Button
              onClick={resetAnalysis}
              variant="ghost"
              size="sm"
              icon={PlusCircle}
              className="hidden lg:inline-flex"
            >
              New Idea
            </Button>
          )}

          {/* Demo Mode Button if not in demo */}
          {!currentReport && (
            <Button
              onClick={triggerDemo}
              variant="secondary"
              size="sm"
              icon={Play}
              className="hidden sm:inline-flex"
            >
              Explore Demo
            </Button>
          )}

          {/* Saved Projects Dropdown */}
          <div className="relative">
            <Button
              onClick={() => {
                setIsProjectsOpen(!isProjectsOpen);
                setIsExportOpen(false);
              }}
              variant="ghost"
              size="sm"
              icon={FolderKanban}
            >
              <span className="hidden sm:inline">Projects</span>
              {savedProjects.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-[#E76F3C]/20 text-[#E76F3C] font-bold">
                  {savedProjects.length}
                </span>
              )}
            </Button>

            {isProjectsOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-[#EAE6DE] dark:border-[#34342F]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#66635D] dark:text-[#B6B6AE]">
                    Saved Analyses ({savedProjects.length})
                  </span>
                  <span className="text-[10px] text-[#85857E]">Persistent</span>
                </div>

                {savedProjects.length === 0 ? (
                  <div className="p-4 text-center text-xs text-[#85857E]">
                    No saved projects yet. Generate an analysis to save it.
                  </div>
                ) : (
                  <div className="max-h-64 overflow-y-auto space-y-1.5">
                    {savedProjects.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F4F1EC] dark:hover:bg-[#242421] transition-colors group cursor-pointer"
                        onClick={() => {
                          loadProject(p);
                          setIsProjectsOpen(false);
                        }}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] truncate">
                            {p.meta?.startupName || "Untitled Startup"}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[10px] font-bold text-[#E76F3C]">
                              Score: {p.score?.overallScore || "N/A"}
                            </span>
                            <span className="text-[10px] text-[#85857E]">•</span>
                            <span className="text-[10px] text-[#85857E] truncate">
                              {p.meta?.industry || "SaaS"}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteProject(p.id);
                          }}
                          className="p-1 rounded-lg text-[#85857E] hover:text-[#D05A50] hover:bg-[#D05A50]/10 opacity-0 group-hover:opacity-100 transition-all"
                          title="Delete project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Export Dropdown (only when report is active) */}
          {currentReport && (
            <div className="relative">
              <Button
                onClick={() => {
                  setIsExportOpen(!isExportOpen);
                  setIsProjectsOpen(false);
                }}
                variant="secondary"
                size="sm"
                icon={Download}
              >
                <span className="hidden sm:inline">Export</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-60" />
              </Button>

              {isExportOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => {
                      printReport();
                      setIsExportOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#1C1C1A] dark:text-[#F5F5F0] hover:bg-[#F4F1EC] dark:hover:bg-[#242421] rounded-xl transition-colors text-left"
                  >
                    <FileText className="w-4 h-4 text-[#E76F3C]" />
                    <span>Print / Save as PDF</span>
                  </button>

                  <button
                    onClick={() => {
                      exportToJson(currentReport, `${(currentReport.meta?.startupName || "startup").toLowerCase()}-report.json`);
                      setIsExportOpen(false);
                      showToast("JSON report downloaded!", "success");
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#1C1C1A] dark:text-[#F5F5F0] hover:bg-[#F4F1EC] dark:hover:bg-[#242421] rounded-xl transition-colors text-left"
                  >
                    <FileCode className="w-4 h-4 text-[#E76F3C]" />
                    <span>Download JSON Report</span>
                  </button>

                  <button
                    onClick={() => {
                      exportPitchDeckMarkdown(currentReport);
                      setIsExportOpen(false);
                      showToast("12-Slide Pitch Deck downloaded (.md)!", "success");
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#1C1C1A] dark:text-[#F5F5F0] hover:bg-[#F4F1EC] dark:hover:bg-[#242421] rounded-xl transition-colors text-left"
                  >
                    <FileText className="w-4 h-4 text-[#65A77A]" />
                    <span>Download Pitch Deck (.md)</span>
                  </button>

                  <div className="my-1 border-t border-[#EAE6DE] dark:border-[#34342F]" />

                  <button
                    onClick={() => {
                      handleCopy();
                      setIsExportOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#1C1C1A] dark:text-[#F5F5F0] hover:bg-[#F4F1EC] dark:hover:bg-[#242421] rounded-xl transition-colors text-left"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#65A77A]" /> : <Copy className="w-4 h-4 text-[#E76F3C]" />}
                    <span>{copied ? "Copied!" : "Copy Markdown Summary"}</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* AI Chat Mentor Toggle */}
          <Button
            onClick={() => setIsChatOpen(!isChatOpen)}
            variant={isChatOpen ? "primary" : "ghost"}
            size="sm"
            icon={Bot}
            className="relative"
            title="AI Co-Founder Chat"
          >
            <span className="hidden sm:inline">AI Mentor</span>
            <span className="w-2 h-2 rounded-full bg-[#65A77A] animate-pulse absolute -top-0.5 -right-0.5" />
          </Button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-[#66635D] dark:text-[#B6B6AE] hover:text-[#1C1C1A] dark:hover:text-[#F5F5F0] hover:bg-[#F4F1EC] dark:hover:bg-[#242421] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E76F3C]"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#E76F3C]" /> : <Moon className="w-4 h-4 text-[#1C1C1A]" />}
          </button>
        </div>
      </div>
    </header>
  );
}
