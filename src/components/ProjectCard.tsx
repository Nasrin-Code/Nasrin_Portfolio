"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/data/resumeData";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 22 });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.button
      ref={ref}
      onClick={onOpen}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="text-left w-full rounded-xl2 bg-white border border-line overflow-hidden shadow-soft hover:shadow-lift hover:border-accent/40 transition-shadow duration-300 group"
    >
      <div className="relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-soft via-white to-indigo-soft">
        <span className="font-display font-extrabold text-4xl gradient-text opacity-70 group-hover:scale-110 transition-transform duration-500">
          {initials}
        </span>
        <div className="absolute top-3 right-3">
          {project.featured && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-ink text-white">
              Flagship
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg text-ink">{project.title}</h3>
          <FiArrowUpRight className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="mt-2 text-sm text-muted leading-relaxed">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-bg text-muted"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-bg text-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-4 text-xs font-medium text-muted">
          <span className="inline-flex items-center gap-1">
            <FiGithub size={13} /> Code
          </span>
          <span className="font-mono">{project.period}</span>
        </div>
      </div>
    </motion.button>
  );
}
