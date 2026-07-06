import { motion } from "framer-motion";
import { Code2, Zap, Database } from "lucide-react";

const categories = [
  {
    icon: Code2,
    label: "Automation",
    skills: ["Selenium WebDriver (Java)", "Playwright", "TestNG", "Cucumber (BDD)", "Page Object Model"],
  },
  {
    icon: Zap,
    label: "DevOps",
    skills: ["Jenkins", "Docker", "GitHub Actions", "Azure DevOps", "Git Version Control"],
  },
  {
    icon: Database,
    label: "Data",
    skills: ["SQL Database Validation", "Microsoft Azure", "Google Cloud", "JMeter", "Postman"],
  },
];

const additionalSkills = [
  "Core Java",
  "Cucumber BDD",
  "Page Object Model",
  "Agile Scrum",
  "REST API Testing",
  "Performance Testing",
  "Git Version Control",
  "TCMC",
];

export function ExpertiseSection() {
  return (
    <section id="pipeline" className="relative py-28 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center"
        >
          <h2 className="font-sans font-black text-4xl md:text-6xl text-foreground">
            CORE <span className="text-primary">EXPERTISE</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Outer container card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-3xl p-6 md:p-8"
          style={{
            background: "#141414",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* 3-column category grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 group"
                  style={{
                    background: "#1C1C1C",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    transition: "box-shadow 0.3s, border-color 0.3s",
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 12px 36px rgba(232,64,64,0.14), 0 4px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                    <span className="font-sans font-bold text-lg text-foreground">{cat.label}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.skills.map((skill, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mb-7" />

          {/* Additional skills */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-4 font-medium">
              Additional Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-4 py-2 rounded-lg text-sm text-foreground/70 font-medium"
                  style={{
                    background: "#222",
                    border: "1px solid rgba(232,64,64,0.25)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
