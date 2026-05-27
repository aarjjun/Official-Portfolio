import { Link } from "wouter";
import Newsletter from "./Newsletter";

export default function CTASection() {
  return (
    <>
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight mb-8">
            Let's Build Something <span className="italic text-accent font-normal">Impactful Together!</span>
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-accent transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Floating background tags */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 px-4 py-2 border border-white/50 rounded-full text-sm">AI / ML</div>
          <div className="absolute top-20 right-20 px-4 py-2 border border-white/50 rounded-full text-sm">IEEE</div>
          <div className="absolute bottom-20 left-20 px-4 py-2 border border-white/50 rounded-full text-sm">Community</div>
          <div className="absolute top-40 left-1/4 px-4 py-2 border border-white/50 rounded-full text-sm">Hackathons</div>
          <div className="absolute bottom-10 right-1/3 px-4 py-2 border border-white/50 rounded-full text-sm">Leadership</div>
          <div className="absolute top-1/2 right-10 px-4 py-2 border border-white/50 rounded-full text-sm">Innovation</div>
          <div className="absolute bottom-1/3 left-10 px-4 py-2 border border-white/50 rounded-full text-sm">Mentoring</div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
