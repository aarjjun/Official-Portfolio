import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { ArrowRight, Code, Users, Calendar, BookOpen, Star, Sparkles, Globe } from "lucide-react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";
import SEO from "@/components/SEO";

export default function Home() {
  useSEO({
    title: "Arjun A | Project Builder • Community Leader • Problem Solver",
    description: "Welcome to the official portfolio of Arjun A. Explore key projects, IEEE student leadership journey, community events, and tech insights.",
    keywords: "Arjun A, Project Builder, Community Leader, Problem Solver, IEEE volunteer, IEEE YESS 2025, TocH, Student Leader, AI Projects",
    canonical: window.location.origin + "/"
  });

  return (
    <div className="bg-white">
      <SEO schemaType="Person" />
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
                <span className="font-semibold text-sm">Hello There! 👋</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                Hi, I'm <span className="italic text-accent font-serif">Arjun</span>, Project Builder & Community Leader.
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                I build real-world projects, organize communities, lead technical initiatives and create experiences that connect technology with people.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full">
                <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors w-full sm:w-auto text-center">
                  Explore My Journey
                </Link>
                <Link href="/services#ieee-journey" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-colors w-full sm:w-auto text-center">
                  Leadership & Impact
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 text-primary font-bold hover:text-accent transition-colors underline underline-offset-4 w-full sm:w-auto text-center">
                  View Projects
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Yellow circle background */}
                <div className="absolute inset-0 bg-accent rounded-full scale-95 origin-bottom translate-y-8"></div>
                {/* Image */}
                <img 
                  src="/imagesprof/hero.jpg" 
                  alt="Arjun A" 
                  className="relative z-10 w-full h-auto object-cover aspect-[4/5] rounded-[200px]"
                />
                
                {/* Floating Tags */}
                <div className="absolute top-1/4 -left-8 z-20 bg-white px-5 py-2.5 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2d6a4f]"></div>
                  <span className="font-bold text-sm text-gray-900">Project Builder</span>
                </div>
                <div className="absolute bottom-1/4 -right-4 z-20 bg-white px-5 py-2.5 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2d6a4f]"></div>
                  <span className="font-bold text-sm text-gray-900">Community Leader</span>
                </div>
                
                {/* Circular Hire Me badge */}
                <Link href="/contact" className="absolute -bottom-8 -left-8 z-20 w-32 h-32 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:bg-accent group-hover:text-primary transition-colors">
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                    <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[10.5px] font-bold tracking-widest uppercase fill-gray-900">
                      <textPath href="#curve" startOffset="0%">Let's Build • Let's Build •</textPath>
                    </text>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeTicker />

      {/* WHAT I DO SECTION (Leadership & Impact Preview) */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent italic font-medium mb-4 block">— What I Do</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Building, Leading <span className="italic text-accent font-normal">& Impacting</span>
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Leadership Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="Build Real World Projects"
              description="Develop AI systems and practical technology solutions."
              href="/projects"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Lead Technical Communities"
              description="Contribute and lead student initiatives and IEEE activities."
              isHighlighted={true}
              href="/services#ieee-journey"
            />
            <ServiceCard
              icon={<Calendar className="w-6 h-6" />}
              title="Organize Events & Experiences"
              description="Plan and execute events, meetups and community programs."
              href="/services#events"
            />
            <ServiceCard
              icon={<Star className="w-6 h-6" />}
              title="Mentor & Support Students"
              description="Guide students through projects, sessions and learning."
              href="/services#mentoring"
            />
            <ServiceCard
              icon={<Globe className="w-6 h-6" />}
              title="Create Community Impact"
              description="Build opportunities and collaborative ecosystems."
              href="/services#community-impact"
            />
            <ServiceCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Drive Innovation"
              description="Participate and contribute through hackathons and projects."
              href="/services#achievements"
            />
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-accent rounded-[100px] scale-95 translate-x-4 translate-y-4"></div>
                <img 
                  src="/imagesprof/whoami.jpg" 
                  alt="Arjun Organizing" 
                  className="relative z-10 w-full rounded-[100px] aspect-[3/4] object-cover"
                />
                <div className="absolute top-1/3 -right-12 z-20 flex flex-col gap-3">
                  <span className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold border border-gray-100">AI / ML</span>
                  <span className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold border border-gray-100 translate-x-8">Community Leader</span>
                  <span className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold border border-gray-100">Event Organizer</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent italic font-medium mb-4 block">— About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Who is <span className="italic text-accent font-normal">Arjun A?</span>
              </h2>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 text-primary font-bold">
                <div className="flex items-center gap-2">
                  <CheckIcon /> 5500+ Participants Reached
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon /> Multiple Communities
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon /> 3× Hackathon Winner
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a B.Tech student at TocH Institute of Science and Technology with interests spanning AI, web development, product building, leadership, innovation and community engagement.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Beyond development, I actively contribute to student communities, lead technical initiatives, organize events and mentor peers. I enjoy transforming ideas into products, building experiences and creating opportunities for communities.
              </p>

              <Link href="/services" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-colors">
                Explore My Journey <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-accent italic font-medium mb-4 block">— Behind My Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Skills & <span className="italic text-accent font-normal">Technologies</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <SkillBar icon={<Users className="w-6 h-6 text-[#F24E1E]" />} name="Leadership & Community" percentage={90} />
            <SkillBar icon={<FaPython className="w-6 h-6 text-[#3776AB]" />} name="Python & AI/ML" percentage={85} />
            <SkillBar icon={<FaReact className="w-6 h-6 text-[#61DAFB]" />} name="Web Technologies (React/JS)" percentage={75} />
            <SkillBar icon={<SiFlask className="w-6 h-6 text-[#000000]" />} name="Backend (Flask/Node)" percentage={70} />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent italic font-medium mb-4 block">— My Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Featured <span className="italic text-accent font-normal">Projects</span>
              </h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent hover:text-primary transition-colors">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
              tags={["Deep Learning", "Python", "AI / ML"]}
              title="DL Manager"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
              tags={["Computer Vision", "Safety AI", "Real-Time"]}
              title="AI Hazard Detection"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
              tags={["Robotics", "ESP32", "Hardware", "IoT"]}
              title="Mini Desk Robot using ESP32"
            />
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-accent italic font-medium mb-4 block">— My Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">My <span className="italic text-accent font-normal">Journey</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white"></div>
                  <span className="text-sm font-semibold text-accent block mb-1">Present</span>
                  <h4 className="text-lg font-bold text-gray-900">TocH Institute of Science and Technology</h4>
                  <p className="text-gray-600">Bachelor of Technology</p>
                  <span className="text-sm text-gray-400">Second Year Student</span>
                </div>
                <div className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white"></div>
                  <span className="text-sm font-semibold text-accent block mb-1">Focus Areas</span>
                  <h4 className="text-lg font-bold text-gray-900">Core Interests</h4>
                  <p className="text-gray-600">AI / ML, Software Development</p>
                  <span className="text-sm text-gray-400">Community Leadership, Innovation</span>
                </div>
              </div>
            </div>
            {/* Leadership Roles */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Key Roles</h3>
              </div>
              <div className="space-y-8">
                {[
                  { period: "Present", role: "Student Representative", org: "IEEE Kerala Section", desc: "Representing students and contributing to statewide initiatives." },
                  { period: "Present", role: "Technical Coordinator", org: "IEEE Computer Society", desc: "Organizing technical programs and student activities." },
                  { period: "Past Role", role: "Lead", org: "IEEE Kochi Hub (2025)", desc: "Led collaborations, hub initiatives and volunteer activities." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white"></div>
                    <span className="text-sm font-semibold text-accent block mb-1">{item.period}</span>
                    <h4 className="text-lg font-bold text-gray-900">{item.role}</h4>
                    <p className="text-gray-800 font-medium text-sm">{item.org}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE SHARING SECTION (Replacing Blog) */}
      <section id="mentoring" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent italic font-medium mb-4 block">— Knowledge Sharing</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Mentoring & <span className="italic text-accent font-normal">Sessions</span>
              </h2>
            </div>
            <Link href="/blogs" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent hover:text-primary transition-colors">
              View All Sessions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              image="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80" 
              category="Web Dev" 
              date="Recent Session" 
              title="Portfolio Website Development Session" 
              description="Conducted hands-on session teaching students portfolio planning, HTML, CSS, JavaScript, and responsive design." 
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" 
              category="Tools" 
              date="Workshop" 
              title="Introduction to No-Code Platforms" 
              description="Introduced students to various no-code tools to accelerate prototyping and application building." 
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80" 
              category="Community" 
              date="Ongoing" 
              title="Study Jams & Junior Mentoring" 
              description="Community learning initiatives supporting students in projects, hackathons, and technical growth." 
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-accent italic font-medium mb-4 block">— FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Questions? <span className="italic text-accent font-normal">Look here.</span>
            </h2>
          </div>
          <HomeFAQs />
        </div>
      </section>

      <MarqueeTicker />

    </div>
  );
}

function HomeFAQs() {
  const faqs = [
    { q: "What kind of projects do you build?", a: "I focus on building practical, real-world solutions spanning AI/ML, web development, and accessibility tools. My projects range from AI-powered assistive solutions like 'AI Eye for the Blind' to digital archives and productivity assistants." },
    { q: "Which communities are you actively involved with?", a: "I am deeply involved with IEEE (holding multiple leadership roles at Section, Hub, and Student Branch levels), GDG, and TinkerHub, organizing events and mentoring students." },
    { q: "Are you open to project collaborations or hackathons?", a: "Yes, absolutely! I enjoy participating in hackathons and collaborating on innovative projects. Feel free to reach out if you have an exciting idea or need a technical team member." },
    { q: "Do you offer mentoring for junior students?", a: "Yes, mentoring is a big part of my community work. I regularly conduct sessions on web development, no-code tools, and provide 1:1 guidance for hackathons and student projects." }
  ];
  return (
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
  );
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </div>
  )
}

function SkillBar({ icon, name, percentage }: { icon: React.ReactNode, name: string, percentage: number }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-6">
      <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <span className="font-bold text-gray-900">{percentage}%</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full bg-accent rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
