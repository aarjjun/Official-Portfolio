import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
  href?: string;
}

export default function ServiceCard({ icon, title, description, isHighlighted, href = "/services" }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 rounded-2xl transition-all duration-300 group",
        isHighlighted 
          ? "bg-accent text-primary" 
          : "bg-white border border-gray-100 hover:shadow-xl hover:border-gray-200"
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
        isHighlighted ? "bg-white text-primary" : "bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
      )}>
        {icon}
      </div>
      <h3 className={cn("text-xl font-bold mb-4", isHighlighted ? "text-primary" : "text-gray-900")}>
        {title}
      </h3>
      <p className={cn("mb-8 leading-relaxed", isHighlighted ? "text-primary/80" : "text-gray-600")}>
        {description}
      </p>
      <Link href={href} className={cn(
        "inline-flex items-center gap-2 font-semibold text-sm",
        isHighlighted ? "text-primary hover:opacity-80" : "text-primary hover:text-accent"
      )}>
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
