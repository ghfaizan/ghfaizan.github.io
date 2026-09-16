import { Trophy, Puzzle } from "lucide-react";
import { hackathons } from "@/data/profile";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

const icons: Record<number, LucideIcon> = {
  1: Trophy,
  2: Puzzle,
};

export default function Hackathons() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="hackathons"
      className={cn(
        "py-10 bg-white transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Hackathons & Competitions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {hackathons.map(({ id, title, organization, period, bullets }) => {
            const Icon = icons[id] ?? Trophy;
            return (
              <div
                key={id}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-8 h-8 text-blue-600 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">
                      {organization} · {period}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="text-sm text-gray-600 leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
