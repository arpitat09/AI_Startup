import { FolderKanban, Trash2, Calendar } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";
import { useProject } from "../../context/ProjectContext";
import { formatDate } from "../../utils/formatters";

export function RecentProjects() {
  const { savedProjects, loadProject, deleteProject } = useProject();

  if (!savedProjects || savedProjects.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto my-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FolderKanban className="w-5 h-5 text-[#E76F3C]" />
          <h2 className="text-lg font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
            Recent Analyses ({savedProjects.length})
          </h2>
        </div>
        <span className="text-xs text-[#85857E]">Saved Locally & in Persistence</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {savedProjects.map((p) => (
          <Card
            key={p.id}
            hover
            glass
            className="cursor-pointer group relative border-[#E3DED6] dark:border-[#34342F]"
            onClick={() => loadProject(p)}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge variant={p.score?.overallScore >= 80 ? "success" : p.score?.overallScore >= 60 ? "warning" : "primary"} size="sm">
                Score: {p.score?.overallScore || "N/A"}
              </Badge>
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

            <h4 className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0] text-sm mb-1 group-hover:text-[#C9542D] dark:group-hover:text-[#F5B08C] transition-colors line-clamp-1">
              {p.meta?.startupName || "Startup Report"}
            </h4>

            <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] line-clamp-2 mb-3">
              {p.executive?.opportunityOverview || p.input?.idea || ""}
            </p>

            <div className="flex items-center justify-between text-[11px] text-[#85857E] pt-2 border-t border-[#EAE6DE] dark:border-[#34342F]">
              <span className="truncate">{p.meta?.industry || "SaaS"}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#E76F3C]" />
                {formatDate(p.timestamp || p.createdAt)}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
