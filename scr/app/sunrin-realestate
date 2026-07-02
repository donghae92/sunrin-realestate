'use client';

import React, { useState, useMemo } from 'react';

// ==========================================
// [MASTER UNIQUE REGISTRY] Verified Business Ledger (정합성 100%)
// ==========================================
const SUNRIN_OFFICE = {
  name: '선린부동산공인중개사사무소',
  bizNumber: '559-01-02996',
  representative: '이용호',
  address: '대구광역시 북구 산격로 95, 1층 101호(산격동)',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  hours: {
    regular: '09:00 - 18:00 (공적 원장 대조 및 내근 실무)',
    extended: '06:00 - 22:00 (유선 주소 선포착 및 문자 상담 접수)'
  },
  mapUrls: {
    naver: 'https://map.naver.com/v5/entry/place/verified_sunrin',
    kakao: 'https://map.kakao.com/verified_sunrin'
  }
} as const;

// [AESTHETIC GOVERNANCE] 실용적 미학 선행주의 전용 핵심 톤 체계
const THEME_TOKENS = {
  bg: 'bg-[#F2EFE4]',      // 장부 서식 질감의 미색
  text: 'text-[#1B1D1C]',  // 공문서적 무게감의 먹색
  accent: 'bg-[#8E3224]',  // 확증과 책임을 상징하는 인장 적갈색
  card: 'bg-white border border-[#1B1D1C]/10 p-5 shadow-sm space-y-3 rounded-none'
};

