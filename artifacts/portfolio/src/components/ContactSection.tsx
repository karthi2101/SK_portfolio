import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle, ArrowRight } from "lucide-react";

const contacts = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Karthick Srinivasan",
    href: "https://linkedin.com/in/karthick-srinivasan-068b011a1",
    bg: "#C0392B",
  },
  {
    icon: Mail,
    label: "Email",
    value: "karthicksri2001@gmail.com",
    href: "mailto:karthicksri2001@gmail.com",
    bg: "#C0392B",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9488733282",
    href: "https://wa.me/919488733282",
    bg: "#C0392B",
  },
];

export function ContactSection() {
  return (
    <section id="arch" className="relative py-28 bg-background overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(232,64,64,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center"
        >
          <h2
            className="font-sans font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            LET'S COLLABORATE
          </h2>
          <p className="text-foreground/45 text-sm md:text-base mt-4 font-light">
            Available for technical collaboration and QA automation excellence
          </p>
          <p className="text-foreground/30 text-xs mt-2 uppercase tracking-widest font-medium">
            Open to Test Automation · SDET · QA Engineering roles
          </p>
        </motion.div>

        <div className="space-y-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 rounded-2xl px-6 py-5 group"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                  textDecoration: "none",
                }}
                whileHover={{
                  borderColor: "rgba(232,64,64,0.4)",
                  boxShadow: "0 8px 32px rgba(232,64,64,0.15), 0 4px 16px rgba(0,0,0,0.4)",
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Icon circle */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: c.bg }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/40 font-medium mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-foreground/90 font-semibold text-sm truncate">{c.value}</p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0" />
              </motion.a>
            );
          })}
        </div>

        <motion.p
          className="text-center text-foreground/20 text-xs tracking-widest uppercase mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          © 2025 Karthick Srinivasan · SDET · QA Automation Engineer
        </motion.p>
      </div>
    </section>
  );
}
