import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import SEO from "@/components/SEO";

export default function About() {
  useSEO({
    title: "About Me",
    description: "Discover Arjun A's background as a Student Representative at IEEE Kerala Section, hackathon winner, community leader, and technical organizer.",
    keywords: "Arjun A, About Arjun, IEEE Leadership, Student Leader, B.Tech TocH, Hackathon Winner",
    canonical: window.location.origin + "/about"
  });

  const pageData = {
    title: "About Me",
    description: "Discover Arjun A's background as a Student Representative at IEEE Kerala Section, hackathon winner, community leader, and technical organizer.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" }
    ]
  };

  return (
    <div className="bg-white">
      <SEO schemaType="WebPage" data={pageData} />
      <PageHeader title="About Me" />
      <MarqueeTicker />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-accent rounded-[100px] scale-95 translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" 
                  alt="Arjun A" 
                  className="relative z-10 w-full rounded-[100px] aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-accent italic font-medium mb-4 block">— About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Who is <span className="italic text-accent font-normal">Arjun A?</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a B.Tech student at TocH Institute of Science and Technology with interests spanning AI, web development, product building, leadership, innovation and community engagement. My journey goes beyond development—I focus on building solutions, empowering students, and creating impact.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Beyond development, I actively contribute to student communities, lead technical initiatives, organize events and mentor peers. I enjoy transforming ideas into products, building experiences and creating opportunities for communities across IEEE, GDG, and TinkerHub.
              </p>
              <div className="flex flex-wrap gap-8 pt-8 mb-8 border-t border-gray-100">
                <div>
                  <h4 className="text-4xl font-bold text-primary">5500+</h4>
                  <p className="text-gray-500 text-sm">Participants Reached</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-primary">6+</h4>
                  <p className="text-gray-500 text-sm">IEEE Roles</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-primary">3×</h4>
                  <p className="text-gray-500 text-sm">Hackathon Winner</p>
                </div>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-colors">
                Explore My Journey <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="text-accent italic font-medium mb-4 block">— My Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              My Vision & Mission: <span className="italic text-accent font-normal">Community Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-[#f7f7f7] p-10 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-accent shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To build technology that empowers communities, creating accessible solutions and fostering inclusive environments where technical knowledge is shared freely and collaboratively.
              </p>
            </div>
            <div className="bg-[#f7f7f7] p-10 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between ideas and execution through strategic product building, while mentoring students and organizing experiences that connect technology with people.
              </p>
            </div>
          </div>

          {/* FULL WIDTH PHOTO + STATS */}
          <div className="relative mb-24 rounded-3xl overflow-hidden">
            <div className="aspect-[21/9] bg-gray-900 relative">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" 
                alt="Hackathon Event" 
                className="w-full h-full object-cover opacity-70"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                 <h2 className="text-3xl md:text-5xl font-bold mb-4">Building. Leading. Impacting.</h2>
                 <p className="text-lg opacity-80 max-w-2xl px-4">Driven by a passion for technology and a commitment to community empowerment.</p>
              </div>
            </div>
            {/* Stats bar at bottom */}
            <div className="bg-accent py-6 px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary">
                <div>
                  <h4 className="text-4xl font-bold">5500+</h4>
                  <p className="text-sm font-semibold mt-1">Participants Reached</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold">Multiple</h4>
                  <p className="text-sm font-semibold mt-1">Large Scale Events</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold">6</h4>
                  <p className="text-sm font-semibold mt-1">IEEE Leadership Roles</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold">3</h4>
                  <p className="text-sm font-semibold mt-1">Hackathon Wins</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>

      <section className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ContactForm />
        </div>
      </section>

      <MarqueeTicker />
    </div>
  );
}
