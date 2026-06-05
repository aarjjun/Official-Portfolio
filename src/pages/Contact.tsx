import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import SEO from "@/components/SEO";

export default function Contact() {

  const pageData = {
    title: "Contact Me",
    description: "Get in touch with Arjun A for collaboration, speaking opportunities, mentoring, or technical project discussions.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" }
    ]
  };

  return (
    <div className="bg-white">
      <SEO 
        schemaType="ContactPage" 
        title="Contact Me | Arjun A"
        description="Get in touch with Arjun A for collaboration, speaking opportunities, mentoring, or technical project discussions. Drop a message here."
        keywords="Contact Arjun, Collaboration, Speaking, Hackathons, Mentoring, Kerala"
      />
      <PageHeader title="Contact Me" />
      <MarqueeTicker />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <ContactForm />
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-100 flex items-center justify-center">
             <div className="text-center text-gray-500">
               <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
               </svg>
               <p className="font-medium">Map View</p>
               <p className="text-sm">Kochi, Kerala, India</p>
             </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <MarqueeTicker />
    </div>
  );
}
