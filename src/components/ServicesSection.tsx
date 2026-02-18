import { FadeUp } from "@/hooks/use-fade-up";
import { Globe, Layers, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Application Development",
    desc: "End-to-end web applications from concept to deployment, using modern technologies and best practices.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: Layers,
    title: "React Frontend + Node.js/Express Backend",
    desc: "Responsive React frontends paired with robust Node.js/Express APIs and database integration.",
    tags: ["REST APIs", "Express", "MySQL"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            What I <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">offer</span>
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeUp key={i}>
              <div className="group bg-background border border-border rounded-2xl p-7 h-full hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">
                        {tag}
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

export default ServicesSection;
