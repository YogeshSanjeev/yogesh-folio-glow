import { FadeUp } from "@/hooks/use-fade-up";
import { Mail, Phone, Linkedin, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "yogesh@example.com" },
  { icon: Phone, label: "Phone", value: "+91 12345 67890" },
  { icon: Linkedin, label: "LinkedIn", value: "Yogesh Kumar" },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri, 9:00 - 17:00" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Create Something Amazing!
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Get in Touch */}
            <FadeUp>
              <h3 className="text-xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right — Send a Message */}
            <FadeUp>
              <h3 className="text-xl font-bold mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Subject</label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Message</label>
                  <Textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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
