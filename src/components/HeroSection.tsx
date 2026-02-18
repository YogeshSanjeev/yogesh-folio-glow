import { Button } from "@/components/ui/button";
import { FadeUp } from "@/hooks/use-fade-up";
import { Trophy, ArrowRight, Sparkles, Download } from "lucide-react";
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
        background:
          "linear-gradient(135deg, hsl(197 78% 52%) 0%, hsl(200 72% 57%) 30%, hsl(205 65% 50%) 60%, hsl(210 60% 45%) 100%)",
      }}
    >
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-3xl border border-white/10 rotate-12 animate-[spin_25s_linear_infinite] hidden lg:block" />
      <div className="absolute top-28 right-28 w-20 h-20 rounded-2xl border border-white/[0.07] -rotate-6 animate-[spin_18s_linear_infinite_reverse] hidden lg:block" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-300/15 blur-[100px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-200/10 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-300/10 blur-[80px] animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-white/20 animate-ping" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-white/15 animate-ping [animation-delay:1s]" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-center px-6 md:px-12 lg:px-20 py-32 md:py-40 relative z-10">
        {/* Left — Profile photo */}
        <FadeUp className="flex justify-center md:justify-start">
          <div className="relative group">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-cyan-300/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700" />

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full border-[3px] border-white/25 bg-white/10 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.25)] group-hover:shadow-[0_0_80px_rgba(56,189,248,0.35)] transition-all duration-500">
              <img src={profileImg} alt="Yogesh Kumar" className="w-full h-full object-cover" />
            </div>

            {/* Experience badge — glassmorphism */}
            <div className="absolute top-2 -right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl shadow-black/10 flex items-center gap-2.5 animate-fade-in hover:scale-105 transition-transform duration-200 cursor-default">
              <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-sky-600" />
              </div>
              <div className="text-xs leading-tight">
                <span className="text-sky-600 text-lg font-extrabold block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1+</span>
                <span className="text-gray-500 font-medium">Years Exp.</span>
              </div>
            </div>

            {/* Bottom badge */}
            <div className="absolute -bottom-3 left-0 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-full px-5 py-2.5 shadow-xl shadow-sky-500/25 flex items-center gap-2 text-sm font-bold animate-fade-in hover:scale-105 transition-transform duration-200 cursor-default">
              <Sparkles className="w-4 h-4" />
              Full-Stack Dev
            </div>
          </div>
        </FadeUp>

        {/* Right — Content */}
        <FadeUp>
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-lg shadow-black/5">
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
            <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
              Full-Stack
              <br />
              Developer
            </span>
          </h1>

          <p className="text-white/70 max-w-lg text-base md:text-lg leading-relaxed mb-8">
            A passionate developer dedicated to crafting professional, efficient,
            and modern web solutions that make a real difference.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techBadges.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/10 text-white/85 border border-white/15 backdrop-blur-sm hover:bg-white/20 hover:border-white/25 transition-all duration-200 cursor-default"
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
              className="rounded-full bg-white text-sky-700 hover:bg-white/90 font-semibold px-8 gap-2 shadow-lg shadow-sky-900/15 hover:shadow-xl hover:shadow-sky-900/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <a href="#skills">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full border-2 border-white/25 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 font-semibold px-8 hover:-translate-y-0.5 transition-all duration-300"
            >
              <a href="#contact">Contact Me</a>
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
