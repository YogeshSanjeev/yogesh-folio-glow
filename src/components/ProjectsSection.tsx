import { FadeUp } from "@/hooks/use-fade-up";
import { ArrowUpRight } from "lucide-react";
import projectResume from "@/assets/project-resume.jpg";
import projectB2B from "@/assets/project-b2b.jpg";

const projects = [
  {
    image: projectResume,
    category: "AI / Machine Learning",
    title: "Smart Resume Analyzer",
    year: "2024",
  },
  {
    image: projectB2B,
    category: "AI Agent",
    title: "B2B Lead Generation & Outreach Agent",
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of my recent work in UI/UX design, web applications, and digital experiences.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeUp key={i}>
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-accent font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
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

export default ProjectsSection;
