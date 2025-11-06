import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  color?: "cyan" | "purple" | "orange" | "yellow" | "pink";
  index?: number;
}

export function InfoCard({ title, description, icon: Icon, color = "cyan", index = 0 }: InfoCardProps) {
  const colorClasses = {
    cyan: "from-cyan-900/30 to-blue-900/30 border-cyan-500/30 hover:border-cyan-500/50",
    purple: "from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-500/50",
    orange: "from-orange-900/30 to-red-900/30 border-orange-500/30 hover:border-orange-500/50",
    yellow: "from-yellow-900/30 to-amber-900/30 border-yellow-500/30 hover:border-yellow-500/50",
    pink: "from-pink-900/30 to-purple-900/30 border-pink-500/30 hover:border-pink-500/50"
  };

  const iconColorClasses = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    orange: "text-orange-400",
    yellow: "text-yellow-400",
    pink: "text-pink-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className={`p-6 bg-gradient-to-br ${colorClasses[color]} hover:shadow-lg transition-all h-full`}>
        {Icon && (
          <Icon className={`w-10 h-10 ${iconColorClasses[color]} mb-4`} />
        )}
        <h3 className="text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}
