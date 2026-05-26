import { useRoute, Link } from "wouter";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import { useSEO } from "@/hooks/useSEO";
import SEO from "@/components/SEO";

interface ArticleData {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  datePublished: string;
  author: string;
  image: string;
  content: string[];
}

const ARTICLES: Record<string, ArticleData> = {
  "ieee-yess-experience": {
    slug: "ieee-yess-experience",
    title: "IEEE YESS 2025 Journey: Empowering the Next Generation of Engineers",
    description: "First-person reflections on organizing IEEE YESS 2025, coordinating Kerala's largest student summit, and driving youth empowerment in tech.",
    category: "IEEE Leadership & Events",
    date: "January 2025",
    datePublished: "2025-01-20T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    content: [
      "In January 2025, I had the privilege of organizing and serving as one of the lead coordinators for IEEE YESS 2025 (Youth Empowerment and Student Summit). Our vision was to bridge the gap between academic theory and industry reality for engineering students across the state.",
      "As a Student Representative in IEEE Kerala Section and past Lead of IEEE Kochi Hub, my journey has been defined by peer-to-peer enablement. Coordinating an event of this magnitude involved managing multiple volunteer teams, coordinating logistics, handling speaker invitations, and designing high-value tracks in AI, web development, and robotics.",
      "We hosted panels featuring leading industry experts, organized 3 hands-on technical workshops, and brought together over 1000 participants. The key lesson I learned from leading YESS 2025 is that volunteer motivation is driven by ownership. By decentralizing leadership and empowering young volunteers with specific projects, the event executed seamlessly.",
      "This experience reinforced my dedication to community leadership, proving that student-run technical societies are crucial for nurturing collaborative ecosystems and practical engineering talent."
    ]
  },
  "portfolio-session": {
    slug: "portfolio-session",
    title: "Demystifying Web Development: Leading My First Hands-on Student Session",
    description: "Behind the scenes of leading a hands-on coding workshop on portfolio planning, HTML, CSS, JavaScript, and responsive layouts for junior developers.",
    category: "Mentoring & Technical Sessions",
    date: "March 2026",
    datePublished: "2026-03-12T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    content: [
      "Building a personal portfolio is often the first major step a student developer takes toward professionalism. In March 2026, I organized and led a hands-on session on portfolio planning and web development, specifically tailored for junior engineering students.",
      "I structured the workshop to be fully interactive. Instead of lecturing, we built a responsive developer landing page from scratch. We covered modern layout tools like CSS Flexbox and Grid, semantic HTML structures for accessibility, and simple, dynamic JavaScript interactions.",
      "Over 50 junior students attended, coding alongside me. One of the highlights of the session was seeing students who had never written JavaScript before successfully build and deploy their portfolio to a live server by the end of the 3-hour workshop.",
      "My primary goal with these sessions is to lower the barrier to entry for web development, encouraging hands-on experimentation over passive reading. I believe that when students build something real, their technical confidence multiplies."
    ]
  },
  "study-jams": {
    slug: "study-jams",
    title: "Building High-Impact Peer-Learning Networks through Technical Study Jams",
    description: "How we structured technical Study Jams and student mentoring circles to accelerate learning, hackathon preparation, and AI building.",
    category: "Community & Peer Learning",
    date: "Ongoing",
    datePublished: "2026-04-05T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    content: [
      "In student communities like IEEE and TinkerHub, the classroom model is often insufficient for rapid technical growth. To counter this, we established 'Study Jams'—small, focused peer-learning groups dedicated to mastering specific technologies, from Python basics to AI/ML frameworks.",
      "As a 3x hackathon winner (having built systems like Maveli GPT and AI Eye for the Blind), I've seen firsthand how high-pressure coding challenges push developers to grow. During these Jams, we set up mock hackathons, pairing experienced developers with newcomers to build real prototypes under constraints.",
      "Through structured 1:1 mentoring circles, we have supported dozens of students in conceptualizing, building, and deploying their projects. This peer-to-peer ecosystem fosters a culture of accountability and innovation, demonstrating that students learn best when they build, break, and debug together.",
      "Our continuous goal is to scale these Study Jams across campus networks, making premium technical mentorship accessible to every student with a willingness to learn."
    ]
  }
};

export default function BlogDetail() {
  const [, params] = useRoute("/blogs/:slug") || useRoute("/knowledge/:slug") || [null, null];
  const slug = params?.slug || "";
  const article = ARTICLES[slug];

  // Helper to calculate reading time
  const calculateReadingTime = (texts: string[]): number => {
    const textStr = texts.join(" ");
    const words = textStr.split(/\s+/).length;
    const wpm = 200; // Average reading speed
    return Math.ceil(words / wpm);
  };

  if (!article) {
    return (
      <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Entry Not Found</h1>
        <p className="text-gray-500 mb-8">The knowledge entry you are looking for does not exist.</p>
        <Link href="/blogs" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-accent hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  const readingTime = calculateReadingTime(article.content);

  // SEO Hook call
  useSEO({
    title: article.title,
    description: article.description,
    keywords: `Arjun A Blog, ${article.category}, ${article.title}, IEEE, Web Dev, Study Jams, Mentoring`,
    canonical: window.location.origin + `/knowledge/${article.slug}`,
    ogType: "article"
  });

  return (
    <div className="bg-white">
      <SEO schemaType="Article" data={article} />
      <PageHeader title={article.category} />
      <MarqueeTicker />

      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Button */}
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 font-medium transition-colors">
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
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
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
