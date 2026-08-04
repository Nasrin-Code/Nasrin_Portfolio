import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { profile } from "@/data/resumeData";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Made with <span className="text-accent">&hearts;</span> by {profile.name}
        </p>
        <div className="flex items-center gap-1">
          {[
            { href: `mailto:${profile.email}`, icon: FiMail, label: "Email" },
            { href: profile.github, icon: FaGithub, label: "GitHub" },
            { href: profile.linkedin, icon: FaLinkedin, label: "LinkedIn" },
            { href: profile.leetcode, icon: SiLeetcode, label: "LeetCode" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-accent transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
