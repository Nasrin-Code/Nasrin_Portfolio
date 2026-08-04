"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { internships } from "@/data/resumeData";

export default function Internships() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading route="GET /experience" title="Internships" />

        <div className="relative max-w-3xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-10">
            {internships.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-11"
              >
                <span
                  className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    job.current
                      ? "border-accent bg-accent-soft"
                      : "border-line bg-white"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${job.current ? "bg-accent animate-pulse" : "bg-muted"}`}
                  />
                </span>

                <div className="rounded-xl2 bg-white border border-line p-6 shadow-soft">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-lg text-ink">{job.role}</h3>
                    {job.current && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-success/10 text-success">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted font-medium">
                    <span>{job.company}</span>
                    <span className="w-1 h-1 rounded-full bg-line" />
                    <span className="font-mono text-xs">{job.period}</span>
                  </div>

                  {job.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-ink/90 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
