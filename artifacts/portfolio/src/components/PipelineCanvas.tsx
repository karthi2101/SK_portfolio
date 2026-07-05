import { motion } from "framer-motion";

export function PipelineCanvas({ activeTab }: { activeTab: string }) {
  const getAccentColor = () => {
    if (activeTab === "DevOps") return "#E8714A";
    if (activeTab === "Data") return "#C04A2A";
    return "#F5A520";
  };

  const color = getAccentColor();

  return (
    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0 pointer-events-none overflow-hidden">
      {/* Circular ring 1 */}
      <motion.div
        className="absolute"
        style={{
          width: "260px",
          height: "260px",
          border: `2px solid ${color}`,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          marginTop: "-130px",
          marginLeft: "-130px",
          opacity: 0.18,
        }}
        animate={{
          rotate: [0, 360],
          scale: activeTab === "Automation" ? [1, 1.04, 1] : activeTab === "DevOps" ? [0.9, 0.94, 0.9] : [1.1, 1.14, 1.1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Circular ring 2 - tilted */}
      <motion.div
        className="absolute"
        style={{
          width: "180px",
          height: "180px",
          border: `1.5px solid ${color}`,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          marginTop: "-90px",
          marginLeft: "-90px",
          opacity: 0.25,
          transform: "rotateX(70deg)",
        }}
        animate={{
          rotate: [0, -360],
          opacity: [0.25, 0.15, 0.25],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Circular ring 3 */}
      <motion.div
        className="absolute"
        style={{
          width: "340px",
          height: "340px",
          border: `1px solid ${color}`,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          marginTop: "-170px",
          marginLeft: "-170px",
          opacity: 0.1,
        }}
        animate={{
          rotate: [0, 180],
          opacity: [0.1, 0.06, 0.1],
        }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Horizontal pipe line */}
      <motion.div
        className="absolute"
        style={{
          width: "60%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          top: "50%",
          left: "20%",
          opacity: 0.2,
        }}
        animate={{
          opacity: [0.2, 0.12, 0.2],
          scaleX: [1, 1.1, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vertical pipe line */}
      <motion.div
        className="absolute"
        style={{
          width: "2px",
          height: "50%",
          background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          top: "25%",
          left: "50%",
          opacity: 0.2,
        }}
        animate={{
          opacity: [0.2, 0.1, 0.2],
          scaleY: [1, 1.1, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Small floating node dots */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 130;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: "8px",
              height: "8px",
              background: color,
              top: "50%",
              left: "50%",
              marginTop: `${y - 4}px`,
              marginLeft: `${x - 4}px`,
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        );
      })}
    </div>
  );
}
