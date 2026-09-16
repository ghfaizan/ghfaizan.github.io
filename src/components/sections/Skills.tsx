import { Code2, Brain, Container, BarChart2 } from "lucide-react";
import {
  SiC, SiPython, SiJavascript, SiTypescript, SiMysql,
  SiPytorch, SiScikitlearn, SiHuggingface, SiLangchain, SiLanggraph, SiPandas, SiNumpy,
  SiOpencv, SiYolo,
  SiFastapi, SiReact, SiStreamlit, SiJupyter,
  SiDocker, SiGit, SiGithub, SiGitlab, SiGithubactions, SiDatabricks, SiGooglecloud, SiVercel, SiRender,
  SiN8N, SiQgis,
} from "react-icons/si";
import { FaFileExcel, FaAws } from "react-icons/fa";
import { TableauIcon, PowerBIIcon } from "@/components/ui/CustomIcons";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

type Skill    = { Icon: React.FC<{ size?: number; color?: string }> | IconType; color: string; name: string };
type Category = { label: string; CategoryIcon: LucideIcon; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Languages & Frameworks",
    CategoryIcon: Code2,
    skills: [
      { Icon: SiC,          color: "#A8B9CC", name: "C" },
      { Icon: SiPython,     color: "#3776AB", name: "Python" },
      { Icon: SiJavascript, color: "#EAB308", name: "JavaScript" },
      { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { Icon: SiMysql,      color: "#4479A1", name: "SQL" },
      { Icon: SiFastapi,    color: "#009688", name: "FastAPI" },
      { Icon: SiReact,      color: "#0EA5E9", name: "React" },
      { Icon: SiStreamlit,  color: "#FF4B4B", name: "Streamlit" },
      { Icon: SiJupyter,    color: "#F37626", name: "Jupyter" },
    ],
  },
  {
    label: "AI & ML",
    CategoryIcon: Brain,
    skills: [
      { Icon: SiPytorch,     color: "#EE4C2C", name: "PyTorch" },
      { Icon: SiScikitlearn, color: "#F7931E", name: "scikit-learn" },
      { Icon: SiHuggingface, color: "#D97706", name: "Hugging Face" },
      { Icon: SiLangchain,   color: "#16A34A", name: "LangChain" },
      { Icon: SiLanggraph,   color: "#1C3C3C", name: "LangGraph" },
      { Icon: SiPandas,      color: "#150458", name: "Pandas" },
      { Icon: SiNumpy,       color: "#4DABCF", name: "NumPy" },
      { Icon: SiOpencv,      color: "#5C3EE8", name: "OpenCV" },
      { Icon: SiYolo,        color: "#374151", name: "YOLOv8" },
    ],
  },
  {
    label: "MLOps & DevOps",
    CategoryIcon: Container,
    skills: [
      { Icon: SiGithub,        color: "#374151", name: "GitHub" },
      { Icon: SiGitlab,        color: "#FC6D26", name: "GitLab" },
      { Icon: SiGit,           color: "#F05032", name: "Git" },
      { Icon: SiDocker,        color: "#2496ED", name: "Docker" },
      { Icon: SiGithubactions, color: "#2088FF", name: "GitHub Actions" },
      { Icon: SiDatabricks,    color: "#FF3621", name: "Databricks" },
      { Icon: FaAws,           color: "#FF9900", name: "AWS" },
      { Icon: SiGooglecloud,   color: "#4285F4", name: "Google Cloud" },
      { Icon: SiVercel,        color: "#374151", name: "Vercel" },
      { Icon: SiRender,        color: "#46E3B7", name: "Render" },
    ],
  },
  {
    label: "Data & Analytics",
    CategoryIcon: BarChart2,
    skills: [
      { Icon: TableauIcon,  color: "#E97627", name: "Tableau" },
      { Icon: PowerBIIcon,  color: "#F2C811", name: "Power BI" },
      { Icon: FaFileExcel,  color: "#217346", name: "Excel" },
      { Icon: SiMysql,      color: "#4479A1", name: "MySQL" },
      { Icon: SiN8N,        color: "#EA4B71", name: "n8n" },
      { Icon: SiQgis,       color: "#589632", name: "QGIS" },
    ],
  },
];

export default function Skills() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="skills"
      className={cn(
        "py-10 bg-gray-50 transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map(({ label, CategoryIcon, skills }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 shrink-0">
                  <CategoryIcon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 tracking-wide">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ Icon, color, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 pl-2.5 pr-3 py-1.5 text-xs font-medium text-gray-700 hover:border-blue-200 hover:bg-white transition-colors duration-150"
                  >
                    <Icon size={14} color={color} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
