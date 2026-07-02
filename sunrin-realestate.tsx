'use client';

import React, { useState, useMemo } from 'react';

// ==========================================
// [MASTER UNIQUE REGISTRY] 최신 사업자 고지 원장 정합성 연동 (오차 0%)
// ==========================================
const SUNRIN_OFFICE = {
  name: '선린부동산공인중개사사무소',
  bizNumber: '559-01-02996',
  representative: '이용호',
  address: '대구광역시 북구 산격로 95, 1층 101호(산격동)',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  // 정규 업무 및 유선 상담 대기 위계 완벽 분리
  hours: {
    regular: '09:00 - 18:00 (공적 서류 정밀 대조)',
    extended: '06:00 - 22:00 (유선 조건부 접수 및 신속 배칭)'
  },
  mapUrls: {
    naver: 'https://map.naver.com/v5/entry/place/실제플레이스ID',
    kakao: 'https://map.kakao.com/실제카카오맵ID'
  }
} as const;

// [AESTHETIC GOVERNANCE] 실용적 미학 선행주의 기반 인장/먹색/미색 토큰
const THEME_TOKENS = {
  bg: 'bg-[#F2EFE4]', // 장부 질감의 미색
  text: 'text-[#1B1D1C]', // 신뢰감의 먹색
  accent: 'bg-[#8E3224] text-white', // 책임을 상징하는 인장 적갈색
  card: 'bg-white border border-[#1B1D1C]/10 p-5 shadow-sm space-y-3'
};

