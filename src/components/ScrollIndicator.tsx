"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to about section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
    >
      <span className="font-mono text-[11px] tracking-widest uppercase">scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-5 h-8 rounded-full border border-line flex justify-center pt-1.5"
      >
        <span className="w-1 h-1.5 rounded-full bg-accent" />
      </motion.div>
    </motion.a>
  );
}
