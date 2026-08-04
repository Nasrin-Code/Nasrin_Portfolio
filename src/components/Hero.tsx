"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import dynamic from "next/dynamic";
import TypingText from "./TypingText";
import ScrollIndicator from "./ScrollIndicator";
import { profile } from "@/data/resumeData";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <ParticleBackground />

      {/* soft gradient blobs */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-indigo/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="route-tag mb-6"
          >
            GET /hero &middot; 200 OK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl text-ink"
          >
            Hi, I&apos;m
            <br />
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-5 text-xl sm:text-2xl text-muted h-9"
          >
            <TypingText words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
          >
            Entry-level Python Developer &amp; Software Engineer shipping full-stack,
            production-ready applications with Flask, REST APIs, and clean OOP design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeFile}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-medium px-5 py-3 shadow-soft hover:shadow-glow hover:bg-accent transition-all duration-300"
            >
              <FiDownload className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white text-sm font-medium px-5 py-3 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              View Projects
              <FiArrowUpRight />
            </a>

            <div className="flex items-center gap-1 ml-1">
              {[
                { href: profile.github, icon: FaGithub, label: "GitHub" },
                { href: profile.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                { href: profile.leetcode, icon: SiLeetcode, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-muted hover:text-accent hover:bg-accent-soft transition-colors duration-300"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
          style={{ perspective: 1000 }}
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="glass rounded-xl2 p-6 shadow-soft relative"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #FF7A00, #4F46E5, transparent, #FF7A00)",
                    opacity: 0.9,
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                  }}
                />
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-lift bg-white">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Nasrin A"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, 288px"
                    className="object-cover"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-6 glass rounded-2xl px-3 py-2 shadow-soft hidden sm:block"
              >
                <span className="font-mono text-xs text-indigo font-medium">def build():</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 bottom-10 glass rounded-2xl px-3 py-2 shadow-soft hidden sm:block"
              >
                <span className="font-mono text-xs text-accent font-medium">200 OK</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
