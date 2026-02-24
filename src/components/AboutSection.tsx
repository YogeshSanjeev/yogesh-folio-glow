import { FadeUp } from "@/hooks/use-fade-up";
import { Briefcase, User, Target, Zap } from "lucide-react";

const highlights = [
  { icon: Target, label: "Goal-Oriented", desc: "Building impactful solutions" },
  { icon: Zap, label: "Fast Learner", desc: "Always exploring new tech" },
  { icon: User, label: "Team Player", desc: "Collaborative & communicative" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">digital reality</span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <FadeUp>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                I'm a passionate software developer with a strong interest in full-stack web development and backend engineering. I enjoy building applications that are not only functional but also clean, scalable, and user-friendly.
              </p>
              <p>
                My primary tech stack revolves around React for the frontend and Node.js/Express for backend services, with Python as my go-to language for scripting and automation. I'm deeply interested in RESTful API design, database optimization, and emerging AI technologies.
              </p>
              <p>
                I believe in continuous learning and constantly push myself to explore new frameworks, tools, and best practices. My goal is to contribute to innovative solutions that make a real-world impact.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 bg-secondary/60 backdrop-blur-sm rounded-xl px-5 py-4 border border-border hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <h.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{h.label}</p>
                    <p className="text-xs text-muted-foreground">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp>
          <div className="mt-12 flex items-center gap-4 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-2xl p-6 border border-sky-500/20 hover:border-sky-500/30 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-sky-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-medium">Currently</p>
              <p className="font-bold text-lg">Software Developer Intern at Knewton Tech</p>
              <p className="text-sm text-muted-foreground">Jan 2026 – Present</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default AboutSection;
