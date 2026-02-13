import { FadeUp } from "@/hooks/use-fade-up";
import { Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">About Me</h2>
        </FadeUp>

        <FadeUp>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg mb-10">
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
          <div className="flex items-center gap-4 bg-secondary rounded-xl p-5 border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Currently</p>
              <p className="font-semibold">Software Developer Intern at Knewton Tech</p>
              <p className="text-sm text-muted-foreground">Jan 2026 – Present</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default AboutSection;
