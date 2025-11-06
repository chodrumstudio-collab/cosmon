import { Card } from "../components/ui/card";

export function TermsOfServicePage() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            이용약관
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            COSMOS 서비스를 이용해 주셔서 감사합니다. 본 약관은 서비스 이용과 관련된 권리 및 의무사항을 규정합니다.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제1조 (목적)</h2>
            <p className="text-gray-300">
              본 약관은 COSMOS(이하 "회사")가 제공하는 우주 관련 정보 및 교육 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제2조 (정의)</h2>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="mb-2"><strong className="text-white">1. "서비스"</strong>란 회사가 제공하는 우주 관련 정보, 교육 콘텐츠, 커뮤니티 서비스 등을 의미합니다.</p>
                <p className="mb-2"><strong className="text-white">2. "이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 의미합니다.</p>
                <p><strong className="text-white">3. "회원"</strong>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자를 의미합니다.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제3조 (약관의 게시와 개정)</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</li>
              <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
              <li>회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제4조 (서비스의 제공 및 변경)</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong className="text-white">1. 서비스의 내용</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>우주 관련 정보 제공</li>
                <li>교육 콘텐츠 제공</li>
                <li>커뮤니티 서비스</li>
                <li>천체 관측 데이터 제공</li>
              </ul>
              <p className="mt-4"><strong className="text-white">2. 서비스의 변경</strong></p>
              <p>회사는 서비스의 품질 향상, 기술적 사양의 변경 등을 위해 서비스의 내용을 변경할 수 있습니다.</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제5조 (이용자의 의무)</h2>
            <p className="text-gray-300 mb-4">이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>신청 또는 변경 시 허위내용의 등록</li>
              <li>타인의 정보 도용</li>
              <li>회사가 게시한 정보의 변경</li>
              <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제6조 (서비스 이용의 제한)</h2>
            <p className="text-gray-300 mb-4">
              회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
            </p>
            <p className="text-gray-300">
              다만, 다음 각 호에 해당하는 경우에는 즉시 영구이용정지를 할 수 있습니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
              <li>타인의 개인정보를 도용하거나 허위의 정보를 등록한 경우</li>
              <li>불법적인 행위를 하는 경우</li>
              <li>서비스 운영을 고의로 방해하는 경우</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제7조 (면책조항)</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
              <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
              <li>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">제8조 (준거법 및 관할법원)</h2>
            <p className="text-gray-300">
              본 약관은 대한민국 법률에 따라 규율되고 해석되며, 회사와 이용자 간에 발생한 분쟁에 대하여는 대한민국 법을 준거법으로 하며, 관할법원은 회사의 본사 소재지를 관할하는 법원으로 합니다.
            </p>
            <p className="text-gray-300 mt-4">
              <strong className="text-white">시행일자:</strong> 본 약관은 2025년 1월 1일부터 시행됩니다.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

