import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Terminal } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function Blogs() {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80",
      category: "Session Notes",
      date: "Recent Session",
      title: "Portfolio Website Development Session",
      description: "Conducted a hands-on session teaching students portfolio planning, HTML, CSS, JavaScript, and responsive design principles.",
      author: "Arjun A"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      category: "Technical Learnings",
      date: "Workshop",
      title: "Introduction to No-Code Platforms",
      description: "Introduced students to various no-code tools to accelerate prototyping, allowing non-programmers to build applications quickly.",
      author: "Arjun A"
    },
    {
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80",
      category: "Community Stories",
      date: "Ongoing",
      title: "Study Jams & Junior Mentoring",
      description: "Community learning initiatives and 1:1 sessions supporting junior students in their academic projects, hackathons, and technical growth.",
      author: "Arjun A"
    }
  ];

  const archiveItems = [
    { date: "Oct 2024", title: "Reflections on Leading TocH IEEE Computer Society", category: "Leadership" },
    { date: "Sep 2024", title: "How to Win Your First Student Hackathon", category: "Hackathons" },
    { date: "Jul 2024", title: "Building Maveli GPT: Behind the Scenes", category: "AI & Innovation" },
    { date: "May 2024", title: "A Guide to No-Code Prototyping for Beginners", category: "Tech Learnings" }
  ];

  return (
    <div className="bg-white">
      <PageHeader title="Knowledge Hub" />
      <MarqueeTicker />
      
      {/* Editorial Journal Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Subtitle / Intro */}
          <div className="text-center mb-20">
            <span className="text-accent italic font-semibold tracking-wide uppercase text-sm mb-3 block">— The Journal</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 max-w-xl mx-auto leading-tight">
              Insights, Technical Notes & Community Stories
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              A premium space documenting hands-on workshops, personal learnings, and community reflections.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-24">
            <div className="border border-gray-100 rounded-[32px] overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 group flex flex-col md:flex-row gap-8 p-6 md:p-8">
              <div className="w-full md:w-1/2 aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden relative bg-gray-100">
                <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
                <span className="absolute top-4 left-4 px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                  {blogs[0].category}
                </span>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-3">{blogs[0].date}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {blogs[0].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                    {blogs[0].description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                  <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary text-[10px] font-bold">A</span>
                    {blogs[0].author}
                  </span>
                  <div className="inline-flex items-center gap-2 font-semibold text-primary text-sm group-hover:text-accent transition-colors">
                    Read Journal Entry <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Articles Grid */}
          <div className="mb-24">
            <h3 className="text-xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" /> Recent Writings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {blogs.slice(1).map((blog, index) => (
                <div key={index} className="group border border-gray-100 rounded-3xl overflow-hidden p-6 hover:shadow-lg transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-2xl mb-6">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-primary text-[11px] font-bold rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2">{blog.date}</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-xs font-semibold text-gray-900">{blog.author}</span>
                    <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold group-hover:text-accent transition-colors">
                      View Entry <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Stories */}
          <div className="mb-24">
            <h3 className="text-xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" /> Session Stories & Workshop Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#f7f7f7] border border-gray-100 hover:shadow-md transition-all">
                <span className="text-[10px] uppercase tracking-wider font-bold text-accent block mb-2">March 2026 • Workshop</span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Hands-on OpenCV & Python Image Processing</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A comprehensive guide for beginners stepping into computer vision. Explored real-time face detection, contours, and thresholding algorithms.
                </p>
                <Link href="/blogs" className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1.5">
                  Read Workshop Notes <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-8 rounded-3xl bg-[#f7f7f7] border border-gray-100 hover:shadow-md transition-all">
                <span className="text-[10px] uppercase tracking-wider font-bold text-accent block mb-2">January 2026 • Guest Lecture</span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Web Accessibility & Semantic HTML Best Practices</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Discussed the importance of WCAG compliance, screen readers, and standard-compliant markup for building modern, inclusive web applications.
                </p>
                <Link href="/blogs" className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1.5">
                  Read Lecture Notes <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Community Learnings */}
          <div className="mb-24">
            <h3 className="text-xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" /> Community Leadership Lessons
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-gray-900 font-bold text-base md:text-lg mb-2 italic">
                  "Leadership isn't about directing; it's about building the infrastructure that lets other volunteers succeed."
                </p>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Reflections on IEEE Kochi Hub Presidency</span>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-gray-900 font-bold text-base md:text-lg mb-2 italic">
                  "The best learning happens when peers teach peers. When you remove classroom hierarchies, student technical curiosity spikes."
                </p>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Key Takeaways from TinkerHub Campus Initiatives</span>
              </div>
            </div>
          </div>

          {/* Reading Categories */}
          <div className="mb-24 py-12 border-t border-b border-gray-100">
            <h3 className="text-lg font-bold text-center text-gray-900 mb-8 uppercase tracking-wider">Topic Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Session Notes", "Technical Learnings", "Community Stories", "Leadership", "Hackathon Advice"].map((cat, i) => (
                <span key={i} className="px-5 py-2.5 bg-[#f7f7f7] border border-gray-200 text-gray-600 text-xs font-semibold rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Writing Archive */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-10 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-accent" /> Writing & Session Archive
            </h3>
            <div className="space-y-4">
              {archiveItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-5 border-b border-gray-100 group hover:px-2 transition-all">
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-semibold text-accent whitespace-nowrap">{item.date}</span>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-gray-50 border border-gray-200 text-gray-500 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
