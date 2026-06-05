import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface SEOComponentProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  schemaType?: "Person" | "Project" | "Article" | "WebPage" | "Blog" | "CollectionPage" | "ItemList" | "ProfilePage" | "FAQPage" | "ContactPage";
  data?: any;
}

export default function SEO({ 
  title = "Arjun A — Project Builder • Community Leader • Problem Solver", 
  description = "Building products, leading communities and creating meaningful impact through technology. Portfolio of Arjun A — IEEE volunteer, hackathon winner, and community organizer.", 
  image = "/imagesprof/hero.jpg", 
  url = typeof window !== "undefined" ? window.location.href : "https://imarjunofficial.onrender.com",
  keywords = "Arjun A, Project Builder, Community Leader, Problem Solver, IEEE volunteer, IEEE YESS 2025, TocH, Student Leader, AI Projects",
  schemaType, 
  data 
}: SEOComponentProps) {
  useEffect(() => {
    // We inject JSON-LD dynamically into the document head
    const scriptId = `json-ld-${schemaType || "base"}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const basePerson = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Arjun A",
      "email": "arjunanoop.codes@gmail.com",
      "url": window.location.origin,
      "image": window.location.origin + "/imagesprof/hero.jpg",
      "sameAs": [
        "https://www.linkedin.com/in/arjunanoop/",
        "https://github.com/aarjjun"
      ],
      "jobTitle": [
        "Student Representative, IEEE Kerala Section",
        "Former Lead, IEEE Kochi Hub",
        "Former Co-HSR, IEEE LINK Kochi Subsection",
        "Technical Coordinator, IEEE Computer Society",
        "LINK Representative, TocH IEEE Student Branch",
        "Project Builder",
        "Community Leader",
        "Problem Solver"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "TocH Institute of Science and Technology"
      },
      "memberOf": [
        {
          "@type": "Organization",
          "name": "IEEE Kerala Section"
        },
        {
          "@type": "Organization",
          "name": "IEEE Kochi Hub"
        }
      ],
      "description": "Project Builder, Community Leader, and Problem Solver from TocH Institute, actively representing students in IEEE Kerala Section. AI enthusiast, organizer, and developer."
    };

    let finalSchema: any = basePerson;

    if (schemaType === "Project" && data) {
      finalSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": data.title,
        "description": data.description || "A project built by Arjun A.",
        "codeRepository": data.codeRepository || "https://github.com/aarjjun",
        "programmingLanguage": data.programmingLanguage || ["Python", "JavaScript", "TypeScript"],
        "creator": {
          "@type": "Person",
          "name": "Arjun A"
        }
      };
    } else if (schemaType === "Article" && data) {
      finalSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.title,
        "description": data.description,
        "image": data.image ? (data.image.startsWith("http") ? data.image : window.location.origin + data.image) : window.location.origin + "/imagesprof/hero.jpg",
        "datePublished": data.datePublished || new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": "Arjun A",
          "url": "https://www.linkedin.com/in/arjunanoop/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Arjun A",
          "logo": {
            "@type": "ImageObject",
            "url": window.location.origin + "/favicon.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        }
      };
    } else if (schemaType === "WebPage" && data) {
      finalSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": data.title,
        "description": data.description,
        "url": window.location.href,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": (data.breadcrumbs || []).map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": window.location.origin + crumb.path
          }))
        }
      };
    } else if (schemaType === "Blog" && data) {
      finalSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Arjun A Knowledge Journal",
        "description": "Insights, Technical Notes & Community Stories by Arjun A.",
        "url": window.location.href,
        "publisher": {
          "@type": "Person",
          "name": "Arjun A"
        },
        "blogPost": (data.posts || []).map((post: any) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "url": window.location.origin + post.path
        }))
      };
    } else if (schemaType === "CollectionPage" || schemaType === "ItemList") {
       finalSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Arjun A - Projects Portfolio",
        "description": "Explore the technical projects, AI tools, and student volunteering showcases built by Arjun A.",
        "url": window.location.href,
        "author": {
          "@type": "Person",
          "name": "Arjun A"
        }
       };
    } else if (schemaType === "ProfilePage") {
       finalSchema = {
         "@context": "https://schema.org",
         "@type": "ProfilePage",
         "mainEntity": basePerson
       };
    } else if (schemaType === "ContactPage") {
       finalSchema = {
         "@context": "https://schema.org",
         "@type": "ContactPage",
         "name": "Contact Arjun A",
         "description": "Get in touch with Arjun A for projects, collaborations, and community building.",
         "url": window.location.href,
         "mainEntity": basePerson
       }
    } else if (schemaType === "FAQPage" && data) {
      finalSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (data.faqs || []).map((faq: any) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    }

    script.textContent = JSON.stringify(finalSchema, null, 2);

    return () => {
      // Clean up dynamic schema tags when unmounting
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [schemaType, data]);

  const fullImageUrl = typeof window !== "undefined" && image.startsWith("http") ? image : (typeof window !== "undefined" ? window.location.origin + image : image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={schemaType === "Article" ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
}
