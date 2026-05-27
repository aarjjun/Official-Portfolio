import { useState, useRef } from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // NOTE: User must replace these with their actual EmailJS keys!
      await emailjs.sendForm(
        'service_zjhxq1o', 
        'template_k37f69c', 
        formRef.current, 
        'FidfnQ39XW1Dmp0XH'
      );
      
      setIsSuccess(true);
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
        {isSuccess && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Name*</label>
              <input type="text" name="user_name" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none text-base" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Email Address*</label>
              <input type="email" name="user_email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none text-base" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">Subject*</label>
            <input type="text" name="subject" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none text-base" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">Message*</label>
            <textarea name="message" placeholder="Tell me about your idea or how we can collaborate..." rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none resize-none text-base" required></textarea>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-primary text-white hover:bg-accent hover:text-primary rounded-full px-8 py-6 font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
