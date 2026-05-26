import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  author?: string;
}

export default function BlogCard({ image, category, date, title, description, author = "Arjun A" }: BlogCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
    >
      <Link href="/blogs">
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              <span>By {author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{date}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="inline-flex items-center gap-2 font-semibold text-primary text-sm group-hover:text-accent transition-colors">
            Read More <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
