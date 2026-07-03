# 선린부동산 모바일 홈페이지 최종 React 코드 (page.tsx)

본 마크다운 문서에는 대구 북구 산격로 95 선린부동산의 공식 9:16 모바일 홈페이지 최종 마스터 코드가 포함되어 있습니다. 

⚠️ **중요 (Vercel 빌드 오류 방지):**
사장님, 깃허브의 **`app/page.tsx`** 파일 내부에 코드를 붙여넣으실 때, 본 마크다운 파일의 제목(#...)이나 설명글을 포함해서 통째로 붙여넣으면 Next.js 빌드가 실패합니다. 
반드시 아래 코드 상자( **`'use client';`** 로 시작해서 **맨 마지막의 `}`** 로 끝나는 코드 영역) 내부의 **순수한 React 코드만 드래그하여 복사** 하신 뒤 덮어쓰기해 주십시오!

```tsx
'use client';

import React, { useState } from 'react';

// 선린공인중개사사무소 공식 정보 원장 (Single Source of Truth)
const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구광역시 북구 산격로 95, 1층 101호',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  owner: '이용호',
  registrationNumber: '제 27230-2023-00042호',
  businessRegistrationNumber: '559-01-02996',
  businessHours: '09:00 ~ 18:00',
  consultationHours: '06:00 ~ 22:00',
  naverMapUrl: 'https://map.naver.com/v5/entry/place/1069320504',
};

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'special-consult' | null>(null);

  return (
    <main className="relative mx-auto w-full min-h-svh bg-[#F6F4EE] text-[#242725] flex flex-col items-center overflow-x-hidden">
      {/* 360px 모바일 화면 및 핀치 줌 완벽 대응 쉘 */}
      <div className="w-full max-w-[430px] min-h-screen flex flex-col bg-[#F6F4EE] shadow-2xl relative pb-[80px]">
        
        {/* 상단 텍스트 헤더 & 햄버거 메뉴 오버레이 */}
        <header className="absolute top-0 left-0 w-full z-20 px-6 py-5 flex justify-between items-center bg-gradient-to-b from-black/30 to-transparent">
          <div className="flex flex-col text-white">
            <span className="text-[1.1rem] font-bold tracking-tight drop-shadow-md">{OFFICE.name}</span>
            <span className="text-[0.75rem] font-medium opacity-90 tracking-wide drop-shadow-sm">대구 북구 산격로 95</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-white hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4631] rounded-lg"
            aria-label="메뉴 열기"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* 9:16 최적화 안심 핫스팟 이미지 구역 */}
        <div className="relative w-full aspect-[941/1672] overflow-hidden bg-[#FAF9F5]">
          <img
            src="/assets/hero-master-final.png"
            alt="선린공인중개사사무소 주소와 서류 확인 안심 랜딩"
            className="w-full h-full object-cover select-all"
            draggable="false"
          />

          {/* 1. 상담 예약하기 -> '전화 문의(연중무휴)' 즉시 연동 (top button) */}
          <a
            href={OFFICE.telHref}
            className="absolute left-[6.2%] top-[60.5%] w-[44.5%] h-[5.4%] bg-black/0 active:bg-black/10 rounded-full cursor-pointer z-10 transition-colors"
            aria-label="전화 문의 (연중무휴) 연결하기"
          />

          {/* 2. 확인 절차 보기 -> '주소 찾기' 및 '/benefit-logic' 연결 (bottom button) */}
          <a
            href="/benefit-logic"
            className="absolute left-[6.2%] top-[67.3%] w-[44.5%] h-[5.4%] bg-black/0 active:bg-black/10 rounded-full cursor-pointer z-10 transition-colors"
            aria-label="주소 찾기 및 안심 산식 명세 확인하기"
          />

          {/* 3. 권리검토 카드 -> 안심 산식 명세 페이지의 권리 검토 파트로 이동 */}
          <a
            href="/benefit-logic#rights"
            className="absolute left-[6.2%] top-[77.2%] w-[42.5%] h-[14.2%] bg-black/0 active:bg-black/10 rounded-lg cursor-pointer z-10 transition-colors"
            aria-label="주소 및 권리 검토 방식 상세보기"
          />

          {/* 4. 방문 상담 카드 -> 분야별 전문 상담 모달 팝업 가동 */}
          <button
            onClick={() => setActiveModal('special-consult')}
            className="absolute left-[51.3%] top-[77.2%] w-[42.5%] h-[14.2%] bg-transparent active:bg-black/10 rounded-lg cursor-pointer z-10 transition-colors focus:outline-none"
            aria-label="주택 정리, LH/도시공사 전세임대, 점포임대차 분야별 전문 상담 보기"
          />

          {/* 5. 최하단 고정 전화 상담 영역 오버레이 */}
          <a
            href={OFFICE.telHref}
            className="absolute left-[0%] top-[93.2%] w-[100%] h-[6.8%] bg-black/0 active:bg-black/10 cursor-pointer z-10 transition-colors"
            aria-label="선린공인중개사사무소 대표번호로 전화 상담하기"
          />
        </div>

        {/* 안내 카드 및 문맥 보완 구역 */}
        <section className="px-6 py-8 bg-[#FAF9F5] border-t border-[#A7A091]/20">
          <div className="border-l-2 border-[#9E4631] pl-4 mb-6">
            <h2 className="text-[1.2rem] font-bold text-[#242725] leading-tight">
              소문 없이 조용하게,<br />서류는 팩트대로 확인합니다.
            </h2>
          </div>
          <p className="text-[0.95rem] text-[#6F716B] leading-relaxed mb-6">
            대구 북구 산격로 95, 산격시장 앞 선린부동산은 매물을 포장하거나 과장 광고하지 않습니다. 등기부, 건축물대장, 세 세대별 선순위 보증금을 계약 전에 한 번 더 꼼꼼히 대조하고 차분히 안내해 드립니다.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href={OFFICE.telHref}
              className="flex justify-center items-center py-4 bg-[#1D211F] text-white rounded font-medium text-[0.95rem] hover:opacity-90 transition-opacity"
            >
              📞 즉시 전화 상담
            </a>
            <a
              href={OFFICE.naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center py-4 border border-[#A7A091] text-[#242725] rounded font-medium text-[0.95rem] hover:bg-black/5 transition-colors"
            >
              📍 네이버지도 위치
            </a>
          </div>
        </section>

        {/* 공인중개사 자격 및 법적 표시 준수 구역 */}
        <footer className="px-6 py-8 bg-[#E7E0D2] border-t border-[#A7A091]/30 text-[0.8rem] text-[#6F716B] leading-relaxed">
          <div className="mb-4">
            <span className="font-bold text-[#242725]">{OFFICE.name}</span> | 대표 공인중개사: {OFFICE.owner}
          </div>
          <div className="space-y-1">
            <div>• 중개업 등록번호: {OFFICE.registrationNumber}</div>
            <div>• 사업자 등록번호: {OFFICE.businessRegistrationNumber}</div>
            <div>• 주소: {OFFICE.address}</div>
            <div>• 한국공인중개사협회 회원 및 2억 원 손해배상 공제 가입</div>
          </div>
          <p className="mt-4 border-t border-[#A7A091]/20 pt-4 text-[0.75rem] text-opacity-80">
            본 웹사이트는 선린공인중개사사무소의 안내 페이지입니다. 구체적인 중개대상물의 조건, 권리관계, 거래 가능 여부는 실제 공부 서류 확인 및 내방 상담을 통해 확정됩니다.
          </p>
        </footer>

        {/* 모바일 하단 고정 전화 바 (Safe Area 지원) */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-[72px] bg-[#1D211F] text-[#FAF9F5] px-6 flex justify-between items-center z-40 border-t border-white/5 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)]">
          <div className="flex flex-col">
            <span className="text-[0.75rem] opacity-70">상담 가능 시간 06:00 ~ 22:00</span>
            <span className="text-[1.15rem] font-mono font-bold tracking-tight text-[#FAF9F5]">{OFFICE.phone}</span>
          </div>
          <a
            href={OFFICE.telHref}
            className="px-5 py-2.5 bg-[#9E4631] text-[#FAF9F5] rounded font-bold text-[0.9rem] hover:opacity-90 active:scale-95 transition-all shadow-md"
            aria-label="선린공인중개사 대표번호로 전화 걸기"
          >
            전화 연결
          </a>
        </div>

        {/* 햄버거 메뉴 오프캔버스 드로워 (마닐라 폴더 서류철 미학) */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
            <div className="w-[85%] h-full bg-[#F6F4EE] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-[#A7A091]/30">
                  <span className="text-[1rem] font-bold text-[#242725]">선린 자산보호 안내책</span>
                  <button onClick={() => setIsMenuOpen(false)} className="text-[#242725] p-2 hover:opacity-70 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="mt-8 space-y-4">
                  {[
                    {
                      num: '01',
                      title: '주소·서류 확인 상담',
                      desc: '전월세 / 다가구 / 선순위 / 확정일자 대조',
                      href: '/benefit-logic',
                    },
                    {
                      num: '02',
                      title: '산격시장 상가 비공개 상담',
                      desc: '영업 가치와 권리금을 수호하는 조용한 매칭',
                      href: '/benefit-logic#rights',
                    },
                    {
                      num: '03',
                      title: 'LH 전세임대 가능 여부',
                      desc: '가능한 집과 어려운 집 먼저 구분',
                      href: '/benefit-logic#lh',
                    },
                    {
                      num: '04',
                      title: '주택 정리 · 아파트 이동 상담',
                      desc: '오래 살아온 집의 처분, 취득세, 잔금 시차 설계',
                      href: '#',
                      action: () => {
                        setIsMenuOpen(false);
                        setActiveModal('special-consult');
                      },
                    },
                    {
                      num: '05',
                      title: '확인 절차',
                      desc: '주소 ➔ 등기부 ➔ 건축물대장 ➔ 선순위 ➔ 현장확인',
                      href: '/benefit-logic#process',
                    },
                    {
                      num: '06',
                      title: '위치 및 찾아오시는 길',
                      desc: '대구 북구 산격로 95 (도보 1분)',
                      href: OFFICE.naverMapUrl,
                      external: true,
                    },
                  ].map((item, idx) => {
                    const content = (
                      <div className="flex items-start gap-4 p-4 border border-[#A7A091]/20 bg-[#FAF9F5] rounded hover:border-[#9E4631]/40 transition-colors text-left w-full">
                        <span className="text-[1.1rem] font-bold text-[#9E4631]">{item.num}</span>
                        <div className="flex flex-col text-left">
                          <span className="text-[0.95rem] font-bold text-[#242725]">{item.title}</span>
                          <span className="text-[0.75rem] text-[#6F716B] mt-1 leading-snug">{item.desc}</span>
                        </div>
                      </div>
                    );

                    if (item.action) {
                      return (
                        <button
                          key={idx}
                          onClick={item.action}
                          className="w-full block hover:no-underline text-left focus:outline-none"
                        >
                          {content}
                        </button>
                      );
                    }

                    return (
                      <a
                        key={idx}
                        href={item.href}
                        target={item.external ? '_blank' : '_self'}
                        rel={item.external ? 'noopener noreferrer' : ''}
                        className="block hover:no-underline"
                        onClick={() => !item.external && setIsMenuOpen(false)}
                      >
                        {content}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#A7A091]/30">
                <a
                  href={OFFICE.telHref}
                  className="flex justify-center items-center gap-2 py-4 bg-[#9E4631] text-[#FAF9F5] rounded font-bold text-[1rem] hover:opacity-95"
                >
                  📞 {OFFICE.phone} 전화걸기
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 분야별 전문 상담 상세 안내 모달 (방문 상담 핫스팟 클릭 시) */}
        {activeModal === 'special-consult' && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="w-full max-w-[380px] bg-[#F6F4EE] rounded-lg shadow-2xl p-6 border border-[#A7A091]/30 max-h-[85vh] overflow-y-auto">
              <div className="flex justify-between items-center pb-4 border-b border-[#A7A091]/30">
                <span className="text-[1.05rem] font-bold text-[#242725]">분야별 전문 자산 상담</span>
                <button onClick={() => setActiveModal(null)} className="text-[#6F716B] p-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-6 text-[#242725] text-left">
                {/* 1. 주택 정리 및 아파트 이주 */}
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#9E4631] flex items-center gap-1.5">
                    🏠 주택 정리 및 아파트 이주 설계
                  </h4>
                  <p className="text-[0.85rem] text-[#6F716B] mt-2 leading-relaxed">
                    평생 거주해 온 노후 주택을 정리하고 아파트로 이동하려는 은퇴 세대를 위해 자산 매각 대금, 임차보증금 반환 시점, 이사 및 신규 아파트 취득세/잔금 일정을 안전한 시차 설계로 오차 없이 맞춰 드립니다.
                  </p>
                </div>

                {/* 2. LH 및 공공 전세임대 */}
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#9E4631] flex items-center gap-1.5">
                    📑 LH / 도시공사 전세임대 상담
                  </h4>
                  <p className="text-[0.85rem] text-[#6F716B] mt-2 leading-relaxed">
                    권리분석 및 심사 서류가 매우 복잡하고 반려율이 높은 LH/지방공사 전세임대 제도를 전문 지식과 풍부한 실무 경험을 바탕으로, 승인 가능한 매물 선별부터 서류 교부까지 단 한 번에 통과할 수 있도록 리드합니다.
                  </p>
                </div>

                {/* 3. 상가 비공개 매칭 */}
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#9E4631] flex items-center gap-1.5">
                    🤫 산격시장 상업자산 비공개 매칭
                  </h4>
                  <p className="text-[0.85rem] text-[#6F716B] mt-2 leading-relaxed">
                    산격시장과 인근 점포 자산은 섣부른 광고 노출 시 매출 하락 및 단골 이탈, 권리금 유실 등의 리스크가 뒤따릅니다. 상인분들의 자산 보호를 위해 노출 광고를 전면 통제하고 철저히 비공개 1:1 대조식으로 조용하게 매칭을 조율합니다.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#A7A091]/20">
                <a
                  href={OFFICE.telHref}
                  className="flex justify-center items-center py-3 bg-[#1D211F] text-white rounded font-bold text-[0.9rem] hover:opacity-90"
                >
                  📞 지금 안심 유선 문의하기
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
```
