"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";
import { aboutHighlights, profile } from "@/data/resumeData";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading route="GET /about" title="About" />

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl text-ink leading-relaxed">{profile.summary}</p>

            <p className="mt-6 text-muted leading-relaxed">
              She recently completed her B.E. in Electronics and Communication Engineering,
              graduating with an 8.6 CGPA, and has since focused her energy on backend
              engineering &mdash; designing, shipping, and documenting production-ready Python
              applications end to end.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {aboutHighlights.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="text-sm font-medium px-3.5 py-1.5 rounded-full bg-white border border-line text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-xl2 p-8 shadow-soft grid grid-cols-2 gap-8"
          >
            <AnimatedCounter target={7} label="projects shipped" />
            <AnimatedCounter target={2} label="internships" />
            <AnimatedCounter target={70} suffix="%" label="manual effort cut" />
            <div className="text-center">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
                8.6<span className="text-accent">/10</span>
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted font-mono">CGPA</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
