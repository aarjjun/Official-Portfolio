import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, FolderOpen, Star, BookOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Leadership & Impact" },
    { href: "/knowledge", label: "Knowledge" },
    { href: "/contact", label: "Contact" },
  ];

  const mobileNavLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderOpen },
    { href: "/services", label: "Impact", icon: Star },
    { href: "/knowledge", label: "Journal", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-primary text-white border-b border-white/10 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group z-50">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-sm relative">
                <img src="/imagesprof/whoami.jpg" alt="Arjun A" className="w-full h-full object-cover" />
                {/* Fallback styling implicitly handled if image fails to load, but we know it's there */}
              </div>
              <span className="font-bold text-xl tracking-tight">Arjun A</span>
            </Link>

            <div className="flex items-center gap-8">
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

            <div className="flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/30 text-sm font-medium hover:bg-white hover:text-primary transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Header (Minimal) */}
      <div className="lg:hidden sticky top-0 z-40 w-full bg-primary/95 backdrop-blur-md text-white border-b border-white/10 flex items-center justify-center h-16 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-sm">
            <img src="/imagesprof/whoami.jpg" alt="Arjun A" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg tracking-tight">Arjun A</span>
        </Link>
      </div>

      {/* Mobile Floating Pill Bottom Nav */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
        <div className="bg-primary/90 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl p-2 flex items-center justify-between">
          {mobileNavLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex flex-col items-center justify-center w-14 h-12 rounded-full transition-all duration-300",
                  isActive ? "text-accent" : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={cn("w-5 h-5 mb-1 relative z-10", isActive ? "stroke-[2.5px]" : "stroke-2")} />
                <span className="text-[9px] font-semibold tracking-wide relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
