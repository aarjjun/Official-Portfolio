import { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // NOTE: This uses an HTML Form Action to submit to a free service like Buttondown or ConvertKit.
  // The user should replace the ACTION_URL with their actual Buttondown API link.
  const ACTION_URL = "https://buttondown.com/api/emails/embed-subscribe/hey_arjun";

  const handleSubmit = (e: React.FormEvent) => {
    // We let the form submit natively to the action URL so the newsletter service handles it,
    // but we can also manage UI state if we wanted to do it via fetch.
    // For a free static site, native form submission to Buttondown opens a popup or redirects to their success page,
    // which is the most robust free solution.
    // We will just let the form do its default action.
  };

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
          <Mail className="w-8 h-8 text-accent" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Build Logs & <span className="text-accent italic font-normal">Community Notes</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Get updates on projects, blogs, experiments, leadership experiences and things I build. No spam, just pure technical and community insights.
        </p>

        <div className="max-w-lg mx-auto relative z-20 mt-10">
          <form 
            action={ACTION_URL}
            method="post" 
            target="_blank" 
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input 
              type="email" 
              name="email"
              placeholder="your.email@example.com" 
              required
              className="flex-1 w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-md transition-all text-base"
            />
            <input type="hidden" value="1" name="embed" />
            <button 
              type="submit"
              className="px-8 py-4 sm:py-0 sm:h-auto rounded-full bg-accent text-primary hover:bg-white hover:text-primary font-bold transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-base shadow-lg"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-white/50 text-xs mt-6 text-center">
            No spam, unsubscribe anytime. Powered by standard email APIs.
          </p>
        </div>
      </div>
    </section>
  );
}
