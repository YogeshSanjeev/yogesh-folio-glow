import { FadeUp } from "@/hooks/use-fade-up";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Interested in working together or have a question? Feel free to reach out.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:yogesh@example.com"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yogesh Kumar. All rights reserved.
      </footer>
    </>
  );
};

export default ContactSection;
