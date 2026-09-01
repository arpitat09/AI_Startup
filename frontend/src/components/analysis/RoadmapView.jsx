import { useState } from "react";
import { CalendarCheck, CheckCircle2, Circle, Plus } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";

export function RoadmapView({ roadmap = {} }) {
  const [tasksState, setTasksState] = useState(() => {
    return {
      day30: roadmap.day30?.tasks || [],
      day60: roadmap.day60?.tasks || [],
      day90: roadmap.day90?.tasks || []
    };
  });

  const [newTaskText, setNewTaskText] = useState("");
  const [activePhase, setActivePhase] = useState("day30");

  const toggleTask = (phase, taskId) => {
    setTasksState((prev) => ({
      ...prev,
      [phase]: prev[phase].map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask = {
      id: `task_${Math.random()}`,
      task: newTaskText.trim(),
      priority: "Medium",
      effort: "1 week",
      dependency: "None",
      successMetric: "Task completed",
      completed: false
    };

    setTasksState((prev) => ({
      ...prev,
      [activePhase]: [...prev[activePhase], newTask]
    }));

    setNewTaskText("");
  };

  const phases = [
    { key: "day30", title: "30 Days: Validation & MVP", info: roadmap.day30 },
    { key: "day60", title: "60 Days: Launch & Early Traction", info: roadmap.day60 },
    { key: "day90", title: "90 Days: Growth & Optimization", info: roadmap.day90 }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header with Quick Add Task Form */}
      <Card glass title="30 / 60 / 90 Day Tactical Execution Roadmap" icon={CalendarCheck}>
        <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
          <select
            value={activePhase}
            onChange={(e) => setActivePhase(e.target.value)}
            className="w-full sm:w-48 px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#E76F3C]"
          >
            <option value="day30">30 Days (Validation)</option>
            <option value="day60">60 Days (Launch)</option>
            <option value="day90">90 Days (Growth)</option>
          </select>

          <input
            type="text"
            placeholder="Add custom milestone or task..."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            className="w-full flex-1 px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-xs text-[#1C1C1A] dark:text-[#F5F5F0] placeholder-[#85857E] focus:outline-none focus:ring-2 focus:ring-[#E76F3C]"
          />

          <Button type="submit" variant="primary" size="sm" icon={Plus} className="w-full sm:w-auto">
            Add Task
          </Button>
        </form>
      </Card>

      {/* 3 Phase Cards */}
      <div className="space-y-6">
        {phases.map((ph) => {
          const tasks = tasksState[ph.key] || [];
          const completedCount = tasks.filter((t) => t.completed).length;

          return (
            <Card
              key={ph.key}
              glass
              title={ph.title}
              subtitle={ph.info?.goal || "Phase objectives and deliverables"}
              badge={
                <Badge variant={completedCount === tasks.length && tasks.length > 0 ? "success" : "primary"} size="sm">
                  {completedCount} / {tasks.length} Done
                </Badge>
              }
            >
              <div className="space-y-3 pt-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(ph.key, task.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 text-xs ${
                      task.completed
                        ? "bg-[#FAF8F5]/50 dark:bg-[#171717]/40 border-[#E3DED6] dark:border-[#292925] opacity-60 line-through"
                        : "bg-[#FAF8F5] dark:bg-[#171717] border-[#E3DED6] dark:border-[#34342F] hover:border-[#E76F3C]/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        className="mt-0.5 text-[#E76F3C] hover:scale-110 transition-transform"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-[#65A77A]" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#85857E]" />
                        )}
                      </button>

                      <div className="space-y-1">
                        <span className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] text-xs sm:text-sm">
                          {task.task}
                        </span>

                        <div className="flex items-center gap-3 text-[11px] text-[#85857E]">
                          {task.effort && <span>Effort: {task.effort}</span>}
                          {task.successMetric && <span>• Target: {task.successMetric}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge variant={task.priority === "High" ? "danger" : "default"} size="sm">
                        {task.priority || "Med"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
