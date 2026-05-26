import { motion } from "framer-motion";

export default function MarqueeTicker() {
  const items = ["AI / ML", "Product Building", "Community Leadership", "Hackathons", "IEEE", "Innovation", "Mentoring", "Web Development", "AI / ML", "Product Building", "Community Leadership", "Hackathons", "IEEE", "Innovation", "Mentoring", "Web Development"];
  
  return (
    <div className="bg-accent overflow-hidden whitespace-nowrap py-3 border-y border-black/5 flex items-center relative">
      <motion.div
        className="flex whitespace-nowrap gap-8 items-center w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-black font-bold text-lg uppercase tracking-wide">{item}</span>
            <span className="text-black text-xl leading-none">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
