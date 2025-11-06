import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  backgroundImage: string;
}

export function PageHeader({ title, subtitle, description, icon: Icon, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-500/30">
              <Icon className="w-12 h-12 text-cyan-400" />
            </div>
          </div>

          <p className="text-cyan-400 tracking-wider mb-4">{subtitle}</p>
          
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
