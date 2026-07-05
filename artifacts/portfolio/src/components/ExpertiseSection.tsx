import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PipelineCanvas } from "./PipelineCanvas";

const skillsData = {
  Automation: ["Selenium WebDriver (Java)", "TestNG", "Cucumber (BDD)", "Page Object Model", "Playwright", "JavaScript", "Cross-browser Testing"],
  DevOps: ["Jenkins", "GitHub Actions", "Docker", "Git", "CI/CD Integration", "Azure DevOps", "Microsoft Azure", "Google Cloud Platform"],
  Data: ["Swagger (REST API Testing)", "JMeter (Performance)", "Postman", "SQL (Database Validation)", "Jira", "TCMC"]
};

type TabType = keyof typeof skillsData;

export function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState<TabType>("Automation");

  return (
    <section id="pipeline" className="relative min-h-screen bg-card py-32 overflow-hidden flex flex-col justify-center">
      <PipelineCanvas activeTab={activeTab} />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-16">
            Core Expertise
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Tabs */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            {(Object.keys(skillsData) as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left text-2xl md:text-3xl font-serif transition-all duration-500 relative py-4 ${
                  activeTab === tab ? "text-foreground" : "text-foreground/30 hover:text-foreground/60"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 bottom-0 w-full h-[1px] bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Skill Tags */}
          <div className="lg:w-2/3 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/40 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl p-8 shadow-xl flex flex-wrap gap-4"
              >
                {skillsData[activeTab].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-5 py-3 rounded-full bg-background/50 border border-border text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(122,158,126,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
