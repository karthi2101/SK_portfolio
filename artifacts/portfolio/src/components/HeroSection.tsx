import { motion } from "framer-motion";
import { HeroCanvas } from "./HeroCanvas";

const metrics = [
  { value: "4+", label: "Years Experience" },
  { value: "60%", label: "Regression Time Saved" },
  { value: "95%", label: "Test Coverage" },
];

export function HeroSection() {
  return (
    <section
      id="foundation"
      style={{ position: "relative", minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "5rem", paddingBottom: "4rem", background: "#111111" }}
    >
      <HeroCanvas />

      {/* Red radial glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "500px", background: "radial-gradient(ellipse at center, rgba(232,64,64,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "960px", margin: "0 auto", padding: "0 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        <motion.h1
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem, 13vw, 9.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#F2F2F2", margin: 0 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          KARTHICK<br />SRINIVASAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ marginTop: "2rem" }}
        >
          <span style={{ display: "inline-block", background: "rgba(18,8,8,0.95)", border: "1px solid rgba(232,64,64,0.45)", borderRadius: "9999px", padding: "10px 28px", color: "#E84040", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
            SDET | Quality Engineering
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: "1.5rem", color: "rgba(242,242,242,0.4)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "520px", fontWeight: 300, fontFamily: "'Inter', sans-serif" }}
        >
          Quality Engineer with 3.8 years of experience in test automation and
          functional/regression testing across enterprise applications. Skilled in building
          and maintaining automated test suites using Selenium with Java, validating APIs
          with Postman, and writing SQL queries to verify data integrity at the database level.
          Experienced working in Agile teams using JIRA and Azure DevOps for test planning,
          defect tracking, and release management.
          <br /><br />
          Google Cloud Certified Generative AI Leader and Cloud Digital Leader, with
          Microsoft Azure Fundamentals certification — actively exploring how AI and cloud
          platforms intersect with modern QA practices.
        </motion.p>

        <motion.div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem", marginTop: "4rem", width: "100%", maxWidth: "720px" }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "2.5rem", paddingBottom: "2.5rem", borderRadius: "1rem", background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 4px 30px rgba(0,0,0,0.5)", cursor: "default" }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(232,64,64,0.2), 0 4px 20px rgba(0,0,0,0.5)", borderColor: "rgba(232,64,64,0.35)" }}
              transition={{ duration: 0.25 }}
            >
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem,4.5vw,3.5rem)", color: "#E84040", lineHeight: 1, marginBottom: "0.75rem" }}>
                {m.value}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,242,242,0.4)", textAlign: "center" }}>
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,242,242,0.2)" }}>Scroll</span>
        <motion.div
          style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #E84040, transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
