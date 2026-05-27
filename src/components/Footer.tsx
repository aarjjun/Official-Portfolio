import { Link } from "wouter";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's <span className="italic text-accent font-normal">Build</span> Together
            </h2>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors group"
            >
              Explore My Journey
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl leading-none">
                A
              </div>
              <span className="font-bold text-2xl tracking-tight">Arjun A</span>
            </Link>
            <p className="text-white/70 max-w-sm mb-8">
              Building products, leading communities and creating meaningful impact through technology. Project Builder • Community Leader • Problem Solver.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/70 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-accent transition-colors">About Me</Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent transition-colors">Leadership & Impact</Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-white/70 hover:text-accent transition-colors">Knowledge</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact & Socials</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:arjunanoop.codes@gmail.com" className="text-white/70 hover:text-accent transition-colors">Mail</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/arjunanoop/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/aarjjun" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">GitHub</a>
              </li>
              <li className="text-white/70 pt-2">
                Kochi, Kerala, India
              </li>
              <li className="text-white/70">
                IEEE • GDG • TinkerHub
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Arjun A All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
