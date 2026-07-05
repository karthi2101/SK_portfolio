import { motion } from "framer-motion";

const credentials = [
  { title: "Microsoft Azure Fundamentals", code: "AZ-900" },
  { title: "Microsoft Data Fundamentals", code: "DP-900" },
  { title: "Microsoft GitHub Copilot", code: "GH-300" },
  { title: "Google Cloud Digital Leader", code: "GCP" },
  { title: "Google Generative AI Leader", code: "GenAI" },
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="relative py-32 bg-card min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            Certifications & Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education - Spans 1 column on LG, acts as anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white/40 dark:bg-black/10 backdrop-blur-md border border-white/20 border-t-primary p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="text-xs uppercase tracking-widest text-primary mb-6">Education</div>
            <h3 className="text-2xl font-serif text-foreground mb-4">B.E., Computer Science and Engineering</h3>
            <p className="text-foreground/80 mb-2">Prince Dr. K. Vasudevan College of Engineering and Technology, Chennai</p>
            <div className="text-sm font-medium text-foreground/60 uppercase tracking-widest mt-8">
              2018 – 2022
            </div>
            <div className="mt-4 inline-block px-3 py-1 bg-background rounded-full text-xs font-medium text-foreground border border-border">
              CGPA: 8.4
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/40 dark:bg-black/10 backdrop-blur-md border border-white/20 border-t-primary p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded bg-background border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                    <span className="text-[10px] font-bold text-foreground/50">{cert.code}</span>
                  </div>
                  <h4 className="text-lg font-medium text-foreground leading-snug">{cert.title}</h4>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs font-medium text-primary">
                  <span className="uppercase tracking-widest">Verified</span>
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
