## 1. `app/page.tsx` 

```tsx
'use client';

import React, { useState } from 'react';
import Head from 'next/head';

// 선린공인중개사사무소 공인인증 원장 데이터 (Single Source of Truth)
const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구광역시 북구 산격로 95, 1층 101호 (산격동 1218-15)',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  owner: '이용호',
  registrationNumber: '제 27230-2023-00042호',
  businessHours: '09:00 ~ 18:00 (정규 업무)',
  callHours: '06:00 ~ 22:00 (실시간 유선 상담)',
  naverMapUrl: 'https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EC%82%B0%EA%B2%A9%EB%A1%9C%2095/address/14316347.1654157,4289416.7118809,%EB%8C%80%EA%B5%AC%EA%B2%BD%EB%B6%81%EB%8C%80%EA%B5%AC%EC%9A%B0%ED%8E%B8%EC%B 취급%EC%86%8C,new?c=19.00,0,0,0,dh',
  kakaoMapUrl: 'https://map.kakao.com/?q=%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EC%82%B0%EA%B2%A9%EB%A1%9C%2095',
  naverBlogUrl: 'https://blog.naver.com/weebm13'
} as const;

// 미학적 톤앤매너 토큰 (Aged Paper, Charcoal Ink, Seal Red, Brass Gold)
const THEME = {
  colors: {
    bg: '#F6F4EE',       // 한지 느낌의 연한 미색 배경
    inkText: '#242725',  // 묵직한 먹색 텍스트
    sealPoint: '#9E4631',// 책임과 확정을 상징하는 도장 적갈색
    brass: '#A78B5F',    // 품격 있는 황동색
    border: 'rgba(28, 46, 36, 0.08)' // 지적도 및 프레임 구분선
  }
} as const;

export default function SeonrinHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 핫스팟 터치 타겟 정의 (9:16 비율 내 % 기반 절대 좌표계)
  // 이미지 상의 정확한 버튼 및 카드 영역을 핫스팟으로 오버레이합니다.
  const hotspots = [
    {
      id: 'cta-consult',
      label: '상담 예약하기 (유선 직통 연결)',
      href: OFFICE.telHref,
      style: {
        left: '6%',
        top: '60%',
        width: '42%',
        height: '5.5%',
      }
    },
    {
      id: 'cta-process',
      label: '확인 절차 보기 (안심 검증 안내)',
      href: '/benefit-logic', // 안심 산식 명세 페이지로 연계 이동
      style: {
        left: '6%',
        top: '67.2%',
        width: '42%',
        height: '5.5%',
      }
    },
    {
      id: 'card-rights',
      label: '권리검토 (등기부 및 공부 정밀 확인)',
      href: '/benefit-logic',
      style: {
        left: '6%',
        top: '77.5%',
        width: '41%',
        height: '14.5%',
      }
    },
    {
      id: 'card-visit',
      label: '방문 상담 (특수 상담 및 대면 상담 일정)',
      href: OFFICE.telHref,
      style: {
        left: '53%',
        top: '77.5%',
        width: '41%',
        height: '14.5%',
      }
    },
    {
      id: 'bottom-call-dock',
      label: '053-944-1116 유선 직통 다이얼',
      href: OFFICE.telHref,
      style: {
        left: '0%',
        top: '93.5%',
        width: '100%',
        height: '6.5%',
      }
    }
  ];

  return (
    <>
      <Head>
        <title>선린공인중개사사무소 | 대구 북구 산격동 전세·월세 보증금 안전 확인</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes" />
        <meta name="description" content="대구 북구 산격로 95, 산격시장 앞 선린부동산입니다. 산격동·복현동·대현동 아파트 주택 매매, 상가 건물 비공개 매칭, 전세 보증금 안전 검증 및 LH 전세임대 계약 전 서류 확인 전문." />
        <meta property="og:title" content="선린공인중개사사무소 | 대구 북구 산격동" />
        <meta property="og:description" content="대구 북구 산격로 95, 산격시장 앞 선린부동산. 전세 보증금 안전 대조 및 LH 전세임대 상담." />
        <meta property="og:image" content="/assets/hero-master-final.png" />
        <meta name="naver-site-verification" content="8a50ff8a456e42e7a95a-c271bf87f838" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              'name': OFFICE.name,
              'image': 'https://sunrin-realestate.me/assets/hero-master-final.png',
              'telephone': OFFICE.phone,
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '산격로 95, 1층 101호',
                'addressLocality': '북구',
                'addressRegion': '대구광역시',
                'postalCode': '41538',
                'addressCountry': 'KR'
              },
              'url': 'https://sunrin-realestate.me',
              'openingHours': 'Mo-Fr 09:00-18:00'
            })
          }}
        />
      </Head>

      <main 
        className="relative w-full mx-auto overflow-x-hidden"
        style={{
          backgroundColor: THEME.colors.bg,
          color: THEME.colors.inkText,
          maxWidth: '430px', // 모바일 디바이스 가독성 보장 상한선
          minHeight: '100svh'
        }}
      >
        {/* 1. 상단 인클라인 GNB 바 (Header Overlay) */}
        <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 bg-transparent">
          <div className="flex flex-col">
            <h1 className="text-sm font-bold tracking-tight" style={{ color: THEME.colors.inkText }}>
              선린공인중개사사무소
            </h1>
            <span className="text-[10px] opacity-75" style={{ color: THEME.colors.inkText }}>
              대구 북구 산격로 95
            </span>
          </div>

          {/* 삼선 메뉴 토글 버튼 (44px 이상 터치타겟 확보) */}
          <button
            onClick={() => {
              const drawer = document.getElementById('manila-drawer');
              if (drawer) drawer.style.transform = 'translateY(0%)';
            }}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4631]"
            aria-label="안심 자산보호 메뉴 열기"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={THEME.colors.inkText} />
            </svg>
          </button>
        </header>

        {/* 2. 메인 시각 영역 (9:16 모바일 최적화 뷰포트) */}
        <section className="relative w-full" style={{ aspectRatio: '9 / 16' }}>
          {/* 최종 확정 시각 이미지 백그라운드 (중복 텍스트 렌더링 원천 차단) */}
          <img 
            src="/assets/hero-master-final.png" 
            alt="선린공인중개사사무소 자산보호 검증 홈 화면"
            className="w-full h-full object-cover select-none pointer-events-none"
          />

          {/* 투명 핫스팟 터치 영역 레이어 */}
          {hotspots.map((spot) => (
            <a
              key={spot.id}
              href={spot.href}
              style={{
                position: 'absolute',
                display: 'block',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                outline: 'none',
                ...spot.style
              }}
              className="focus-visible:ring-2 focus-visible:ring-[#9E4631] focus-visible:ring-offset-2"
              aria-label={spot.label}
              title={spot.label}
            />
          ))}
        </section>

        {/* 3. 슬라이드업 마닐라 폴더(Manila Folder) 스타일 색인 서랍 */}
        <div 
          id="manila-drawer"
          className="fixed inset-0 z-50 flex flex-col justify-end transition-transform duration-300 ease-out translate-y-full"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        >
          {/* 바깥 영역 탭 시 닫힘 처리 */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => {
              const drawer = document.getElementById('manila-drawer');
              if (drawer) drawer.style.transform = 'translateY(100%)';
            }}
          />

          {/* 한지 질감의 서랍 본문 */}
          <div 
            className="w-full max-w-[430px] mx-auto rounded-t-2xl shadow-xl overflow-hidden flex flex-col"
            style={{ 
              backgroundColor: THEME.colors.bg,
              maxHeight: '85vh',
              borderTop: `1px solid ${THEME.colors.brass}`
            }}
          >
            {/* 서랍 헤더 */}
            <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: THEME.colors.border }}>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: THEME.colors.brass }}>
                  SEONRIN ASSET COMPOSITION
                </span>
                <span className="text-sm font-semibold mt-1">안심 자산보호 메뉴 색인</span>
              </div>
              <button
                onClick={() => {
                  const drawer = document.getElementById('manila-drawer');
                  if (drawer) drawer.style.transform = 'translateY(100%)';
                }}
                className="p-2 min-w-[44px] min-h-[44px] text-xs font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E4631]"
                style={{ color: THEME.colors.sealPoint }}
                aria-label="메뉴 닫기"
              >
                닫기 X
              </button>
            </div>

            {/* 색인 목록 (60대 이용호 소장님의 오프라인 장부 정조 계승) */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {/* [1] 주소·서류 확인 상담 */}
              <a 
                href="/benefit-logic"
                className="block p-4 rounded border transition-colors hover:bg-white/50"
                style={{ borderColor: THEME.colors.border }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: THEME.colors.sealPoint }}>1</span>
                  <span className="text-sm font-bold">주소·서류 확인 상담</span>
                </div>
                <p className="text-xs mt-2 opacity-80 pl-6 leading-relaxed">
                  전월세 / 다가구 / 선순위 보증금 / 확정일자 대조 분석
                </p>
              </a>

              {/* [2] 산격시장 상가 비공개 상담 */}
              <a 
                href={OFFICE.telHref}
                className="block p-4 rounded border transition-colors hover:bg-white/50"
                style={{ borderColor: THEME.colors.border }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: THEME.colors.sealPoint }}>2</span>
                  <span className="text-sm font-bold">산격시장 상가 비공개 상담</span>
                </div>
                <p className="text-xs mt-2 opacity-80 pl-6 leading-relaxed">
                  권리금 유실 방지, 점포 영업 노출 차단, 조용한 매도/임차인 매칭 원장
                </p>
              </a>

              {/* [3] LH 전세임대 가능 여부 */}
              <a 
                href="/benefit-logic"
                className="block p-4 rounded border transition-colors hover:bg-white/50"
                style={{ borderColor: THEME.colors.border }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: THEME.colors.sealPoint }}>3</span>
                  <span className="text-sm font-bold">LH · 공공 전세임대 적격 심사</span>
                </div>
                <p className="text-xs mt-2 opacity-80 pl-6 leading-relaxed">
                  까다로운 공사 심사 기준 선 필터링 및 승인 한도 예측 매칭
                </p>
              </a>

              {/* [4] 주택 정리 · 아파트 이동 상담 */}
              <a 
                href={OFFICE.telHref}
                className="block p-4 rounded border transition-colors hover:bg-white/50"
                style={{ borderColor: THEME.colors.border }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: THEME.colors.sealPoint }}>4</span>
                  <span className="text-sm font-bold">주택 정리 · 아파트 이주 상담</span>
                </div>
                <p className="text-xs mt-2 opacity-80 pl-6 leading-relaxed">
                  평생 가꾼 노후 단독주택 처분 후 신축 아파트 이동 자금 시차 조율
                </p>
              </a>

              {/* [5] 확인 절차 */}
              <div 
                className="block p-4 rounded border bg-white/30"
                style={{ borderColor: THEME.colors.border }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: THEME.colors.sealPoint }}>5</span>
                  <span className="text-sm font-bold">선린 안심 검증 절차</span>
                </div>
                <div className="text-[11px] mt-2 opacity-90 pl-6 space-y-1">
                  <div>1단계: 말로 흘러나온 주소 포착 (지번/도로명 대조)</div>
                  <div>2단계: 등기부등본상의 융자 가액 및 법정기일 당해세 분석</div>
                  <div>3단계: 건축물대장상 불법 위반 요소 및 누수 하자 실사</div>
                  <div>4단계: 선순위 임차보증금 명부 실사 대조</div>
                  <div>5단계: 안전 특약 체결 및 보증금 보호망 작동</div>
                </div>
              </div>

              {/* [6] 위치 보기 */}
              <div 
                className="block p-4 rounded border"
                style={{ borderColor: THEME.colors.border }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: THEME.colors.sealPoint }}>6</span>
                  <span className="text-sm font-bold">위치 및 찾아오시는 길</span>
                </div>
                <p className="text-xs mt-2 opacity-80 pl-6 leading-relaxed">
                  대구광역시 북구 산격로 95 (산격시장 정문 도보 1분 거리)
                </p>
                <div className="flex gap-2 mt-3 pl-6">
                  <a 
                    href={OFFICE.naverMapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded border font-semibold hover:bg-white transition-colors"
                    style={{ borderColor: THEME.colors.border, color: THEME.colors.sealPoint }}
                  >
                    네이버지도 길찾기 ➔
                  </a>
                  <a 
                    href={OFFICE.kakaoMapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] px-3 py-1.5 rounded border font-semibold hover:bg-white transition-colors"
                    style={{ borderColor: THEME.colors.border }}
                  >
                    카카오맵 보기
                  </a>
                </div>
              </div>
            </div>

            {/* 서랍 하단 고정 전화 상담 링크 */}
            <a
              href={OFFICE.telHref}
              className="w-full py-4 text-center text-sm font-bold text-white tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              style={{ 
                backgroundColor: THEME.colors.sealPoint,
                paddingBottom: 'max(16px, env(safe-area-inset-bottom))'
              }}
            >
              📞 {OFFICE.phone} 전화 상담하기
            </a>
          </div>
        </div>

        {/* 4. 중개사법 준수 하단 컴플라이언스 팩트 블록 (Compliance Footer) */}
        <footer 
          className="px-6 py-8 border-t text-[11px] space-y-2 opacity-80 leading-relaxed"
          style={{ 
            borderColor: THEME.colors.border,
            paddingBottom: 'calc(4.5rem + env(safe-area-inset-bottom))', // 하단 고정바 가림 보정 패딩
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <div className="font-bold text-xs mb-1" style={{ color: THEME.colors.inkText }}>
            {OFFICE.name}
          </div>
          <div>대표공인중개사: {OFFICE.owner} | 등록번호: {OFFICE.registrationNumber}</div>
          <div>소재지: {OFFICE.address}</div>
          <div>유선 연락처: {OFFICE.phone} | 영업시간: {OFFICE.businessHours}</div>
          <div className="border-t pt-2 mt-2" style={{ borderColor: THEME.colors.border }}>
            본 홈페이지는 사무소 및 전문 실무 안내 페이지입니다. 구체적인 중개대상물의 세부 조건, 권리관계 및 거래 가능 여부는 실제 공적 장부 대조 및 유선 상담 후 최종 확정 고지됩니다.
          </div>
          <div className="text-[9px] opacity-75">
            © 2026 Seonrin Real Estate. Licensed in Daegu, Korea. All Rights Reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
```
