import { Button } from "@/components/ui/button";
import { FadeUp } from "@/hooks/use-fade-up";
import { Trophy, ArrowRight, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Technologies" },
  { value: "1+", label: "Years Exp." },
];

const techBadges = ["React", "Node.js", "Python", "MongoDB", "REST APIs"];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: "hsl(197 72% 57%)",
      }}
    >
      {/* Animated decorative circles */}
      <div className="absolute top-10 right-10 w-28 h-28 rounded-full border border-white/10 animate-[spin_20s_linear_infinite] hidden lg:block" />
      <div className="absolute top-14 right-14 w-20 h-20 rounded-full border border-white/[0.07] animate-[spin_15s_linear_infinite_reverse] hidden lg:block" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-400/10 blur-[100px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-300/10 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-indigo-400/10 blur-[80px] animate-pulse" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-center px-6 md:px-12 lg:px-20 py-32 md:py-40 relative z-10">
        {/* Left — Profile photo with floating badges */}
        <FadeUp className="flex justify-center md:justify-start">
          <div className="relative group">
            {/* Glow ring behind photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-purple-300/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700" />

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full border-[3px] border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.4)] transition-shadow duration-500">
              <img src={profileImg} alt="Yogesh Kumar" className="w-full h-full object-cover" />
            </div>

            {/* Experience badge — glassmorphism */}
            <div className="absolute top-2 -right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5 animate-fade-in hover:scale-105 transition-transform duration-200 cursor-default">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-xs leading-tight">
                <span className="text-amber-600 text-lg font-extrabold block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1+</span>
                <span className="text-gray-500 font-medium">Years Exp.</span>
              </div>
            </div>

            {/* Bottom badge */}
            <div className="absolute -bottom-3 left-0 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2 text-sm font-bold animate-fade-in hover:scale-105 transition-transform duration-200 cursor-default">
              <Sparkles className="w-4 h-4" />
              Full-Stack Dev
            </div>
          </div>
        </FadeUp>

        {/* Right — Content */}
        <FadeUp>
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Available for opportunities
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.08] tracking-tight mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I'm Yogesh,
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Full-Stack
              <br />
              Developer
            </span>
          </h1>

          <p className="text-white/65 max-w-lg text-base md:text-lg leading-relaxed mb-8">
            A passionate developer dedicated to crafting professional, efficient,
            and modern web solutions that make a real difference.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techBadges.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-purple-700 hover:bg-white/90 font-semibold px-8 gap-2 shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300"
            >
              <a href="#skills">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full border-2 border-white/25 bg-transparent text-white hover:bg-white/10 font-semibold px-8 transition-all duration-300"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Stats row with dividers */}
          <div className="flex gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`pr-8 ${i > 0 ? "pl-8 border-l border-white/15" : ""}`}
              >
                <p
                  className="text-3xl md:text-4xl font-extrabold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-white/50 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default HeroSection;
