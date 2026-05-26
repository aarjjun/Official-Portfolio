import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
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
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      tags: ["AI System", "Productivity"],
      title: "Academic Assistant"
    },
    {
      image: "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?w=800&q=80",
      tags: ["Python", "Flask", "API"],
      title: "Rhythmix Music Discovery"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      tags: ["Computer Vision", "Flask", "Authentication"],
      title: "Face Recognition Login"
    },
    {
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      tags: ["Chatbot", "Node.js", "Web App"],
      title: "Maveli GPT & Chat App"
    }
  ];

  return (
    <div className="bg-white">
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
