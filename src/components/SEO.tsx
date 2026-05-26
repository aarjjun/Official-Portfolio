import { useEffect } from "react";

interface SEOComponentProps {
  schemaType?: "Person" | "Project" | "Article" | "WebPage" | "Blog";
  data?: any;
}

export default function SEO({ schemaType, data }: SEOComponentProps) {
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
        "Student Leader",
        "IEEE Volunteer",
        "Project Builder",
        "Community Organizer"
      ],
      "description": "Project Builder, Student Leader, and Community Organizer building practical technology and leading volunteering initiatives."
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
        "image": data.image ? (data.image.startsWith("http") ? data.image : window.location.origin + data.image) : undefined,
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
    }

    script.textContent = JSON.stringify(finalSchema, null, 2);

    return () => {
      // Clean up dynamic schema tags when unmounting
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [schemaType, data]);

  return null;
}
