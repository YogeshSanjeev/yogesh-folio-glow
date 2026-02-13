import { FadeUp } from "@/hooks/use-fade-up";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  { icon: Code, title: "Programming Languages", skills: ["Python", "JavaScript"] },
  { icon: Layout, title: "Frontend", skills: ["HTML5", "CSS3", "React.js"] },
  { icon: Server, title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { icon: Database, title: "Databases", skills: ["MongoDB", "MySQL"] },
  { icon: Wrench, title: "Tools", skills: ["Git", "GitHub", "VS Code", "npm"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g, i) => (
            <FadeUp key={i}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <g.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-3">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
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
