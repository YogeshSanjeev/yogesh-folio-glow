import { FadeUp } from "@/hooks/use-fade-up";
import { CheckCircle, Building2, Calendar } from "lucide-react";

const responsibilities = [
  "Development and maintenance of web applications",
  "Writing clean, reusable, and efficient code",
  "Collaborating with senior developers on project deliverables",
  "Bug fixing and performance improvement",
  "Testing and deployment participation",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">worked</span>
          </h2>
        </FadeUp>

        <FadeUp>
          <div className="bg-background border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 p-6 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/15 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Software Developer Intern</h3>
                    <p className="text-sky-600 font-semibold text-sm">Knewton Tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  Jan 2026 – Present
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="p-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4">Key Responsibilities</p>
              <ul className="space-y-3">
                {responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm group">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="group-hover:text-foreground transition-colors duration-200">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ExperienceSection;
