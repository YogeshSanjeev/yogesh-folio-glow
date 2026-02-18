import { FadeUp } from "@/hooks/use-fade-up";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:yogesh@example.com", handle: "yogesh@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/", handle: "github.com/yogesh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/", handle: "linkedin.com/in/yogesh" },
];

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="section-padding relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-sky-500/5 blur-[100px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's work{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">together</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-md mx-auto">
              Interested in collaborating or have a question? Feel free to reach out through any of these channels.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{s.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.handle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-colors duration-200" />
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yogesh Kumar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
