"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          route="GET /skills"
          title="Skills"
          description="Grouped the way they show up in real projects — language, framework, backend concern, and tooling."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-xl2 bg-white border border-line p-6 shadow-soft hover:shadow-lift hover:border-accent/40 transition-all duration-300"
            >
              <span className="route-tag">{group.route}</span>
              <h3 className="mt-4 font-display font-semibold text-lg text-ink">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-[13px] font-medium px-2.5 py-1 rounded-full bg-bg text-muted group-hover:bg-accent-soft group-hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
