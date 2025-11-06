import { Card } from "../components/ui/card";
import { Mail, MapPin, Phone, Clock, MessageSquare, Send } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            문의하기
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            COSMOS에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락해 주세요.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
                <h2 className="text-2xl font-bold text-white mb-6">연락처 정보</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">이메일</h3>
                      <a href="mailto:info@cosmos.kr" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        info@cosmos.kr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">전화</h3>
                      <a href="tel:1588-0000" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        1588-0000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-500/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">주소</h3>
                      <p className="text-gray-300">
                        서울특별시 강남구 테헤란로 123<br />
                        COSMOS 빌딩 5층
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500/20 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">운영 시간</h3>
                      <p className="text-gray-300">
                        평일: 09:00 - 18:00<br />
                        주말 및 공휴일: 휴무
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
                <h2 className="text-xl font-bold text-white mb-4">빠른 링크</h2>
                <div className="space-y-2">
                  <a href="mailto:partnership@cosmos.kr" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    파트너십 문의 →
                  </a>
                  <a href="mailto:careers@cosmos.kr" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    채용 문의 →
                  </a>
                  <a href="mailto:media@cosmos.kr" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    미디어 문의 →
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">문의 양식</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="문의 제목"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 resize-none"
                    placeholder="문의 내용을 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-400 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  메시지 보내기
                </button>
              </form>
            </Card>
          </div>

          {/* Response Time */}
          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <div className="flex items-center gap-4">
              <MessageSquare className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-white font-semibold mb-1">응답 시간</h3>
                <p className="text-gray-300 text-sm">
                  일반 문의: 평일 기준 1-2일 이내 응답<br />
                  긴급 문의: 평일 기준 24시간 이내 응답
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

