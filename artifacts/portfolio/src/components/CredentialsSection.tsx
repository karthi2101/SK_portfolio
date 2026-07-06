import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  "Microsoft Azure Fundamentals – AZ-900",
  "Microsoft Data Fundamentals – DP-900",
  "Microsoft GitHub Copilot – GH-300",
  "Google Cloud Digital Leader",
  "Google Generative AI Leader",
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="relative py-28 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-sans font-black text-4xl md:text-6xl text-foreground leading-tight">
            CREDENTIALS &amp;<br />
            <span className="text-primary">EDUCATION</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 mb-10"
          style={{
            background: "#141414",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
          }}
          whileHover={{
            boxShadow: "0 8px 40px rgba(232,64,64,0.12), 0 4px 24px rgba(0,0,0,0.5)",
            borderColor: "rgba(232,64,64,0.25)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-sans font-bold text-2xl text-foreground mb-1">
            Bachelor of Engineering
          </h3>
          <p className="text-primary font-medium text-sm mb-2">Computer Science and Engineering</p>
          <p className="text-foreground/55 text-sm">
            Prince Dr. K. Vasudevan College of Engineering and Technology, Chennai
          </p>

          <div className="flex items-center gap-4 mt-6">
            <span
              className="inline-block px-4 py-1.5 rounded-md text-sm font-bold text-white"
              style={{ background: "rgba(232,64,64,0.85)" }}
            >
              CGPA: 8.4
            </span>
            <span className="text-foreground/35 text-sm">2018 – 2022</span>
          </div>
        </motion.div>

        {/* Certifications */}
        <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-5 font-medium">
          Premium Certifications
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-xl px-5 py-4"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
              whileHover={{
                borderColor: "rgba(232,64,64,0.3)",
                boxShadow: "0 6px 24px rgba(232,64,64,0.1)",
              }}
              transition={{ duration: 0.25 }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground/80 font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
