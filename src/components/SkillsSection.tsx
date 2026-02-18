import { FadeUp } from "@/hooks/use-fade-up";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  { icon: Code, title: "Programming Languages", skills: ["Python", "JavaScript"], color: "from-violet-500 to-purple-500" },
  { icon: Layout, title: "Frontend", skills: ["HTML5", "CSS3", "React.js"], color: "from-sky-500 to-cyan-500" },
  { icon: Server, title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"], color: "from-emerald-500 to-teal-500" },
  { icon: Database, title: "Databases", skills: ["MongoDB", "MySQL"], color: "from-amber-500 to-orange-500" },
  { icon: Wrench, title: "Tools", skills: ["Git", "GitHub", "VS Code", "npm"], color: "from-rose-500 to-pink-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            My <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <FadeUp key={i}>
              <div className="group bg-card border border-border rounded-2xl p-6 h-full hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* Subtle gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <g.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold mb-4 text-lg">{g.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span key={s} className="text-xs font-medium bg-secondary text-muted-foreground px-3.5 py-1.5 rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-200 cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
