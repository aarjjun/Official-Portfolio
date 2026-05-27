import blog1 from "@/content/blogs/behind-ieee-yess-2025.md?raw";
import blog2 from "@/content/blogs/why-i-build-beyond-academics.md?raw";
import blog3 from "@/content/blogs/building-communities-through-technology.md?raw";
import blog4 from "@/content/blogs/hackathons-taught-me-more.md?raw";
import blog5 from "@/content/blogs/teaching-portfolio-development.md?raw";
import blog6 from "@/content/blogs/ai-eye-for-the-blind.md?raw";
import blog7 from "@/content/blogs/leadership-volunteering-growth.md?raw";
import blog8 from "@/content/blogs/teaching-portfolio-through-study-jams.md?raw";
import blog9 from "@/content/blogs/introducing-no-code-tools-to-students.md?raw";
import blog10 from "@/content/blogs/mentoring-juniors-beyond-classrooms.md?raw";
import blog11 from "@/content/blogs/building-communities-through-learning-sessions.md?raw";

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  datePublished: string;
  author: string;
  image: string;
  content: string; // Updated to string since it's raw markdown
}

export const ARTICLES: Record<string, ArticleData> = {
  "behind-ieee-yess-2025": {
    slug: "behind-ieee-yess-2025",
    title: "Behind IEEE YESS 2025 — Organizing Beyond the Event",
    description: "Reflections on organizing Kerala's largest student summit, building autonomous teams, and the true meaning of volunteer ownership.",
    category: "Leadership & Events",
    date: "March 2026",
    datePublished: "2026-03-10T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    content: blog1
  },
  "why-i-build-beyond-academics": {
    slug: "why-i-build-beyond-academics",
    title: "Why I Build Beyond Academics",
    description: "The illusion of classroom learning, surviving hackathon pressure cookers, and cultivating a true builder's mindset.",
    category: "Personal Growth",
    date: "February 2026",
    datePublished: "2026-02-15T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    content: blog2
  },
  "building-communities-through-technology": {
    slug: "building-communities-through-technology",
    title: "Building Communities Through Technology",
    description: "Breaking down technical silos and creating collision spaces for students across IEEE, GDG, and TinkerHub.",
    category: "Community",
    date: "January 2026",
    datePublished: "2026-01-20T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    content: blog3
  },
  "hackathons-taught-me-more": {
    slug: "hackathons-taught-me-more",
    title: "Hackathons Taught Me More Than Classrooms",
    description: "Lessons in ruthless prioritization, pivoting architectures, and communicating technical value under extreme deadlines.",
    category: "Innovation",
    date: "December 2025",
    datePublished: "2025-12-05T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    content: blog4
  },
  "teaching-portfolio-development": {
    slug: "teaching-portfolio-development",
    title: "Teaching Portfolio Development — My Study Jam Experience",
    description: "Escaping tutorial hell and building in public. My experience teaching 50+ students how to build their digital identity.",
    category: "Mentoring",
    date: "November 2025",
    datePublished: "2025-11-12T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    content: blog5
  },
  "ai-eye-for-the-blind": {
    slug: "ai-eye-for-the-blind",
    title: "AI Eye for the Blind — Building Accessibility Through AI",
    description: "Shifting from hype to impact. How we used computer vision and empathy-driven development to build assistive technology.",
    category: "Technology",
    date: "October 2025",
    datePublished: "2025-10-22T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    content: blog6
  },
  "leadership-volunteering-growth": {
    slug: "leadership-volunteering-growth",
    title: "Leadership, Volunteering and Student Growth",
    description: "The paradox of volunteering, measuring empathy as a leadership metric, and the importance of succession planning.",
    category: "Reflection",
    date: "September 2025",
    datePublished: "2025-09-08T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    content: blog7
  },
  "teaching-portfolio-through-study-jams": {
    slug: "teaching-portfolio-through-study-jams",
    title: "Teaching Portfolio Development Through Study Jams",
    description: "Empowering students through hands-on portfolio sessions. Teaching HTML, CSS, and JS basics by building real identities.",
    category: "Mentoring",
    date: "April 2026",
    datePublished: "2026-04-10T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1200&q=80",
    content: blog8
  },
  "introducing-no-code-tools-to-students": {
    slug: "introducing-no-code-tools-to-students",
    title: "Introducing No-Code Tools to Students",
    description: "Shifting focus from syntax to solutions. How no-code prototyping accelerates student creativity and empowers MVPs.",
    category: "Tools & Mentoring",
    date: "March 2026",
    datePublished: "2026-03-22T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    content: blog9
  },
  "mentoring-juniors-beyond-classrooms": {
    slug: "mentoring-juniors-beyond-classrooms",
    title: "Mentoring Juniors Beyond Classrooms",
    description: "Teaching technical resilience. Why hackathons and 1:1 guidance are more effective than traditional lectures.",
    category: "Student Support",
    date: "January 2026",
    datePublished: "2026-01-15T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=1200&q=80",
    content: blog10
  },
  "building-communities-through-learning-sessions": {
    slug: "building-communities-through-learning-sessions",
    title: "Building Communities Through Learning Sessions",
    description: "The shift from broadcasting to engaging. How localized study jams and peer mentoring form the core of a tech community.",
    category: "Community",
    date: "December 2025",
    datePublished: "2025-12-10T10:00:00Z",
    author: "Arjun A",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    content: blog11
  }
};
