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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
        </FadeUp>

        <div className="relative pl-8 border-l-2 border-border space-y-10">
          {education.map((e, i) => (
            <FadeUp key={i}>
              <div className="relative">
                <div className="absolute -left-[2.55rem] top-1 w-10 h-10 rounded-full bg-secondary border-2 border-accent/30 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                <p className="text-xs text-accent font-medium tracking-wider uppercase mb-1">{e.year}</p>
                <h3 className="text-lg font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
