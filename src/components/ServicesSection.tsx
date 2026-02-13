import { FadeUp } from "@/hooks/use-fade-up";
import { Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Application Development",
    desc: "End-to-end web applications from concept to deployment, using modern technologies and best practices.",
  },
  {
    icon: Layers,
    title: "React Frontend + Node.js/Express Backend",
    desc: "Responsive React frontends paired with robust Node.js/Express APIs and database integration.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Services</h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeUp key={i}>
              <div className="bg-background border border-border rounded-xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
