/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { DEMO_STARTUP_DATA } from "../data/demoStartup";
import { analyzeStartupApi, fetchSavedProjectsApi, deleteProjectApi } from "../services/api";

const ProjectContext = createContext();

const LOCAL_STORAGE_KEY = "ai_cofounder_saved_projects";

export function ProjectProvider({ children }) {
  const [currentReport, setCurrentReport] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [analysisProgressText, setAnalysisProgressText] = useState("");
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isDemo, setIsDemo] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [savedProjects, setSavedProjects] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sync saved projects with backend when mounted
  useEffect(() => {
    async function syncProjects() {
      try {
        const res = await fetchSavedProjectsApi();
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setSavedProjects(res.data);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(res.data));
        }
      } catch {
        // Fallback to local storage
      }
    }
    syncProjects();
  }, []);

  const showToast = (msg, type = "info") => {
    setToastMessage({ msg, type, id: Math.random() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Step simulation during live analysis
  const simulateStepProgress = async () => {
    const steps = [
      "Understanding startup idea & core assumptions...",
      "Identifying customer problem & target personas...",
      "Researching market sizing, CAGR & industry trends...",
      "Analyzing competitors, 2x2 positioning & threat levels...",
      "Building business model canvas & pricing tiers...",
      "Evaluating technological architecture & risk heatmap...",
      "Computing startup viability score & 30/60/90 roadmap..."
    ];

    for (let i = 0; i < steps.length; i++) {
      setAnalysisStep(i + 1);
      setAnalysisProgressText(steps[i]);
      await new Promise((r) => setTimeout(r, 600));
    }
  };

  const analyzeStartup = async (inputPayload) => {
    setIsAnalyzing(true);
    setError(null);
    setIsDemo(false);
    setActiveTab("overview");

    try {
      const progressPromise = simulateStepProgress();
      const apiPromise = analyzeStartupApi(inputPayload);

      const [, result] = await Promise.all([progressPromise, apiPromise]);

      if (result.success && result.data) {
        setCurrentReport(result.data);
        saveProjectLocally(result.data);
        showToast("Startup intelligence report generated successfully!", "success");
      } else {
        throw new Error(result.error?.message || "Failed to generate report");
      }
    } catch (err) {
      console.error("[ProjectContext] Analysis failed:", err);
      setError(err.message || "Failed to analyze startup. Please try again.");
      showToast(err.message || "Analysis failed", "error");
    } finally {
      setIsAnalyzing(false);
      setAnalysisStep(0);
    }
  };

  const triggerDemo = () => {
    setIsAnalyzing(false);
    setError(null);
    setIsDemo(true);
    setCurrentReport(DEMO_STARTUP_DATA);
    setActiveTab("overview");
    showToast("Interactive demo mode loaded!", "info");
  };

  const resetAnalysis = () => {
    setCurrentReport(null);
    setError(null);
    setIsDemo(false);
    setActiveTab("overview");
  };

  const saveProjectLocally = (report) => {
    if (!report || !report.id) return;
    setSavedProjects((prev) => {
      const filtered = prev.filter((p) => p.id !== report.id);
      const updated = [report, ...filtered].slice(0, 15);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const loadProject = (project) => {
    if (!project) return;
    setCurrentReport(project);
    setIsDemo(project.isDemo || false);
    setActiveTab("overview");
    showToast(`Loaded "${project.meta?.startupName || "Startup"}"`, "info");
  };

  const deleteProject = async (id) => {
    try {
      await deleteProjectApi(id);
    } catch {
      // local delete fallback
    }
    setSavedProjects((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    if (currentReport?.id === id) {
      resetAnalysis();
    }
    showToast("Project deleted", "info");
  };

  return (
    <ProjectContext.Provider
      value={{
        currentReport,
        setCurrentReport,
        isAnalyzing,
        analysisStep,
        analysisProgressText,
        error,
        activeTab,
        setActiveTab,
        isChatOpen,
        setIsChatOpen,
        chatMessages,
        setChatMessages,
        isDemo,
        savedProjects,
        toastMessage,
        showToast,
        analyzeStartup,
        triggerDemo,
        resetAnalysis,
        loadProject,
        deleteProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
