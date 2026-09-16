import { BookOpen } from "lucide-react";
import { courses } from "@/data/profile";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

export default function Courses() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="courses"
      className={cn(
        "py-10 bg-gray-50 transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Online Courses
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {courses.map(({ id, title, code, provider, status }) => {
            const isInProgress = status === "In Progress";
            return (
              <div
                key={id}
                className={`flex items-start gap-4 bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 ${
                  isInProgress
                    ? "border-blue-200 ring-1 ring-blue-100"
                    : "border-gray-200 hover:border-blue-200"
                }`}
              >
                <BookOpen className="w-8 h-8 text-blue-600 shrink-0" strokeWidth={1.5} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base font-bold text-gray-900">{code}</h3>
                    {isInProgress && (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-blue-700">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-blue-500 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                        </span>
                        Currently learning
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{title}</p>
                  <p className="text-sm text-gray-500">{provider}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
