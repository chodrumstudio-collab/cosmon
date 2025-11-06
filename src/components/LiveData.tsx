import { motion } from "framer-motion";
import { Satellite, Calendar, Rocket, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";

export function LiveData() {
  return (
    <section id="live-data" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">실시간 우주 데이터</h2>
          <p className="text-gray-400">지금 이 순간의 우주를 추적합니다</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ISS Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/30 hover:border-cyan-500/50 transition-all">
              <Satellite className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-white mb-2">ISS 위치</h3>
              <p className="text-2xl text-cyan-400 mb-1">400km</p>
              <p className="text-sm text-gray-400">현재 고도</p>
              <div className="mt-4 text-xs text-gray-500">
                속도: 27,600 km/h
              </div>
            </Card>
          </motion.div>

          {/* Observation Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-500/50 transition-all">
              <Calendar className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-white mb-2">관측 일정</h3>
              <p className="text-lg text-purple-400 mb-1">오늘 밤 금성</p>
              <p className="text-sm text-gray-400">저녁 8시 서쪽 하늘</p>
              <div className="mt-4 text-xs text-gray-500">
                관측 조건: 좋음 ★★★★☆
              </div>
            </Card>
          </motion.div>

          {/* Launch Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/30 hover:border-orange-500/50 transition-all">
              <Rocket className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-white mb-2">발사 일정</h3>
              <p className="text-lg text-orange-400 mb-1">SpaceX Falcon 9</p>
              <p className="text-sm text-gray-400">3일 후 발사 예정</p>
              <div className="mt-4 text-xs text-gray-500">
                임무: Starlink 위성 배치
              </div>
            </Card>
          </motion.div>

          {/* Asteroid Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 bg-gradient-to-br from-yellow-900/30 to-amber-900/30 border-yellow-500/30 hover:border-yellow-500/50 transition-all">
              <AlertCircle className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-white mb-2">소행성 근접</h3>
              <p className="text-lg text-yellow-400 mb-1">2023 DW</p>
              <p className="text-sm text-gray-400">1,200만 km 거리</p>
              <div className="mt-4 text-xs text-gray-500">
                위험도: 낮음 ✓
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
