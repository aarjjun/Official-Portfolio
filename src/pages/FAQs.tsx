import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function FAQs() {
  useSEO({
    title: "Frequently Asked Questions",
    description: "Got questions? Find answers to frequently asked questions about Arjun A's projects, IEEE leadership, community initiatives, mentoring, and technical stack.",
    keywords: "FAQs Arjun, Questions Arjun A, Project Details, IEEE volunteering, Technical stack",
    canonical: window.location.origin + "/faqs"
  });

  const pageData = {
    title: "Frequently Asked Questions",
    description: "Got questions? Find answers to frequently asked questions about Arjun A's projects, IEEE leadership, community initiatives, mentoring, and technical stack.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "FAQs", path: "/faqs" }
    ]
  };

  const faqs = [
    {
      q: "What kind of projects do you typically build?",
      a: "I focus on building practical, real-world solutions. This includes AI-powered systems like assistive technology for the visually impaired, digital knowledge archives, student productivity tools, and full-stack web applications."
    },
    {
      q: "Which communities are you actively involved with?",
      a: "I am deeply involved with IEEE, holding multiple leadership roles at the Section, Hub, and Student Branch levels. I also actively contribute to GDG, TinkerHub, and various campus-level student communities."
    },
    {
      q: "Are you open to project collaborations or hackathons?",
      a: "Absolutely! I enjoy participating in hackathons (having won several) and collaborating on innovative projects. If you have an exciting idea or need a technical team member, feel free to reach out."
    },
    {
      q: "Do you offer mentoring for junior students?",
      a: "Yes, mentoring is a significant part of my community work. I regularly conduct sessions on web development, introduce students to no-code tools, and provide 1:1 guidance for hackathons and academic projects."
    },
    {
      q: "What was your role in organizing large-scale events like IEEE YESS 2025?",
      a: "For large-scale events, I typically serve on the core organizing or leadership team. My responsibilities span volunteer coordination, program planning, technical execution, and ensuring a seamless experience for thousands of participants."
    },
    {
      q: "What technologies do you primarily work with?",
      a: "My technical stack is centered around AI/ML (Python, TensorFlow, OpenCV, Gemini API) and Web Development (ReactJS, JavaScript, HTML, CSS, Node.js, Flask). I also leverage various APIs and cloud tools depending on the project requirements."
    },
    {
      q: "How can I invite you for a speaking engagement or workshop?",
      a: "You can reach out to me directly through the contact form on this website. Please provide details about the event, the intended audience, and the topics you'd like me to cover, and we can discuss further."
    }
  ];

  return (
    <div className="bg-white">
      <SEO schemaType="WebPage" data={pageData} />
      <PageHeader title="FAQs" />
      <MarqueeTicker />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Questions? <span className="italic text-accent font-normal">Look here.</span>
            </h2>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white/40 backdrop-blur-sm border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 rounded-3xl px-8 py-4 data-[state=open]:bg-white data-[state=open]:shadow-xl data-[state=open]:border-primary/10">
                <AccordionTrigger className="text-xl font-bold text-gray-900 hover:no-underline data-[state=open]:text-primary text-left group">
                  <span className="flex-1 leading-snug">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-lg pt-4 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Still have <span className="italic text-accent font-normal">questions?</span>
            </h3>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-colors">
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </Link>
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
