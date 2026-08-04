"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  route,
  title,
  description,
}: {
  route: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mb-12"
    >
      <span className="route-tag">{route}</span>
      <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted text-base sm:text-lg">{description}</p>}
    </motion.div>
  );
}
