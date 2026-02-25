import { Button } from "@/components/ui/button";
import { FadeUp } from "@/hooks/use-fade-up";
import { Trophy, ArrowRight, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "3+", label: "Technologies" },
  { value: "1+", label: "Yrs Experience" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(270 60% 50%) 0%, hsl(280 55% 45%) 30%, hsl(290 50% 40%) 60%, hsl(300 45% 38%) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-white/10 animate-[spin_25s_linear_infinite] hidden lg:block" />
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full border border-white/[0.07] animate-[spin_18s_linear_infinite_reverse] hidden lg:block" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-300/15 blur-[100px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-200/10 blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full border-2 border-white/10 hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-violet-300/10 blur-[80px] animate-pulse" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_1.1fr] gap-6 lg:gap-10 items-end px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-32 md:pb-20 relative z-10">
        {/* Left — Profile photo */}
        <FadeUp className="flex justify-center md:justify-start md:items-end">
          <div className="relative group mt-8 md:mt-0">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-purple-300/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700" />

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] rounded-full border-[3px] border-white/25 bg-white/10 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.25)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.35)] transition-all duration-500">
              <img src={profileImg} alt="Yogesh Kumar" className="w-full h-full object-cover" />
            </div>

            {/* Experience badge — top right of circle */}
            <div className="absolute -top-2 -right-8 md:-right-16 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl shadow-black/10 flex items-center gap-2.5 animate-fade-in hover:scale-105 transition-transform duration-200 cursor-default">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-accent" />
              </div>
              <div className="text-xs leading-tight">
                <span className="text-accent text-lg font-extrabold block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1+</span>
                <span className="text-gray-500 font-medium">Years Experience</span>
              </div>
            </div>

            {/* Bottom-left badge */}
            <div className="absolute -bottom-2 left-4 bg-accent text-white rounded-full px-5 py-2.5 shadow-xl shadow-accent/25 flex items-center gap-2 text-sm font-bold animate-fade-in hover:scale-105 transition-transform duration-200 cursor-default">
              <Sparkles className="w-4 h-4" />
              Full-Stack Dev
            </div>
          </div>
        </FadeUp>

        {/* Right — Content */}
        <FadeUp className="flex flex-col justify-center">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-lg shadow-black/5 self-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Available for freelance work
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.08] tracking-tight mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I'm Yogesh,
            <br />
            <span className="text-accent">
              Full-Stack
              <br />
              Developer
            </span>
          </h1>

          <p className="text-white/70 max-w-lg text-base md:text-lg leading-relaxed mb-8">
            Transforming ideas into seamless, efficient web and backend
            systems that solve real-world problems and enhance user
            experience.
          </p>

          {/* CTA button */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Button
              asChild
              size="lg"
              className="rounded-full border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold px-8 gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <a href="#skills">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`pr-8 ${i > 0 ? "pl-8 border-l border-white/15" : ""}`}
              >
                <p
                  className="text-3xl md:text-4xl font-extrabold text-accent"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-white/60 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default HeroSection;
