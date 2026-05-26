import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-lg leading-none">
              A
            </div>
            <span className="font-bold text-xl tracking-tight">Arjun A</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
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
  );
}
