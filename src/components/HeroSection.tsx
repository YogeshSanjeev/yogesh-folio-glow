import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/hooks/use-fade-up";
import { User } from "lucide-react";

const techBadges = ["React", "Node.js", "Python", "MongoDB", "REST APIs"];

const HeroSection = () => {
  return (
    <section id="home" className="section-padding pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <FadeUp>
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Yogesh Kumar
            <span className="block text-muted-foreground text-2xl md:text-3xl font-normal mt-2">
              Full-Stack Web Developer
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-8">
            Passionate software developer focused on web and backend systems, building efficient solutions for real-world problems. Constant learner aiming to grow as a full-stack developer and contribute to innovative tech solutions.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button asChild size="lg">
              <a href="#skills">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {techBadges.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs px-3 py-1">
                {t}
              </Badge>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary border-4 border-accent/20 flex items-center justify-center overflow-hidden">
            <User className="w-20 h-20 text-muted-foreground" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default HeroSection;
