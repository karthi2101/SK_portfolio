import { motion } from "framer-motion";
import { HeroCanvas } from "./HeroCanvas";

export function HeroSection() {
  return (
    <section id="foundation" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      <HeroCanvas />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase">
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-foreground">
              KARTHICK<br />SRINIVASAN
            </h1>
            
            <p className="text-primary tracking-widest uppercase text-sm font-medium mt-4">
              SDET | QA Automation Engineer
            </p>

            <p className="text-foreground/50 text-sm md:text-base leading-relaxed max-w-xl mt-6 font-sans font-light">
              3.8 years engineering scalable automation frameworks across enterprise applications —
              bridging traditional QA with cloud &amp; AI innovation as a certified Google Cloud
              and Microsoft Azure professional.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="border-l border-primary/30 pl-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="text-4xl md:text-5xl font-serif text-foreground/20 font-light tracking-tighter mb-2">4+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60">Years Experience</div>
            </div>
            
            <div className="border-l border-primary/30 pl-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="text-4xl md:text-5xl font-serif text-foreground/20 font-light tracking-tighter mb-2">60%</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60">Regression Saved</div>
            </div>
            
            <div className="border-l border-primary/30 pl-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="text-4xl md:text-5xl font-serif text-foreground/20 font-light tracking-tighter mb-2">95%+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60">Test Coverage</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-foreground/40"></span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
