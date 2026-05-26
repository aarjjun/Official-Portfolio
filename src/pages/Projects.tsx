import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import { useSEO } from "@/hooks/useSEO";
import SEO from "@/components/SEO";

export default function Projects() {
  useSEO({
    title: "Projects Portfolio",
    description: "Explore the technical projects, AI tools, and student volunteering showcases built by Arjun A.",
    keywords: "Arjun A Projects, AI Eye for the Blind, Maveli GPT, IEEE YESS 2025, Student Innovation, TocH",
    canonical: window.location.origin + "/projects"
  });

  interface ProjectItem {
    image: string;
    tags: string[];
    title: string;
    linkedinEmbed?: string;
    externalLink?: string;
  }

  const projects: ProjectItem[] = [
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      tags: ["Deep Learning", "Python", "AI / ML"],
      title: "DL Manager"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      tags: ["Computer Vision", "Safety AI", "Real-Time"],
      title: "AI Hazard Detection"
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      tags: ["Robotics", "ESP32", "Hardware", "IoT"],
      title: "Mini Desk Robot using ESP32"
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      tags: ["AI / ML", "Accessibility", "Flask", "OpenCV"],
      title: "AI Eye for the Blind"
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      tags: ["Supabase", "AI System", "Digital Archive"],
      title: "The Infinite Library of Forgotten Knowledge"
    },
    {
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      tags: ["Chatbot", "Node.js", "Web App"],
      title: "Maveli GPT & Chat App"
    }
  ];

  const pageData = {
    title: "Projects Portfolio",
    description: "Explore the technical projects, AI tools, and student volunteering showcases built by Arjun A.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" }
    ]
  };

  return (
    <div className="bg-white">
      <SEO schemaType="WebPage" data={pageData} />
      <PageHeader title="Featured Projects" />
      <MarqueeTicker />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                image={project.image}
                tags={project.tags}
                title={project.title}
                linkedinEmbed={project.linkedinEmbed}
                externalLink={project.externalLink}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <section className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ContactForm />
        </div>
      </section>

      <MarqueeTicker />
    </div>
  );
}
