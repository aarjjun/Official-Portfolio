import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import SEO from "@/components/SEO";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ARTICLES } from "@/lib/data";

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug || "";
  const article = ARTICLES[slug];

  // Helper to calculate reading time
  const calculateReadingTime = (text: string): number => {
    if (!text) return 1;
    const words = text.split(/\s+/).length;
    const wpm = 200; // Average reading speed
    return Math.max(1, Math.ceil(words / wpm));
  };

  if (!article) {
    return (
      <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Entry Not Found</h1>
        <p className="text-gray-500 mb-8">The knowledge entry you are looking for does not exist.</p>
        <Link href="/knowledge" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-accent hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  const readingTime = calculateReadingTime(article.content);

  return (
    <div className="bg-white">
      <SEO 
        schemaType="Article" 
        data={article} 
        title={`${article.title} | Arjun A`}
        description={article.description}
        keywords={`Arjun A Blog, ${article.category}, ${article.title}, IEEE, Web Dev, Study Jams, Mentoring`}
        url={typeof window !== "undefined" ? window.location.href : `https://imarjunofficial.onrender.com/knowledge/${article.slug}`}
        image={article.image}
      />
      <PageHeader title={article.category} />
      <MarqueeTicker />

      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Button */}
          <Link href="/knowledge" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
          </Link>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-b border-gray-100 py-4 mb-10">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              By <span className="font-semibold text-gray-900">{article.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              {readingTime} Min Read
            </span>
          </div>

          {/* Featured Image */}
          <div className="rounded-[32px] overflow-hidden aspect-[16/9] mb-12 bg-gray-50 border border-gray-100 shadow-sm">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Call to action within first person story */}
          <div className="mt-16 bg-[#f7f7f7] border border-gray-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Want to collaborate?</h3>
              <p className="text-sm text-gray-500">I am always open to discussing new technical projects, guest lectures, or community events.</p>
            </div>
            <Link href="/contact" className="bg-primary text-white hover:bg-accent hover:text-primary transition-colors px-6 py-3 rounded-full font-bold whitespace-nowrap">
              Get In Touch
            </Link>
          </div>
        </div>
      </article>

      <MarqueeTicker />
    </div>
  );
}
