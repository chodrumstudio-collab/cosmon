import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "138", label: "우주의 나이", suffix: "억년" },
  { value: "2", label: "은하의 수", suffix: "조개" },
  { value: "7", label: "독자 발사 능력 보유국", suffix: "위" },
  { value: "25400", label: "우주 쓰레기", suffix: "개+" },
];

export function StatsCounter() {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
                {stat.suffix && <span className="text-2xl md:text-3xl">{stat.suffix}</span>}
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
