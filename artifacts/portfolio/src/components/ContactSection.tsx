import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="arch" className="relative bg-[#1C1C1C] text-white py-32 min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Abstract Arch Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[80%] pointer-events-none opacity-25">
        <div className="w-full h-full border-t border-l border-r border-[#F5A520] rounded-t-[500px]" />
        <div className="absolute inset-8 border-t border-l border-r border-[#E8714A] rounded-t-[500px] opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-[#F5A520] font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Structure 05 / The Arch
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-[#F5F2EE] mb-6">
            Available for Technical<br />Collaboration
          </h2>
          <p className="text-[#E8E0D5]/70 tracking-widest uppercase text-sm font-medium">
            SDET · Chennai, India · Open to Test Automation, SDET &amp; QA Engineering roles
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://linkedin.com/in/karthick-srinivasan-068b011a1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:border-[#F5A520] hover:shadow-[0_0_20px_rgba(245,165,32,0.25)] group"
          >
            <Linkedin className="w-5 h-5 text-[#E8E0D5] group-hover:text-[#F5A520] transition-colors" />
            <span className="text-sm font-medium tracking-wide">LinkedIn</span>
          </a>
          
          <a
            href="mailto:karthicksri2001@gmail.com"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:border-[#F5A520] hover:shadow-[0_0_20px_rgba(245,165,32,0.25)] group"
          >
            <Mail className="w-5 h-5 text-[#E8E0D5] group-hover:text-[#F5A520] transition-colors" />
            <span className="text-sm font-medium tracking-wide">Email</span>
          </a>

          <a
            href="https://wa.me/919488733282"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:border-[#E8714A] hover:shadow-[0_0_20px_rgba(232,113,74,0.25)] group"
          >
            <MessageCircle className="w-5 h-5 text-[#E8E0D5] group-hover:text-[#E8714A] transition-colors" />
            <span className="text-sm font-medium tracking-wide">WhatsApp</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 w-full text-center text-[#E8E0D5]/40 text-xs tracking-widest uppercase">
        © 2025 Karthick Srinivasan · SDET · QA Automation Engineer
      </div>
    </section>
  );
}
