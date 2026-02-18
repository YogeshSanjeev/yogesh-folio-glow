import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/hooks/use-fade-up";
import { User, Trophy, Award, ArrowRight } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Technologies" },
  { value: "1+", label: "Years Exp." },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(260 60% 50%) 0%, hsl(270 70% 55%) 30%, hsl(280 60% 50%) 60%, hsl(260 50% 40%) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-12 right-12 w-24 h-24 rounded-full border-2 border-white/10 hidden md:block" />
      <div className="absolute top-16 right-16 w-16 h-16 rounded-full border-2 border-white/10 hidden md:block" />
      <div className="absolute bottom-20 left-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center px-6 md:px-12 lg:px-20 py-32 md:py-40 relative z-10">
        {/* Left — Profile photo */}
        <FadeUp className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 bg-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
              <User className="w-24 h-24 text-white/60" />
            </div>
            {/* Experience badge */}
            <div className="absolute top-4 -right-2 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <div className="text-xs font-semibold text-gray-800 leading-tight">
                <span className="text-amber-500 text-sm font-bold">1+</span>
                <br />
                Years Experience
              </div>
            </div>
            {/* Award badge */}
            <div className="absolute -bottom-2 -left-2 bg-amber-500 text-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold">
              <Award className="w-4 h-4" />
              Full-Stack Dev
            </div>
          </div>
        </FadeUp>

        {/* Right — Content */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Available for opportunities
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I'm Yogesh,
            <br />
            <span className="text-amber-400">Full-Stack</span>
            <br />
            Developer
          </h1>

          <p className="text-white/70 max-w-md text-base md:text-lg leading-relaxed mb-8">
            A passionate developer dedicated to crafting professional, efficient,
            and modern web solutions that make a difference.
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-full border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-purple-700 transition-all duration-300 px-8 gap-2 mb-12"
          >
            <a href="#skills">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          {/* Stats row */}
          <div className="flex gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.value}
                </p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default HeroSection;
