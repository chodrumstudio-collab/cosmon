import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  index: number;
  highlights?: string[];
}

export function SectionCard({ title, description, icon: Icon, image, index, highlights }: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm cursor-pointer"
    >
      {/* Image Background */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Icon */}
        <div className="absolute top-4 right-4 p-3 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-500/30">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-2 mb-4">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Button */}
        <div className="w-full py-2 px-4 bg-white/5 border border-cyan-500/30 text-cyan-400 rounded-lg group-hover:bg-cyan-500/10 transition-all text-sm text-center">
          자세히 보기 →
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      </div>
    </motion.div>
  );
}
