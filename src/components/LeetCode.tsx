"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/resumeData";

type Stats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
};

const USERNAME = "nasrin512003";

export default function LeetCode() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    // Public, unauthenticated stats endpoint. If it's unreachable (rate limits,
    // network policy, etc.) we fall back to a clean link-out card — no numbers
    // are ever invented.
    fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (data?.status === "error") throw new Error("failed");
        setStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          ranking: data.ranking,
        });
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="leetcode" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          route="GET /leetcode"
          title="LeetCode"
          description="Live problem-solving stats, pulled straight from her public profile."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl2 bg-ink text-white p-8 sm:p-10 shadow-lift relative overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-indigo/30 blur-3xl" />

          <div className="relative flex flex-wrap items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <SiLeetcode size={28} className="text-accent" />
              <div>
                <p className="font-display font-semibold">u/{USERNAME}</p>
                <p className="text-sm text-white/50">Consistency over streaks</p>
              </div>
            </div>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-accent px-4 py-2 text-sm font-medium transition-colors"
            >
              View live profile <FiArrowUpRight />
            </a>
          </div>

          {status === "ready" && stats && (
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat label="Solved" value={stats.totalSolved} />
              <Stat label="Easy" value={stats.easySolved} color="text-success" />
              <Stat label="Medium" value={stats.mediumSolved} color="text-accent" />
              <Stat label="Hard" value={stats.hardSolved} color="text-red-400" />
            </div>
          )}

          {status === "loading" && (
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6 animate-pulse">
              {[0, 1, 2, 3].map((k) => (
                <div key={k} className="h-16 rounded-xl bg-white/10" />
              ))}
            </div>
          )}

          {status === "error" && (
            <p className="relative text-white/60 text-sm">
              Live stats are momentarily unavailable — head over to the profile link above to see
              the current solve count and rating.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div>
      <div className={`font-display font-extrabold text-3xl ${color ?? "text-white"}`}>
        {value}
      </div>
      <div className="mt-1 text-xs font-mono text-white/50">{label}</div>
    </div>
  );
}
