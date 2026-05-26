import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <div className="mb-4">
          <span className="text-accent italic font-medium">— Get In Touch</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Let's Connect for <span className="text-accent italic font-normal">Collaborations & Ideas</span>
        </h2>
        <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
          I'm always open to discussing project ideas, community collaborations, mentoring opportunities, or just connecting over shared interests in technology and innovation.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Email Me</p>
              <a href="mailto:arjunanoop.codes@gmail.com" className="font-bold text-gray-900 hover:text-primary transition-colors">arjunanoop.codes@gmail.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
              <FaLinkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
              <a href="https://www.linkedin.com/in/arjunanoop/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-primary transition-colors">linkedin.com/in/arjunanoop</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
              <FaGithub className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">GitHub</p>
              <a href="https://github.com/aarjjun" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-primary transition-colors">github.com/aarjjun</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-bold text-gray-900">Kochi, Kerala, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Name*</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Email*</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Collaboration Type*</label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none appearance-none" required>
                <option value="">Select Type</option>
                <option value="project">Project Collaboration</option>
                <option value="mentoring">Mentoring</option>
                <option value="community">Community Initiative</option>
                <option value="speaking">Speaking / Workshop</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Domain</label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none appearance-none">
                <option value="">Select Domain</option>
                <option value="aiml">AI / Machine Learning</option>
                <option value="web">Web Development</option>
                <option value="community">Community Building</option>
                <option value="events">Events & Organizing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">Message*</label>
            <textarea placeholder="Tell me about your idea or how we can collaborate..." rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none resize-none" required></textarea>
          </div>

          <Button type="submit" className="w-full sm:w-auto bg-primary text-white hover:bg-accent hover:text-primary rounded-full px-8 py-6 font-bold flex items-center justify-center gap-2">
            Send Message
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
}
