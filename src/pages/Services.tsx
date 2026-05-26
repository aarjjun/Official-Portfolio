import PageHeader from "@/components/PageHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import SEO from "@/components/SEO";
import {
  Users, Trophy, Calendar, BookOpen, Heart, Code2,
  Star, Award, Zap, Target, Globe, Cpu
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } })
};

function SectionLabel({ label }: { label: string }) {
  return <span className="text-accent italic font-medium mb-4 block">— {label}</span>;
}

function TimelineDot() {
  return <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white" />;
}

export default function Leadership() {
  useSEO({
    title: "Leadership & Impact",
    description: "Explore Arjun A's leadership roles in IEEE Kerala Section, community activities, achievements, hackathons, and mentoring initiatives.",
    keywords: "IEEE Volunteer, Student Leadership, Hackathon Wins, Community Impact, Organised Events, Mentoring",
    canonical: window.location.origin + "/services"
  });

  const pageData = {
    title: "Leadership & Impact",
    description: "Explore Arjun A's leadership roles in IEEE Kerala Section, community activities, achievements, hackathons, and mentoring initiatives.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Leadership & Impact", path: "/services" }
    ]
  };

  const ieeeRoles = [
    {
      period: "Present Role",
      org: "IEEE Kerala Section",
      role: "Student Representative",
      desc: "Representing students and contributing to statewide IEEE initiatives and activities."
    },
    {
      period: "Past Role (2025)",
      org: "IEEE Kochi Hub",
      role: "Lead",
      desc: "Led collaborations, hub initiatives and volunteer activities. Coordinated volunteer engagement."
    },
    {
      period: "Present Role",
      org: "IEEE Computer Society",
      role: "Technical Coordinator",
      desc: "Responsible for technical programs, community sessions, student activities, and technology initiatives."
    },
    {
      period: "Present Role",
      org: "TocH IEEE Student Branch",
      role: "LINK Representative",
      desc: "Handling coordination, student communication, volunteer engagement, and program activities."
    },
    {
      period: "Past Role",
      org: "IEEE LINK Kochi Subsection",
      role: "Co-HSR",
      desc: "Provided volunteer support, organized community activities, and managed overall coordination."
    }
  ];

  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, title: "Winner — Maveli GPT", tag: "🥇 1st Place", desc: "Developed and presented innovative chatbot concepts." },
    { icon: <Trophy className="w-6 h-6" />, title: "Winner — Maveli GPT 2.0", tag: "🥇 1st Place", desc: "Successfully defended the championship title." },
    { icon: <Zap className="w-6 h-6" />, title: "Winner — Useless Projects Hackathon", tag: "🏆 Winner", desc: "Creative innovation and product development." },
    { icon: <Star className="w-6 h-6" />, title: "Mathematics Quiz Finalist", tag: "🎯 Finalist", desc: "TocH Institute of Science and Technology (Nov 2, 2024)." },
    { icon: <Cpu className="w-6 h-6" />, title: "Freston Internship", tag: "💼 Intern", desc: "Freston Internship Program." },
    { icon: <Code2 className="w-6 h-6" />, title: "IEEE Slash Key", tag: "⚡ Hackathon", desc: "Participant in the IEEE Slash Key Hackathon." },
    { icon: <Target className="w-6 h-6" />, title: "CTFs", tag: "🔐 Cyber", desc: "Participant in various Capture The Flag Competitions." },
    { icon: <Award className="w-6 h-6" />, title: "Healthcare Ideathon", tag: "💡 Innovator", desc: "Participant in Global Healthcare Ideathon 2024." }
  ];

  const events = [
    {
      name: "IEEE YESS 2025",
      reach: "5500+ Participants",
      venue: "NIT Calicut",
      role: "Organizer / Leadership Team",
      desc: "Large-scale IEEE event connecting students, leaders and communities.",
      highlight: true
    },
    {
      name: "GDG WOW 2025",
      reach: "Community Event",
      venue: "Regional",
      role: "Volunteer / Organizer",
      desc: "Contributed to community activities and event execution."
    },
    {
      name: "DevFest 2024",
      reach: "Community Event",
      venue: "Regional",
      role: "Volunteer",
      desc: "Supported event activities and engagement initiatives."
    },
    {
      name: "Envigor",
      reach: "Technical Fest",
      venue: "Sahrdaya Institute of Science & Technology",
      role: "Organizer",
      desc: "Helped organize and execute the technical festival."
    },
    {
      name: "Renaissance",
      reach: "Cultural & Tech Fest",
      venue: "Muthoot Institute of Technology and Science",
      role: "Organizer",
      desc: "Coordinated events and activities for the festival."
    }
  ];

  const sessions = [
    { icon: <Globe className="w-5 h-5" />, title: "Portfolio Website Session", desc: "Conducted session teaching students portfolio development covering HTML, CSS, JavaScript, and Responsive Design." },
    { icon: <Cpu className="w-5 h-5" />, title: "No-Code Workshops", desc: "Introduced students to various no-code tools to accelerate their learning and prototyping." },
    { icon: <BookOpen className="w-5 h-5" />, title: "Study Jams", desc: "Facilitated community learning initiatives and group study sessions." },
    { icon: <Users className="w-5 h-5" />, title: "Junior Mentoring", desc: "Supporting and guiding junior students in their academic projects and hackathons." }
  ];

  const extracurricular = [
    { icon: <Star className="w-6 h-6" />, title: "IEEE Leadership", desc: "Actively leading initiatives at Section, Hub, and Student Branch levels.", isHighlighted: true },
    { icon: <Zap className="w-6 h-6" />, title: "Hackathons", desc: "Regular participant and winner in various technical hackathons." },
    { icon: <Globe className="w-6 h-6" />, title: "Community Building", desc: "Fostering growth in communities like IEEE, GDG, and TinkerHub." },
    { icon: <Heart className="w-6 h-6" />, title: "Volunteering", desc: "Dedicating time to support events and student initiatives." },
    { icon: <Users className="w-6 h-6" />, title: "Student Leadership", desc: "Representing student interests and driving engagement." },
    { icon: <Target className="w-6 h-6" />, title: "Networking", desc: "Building connections with peers, mentors, and industry professionals." },
    { icon: <Award className="w-6 h-6" />, title: "Innovation Programs", desc: "Participating in ideathons and innovation challenges." },
    { icon: <Calendar className="w-6 h-6" />, title: "Technical Events", desc: "Organizing and attending tech talks, workshops, and symposiums." },
    { icon: <BookOpen className="w-6 h-6" />, title: "Mentoring & Workshops", desc: "Sharing knowledge through structured sessions and 1:1 guidance." }
  ];

  return (
    <div className="bg-white">
      <SEO schemaType="WebPage" data={pageData} />
      <PageHeader title="Leadership & Impact" />
      <MarqueeTicker />

      {/* 1. IEEE JOURNEY */}
      <section id="ieee-journey" className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel label="My IEEE Journey" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              IEEE <span className="italic text-accent font-normal">Leadership Roles</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {ieeeRoles.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="relative pl-8 border-l-2 border-gray-200 pb-10"
              >
                <TimelineDot />
                <span className="text-sm font-semibold text-accent block mb-1">{item.period}</span>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-accent shrink-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{item.role}</h4>
                </div>
                <p className="text-primary font-semibold text-sm mb-2">{item.org}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COMMUNITY IMPACT */}
      <section id="community-impact" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel label="Community Impact" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
              Creating Meaningful <span className="italic text-accent font-normal">Impact & Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: "5500+", label: "Participants Reached" },
              { num: "Multiple", label: "Large Scale Events" },
              { num: "5", label: "IEEE Roles" },
              { num: "3", label: "Hackathon Wins" },
              { num: "GDG/IEEE", label: "Communities" },
              { num: "Active", label: "Mentoring" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-[#f7f7f7] rounded-3xl p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.num}</h3>
                <p className="text-sm text-gray-500 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACHIEVEMENTS */}
      <section id="achievements" className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel label="Achievements" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Wins & <span className="italic text-accent font-normal">Recognition</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {a.icon}
                </div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-primary text-xs font-bold rounded-full mb-4">{a.tag}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{a.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENTS */}
      <section id="events" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel label="Events & Organizing" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Organized <span className="italic text-accent font-normal">Events</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((ev, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl transition-all ${ev.highlight ? "bg-primary text-white" : "bg-[#f7f7f7] hover:shadow-xl"}`}
              >
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ev.highlight ? "bg-accent text-primary" : "bg-white text-primary"}`}>
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${ev.highlight ? "bg-accent/20 text-accent" : "bg-white text-primary"}`}>{ev.reach}</span>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${ev.highlight ? "text-white" : "text-gray-900"}`}>{ev.name}</h3>
                <p className={`text-sm font-medium mb-3 ${ev.highlight ? "text-white/60" : "text-gray-500"}`}>{ev.venue}</p>
                <p className={`text-sm font-semibold mb-4 ${ev.highlight ? "text-accent" : "text-primary"}`}>{ev.role}</p>
                <p className={`text-sm leading-relaxed ${ev.highlight ? "text-white/80" : "text-gray-600"}`}>{ev.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MENTORING */}
      <section id="mentoring" className="py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel label="Mentoring & Knowledge Sharing" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Sessions & <span className="italic text-accent font-normal">Mentoring</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXTRA CURRICULAR */}
      <section id="extra-curricular" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <SectionLabel label="Beyond Academics" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Extra Curricular & <span className="italic text-accent font-normal">Interests</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extracurricular.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl transition-all duration-300 group ${item.isHighlighted ? "bg-accent text-primary" : "bg-[#f7f7f7] hover:shadow-xl hover:border-gray-200"}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.isHighlighted ? "bg-white text-primary" : "bg-white text-primary group-hover:bg-primary group-hover:text-white transition-colors"}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${item.isHighlighted ? "text-primary" : "text-gray-900"}`}>{item.title}</h3>
                <p className={`leading-relaxed text-sm ${item.isHighlighted ? "text-primary/80" : "text-gray-600"}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <ContactForm />
        </div>
      </section>

      <MarqueeTicker />
    </div>
  );
}
