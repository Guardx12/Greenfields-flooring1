"use client";

import { motion } from "framer-motion";

export function RollingLogo() {
  // Subtle, premium "logo rolling out carpet" motif: logo glides, a carpet trail reveals underneath.
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="h-14 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(199,255,26,0.85), rgba(140,255,80,0.6), rgba(255,255,255,0.10))",
            }}
          />
        </div>
      </div>

      <motion.div
        initial={{ x: "-20%" }}
        animate={{ x: ["-20%", "95%", "-20%"] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 720, 1440] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-20 w-20 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-soft bg-black/30"
        >
          <img src="/logo.jpg" alt="Greenfields logo" className="h-full w-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
