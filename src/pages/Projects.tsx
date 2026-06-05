import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SEO from "@/components/SEO";

export default function Projects() {

  interface ProjectItem {
    image: string;
    tags: string[];
    title: string;
    description?: string;
    externalLink?: string;
  }

  const projects: ProjectItem[] = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      tags: ["Leadership", "Community", "IEEE"],
      title: "IEEE YESS 2025 Journey",
      description: "Led the organization of Kerala's largest student summit, uniting over 1000 participants for technical empowerment.",
      externalLink: "https://www.linkedin.com/in/arjunanoop/"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      tags: ["Innovation", "Technology", "Web3"],
      title: "Building the Future of Digital Archives",
      description: "Developing The Infinite Library of Forgotten Knowledge using modern AI systems and decentralized principles.",
      externalLink: "https://www.linkedin.com/in/arjunanoop/"
    },
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      tags: ["Events", "Leadership", "Mentoring"],
      title: "Empowering Students Through Tech Events",
      description: "Organizing and leading workshops, hackathons, and technical sessions to bridge the gap between academia and industry.",
      externalLink: "https://www.linkedin.com/in/arjunanoop/"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      tags: ["Deep Learning", "Python", "AI / ML"],
      title: "DL Manager",
      description: "A centralized deep learning management platform designed to streamline model training and evaluation."
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      tags: ["Computer Vision", "Safety AI", "Real-Time"],
      title: "AI Hazard Detection",
      description: "Real-time computer vision system built to detect and alert on industrial and environmental hazards."
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      tags: ["AI / ML", "Accessibility", "Flask", "OpenCV"],
      title: "AI Eye for the Blind",
      description: "Assistive technology leveraging computer vision to provide environmental awareness for visually impaired individuals."
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
      <SEO 
        schemaType="CollectionPage"
        title="Projects Portfolio | Arjun A"
        description="Explore the technical projects, AI tools, and student volunteering showcases built by Arjun A."
        keywords="Arjun A Projects, AI Eye for the Blind, Maveli GPT, IEEE YESS 2025, Student Innovation, TocH"
      />
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
                description={project.description}
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
