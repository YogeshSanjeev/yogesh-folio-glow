import { FadeUp } from "@/hooks/use-fade-up";
import { GraduationCap, Briefcase, Code, Globe, Layout } from "lucide-react";

const education = {
  school: "Adhiyamaan College of Engineering",
  degree: "Master of Computer Applications",
  year: "Expected 2026",
  achievements: [
    "Bachelor's in Computer Applications (2023)",
    "Strong foundation in full-stack development",
    "Active contributor to tech communities",
  ],
};

const skills = [
  { icon: Code, title: "Full-Stack Development", level: "Advanced" },
  { icon: Globe, title: "REST API Design", level: "Advanced" },
  { icon: Layout, title: "Frontend (React)", level: "Advanced" },
];

const experiences = [
  {
    period: "Jan 2026 – Present",
    role: "Software Developer Intern",
    company: "Knewton Tech",
    description:
      "Development and maintenance of web applications. Writing clean, reusable code and collaborating with senior developers on project deliverables.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column — Education + Skills */}
          <div className="space-y-12">
            {/* Education */}
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 hover:border-accent/20 transition-colors duration-300">
                <h3 className="text-lg font-bold">{education.school}</h3>
                <p className="text-muted-foreground text-sm">{education.degree}</p>
                <p className="text-muted-foreground text-sm mb-5">{education.year}</p>

                <div className="border-t border-border pt-5">
                  <ul className="space-y-2">
                    {education.achievements.map((a, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            {/* Skills & Expertise */}
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Skills & Expertise</h2>
              </div>

              <div className="space-y-4">
                {skills.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-background border border-border rounded-2xl px-5 py-4 hover:border-accent/20 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right Column — Experience */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-accent/30 space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[0.5625rem] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-card" />
                    <p className="text-accent font-semibold text-sm mb-1">{exp.period}</p>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
