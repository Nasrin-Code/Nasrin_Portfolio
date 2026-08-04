"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/resumeData";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "sending" | "sent" | "error";

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Add a short message.";
  else if (values.message.trim().length < 10) errors.message = "Message is a little short.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      // Wire up with your own EmailJS service/template/public keys:
      // const emailjs = (await import("@emailjs/browser")).default;
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          route="POST /contact"
          title="Let's build something"
          description="Open to entry-level Python Developer, Software Developer, and AI/ML Engineer roles."
        />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-xl2 bg-white border border-line p-5 shadow-soft hover:border-accent hover:text-accent transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-accent-soft text-accent flex items-center justify-center">
                <FiMail size={18} />
              </span>
              <div>
                <p className="text-xs text-muted font-mono">Email</p>
                <p className="font-medium text-ink">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl2 bg-white border border-line p-5 shadow-soft hover:border-indigo hover:text-indigo transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-indigo-soft text-indigo flex items-center justify-center">
                <FaLinkedin size={18} />
              </span>
              <div>
                <p className="text-xs text-muted font-mono">LinkedIn</p>
                <p className="font-medium text-ink">linkedin.com/in/nasrin512003</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl2 bg-white border border-line p-5 shadow-soft hover:border-ink transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-bg text-ink flex items-center justify-center">
                <FaGithub size={18} />
              </span>
              <div>
                <p className="text-xs text-muted font-mono">GitHub</p>
                <p className="font-medium text-ink">github.com/Nasrin-Code</p>
              </div>
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl2 bg-white border border-line p-5 shadow-soft hover:border-accent hover:text-accent transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-accent-soft text-accent flex items-center justify-center">
                <SiLeetcode size={18} />
              </span>
              <div>
                <p className="text-xs text-muted font-mono">LeetCode</p>
                <p className="font-medium text-ink">leetcode.com/u/nasrin512003</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-xl2 bg-white border border-line p-6 sm:p-8 shadow-soft space-y-5"
          >
            <Field
              label="Name"
              name="name"
              value={values.name}
              error={errors.name}
              onChange={(v) => setValues((s) => ({ ...s, name: v }))}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={(v) => setValues((s) => ({ ...s, email: v }))}
            />
            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
                className={`mt-1.5 w-full rounded-xl border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:bg-white transition-colors outline-none ${
                  errors.message ? "border-red-300" : "border-line focus:border-accent"
                }`}
                placeholder="Tell me about the role or opportunity..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white text-sm font-medium px-5 py-3.5 shadow-soft hover:shadow-glow hover:bg-accent transition-all duration-300 disabled:opacity-60"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send message <FiSend />
                </>
              )}
            </motion.button>

            {status === "sent" && (
              <p className="text-sm text-success text-center">
                Thanks — your message is in. I&apos;ll reply by email shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please email {profile.email} directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1.5 w-full rounded-xl border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:bg-white transition-colors outline-none ${
          error ? "border-red-300" : "border-line focus:border-accent"
        }`}
        placeholder={label === "Email" ? "you@example.com" : "Your name"}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
