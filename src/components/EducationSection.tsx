import { FadeUp } from "@/hooks/use-fade-up";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "Master of Computer Applications", school: "Adhiyamaan College of Engineering", year: "Expected 2026" },
  { degree: "Bachelor of Computer Applications", school: "Arignar Anna College (Arts & Science)", year: "2023" },
  { degree: "Higher Secondary", school: "Vijaya Pre University College, Bangalore", year: "2020" },
  { degree: "Secondary School", school: "SM English High School", year: "2018" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Academic <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">Journey</span>
          </h2>
        </FadeUp>

        <div className="relative pl-8 border-l-2 border-border space-y-8">
          {education.map((e, i) => (
            <FadeUp key={i}>
              <div className="relative group">
                <div className="absolute -left-[2.55rem] top-1 w-10 h-10 rounded-full bg-card border-2 border-accent/40 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                <div className="bg-card border border-border rounded-xl p-5 ml-4 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                  <p className="text-xs text-accent font-semibold tracking-wider uppercase mb-1.5">{e.year}</p>
                  <h3 className="text-lg font-bold">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
