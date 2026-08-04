import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import LeetCode from "@/components/LeetCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Education />
      <LeetCode />
      <Contact />
      <Footer />
    </main>
  );
}
