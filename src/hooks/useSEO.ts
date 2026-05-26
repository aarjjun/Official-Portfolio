import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "/opengraph.jpg",
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes("Arjun A") 
      ? title 
      : `${title} | Arjun A — Project Builder • Community Leader • Problem Solver`;
    document.title = formattedTitle;

    // Helper to get or create element
    const getOrCreateMeta = (attrName: string, attrVal: string): HTMLMetaElement => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      return element;
    };

    // 2. Base Metadata
    getOrCreateMeta("name", "description").setAttribute("content", description);
    
    if (keywords) {
      getOrCreateMeta("name", "keywords").setAttribute("content", keywords);
    }
    
    getOrCreateMeta("name", "author").setAttribute("content", "Arjun A");
    getOrCreateMeta("name", "theme-color").setAttribute("content", "#2d6a4f"); // Primary brand color
    
    const robotsVal = noIndex ? "noindex, nofollow" : "index, follow";
    getOrCreateMeta("name", "robots").setAttribute("content", robotsVal);

    // 3. Open Graph Metadata
    getOrCreateMeta("property", "og:title").setAttribute("content", formattedTitle);
    getOrCreateMeta("property", "og:description").setAttribute("content", description);
    getOrCreateMeta("property", "og:type").setAttribute("content", ogType);
    getOrCreateMeta("property", "og:url").setAttribute("content", window.location.href);
    getOrCreateMeta("property", "og:site_name").setAttribute("content", "Arjun A Portfolio");
    
    const absoluteOgImage = ogImage.startsWith("http") 
      ? ogImage 
      : window.location.origin + ogImage;
    getOrCreateMeta("property", "og:image").setAttribute("content", absoluteOgImage);

    // 4. Twitter Card Metadata
    getOrCreateMeta("name", "twitter:card").setAttribute("content", "summary_large_image");
    getOrCreateMeta("name", "twitter:title").setAttribute("content", formattedTitle);
    getOrCreateMeta("name", "twitter:description").setAttribute("content", description);
    getOrCreateMeta("name", "twitter:image").setAttribute("content", absoluteOgImage);

    // 5. Canonical Link
    let linkElement = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.setAttribute("rel", "canonical");
      document.head.appendChild(linkElement);
    }
    const finalCanonical = canonical || window.location.href;
    linkElement.setAttribute("href", finalCanonical);

  }, [title, description, keywords, canonical, ogType, ogImage, noIndex]);
}
