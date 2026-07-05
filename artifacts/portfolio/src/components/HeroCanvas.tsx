import { motion } from "framer-motion";

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large horizontal slab - amber/gold */}
      <motion.div
        className="absolute rounded-sm"
        style={{
          width: "55%",
          height: "18px",
          background: "linear-gradient(135deg, #C47F10 0%, #F5A520 60%, #E8912A 100%)",
          top: "22%",
          left: "-8%",
          transformOrigin: "left center",
          boxShadow: "0 8px 40px rgba(245,165,32,0.20)",
          opacity: 0.45,
        }}
        animate={{
          y: [0, -12, 0],
          rotateZ: [-1.2, 1.2, -1.2],
          opacity: [0.55, 0.45, 0.55],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tall vertical slab - coral */}
      <motion.div
        className="absolute rounded-sm"
        style={{
          width: "14px",
          height: "42%",
          background: "linear-gradient(180deg, #C04A2A 0%, #E8714A 50%, #D05A38 100%)",
          top: "15%",
          right: "18%",
          boxShadow: "0 12px 50px rgba(232,113,74,0.25)",
          opacity: 0.35,
        }}
        animate={{
          y: [0, 16, 0],
          rotateZ: [0.5, -0.5, 0.5],
          opacity: [0.35, 0.28, 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Wide thin slab - amber lower */}
      <motion.div
        className="absolute rounded-sm"
        style={{
          width: "70%",
          height: "10px",
          background: "linear-gradient(90deg, transparent 0%, #C47F10 20%, #F5A520 60%, #E8912A 85%, transparent 100%)",
          bottom: "28%",
          right: "-10%",
          opacity: 0.25,
          boxShadow: "0 4px 24px rgba(245,165,32,0.15)",
        }}
        animate={{
          y: [0, 8, 0],
          x: [0, -10, 0],
          opacity: [0.4, 0.3, 0.4],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Small square block - coral accent */}
      <motion.div
        className="absolute rounded-sm"
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #E8714A 0%, #C04A2A 100%)",
          top: "60%",
          left: "10%",
          opacity: 0.18,
          boxShadow: "0 8px 30px rgba(232,113,74,0.25)",
          transform: "rotate(15deg)",
        }}
        animate={{
          y: [0, -20, 0],
          rotateZ: [15, 25, 15],
          opacity: [0.12, 0.08, 0.12],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Thin diagonal accent line */}
      <motion.div
        className="absolute"
        style={{
          width: "2px",
          height: "30%",
          background: "linear-gradient(180deg, transparent 0%, #F5A520 50%, transparent 100%)",
          top: "30%",
          right: "32%",
          opacity: 0.3,
          transform: "rotate(12deg)",
        }}
        animate={{
          opacity: [0.25, 0.15, 0.25],
          scaleY: [1, 0.85, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Large background glow - amber */}
      <motion.div
        className="absolute rounded-sm"
        style={{
          width: "45%",
          height: "45%",
          background: "radial-gradient(ellipse at center, #F5A520 0%, transparent 70%)",
          top: "5%",
          right: "-5%",
          opacity: 0.08,
        }}
        animate={{
          opacity: [0.18, 0.12, 0.18],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