export default function SunrinInfrastructureEngine() {
  // 프런트엔드 상태 머신 제어부 (삼선 메뉴 및 상담 트랙 분기 상태 트랙킹)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeTrack, setActiveTrack] = useState<'all' | 'store' | 'apt' | 'lh'>('all');

  // 은유적 신뢰 기법을 반영한 4대 핵심 트랙 팩트 서사 리포트 원장
  const trackContent = useMemo(() => {
    switch (activeTrack) {
      case 'store':
        return {
          title: "점포 자산을 수호하는 소리 없는 조율",
          evidence: "산격시장 전면지 상권 평당 가치 및 업종 밀도 분포 연동",
          body: "상가의 운영 정보와 임대 조율 조건은 시장 권역의 자산 가치를 좌우하는 예민한 명부입니다. 선린은 온라인상의 무분별한 개방식 광고를 제한하고, 원장 기반의 1:1 폐쇄 매칭을 통해 소문 없이 차분하게 자산 이동을 성사시킵니다."
        };
      case 'apt':
        return {
          title: "터전의 처분과 생활 공간의 이주 설계",
          evidence: "산격권역 단독필지 정리 매커니즘 ➔ 복현·대현동 아파트 대형 매매 교차 조율",
          body: "오랜 시간 누적된 단독주택의 대지 가치를 정량 서류로 확실히 소명하여 정리하고, 수급 주기에 맞추어 복현/대현 권역의 주거 자산으로 명확히 연계합니다. 이주 시차에 따른 잔금 고착화와 세무 채권 리스크를 동네 장부 데이터로 예방합니다."
        };
      case 'lh':
        return {
          title: "공공 정책 자금 및 LH 기금 전세 보증 검증",
          evidence: "주택임대차보호법 기준 선순위 보증금 명부 및 위반건축물대장 사전 연산 필터링",
          body: "가장 까다로운 LH 법무법인 심사 기준과 공공 주택 기금 승인 요건을 실무 데스크에서 먼저 대조해 냅니다. 선린이 구축한 엄격한 기준을 통과한 서류는 방문자님의 보편적인 전월세 계약 과정을 가장 안전한 지대로 전환합니다."
        };
      default:
        return {
          title: "소문 없이 조용하게, 등기부 너머의 서류부터 맞춥니다.",
          evidence: "지번 주소 사전 포착 ➔ 등기부 융자액 · 위반 건축 요소 · 조세 채권 우선순위 전수 대조",
          body: "선린은 과장된 포장으로 손님을 현혹하지 않습니다. 대화 속에서 명확한 필지 주소를 먼저 확보하고, 공부상의 모든 하자를 팩트 그대로 확인해 드리는 동네의 무겁고 조용한 자산 필터 데스크입니다."
        };
    }
  }, [activeTrack]);

  return (
    <div className={`min-h-[100svh] w-full relative flex flex-col justify-between ${THEME_TOKENS.bg} ${THEME_TOKENS.text} overflow-x-hidden select-text font-serif`}>
      
      {/* [1] IDENTITY STRIP - 상단 법적 고지 및 실시간 상태 감시 노드 */}
      <header className="relative z-30 w-full px-5 py-4 bg-white/40 backdrop-blur-md border-b border-[#1B1D1C]/10 flex justify-between items-center">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-[0.6rem] font-sans font-black tracking-widest text-[#8E3224] bg-[#8E3224]/10 px-1.5 py-0.5 rounded-none">
              VERIFIED CORE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#1C2E24] animate-pulse" aria-hidden="true" />
            <span className="text-[0.65rem] font-sans text-gray-500">06-22 유선 상담 가동 중</span>
          </div>
          <h1 className="text-[1.15rem] font-black tracking-tight">{SUNRIN_OFFICE.name}</h1>
        </div>

        {/* 햄버거 삼선 제어 버튼 (접근성 터치 규격 44px 준수) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-11 h-11 flex flex-col justify-center items-end gap-1.5 focus:outline-none z-50 relative"
          aria-label="선린 장부 철 색인 서랍 개폐"
          aria-expanded={isMenuOpen}
        >
          <span className={`h-[2px] bg-[#1B1D1C] transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`} />
          <span className={`h-[2px] bg-[#1B1D1C] transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`h-[2px] bg-[#1B1D1C] transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-5'}`} />
        </button>
      </header>

      {/* [2] MANILA INDEX SLIDE DRAWER - 삼선 클릭 시 나타나는 구조 및 내용 명세 */}
      <nav 
        className={`fixed inset-0 bg-[#F2EFE4] z-40 transform transition-transform duration-500 ease-in-out p-6 flex flex-col justify-between ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="space-y-8 pt-20 max-w-md mx-auto w-full font-sans">
          <div className="border-b border-[#1B1D1C]/20 pb-3">
            <span className="text-[0.6rem] font-bold text-[#8E3224] tracking-widest block uppercase">Document Index Drawer</span>
            <p className="text-[1.1rem] font-bold mt-1">선린 자산 검증 서류철</p>
          </div>
          
          {/* 정밀 버튼 텍스트와 라우팅 상태 제어 링크셋 */}
          <div className="space-y-3.5">
            {[
              { id: 'all', title: "① 주소 · 서류 확인 상담", sub: "임대차 / 다가구 / 융자 총액 권리 대조" },
              { id: 'store', title: "② 산격시장 상가 비공개 상담", sub: "영업권 가치 보호 및 조용한 임차 매칭" },
              { id: 'lh', title: "③ LH 전세임대 검증 표준", sub: "지자체 정책 기금 심사 가이드 대조" },
              { id: 'apt', title: "④ 오래된 집 정리와 이주 설계", sub: "단독주택 청산 및 아파트 이동 자금 조율" }
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
                <span className="text-[0.95rem] font-bold">{track.title}</span>
                <span className="text-[0.75rem] text-gray-500 font-light mt-0.5">{track.sub}</span>
              </button>
            ))}
            
            <a 
              href={SUNRIN_OFFICE.mapUrls.naver}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left p-3.5 bg-white border border-[#1B1D1C]/10 hover:border-[#8E3224] block"
            >
              <span className="text-[0.95rem] font-bold">⑤ 사무소 오시는 길</span>
              <span className="text-[0.75rem] text-gray-500 font-light block mt-0.5">대구 북구 산격로 95 (산격시장 정문 앞)</span>
            </a>
          </div>
        </div>

        {/* 내근 이탈 방지용 최하단 복귀 락킹 구조 */}
        <div className="max-w-md mx-auto w-full pb-6 font-sans">
          <a 
            href={SUNRIN_OFFICE.telHref}
            className="block w-full py-4 text-center text-white bg-[#1B1D1C] font-bold tracking-wider text-[0.95rem]"
          >
            📞 {SUNRIN_OFFICE.phone} 유선 바로 연결
          </a>
        </div>
      </nav>

      {/* [3] CORE INTERACTION FRAIM - 정보 위계 및 컨설팅 리포트 레일 */}
      <main className="max-w-md mx-auto w-full z-10 px-5 py-6 space-y-6 pb-36">
        
        {/* 현장 스크립트 기반 히어로 헤드라인 구역 */}
        <div className="space-y-3 text-center sm:text-left pt-2">
          <h2 className="text-[1.85rem] font-bold leading-[1.3] tracking-tight">
            산격로 95, 소문 없이<br />
            <span className="border-b-4 border-[#8E3224]/30 inline-block pb-0.5">조용하게 서류부터 맞춥니다.</span>
          </h2>
          <p className="text-[0.88rem] font-sans text-gray-600 leading-relaxed font-light break-keep">
            선린은 매물을 포장하여 가볍게 노출하는 광고 대행을 거부합니다. 지번 주소를 먼저 대조하고, 건축물대장의 위반 여부와 조세 선순위 채권을 돋보기 아래에서 차분히 걸러내는 조용한 원장 필터 데스크입니다.
          </p>
        </div>

        {/* 상황별 정밀 동작 유도 버튼 (2CTA 레이아웃 메트릭스) */}
        <div className="grid grid-cols-2 gap-2.5 font-sans text-[0.82rem] font-bold">
          <a 
            href={SUNRIN_OFFICE.telHref}
            className="py-3.5 bg-[#1B1D1C] text-white text-center shadow-sm active:scale-[0.99] transition-transform"
          >
            📞 실시간 주소 접수
          </a>
          <a 
            href={SUNRIN_OFFICE.mapUrls.naver}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 bg-white border border-[#1B1D1C]/20 text-center shadow-sm active:scale-[0.99] transition-transform"
          >
            🗺️ 네이버 지도 확인
          </a>
        </div>

        {/* 탭 인터랙션 제어 시스템 스위처 */}
        <div className="space-y-3 font-sans">
          <span className="text-[0.6rem] font-bold text-gray-400 tracking-widest block uppercase">
            실무 원장 대조 레일
          </span>
          <div className="grid grid-cols-4 gap-1 text-[0.72rem] font-bold" role="tablist">
            {(['all', 'store', 'apt', 'lh'] as const).map((trackId) => (
              <button
                key={trackId}
                type="button"
                role="tab"
                aria-selected={activeTrack === trackId}
                onClick={() => setActiveTrack(trackId)}
                className={`py-3 text-center border transition-all ${
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

          {/* 팩트 데이터 정보 출력 카드 (정보 구조 불변의 법칙 엄격 수용) */}
          <div className={THEME_TOKENS.card}>
            <h3 className="font-bold text-[1rem] border-b border-gray-100 pb-2 mb-1">
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

        {/* 자격 상태 증명용 추상화 서식 블록 */}
        <div className="bg-[#E5E1D4] p-4 border border-[#1B1D1C]/10 space-y-1.5 text-left font-sans">
          <h4 className="text-[0.85rem] font-bold tracking-tight flex items-center gap-1.5">
            🛡️ 공인중개사 자격 및 소속 협회 보장 책임 고지
          </h4>
          <p className="text-[0.78rem] text-gray-600 leading-relaxed font-light break-keep">
            본 소속 공인중개사는 한국공인중개사협회 정회원으로서, 매년 거래 안전을 담보하는 법정 공제증서에 정상 가입되어 신뢰를 보존하고 있습니다. 모든 상담 프로세스는 자격증과 등록 원장에 근거하여 합법적으로 가동됩니다.
          </p>
        </div>

        {/* COMPLIANCE FOOTER - 중개대상물 표시광고법 위반 차단 전수 매핑 */}
        <footer className="pt-4 border-t border-[#1B1D1C]/10 space-y-1 text-[0.68rem] font-sans text-gray-400 font-light leading-relaxed text-left">
          <p className="font-medium text-[#1B1D1C]/70">상호명: {SUNRIN_OFFICE.name} | 대표자: {SUNRIN_OFFICE.representative}</p>
          <p>등록번호: 제 27230-2023-00042호 | 사업자번호: {SUNRIN_OFFICE.bizNumber}</p>
          <p>소재지: {SUNRIN_OFFICE.address}</p>
          <p className="pt-2 text-[0.62rem] opacity-75 border-t border-[#1B1D1C]/10 break-keep">
            * 정규 내근 업무 시간({SUNRIN_OFFICE.hours.regular}) 외 아침·저녁 시간({SUNRIN_OFFICE.hours.extended})에는 원활한 실무 대조를 위하여 유선을 통한 지번 주소 사전 포착 의뢰만 접수받습니다. 본 시스템은 표시광고법을 엄격히 준수합니다.
          </p>
        </footer>
      </main>

      {/* [4] FIXED CALL EXECUTION BAR - 최후의 유선 결재선 안전 장치 */}
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
            className="bg-[#8E3224] text-white font-bold px-5 py-3.5 text-[0.88rem] tracking-wide active:brightness-[0.85] transition-all"
          >
            전화 상담하기
          </a>
        </div>
      </div>

    </div>
  );
}