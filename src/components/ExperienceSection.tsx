import { FadeUp } from "@/hooks/use-fade-up";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        </FadeUp>

        <FadeUp>
          <Card className="border-border bg-background">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">Software Developer Intern</CardTitle>
                  <p className="text-accent font-medium text-sm mt-1">Knewton Tech</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Jan 2026 – Present</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeUp>
      </div>
    </section>
  );
};

export default ExperienceSection;
