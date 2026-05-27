import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Leadership & Impact" },
    { href: "/blogs", label: "Knowledge" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-white border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-lg leading-none">
              A
            </div>
            <span className="font-bold text-xl tracking-tight">Arjun A</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location === link.href ? "text-accent" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/30 text-sm font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -mr-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-lg font-medium py-4 border-b border-white/5 transition-colors",
                    location === link.href ? "text-accent" : "text-white/90 hover:text-white hover:pl-2"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-4 mt-6 rounded-full border-2 border-accent text-accent bg-transparent text-base font-bold hover:bg-accent hover:text-primary transition-colors w-full"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
