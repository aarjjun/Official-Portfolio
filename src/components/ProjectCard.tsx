import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image?: string;
  tags: string[];
  title: string;
  linkedinEmbed?: string;
  externalLink?: string;
}

export default function ProjectCard({ image, tags, title, linkedinEmbed, externalLink }: ProjectCardProps) {
  const cardContent = (
    <>
      <div>
        {linkedinEmbed ? (
          <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-50 border border-gray-100 shadow-sm w-full h-[380px]">
            <iframe
              src={linkedinEmbed}
              className="w-full h-full border-0 rounded-2xl"
              title={title}
              loading="lazy"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-[16/10] border border-gray-100 shadow-sm">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        )}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-0.5 bg-[#f7f7f7] text-gray-600 border border-gray-200 text-[10px] font-semibold rounded-full uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 pt-2">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shrink-0">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </>
  );

  if (linkedinEmbed) {
    return (
      <motion.div 
        whileHover={{ y: -5 }}
        className="group bg-white p-5 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gray-200/80 transition-all flex flex-col h-full justify-between"
      >
        {externalLink ? (
          <a href={externalLink} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full justify-between">
            {cardContent}
          </a>
        ) : (
          <div className="flex flex-col h-full justify-between">
            {cardContent}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group cursor-pointer bg-white p-5 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gray-200/80 transition-all flex flex-col h-full"
    >
      <Link href="/projects" className="flex flex-col h-full justify-between">
        {cardContent}
      </Link>
    </motion.div>
  );
}
