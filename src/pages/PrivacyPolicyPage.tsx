import { Card } from "../components/ui/card";

export function PrivacyPolicyPage() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            개인정보처리방침
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            COSMOS는 사용자의 개인정보를 소중히 다루며, 투명한 정보 처리 방침을 준수합니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">1. 개인정보의 수집 및 이용 목적</h2>
            <p className="text-gray-300 mb-4">
              COSMOS는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>서비스 제공 및 계약의 이행: 회원 가입, 서비스 제공, 콘텐츠 제공</li>
              <li>회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량 회원의 부정 이용 방지</li>
              <li>서비스 개선: 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">2. 개인정보의 수집 항목</h2>
            <p className="text-gray-300 mb-4">COSMOS는 다음의 개인정보 항목을 처리하고 있습니다:</p>
            <div className="space-y-3 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">회원 가입 시</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>필수: 이메일 주소, 비밀번호, 닉네임</li>
                  <li>선택: 프로필 사진, 생년월일</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">서비스 이용 과정에서 자동 수집</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>IP 주소, 쿠키, MAC 주소, 서비스 이용 기록, 방문 기록, 불량 이용 기록 등</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">3. 개인정보의 처리 및 보유 기간</h2>
            <p className="text-gray-300 mb-4">
              COSMOS는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>회원 가입 및 관리: 회원 탈퇴 시까지 (단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관)</li>
              <li>서비스 이용 기록: 3년 (통신비밀보호법)</li>
              <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-300 mb-4">
              COSMOS는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>정보주체가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">5. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-gray-300 mb-4">
              정보주체는 COSMOS에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>개인정보 처리정지 요구권</li>
              <li>개인정보 열람 요구권</li>
              <li>개인정보 정정·삭제 요구권</li>
              <li>개인정보 처리정지 요구권</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">6. 개인정보 보호책임자</h2>
            <p className="text-gray-300 mb-4">
              COSMOS는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-black/30 p-4 rounded-lg text-gray-300">
              <p className="mb-2"><strong className="text-white">이름:</strong> COSMOS 팀</p>
              <p className="mb-2"><strong className="text-white">이메일:</strong> privacy@cosmos.kr</p>
              <p><strong className="text-white">연락처:</strong> 1588-0000</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">7. 개인정보 처리방침 변경</h2>
            <p className="text-gray-300">
              이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

