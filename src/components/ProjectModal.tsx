"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/resumeData";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white rounded-xl2 shadow-lift max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-line px-6 sm:px-8 py-5 flex items-center justify-between">
              <div>
                <span className="route-tag">GET /projects/{project.slug}</span>
                <h3 className="mt-2 font-display font-bold text-2xl text-ink">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-bg transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Overview
                </h4>
                <p className="text-ink leading-relaxed">{project.overview}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-ink/90 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-bg text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Shipping notes
                </h4>
                <p className="text-sm text-muted leading-relaxed">{project.challenges}</p>
              </div>

              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-medium px-4 py-2.5 hover:bg-accent transition-colors"
                  >
                    <FiGithub /> View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line text-sm font-medium px-4 py-2.5 hover:border-accent hover:text-accent transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
