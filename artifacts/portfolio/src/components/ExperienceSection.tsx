import { motion } from "framer-motion";

const experiences = [
  {
    company: "Accenture",
    role: "Quality Engineering Analyst",
    period: "Aug 2024 – Present",
    location: "Chennai",
    metrics: ["95%+", "60%", "250+"],
    bullets: [
      "Spearheaded QA automation across web and desktop applications",
      "Achieved 95%+ test coverage across functional and regression suites",
      "Created 250+ automated test cases using Selenium WebDriver, TestNG, Cucumber (BDD)",
      "Reduced manual regression effort by 60% (3 days → ~5 hours per sprint)",
      "Integrated Jenkins CI/CD, driving 30% reduction in release defect leakage",
      "Executed REST API testing with Swagger for 15+ endpoints",
      "Active Agile/Scrum participant driving quality-first engineering"
    ]
  },
  {
    company: "Atos Syntel",
    role: "Associate Consultant – QA",
    period: "Sep 2022 – Jul 2024",
    location: "Chennai",
    metrics: ["40%", "35%", "28%"],
    bullets: [
      "Built modular POM automation framework from scratch",
      "Delivered 40% improvement in test reusability, 35% reduction in maintenance time",
      "Engineered 200+ comprehensive test scenarios (smoke, sanity, regression, E2E)",
      "Conducted JMeter performance testing for 5 critical modules, uncovering 3 bottlenecks and reducing response time by 28%",
      "Managed 3 test environments (dev, staging, UAT)",
      "Utilized Git version control, collaborating within an 8-member Agile team",
      "Performed robust database validation via complex SQL querying"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="record" className="relative min-h-screen bg-background py-32 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Central Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>
                  {/* Timeline dot */}
                  <div className="absolute left-[-33px] md:left-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(122,158,126,0.5)]" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                  >
                    <div className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                      
                      {/* Subdued metrics background */}
                      <div className="absolute -right-8 -bottom-8 text-8xl font-serif text-foreground/[0.03] select-none pointer-events-none tracking-tighter">
                        {exp.metrics[0]}
                      </div>

                      <div className="mb-6">
                        <h3 className="text-2xl font-serif text-foreground mb-1">{exp.role}</h3>
                        <div className="text-primary font-medium">{exp.company}</div>
                        <div className="text-sm text-foreground/60 uppercase tracking-widest mt-2">
                          {exp.period} · {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-3 relative z-10">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-foreground/80 leading-relaxed flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
