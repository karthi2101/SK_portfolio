import { motion } from "framer-motion";

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Top horizontal bar - red tint */}
      <motion.div
        className="absolute rounded-sm"
        style={{
          width: "50%",
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(232,64,64,0.4) 40%, rgba(232,64,64,0.15) 100%)",
          top: "18%",
          left: "-5%",
        }}
        animate={{ x: [0, 30, 0], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right vertical accent */}
      <motion.div
        className="absolute"
        style={{
          width: "1px",
          height: "30%",
          background: "linear-gradient(180deg, transparent, rgba(232,64,64,0.35), transparent)",
          top: "20%",
          right: "20%",
        }}
        animate={{ y: [0, 20, 0], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating square — top right */}
      <motion.div
        className="absolute rounded-lg"
        style={{
          width: "120px",
          height: "120px",
          border: "1px solid rgba(232,64,64,0.15)",
          top: "12%",
          right: "10%",
          transform: "rotate(20deg)",
        }}
        animate={{ rotate: [20, 32, 20], opacity: [0.5, 0.25, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small square — bottom left */}
      <motion.div
        className="absolute rounded-md"
        style={{
          width: "64px",
          height: "64px",
          background: "rgba(232,64,64,0.07)",
          border: "1px solid rgba(232,64,64,0.2)",
          bottom: "22%",
          left: "8%",
          transform: "rotate(-12deg)",
        }}
        animate={{ rotate: [-12, -24, -12], y: [0, -16, 0], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Bottom wide line */}
      <motion.div
        className="absolute"
        style={{
          width: "40%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(232,64,64,0.2), transparent)",
          bottom: "30%",
          right: "0%",
        }}
        animate={{ opacity: [0.5, 0.15, 0.5], scaleX: [1, 0.8, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Large circle outline */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid rgba(232,64,64,0.06)",
          top: "50%",
          left: "50%",
          marginTop: "-250px",
          marginLeft: "-250px",
        }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.25, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