export default function SunrinInfrastructureEngine() {
  // 프런트엔드 상태 머신 제어 매트릭스
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeTrack, setActiveTrack] = useState<'all' | 'store' | 'apt' | 'lh'>('all');

  // 은유적 신뢰 기법을 반영한 4대 핵심 상담 트랙 서사 뱅크
  const trackContent = useMemo(() => {
    switch (activeTrack) {
      case 'store':
        return {
          title: "점포 자산의 가치를 수호하는 소리 없는 조율",
          evidence: "산격시장 전면 상권 평당 임대 조건 및 영업권 보호 분석 연동",
          body: "상가의 권리금과 세부 임대 요건은 시장 권역 상인들의 생계와 자산 가치가 직결된 예민한 명부입니다. 선린은 포털상의 개방형 광고 노출을 통제하고, 유선 장부를 기반으로 한 1:1 폐쇄 매칭 프로세스를 가동하여 소문 없이 차분하게 거래를 종결합니다."
        };
      case 'apt':
        return {
          title: "오래 거주하신 터전의 처분과 주거 이동 설계",
          evidence: "산격동 노후 주택 단독 필지 청산 ➔ 복현·대현동 아파트 대형 매매 시차 조율",
          body: "오랜 시간 누적된 단독주택의 대지 가치를 공적 서류로 확실히 소명하여 정리하고, 수급 주기에 맞추어 복현/대현 권역의 신축 아파트 자산으로 유기적으로 연계합니다. 명도 처리와 잔금 시차에 따른 자금 고착화 리스크를 현장 장부 데이터로 조율합니다."
        };
      case 'lh':
        return {
          title: "공공 정책 기금 및 LH 전세 보증 검증 표준",
          evidence: "주택임대차보호법에 근거한 선순위 보증금 명부 및 위반 건축 요소 사전 필터링",
          body: "서류 절차가 까다로운 LH·도시공사 전세임대 권리분석 심사와 수급 자격선 자격 보존 행정 실무를 명확히 풀어냅니다. 가장 복합적인 공공기금 심사망을 교차 대조해 온 내공이 있기에, 방문자님의 보편적인 전월세 계약 거래는 더욱 확실하고 안전하게 마감됩니다."
        };
      default:
        return {
          title: "소문 없이 조용하게, 등기부 너머의 서류부터 맞춥니다.",
          evidence: "지번 주소 사전 포착 ➔ 등기부 융자액 · 건축물대장 위반 여부 · 조세 채권 우선순위 대조",
          body: "선린은 매물을 포장하여 가볍게 노출하지 않습니다. 계약 전 단계에서 도로명 og 지번 주소를 명확히 파악하고, 눈에 보이지 않는 조세 채권 우선순위와 공부상의 리스크를 팩트 그대로 교차 확인해 드리는 동네의 무겁고 조용한 계약 필터입니다."
        };
    }
  }, [activeTrack]);

  return (
    <div className={`min-h-[100svh] w-full relative flex flex-col justify-between ${THEME_TOKENS.bg} ${THEME_TOKENS.text} overflow-x-hidden select-text font-serif`}>
      
      {/* 사장님 전용 로컬 비주얼/그래픽 레이어 슬롯 (정적 캔버스) */}
      <div className="absolute inset-0 z-0 pointer-events-none" id="sunrin-canvas-bg" />

      {/* [1] IDENTITY STRIP - 상단 고지 및 상태 감시 노드 */}
      <header className="relative z-30 w-full px-5 py-4 bg-white/40 backdrop-blur-md border-b border-[#1B1D1C]/10 flex justify-between items-center">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-[0.6rem] font-sans font-black tracking-widest text-[#8E3224] bg-[#8E3224]/10 px-1.5 py-0.5">
              VERIFIED CORE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C2E24] animate-pulse" />
            <span className="text-[0.62rem] font-sans text-gray-500">06:00 - 22:00 유선 가동</span>
          </div>
          <h1 className="text-[1.15rem] font-black tracking-tight text-black">{SUNRIN_OFFICE.name}</h1>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-11 h-11 flex flex-col justify-center items-end gap-1.5 focus:outline-none z-50 relative"
          aria-label="선린 자산 파일 서랍 열기"
          aria-expanded={isMenuOpen}
        >
          <span className={`h-[2px] bg-[#1B1D1C] transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`} />
          <span className={`h-[2px] bg-[#1B1D1C] transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`h-[2px] bg-[#1B1D1C] transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-5'}`} />
        </button>
      </header>

      {/* [2] ACCESSIBLE MANILA INDEX DRAWER - 삼선 라우터 명세 구역 */}
      <nav 
        className={`fixed inset-0 bg-[#F2EFE4] z-40 transform transition-transform duration-500 ease-in-out p-6 flex flex-col justify-between ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="space-y-8 pt-20 max-w-md mx-auto w-full font-sans">
          <div className="border-b border-[#1B1D1C]/20 pb-3">
            <span className="text-[0.6rem] font-bold text-[#8E3224] tracking-widest block uppercase">Document Index Drawer</span>
            <p className="text-[1.1rem] font-bold mt-1 text-black">선린 자산 검증 서류철</p>
          </div>
          
          <div className="space-y-3">
            {[
              { id: 'all', title: "① 주소 · 서류 확인 상담", sub: "전월세 / 다가구 / 선순위 / 확정일자 대조" },
              { id: 'store', title: "② 산격시장 상가 비공개 상담", sub: "권리금 보호 · 영업 정보 노출 차단" },
              { id: 'lh', title: "③ LH 전세임대 가능 여부", sub: "법무법인 심사 기준 사전 필터링" },
              { id: 'apt', title: "④ 주택 정리 · 아파트 이동 상담", sub: "오래 살아온 집 처분, 명도, 잔금 시차 조율" }
            ].map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => {
                  setActiveTrack(track.id as any);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left p-3.5 bg-white border border-[#1B1D1C]/10 hover:border-[#8E3224] transition-all flex flex-col"
              >
                <span className="text-[0.95rem] font-bold text-black">{track.title}</span>
                <span className="text-[0.75rem] text-gray-500 font-light mt-0.5">{track.sub}</span>
              </button>
            ))}
            
            <a 
              href={SUNRIN_OFFICE.mapUrls.naver}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left p-3.5 bg-white border border-[#1B1D1C]/10 hover:border-[#8E3224] block"
            >
              <span className="text-[0.95rem] font-bold text-black">⑤ 사무소 오시는 길</span>
              <span className="text-[0.75rem] text-gray-500 font-light block mt-0.5">{SUNRIN_OFFICE.address}</span>
            </a>
          </div>
        </div>

        <div className="max-w-md mx-auto w-full pb-6 font-sans">
          <a 
            href={SUNRIN_OFFICE.telHref}
            className="block w-full py-4 text-center text-white bg-[#1B1D1C] font-bold tracking-wider text-[0.95rem] active:bg-black"
          >
            📞 {SUNRIN_OFFICE.phone} 유선 바로 연결
          </a>
        </div>
      </nav>

      {/* [3] CORE IA CONTAINER - 원장 위계 기반 정보 배치 레이어 */}
      <main className="max-w-md mx-auto w-full z-10 px-5 py-6 space-y-6 pb-36">
        
        <div className="space-y-3 text-center sm:text-left pt-2">
          <h2 className="text-[1.85rem] font-bold leading-[1.3] tracking-tight text-black">
            산격로 95, 소문 없이<br />
            <span className="border-b-4 border-[#8E3224]/30 inline-block pb-0.5">조용하게 서류부터 맞춥니다.</span>
          </h2>
          <p className="text-[0.88rem] font-sans text-gray-600 leading-relaxed font-light break-keep">
            선린은 매물을 포장하여 가볍게 노출하는 광고 마케팅 방식을 지양합니다. 도로명과 지번 주소를 명확히 파악하고, 등기부상 채권 총액과 건축물대장의 공부상 결함을 사전에 교차 확인해 드리는 동네의 조용한 계약 필터입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 font-sans text-[0.82rem] font-bold">
          <a 
            href={SUNRIN_OFFICE.telHref}
            className="py-3.5 bg-[#1B1D1C] text-white text-center shadow-sm active:scale-[0.99] transition-all"
          >
            📞 실시간 주소 접수
          </a>
          <a 
            href={SUNRIN_OFFICE.mapUrls.naver}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 bg-white border border-[#1B1D1C]/20 text-black text-center shadow-sm active:scale-[0.99] transition-all"
          >
            🗺️ 네이버 지도 확인
          </a>
        </div>

        <div className="space-y-3 font-sans">
          <span className="text-[0.6rem] font-bold text-gray-400 tracking-widest block uppercase">
            실무 장부 대조 레일
          </span>
          <div className="grid grid-cols-4 gap-1 text-[0.72rem] font-bold" role="tablist">
            {(['all', 'store', 'apt', 'lh'] as const).map((trackId) => (
              <button
                key={trackId}
                type="button"
                role="tab"
                aria-selected={activeTrack === trackId}
                onClick={() => setActiveTrack(trackId)}
                className={`py-3 text-center border transition-all rounded-none ${
                  activeTrack === trackId 
                    ? 'bg-[#1B1D1C] text-[#F2EFE4] border-[#1B1D1C]' 
                    : 'bg-white text-gray-500 border-gray-200 hover:text-black'
                }`}
              >
                {trackId === 'all' && '통합검증'}
                {trackId === 'store' && '상가점포'}
                {trackId === 'apt' && '주택정리'}
                {trackId === 'lh' && 'LH정책'}
              </button>
            ))}
          </div>

          <div className={THEME_TOKENS.card}>
            <h3 className="font-bold text-[1rem] border-b border-gray-100 pb-2 mb-1 text-black font-serif">
              {trackContent.title}
            </h3>
            <p className="text-[0.72rem] text-[#8E3224] font-bold tracking-tight">
              🔍 {trackContent.evidence}
            </p>
            <p className="text-[0.84rem] text-gray-600 leading-relaxed font-light font-sans break-keep">
              {trackContent.body}
            </p>
          </div>
        </div>

        <div className="bg-[#E5E1D4] p-4 border border-[#1B1D1C]/10 space-y-1.5 text-left font-sans">
          <h4 className="text-[0.85rem] font-bold tracking-tight text-black flex items-center gap-1.5">
            🛡️ 공인중개사 자격 및 소속 협회 보장 책임 고지
          </h4>
          <p className="text-[0.78rem] text-gray-600 leading-relaxed font-light break-keep">
            본 소속 공인중개사는 한국공인중개사협회 정회원으로서, 매년 거래 자산 안전을 담보하는 법정 공제증서에 정상 가입되어 신뢰를 보존하고 있습니다. 모든 상담 프로세스는 적법한 자격증과 등록 원장에 근거하여 책임 가동됩니다.
          </p>
        </div>

        <footer className="pt-4 border-t border-[#1B1D1C]/10 space-y-1 text-[0.68rem] font-sans text-gray-400 font-light leading-relaxed text-left">
          <p className="font-medium text-[#1B1D1C]/70">상호명: {SUNRIN_OFFICE.name} | 대표자: {SUNRIN_OFFICE.representative}</p>
          <p>등록번호: 제 27230-2023-00042호 | 사업자번호: {SUNRIN_OFFICE.bizNumber}</p>
          <p>소재지: {SUNRIN_OFFICE.address}</p>
          <p className="pt-2 text-[0.62rem] opacity-75 border-t border-[#1B1D1C]/10 break-keep">
            * 정규 내근 업무 시간({SUNRIN_OFFICE.hours.regular}) 외 아침·저녁 대기 시간({SUNRIN_OFFICE.hours.extended})에는 임의의 정보 유출을 차단하기 위하여 유선을 통한 지번 주소 사전 포착 의뢰만 접수받습니다. 본 시스템은 표시광고법을 엄격히 준수합니다.
          </p>
        </footer>
      </main>

      {/* [4] FIXED CALL BAR - 하단 Safe-area 대응 고정전화 락킹 바 */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#1B1D1C] border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.2)] font-sans">
        <div className="flex justify-between items-center px-5 pt-3.5 pb-[max(14px,env(safe-area-inset-bottom))] max-w-md mx-auto">
          <div className="flex flex-col text-left">
            <span className="text-[0.58rem] text-gray-400 uppercase tracking-widest font-medium">Fixed Consultation Authority</span>
            <a 
              href={SUNRIN_OFFICE.telHref}
              className="text-[1.5rem] font-black font-mono tracking-wider text-[#D4C3A3] leading-none mt-0.5"
            >
              {SUNRIN_OFFICE.phone}
            </a>
          </div>
          <a
            href={SUNRIN_OFFICE.telHref}
            className="bg-[#8E3224] text-white font-bold px-5 py-3.5 text-[0.88rem] tracking-wide active:brightness-[0.85] transition-all text-center"
          >
            전화 상담하기
          </a>
        </div>
      </div>

    </div>
  );
}
