## 1. `app/benefit-logic/page.tsx` 

```tsx
'use client';

import React, { useState } from 'react';
import Head from 'next/head';

const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구광역시 북구 산격로 95, 1층 101호',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  owner: '이용호',
  registrationNumber: '제 27230-2023-00042호'
} as const;

const THEME = {
  colors: {
    bg: '#F6F4EE',       // 미색 종이 질감
    inkText: '#242725',  // 묵직한 먹색
    sealPoint: '#9E4631',// 도장 적갈색
    brass: '#A78B5F',    // 황동색
    border: 'rgba(28, 46, 36, 0.08)',
    cardBg: '#FAF9F5'    // 고대비 카드 배경
  }
} as const;

export default function BenefitLogicPage() {
  const [activeTab, setActiveTab] = useState<'income' | 'burden' | 'benefit'>('income');

  return (
    <>
      <Head>
        <title>안심 산식 명세서 | 선린공인중개사사무소</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes" />
        <meta name="description" content="대구 북구 산격동 선린부동산. 대구광역시 기초생활수급자 자격 및 주거급여 변화율 3대 법률 산식(소득인정액, 자기부담분, 실질주거보조금) 정밀 명세서." />
      </Head>

      <main 
        className="relative w-full mx-auto overflow-x-hidden"
        style={{
          backgroundColor: THEME.colors.bg,
          color: THEME.colors.inkText,
          maxWidth: '430px',
          minHeight: '100svh'
        }}
      >
        {/* 상단 띠 내비게이션 */}
        <header className="px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: THEME.colors.border }}>
          <a href="/" className="text-xs font-bold hover:underline" style={{ color: THEME.colors.sealPoint }}>
            ← 메인 화면으로 돌아가기
          </a>
          <span className="text-[10px] font-bold tracking-wider" style={{ color: THEME.colors.brass }}>
            LEGAL CALCULATION MATRIX
          </span>
        </header>

        {/* 에디토리얼 타이틀 섹션 */}
        <section className="px-6 py-8 space-y-4">
          <span className="text-[10px] font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: THEME.colors.sealPoint }}>
            행정·법률 수호 검증망
          </span>
          <h2 className="text-xl font-bold tracking-tight leading-snug">
            대구광역시 수급권 보호를 위한<br />
            <span style={{ color: THEME.colors.sealPoint }}>주거급여 변화율 안심 명세서</span>
          </h2>
          <p className="text-xs opacity-85 leading-relaxed">
            임대차 계약서에 찍히는 보증금과 월세의 비율 변화는 단순히 금액의 문제가 아닙니다. 단 1만 원의 보증금 오차로도 평생 일군 수급 자격이 박탈될 수 있기에, 선린은 계약 전 3대 법률 산식을 1원 단위까지 역산하여 검증합니다.
          </p>
        </section>

        {/* 3대 산식 동적 탭 스위처 (44px 이상 터치타겟 및 ARIA 반영) */}
        <section className="px-6">
          <div className="grid grid-cols-3 rounded-md overflow-hidden border" style={{ borderColor: THEME.colors.border }}>
            <button
              onClick={() => setActiveTab('income')}
              className="py-3 text-xs font-bold transition-all focus:outline-none focus-visible:bg-white"
              style={{
                backgroundColor: activeTab === 'income' ? THEME.colors.sealPoint : 'transparent',
                color: activeTab === 'income' ? '#FFFFFF' : THEME.colors.inkText,
                minHeight: '44px'
              }}
              aria-selected={activeTab === 'income'}
              role="tab"
            >
              01. 소득인정액
            </button>
            <button
              onClick={() => setActiveTab('burden')}
              className="py-3 text-xs font-bold transition-all focus:outline-none focus-visible:bg-white"
              style={{
                backgroundColor: activeTab === 'burden' ? THEME.colors.sealPoint : 'transparent',
                color: activeTab === 'burden' ? '#FFFFFF' : THEME.colors.inkText,
                minHeight: '44px'
              }}
              aria-selected={activeTab === 'burden'}
              role="tab"
            >
              02. 자기부담분
            </button>
            <button
              onClick={() => setActiveTab('benefit')}
              className="py-3 text-xs font-bold transition-all focus:outline-none focus-visible:bg-white"
              style={{
                backgroundColor: activeTab === 'benefit' ? THEME.colors.sealPoint : 'transparent',
                color: activeTab === 'benefit' ? '#FFFFFF' : THEME.colors.inkText,
                minHeight: '44px'
              }}
              aria-selected={activeTab === 'benefit'}
              role="tab"
            >
              03. 주거급여액
            </button>
          </div>
        </section>

        {/* 동적 산식 명세 카드 영역 */}
        <section className="px-6 py-6">
          {activeTab === 'income' && (
            <div className="p-6 rounded-lg border space-y-6" style={{ backgroundColor: THEME.colors.cardBg, borderColor: THEME.colors.border }}>
              <div className="flex flex-col border-b pb-4" style={{ borderColor: THEME.colors.border }}>
                <span className="text-[10px] font-bold" style={{ color: THEME.colors.brass }}>FORMULA 01</span>
                <h3 className="text-base font-bold mt-1 text-gray-900">임차보증금의 소득환산 연산 수식</h3>
              </div>

              {/* 공식 뷰어 */}
              <div className="p-4 rounded bg-white border font-mono text-xs space-y-2" style={{ borderColor: THEME.colors.border }}>
                <div className="font-bold text-gray-800">재산의 소득환산액 =</div>
                <div className="text-[#9E4631] font-bold">
                  (임차보증금 - 기본재산액 공제 - 금융재산 공제) × 월 1.04%
                </div>
              </div>

              {/* 디테일 법률 팩트 명세 */}
              <div className="text-xs space-y-4 leading-relaxed">
                <div>
                  <h4 className="font-bold" style={{ color: THEME.colors.sealPoint }}>• 대구광역시(광역시) 기본재산공제: 8,000만 원</h4>
                  <p className="mt-1 text-gray-700">
                    일반 중소도시(7,700만 원)와 달리 대구광역시는 **8,000만 원**이 일괄 기초공제됩니다. 단 300만 원의 오차가 월 31,200원의 가상 소득인정액 차이를 만들어내므로 광역시 기준을 반드시 정확히 락킹해야 합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: THEME.colors.sealPoint }}>• 금융재산 생활준비금 공제: 500만 원</h4>
                  <p className="mt-1 text-gray-700">
                    수급가구의 보증금 마련 및 생활안정을 보존하기 위해 통장 내 금융재산에서 **500만 원**을 우선 제외하고 소득환산을 가중합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: THEME.colors.sealPoint }}>• 1인 가구 정기 사적이전소득 공제: 월 366,376원</h4>
                  <p className="mt-1 text-gray-700">
                    수도권 자녀들이 대구의 부모님께 매달 부치는 regular 생활비는 2026년 기준 중위소득의 15% 한도인 **월 366,376원(약 36.6만 원)**까지 전액 면제되며, 초과분에 한해서만 소득에 반영합니다.
                  </p>
                </div>
                <div className="bg-white/70 p-3 rounded text-[11px] border" style={{ borderColor: THEME.colors.border }}>
                  <span className="font-bold">선린 안심 조언:</span> 보증금이 공제한도를 넘어서면 월 1.04%라는 매우 높은 이율로 소득이 간주되므로, 수급권 한계선에 걸쳐있는 임차인의 보증금액 조정은 대단히 예민하게 다루어야 합니다.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'burden' && (
            <div className="p-6 rounded-lg border space-y-6" style={{ backgroundColor: THEME.colors.cardBg, borderColor: THEME.colors.border }}>
              <div className="flex flex-col border-b pb-4" style={{ borderColor: THEME.colors.border }}>
                <span className="text-[10px] font-bold" style={{ color: THEME.colors.brass }}>FORMULA 02</span>
                <h3 className="text-base font-bold mt-1 text-gray-900">기준 초과 소득에 따른 자기부담분 산식</h3>
              </div>

              {/* 공식 뷰어 */}
              <div className="p-4 rounded bg-white border font-mono text-xs space-y-2" style={{ borderColor: THEME.colors.border }}>
                <div className="font-bold text-gray-800">자기부담분 =</div>
                <div className="text-[#9E4631] font-bold">
                  (소득인정액 - 생계급여 선정기준) × 30%
                </div>
              </div>

              {/* 디테일 법률 팩트 명세 */}
              <div className="text-xs space-y-4 leading-relaxed">
                <div>
                  <h4 className="font-bold" style={{ color: THEME.colors.sealPoint }}>• 생계급여 최저보장 선정기준: 1인 가구 781,602원</h4>
                  <p className="mt-1 text-gray-700">
                    소득인정액이 2026년 1인 가구 기준 생계기준선인 **781,602원** 이하인 경우에는 국가 주거급여(지원 한도금액 내)가 전액 무상 지급되며 자기부담분은 발생하지 않습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: THEME.colors.sealPoint }}>• 초과액에 대한 30% 자기부담 감액제</h4>
                  <p className="mt-1 text-gray-700">
                    소득인정액이 생계급여 기준선을 초과하면, 초과된 금액의 정확히 **30%**를 실제 매달 지급되던 주거급여 지원액에서 차감청산한 후 잔액만 입금됩니다.
                  </p>
                </div>
                <div className="bg-white/70 p-3 rounded text-[11px] border" style={{ borderColor: THEME.colors.border }}>
                  <span className="font-bold">선린 안심 조언:</span> 자녀가 부치는 지원금이나 잘못 이전된 임차보증금이 소득인정액을 단돈 10만 원만 올리더라도, 자기부담금이 매달 3만 원씩 늘어나 주거 보조 혜택이 대폭 삭감됩니다.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefit' && (
            <div className="p-6 rounded-lg border space-y-6" style={{ backgroundColor: THEME.colors.cardBg, borderColor: THEME.colors.border }}>
              <div className="flex flex-col border-b pb-4" style={{ borderColor: THEME.colors.border }}>
                <span className="text-[10px] font-bold" style={{ color: THEME.colors.brass }}>FORMULA 03</span>
                <h3 className="text-base font-bold mt-1 text-gray-900">대구광역시 주거급여 실질 변화율 연산</h3>
              </div>

              {/* 공식 뷰어 */}
              <div className="p-4 rounded bg-white border font-mono text-xs space-y-2" style={{ borderColor: THEME.colors.border }}>
                <div className="font-bold text-gray-800">최종 주거급여 지급액 =</div>
                <div className="text-[#9E4631] font-bold">
                  Min(실제 임차료, 대구 기준임대료) - 자기부담분
                </div>
              </div>

              {/* 디테일 법률 팩트 명세 */}
              <div className="text-xs space-y-4 leading-relaxed">
                <div>
                  <h4 className="font-bold" style={{ color: THEME.colors.sealPoint }}>• 대구광역시(2급지) 주거급여 지급 상한: 268,000원</h4>
                  <p className="mt-1 text-gray-700">
                    2026년 기준 2급지(대구 등 광역시) 1인 가구 기준임대료 상한선은 **268,000원**입니다. 실제 내는 월세가 이를 초과하더라도 국가 보조금은 최대 26.8만 원 한도 안에서만 작동합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: THEME.colors.sealPoint }}>• 월세 감면 이면의 실질 수령 변화율 조율</h4>
                  <p className="mt-1 text-gray-700">
                    보증금을 1,000만 원 올려서 주거 부담 월세를 5만 원 줄이려고 시도하면 안 됩니다. 보증금 상승으로 소득인정액 가중치가 올라가 주거보조 수령금이 5만 원 넘게 삭감되어 오히려 마이너스 총액 손실이 발생할 수 있습니다.
                  </p>
                </div>
                <div className="bg-white/70 p-3 rounded text-[11px] border" style={{ borderColor: THEME.colors.border }}>
                  <span className="font-bold">선린 안심 조언:</span> "보증금을 얼마 올리면 주거급여 통장으로 매달 입금되는 지원금이 정확히 몇 퍼센트 삭감되는지"를 사전에 역산·소명해 주는 부동산은 선린공인중개사사무소가 유일합니다.
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 서류 기반 안심 법률 고지 블록 */}
        <section className="px-6 pb-8">
          <div className="p-4 rounded-md border text-[11px] leading-relaxed space-y-2" style={{ borderColor: THEME.colors.border, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <div className="font-bold text-xs" style={{ color: THEME.colors.inkText }}>⚠️ 법률 및 행정 안전 고지</div>
            <div>
              본 명세서상에 도출된 연산 규칙은 보건복지부 및 국토교통부 고시 기준의 단순 점검용 모의 역산입니다. 방문자의 구체적인 근로소득, 기본 금융 정보 및 개별 가구원 상태에 따라 소득인정액 판단 기준은 실제 행정관청의 검증과 달라질 수 있습니다.
            </div>
            <div className="font-bold">
              계약 전 공적 장부의 교차 열람 및 053-944-1116 유선 대조가 필수적인 이유입니다.
            </div>
          </div>
        </section>

        {/* 중개사법 하단 Footer */}
        <footer className="px-6 py-8 border-t text-[11px] space-y-2 opacity-80" style={{ borderColor: THEME.colors.border }}>
          <div className="font-bold" style={{ color: THEME.colors.inkText }}>{OFFICE.name}</div>
          <div>대표: {OFFICE.owner} | 등록번호: {OFFICE.registrationNumber}</div>
          <div>소재지: {OFFICE.address} | 문의: {OFFICE.phone}</div>
        </footer>

        {/* 하단 고정 전화 상담 링크 독 */}
        <div className="fixed bottom-0 left-0 right-0 z-40 max-w-[430px] mx-auto">
          <a
            href={OFFICE.telHref}
            className="w-full py-4 text-center text-sm font-bold text-white tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
            style={{ 
              backgroundColor: THEME.colors.sealPoint,
              paddingBottom: 'max(16px, env(safe-area-inset-bottom))'
            }}
          >
            📞 {OFFICE.phone} 즉시 안심 전화 상담 (연중무휴)
          </a>
        </div>
      </main>
    </>
  );
}
