import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const links = [
    { label: "About", href: "#foundation" },
    { label: "Skills", href: "#pipeline" },
    { label: "Experience", href: "#record" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#arch" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(12,12,12,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-5">
        <a href="#foundation" className="font-sans font-black text-xl text-foreground tracking-tight hover:text-primary transition-colors">
          KS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-[0.12em] uppercase text-foreground/50 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
