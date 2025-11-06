import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export function ContentSection({ title, children, id }: ContentSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-white mb-8">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
}
