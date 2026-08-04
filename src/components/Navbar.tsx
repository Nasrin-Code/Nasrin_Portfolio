"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#leetcode", label: "leetcode" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg text-ink tracking-tight">
          nasrin<span className="text-accent">.</span>a
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-full text-muted hover:text-ink hover:bg-black/[0.03] transition-colors"
              >
                /{l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-medium px-4 py-2 hover:bg-accent transition-colors duration-300"
          >
            Contact me
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-transform ${open ? "-rotate-45 -translate-y-[3px]" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden glass px-6 pb-4 flex flex-col gap-1 font-mono text-sm"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted hover:text-ink"
              >
                /{l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
