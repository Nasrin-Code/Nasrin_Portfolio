"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/resumeData";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading route="GET /education" title="Education" />

        <div className="grid sm:grid-cols-3 gap-5">
          {education.map((e, i) => (
            <motion.div
              key={e.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl2 bg-white border border-line p-6 shadow-soft"
            >
              <span className="route-tag">{e.level}</span>
              <h3 className="mt-4 font-display font-semibold text-base text-ink leading-snug">
                {e.institution}
              </h3>
              <p className="mt-2 text-sm text-muted">{e.detail}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display font-bold text-xl text-accent">{e.metric}</span>
                {e.period && <span className="text-xs font-mono text-muted">{e.period}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
