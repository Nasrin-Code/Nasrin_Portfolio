"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/resumeData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading route="GET /certifications" title="Certifications & Training" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="rounded-xl2 bg-white border border-line p-5 shadow-soft hover:shadow-lift hover:border-indigo/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-soft flex items-center justify-center text-indigo mb-4">
                <FiAward size={18} />
              </div>
              <h3 className="font-display font-semibold text-sm text-ink leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-xs text-muted font-medium">{c.issuer}</p>
              <p className="mt-1 text-xs font-mono text-accent">{c.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
