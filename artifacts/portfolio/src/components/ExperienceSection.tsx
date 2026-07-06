import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    index: 1,
    company: "Accenture",
    role: "Quality Engineering Analyst",
    period: "Aug 2024 – Present",
    bullets: [
      "95%+ test coverage across functional and regression test suites",
      "250+ automated test cases using Selenium WebDriver & Cucumber",
      "60% reduction in manual regression effort (3 days → 5 hours/sprint)",
      "Jenkins CI/CD integration reducing defect leakage by 30%",
      "REST API testing for 15+ endpoints using Swagger",
    ],
  },
  {
    index: 2,
    company: "Atos Syntel",
    role: "Associate Consultant – QA",
    period: "Sep 2022 – Jul 2024",
    bullets: [
      "Built modular POM automation framework from scratch",
      "40% improvement in test reusability, 35% reduction in maintenance time",
      "200+ test scenarios covering smoke, sanity, regression and E2E",
      "JMeter performance testing uncovering 3 bottlenecks, 28% faster response time",
      "Managed 3 environments (dev, staging, UAT) with zero-conflict execution",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="record" className="relative py-28 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-sans font-black text-4xl md:text-6xl text-foreground leading-tight">
            PROFESSIONAL<br />
            <span className="text-primary">JOURNEY</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-5"
            >
              {/* Number + line */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary shrink-0"
                  style={{
                    border: "1.5px solid rgba(232,64,64,0.6)",
                    background: "rgba(232,64,64,0.08)",
                    boxShadow: "0 0 16px rgba(232,64,64,0.15)",
                  }}
                >
                  {exp.index}
                </div>
                {i < experiences.length - 1 && (
                  <div className="w-[1px] flex-1 mt-3" style={{ background: "rgba(232,64,64,0.2)" }} />
                )}
              </div>

              {/* Card */}
              <motion.div
                className="flex-1 rounded-2xl p-7 mb-2"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
                whileHover={{
                  boxShadow: "0 8px 40px rgba(232,64,64,0.12), 0 4px 24px rgba(0,0,0,0.5)",
                  borderColor: "rgba(232,64,64,0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-sans font-bold text-xl text-foreground">{exp.company}</h3>
                    <p className="text-primary font-medium text-sm mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-xs text-foreground/40 font-medium tracking-wide shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
