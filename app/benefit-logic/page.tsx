'use client';

import React, { useState } from 'react';

const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구광역시 북구 산격로 95, 1층 101호',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  registrationNumber: '제 27230-2023-00042호',
  owner: '이용호'
} as const;

export default function BenefitLogicPage() {
  const [activeTab, setActiveTab] = useState<'income' | 'burden' | 'benefit'>('income');

  // 대화형 시뮬레이션 기본 초깃값 설정 (단위: 만 원)
  const [deposit, setDeposit] = useState<number>(5000); // 기본 보증금 5,000만 원 (5000만 원)
  const [otherLoans, setOtherLoans] = useState<number>(1000); // 선순위 채권/타 세대 보증금 합계 1,000만 원

  // 대구광역시 기본재산액 공제한도 고시 락킹: 8,000만 원
  const basicDeduction = 8000; 
  const conversionRate = 0.0104; // 재산의 소득환산율 월 1.04%

  // 대구광역시 산격동 단독·다가구 경락낙찰가율 기본 가중치 63.5% 반영
  const liquidationRate = 0.635;
  const estimatedMarketValue = 12000; // 가상 모의 건물 가치 1억 2,000만 원 가정
  const safetyLimit = Math.round(estimatedMarketValue * liquidationRate);
  const isSafe = deposit + otherLoans <= safetyLimit;

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#242725] px-4 py-8 font-sans flex flex-col items-center">
      <div className="w-full max-w-[430px] flex flex-col bg-[#FDFBF7] shadow-2xl rounded-md border border-[#A7A091]/30 overflow-hidden pb-24">
        
        {/* Header */}
        <header className="px-6 py-6 border-b border-[#A7A091]/30 bg-[#FAF9F5]">
          <span className="text-[0.7rem] text-[#9E4631] font-bold uppercase tracking-widest">
            선린 행정·복지 수호 진단 원장
          </span>
          <h1 className="text-[1.4rem] font-bold mt-1 text-[#242725]">
            주거급여 안심 산식 명세서
          </h1>
          <p className="text-[0.8rem] text-[#6F716B] mt-1.5 leading-relaxed">
            대구광역시(광역시) 기준의 기초생활보장 수급 지침과 산격동 단독·다가구 경매 경락가율을 기반으로, 계약 전 보증금 손실 위험과 주거급여 보조금 수급 변동을 사전 진단합니다.
          </p>
        </header>

        {/* 3대 산식 셀렉트 탭 */}
        <div className="px-6 pt-6">
          <div className="flex bg-[#E7E0D2]/50 p-1 rounded-md border border-[#A7A091]/20">
            <button
              onClick={() => setActiveTab('income')}
              className={`flex-1 py-3 text-[0.85rem] font-bold rounded transition-all ${
                activeTab === 'income'
                  ? 'bg-[#1D211F] text-white shadow'
                  : 'text-[#6F716B] hover:text-[#242725]'
              }`}
            >
              1. 소득인정액
            </button>
            <button
              onClick={() => setActiveTab('burden')}
              className={`flex-1 py-3 text-[0.85rem] font-bold rounded transition-all ${
                activeTab === 'burden'
                  ? 'bg-[#1D211F] text-white shadow'
                  : 'text-[#6F716B] hover:text-[#242725]'
              }`}
            >
              2. 자기부담분
            </button>
            <button
              onClick={() => setActiveTab('benefit')}
              className={`flex-1 py-3 text-[0.85rem] font-bold rounded transition-all ${
                activeTab === 'benefit'
                  ? 'bg-[#1D211F] text-white shadow'
                  : 'text-[#6F716B] hover:text-[#242725]'
              }`}
            >
              3. 실질급여액
            </button>
          </div>
        </div>

        {/* 세부 명세 영역 */}
        <div className="px-6 py-8 flex-1">
          {activeTab === 'income' && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#9E4631] pl-3">
                <span className="text-[0.75rem] font-bold text-[#9E4631]">FORMULA 01</span>
                <h2 className="text-[1.1rem] font-bold text-[#242725]">임차보증금의 재산 소득환산율 연산</h2>
              </div>

              <div className="p-4 bg-[#E7E0D2]/30 rounded border border-[#A7A091]/30 text-center">
                <p className="text-[0.8rem] text-[#6F716B] font-bold">임대 보증금의 재산소득 환산 공식</p>
                <p className="text-[0.95rem] font-bold text-[#9E4631] mt-1 font-mono">
                  [(보증금 - 기본재산공제 8,000만) × 월 1.04%]
                </p>
              </div>

              <div className="space-y-4 text-[0.9rem] text-[#6F716B] leading-relaxed text-left">
                <h3 className="font-bold text-[#242725]">대구광역시 1원 단위 행정 면제 기준</h3>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex gap-2">
                    <span className="text-[#9E4631] font-bold">✔</span>
                    <span><strong>대구광역시 기본재산공제 8,000만 원:</strong> 광역시 전용 기준으로 계약 체결 시 보증금 중 8,000만 원까지는 소득인정액 산정에서 완전 비과세 공제 처리됩니다. (일반시의 7,700만 원 기준보다 대구 어르신들에게 훨씬 유리합니다.)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#9E4631]">✔</span>
                    <span><strong>비상 금융재산 공제 500만 원:</strong> 기초수급가구 통장의 소액 금융 자산 중 500만 원까지는 소득 산정에서 추가 제외됩니다.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#9E4631] font-bold">✔</span>
                    <span><strong>금융소득 기본공제 월 10만 원:</strong> 통장에서 발생하는 예금 이자 등의 금융 소득 중 월 10만 원까지 전액 비과세 처리됩니다.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#9E4631] font-bold">✔</span>
                    <span><strong>자녀 보장 사적이전소득 공제 (월 36.6만 원):</strong> 수도권이나 구미 등지에서 자녀 세대가 부쳐오는 정기 용돈은 1인 가구 최신 기준 <strong>월 366,376원</strong> 한도 내에서 일괄 소득 산입이 면제됩니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'burden' && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#9E4631] pl-3">
                <span className="text-[0.75rem] font-bold text-[#9E4631]">FORMULA 02</span>
                <h2 className="text-[1.1rem] font-bold text-[#242725]">최저 생계수급 기준 초과분 차감 산식</h2>
              </div>

              <div className="p-4 bg-[#E7E0D2]/30 rounded border border-[#A7A091]/30 text-center">
                <p className="text-[0.8rem] text-[#6F716B] font-bold">월 자기부담 차감액 산출 공식</p>
                <p className="text-[0.95rem] font-bold text-[#9E4631] mt-1 font-mono">
                  [(소득인정액 - 2026년 생계급여 기준 781,602원) × 30%]
                </p>
              </div>

              <div className="space-y-4 text-[0.9rem] text-[#6F716B] leading-relaxed text-left">
                <h3 className="font-bold text-[#242725]">자기부담분 산입 및 감액 방어 요건</h3>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex gap-2">
                    <span className="text-[#9E4631] font-bold">✔</span>
                    <span><strong>생계급여 기준 이내 (전액 지급):</strong> 소득인정액이 최저 생계급여 선정 기준인 <strong>781,602원</strong> 이하인 경우, 주거 보조금에서 차감되는 금액은 0원이며 주거급여 전액이 안전하게 수급됩니다.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#9E4631] font-bold">✔</span>
                    <span><strong>기준 초과 시 (30% 차감):</strong> 초과 금액에 한해 <strong>30%의 비율만큼</strong> 주거급여가 감액 지급되므로, 보증금과 월세 비율을 선제적으로 설계해야만 수령액을 안전하게 지킬 수 있습니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'benefit' && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#9E4631] pl-3">
                <span className="text-[0.75rem] font-bold text-[#9E4631]">FORMULA 03</span>
                <h2 className="text-[1.1rem] font-bold text-[#242725]">대구 북구(2급지) 주거보장 및 실질 수령 산식</h2>
              </div>

              <div className="p-4 bg-[#E7E0D2]/30 rounded border border-[#A7A091]/30 text-center">
                <p className="text-[0.8rem] text-[#6F716B] font-bold">최종 실질 주거급여액 산출식</p>
                <p className="text-[0.95rem] font-bold text-[#9E4631] mt-1 font-mono">
                  [기준임대료(26.8만)와 실제 임차료 중 최저값] - 자기부담분
                </p>
              </div>

              <div className="space-y-4 text-[0.9rem] text-[#6F716B] leading-relaxed text-left">
                <h3 className="font-bold text-[#242725]">주거급여 변화율 및 실질 수급 안전선</h3>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex gap-2">
                    <span className="text-[#9E4631] font-bold">✔</span>
                    <span><strong>대구광역시 1인 가구 기준임대료 (268,000원):</strong> 대구 북구 권역의 주거급여 실질 지급 상한선은 <strong>26.8만 원</strong>입니다. 계약 보증금 조절을 통해 실제 임차료 변동 대비 통장 실수급액 변화율을 1원 단위까지 역산 제어합니다.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#9E4631] font-bold">✔</span>
                    <span><strong>산격권역 단독·다가구 경락가율 63.5% 반영:</strong> 대구 평균 경락률 68.5%에 거시 과잉 적체 페널티(-5%)를 적용하여, 최악의 청산 상황 시 보증금 유실 위험이 없는 안전 한도선에 한해 임대차를 봉인합니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 대시보드 계산기 시뮬레이터 */}
        <section className="mx-6 p-5 bg-[#FAF9F5] border border-[#A7A091]/30 rounded-lg text-left">
          <h3 className="text-[0.95rem] font-bold text-[#242725] mb-4 border-b border-[#A7A091]/30 pb-2">
            📊 보증금 안전 & 주거급여 시뮬레이션
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[0.8rem] text-[#6F716B] font-bold mb-1">내 계약 보증금 (만 원 단위)</label>
              <input 
                type="number" 
                value={deposit} 
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full p-2 border border-[#A7A091] rounded bg-white text-[0.9rem] font-mono focus:outline-none focus:ring-1 focus:ring-[#9E4631]"
              />
              <span className="text-[0.7rem] text-[#9E4631] font-bold mt-1 block">
                * 대구 기본재산액 공제(8,000만 원) 이하: {(deposit <= 8000) ? '전액 소득공제 (안심)' : `${(deposit - 8000).toLocaleString()}만 원 재산 산입`}
              </span>
            </div>

            <div>
              <label className="block text-[0.8rem] text-[#6F716B] font-bold mb-1">선순위 채권 / 타 세대 보증금 합계 (만 원)</label>
              <input 
                type="number" 
                value={otherLoans} 
                onChange={(e) => setOtherLoans(Number(e.target.value))}
                className="w-full p-2 border border-[#A7A091] rounded bg-white text-[0.9rem] font-mono focus:outline-none focus:ring-1 focus:ring-[#9E4631]"
              />
            </div>

            <div className="pt-2 border-t border-[#A7A091]/20">
              <div className="flex justify-between items-center text-[0.85rem] font-bold">
                <span className="text-[#242725]">경락가 낙찰선 안심 한도 (63.5% 적용):</span>
                <span className="text-right text-[#1D211F]">{safetyLimit.toLocaleString()}만 원</span>
              </div>
              <div className="flex justify-between items-center text-[0.85rem] font-bold mt-1">
                <span className="text-[#242725]">총 인수 부채액:</span>
                <span className="text-right text-[#1D211F]">{(deposit + otherLoans).toLocaleString()}만 원</span>
              </div>
            </div>

            <div className={`p-3 rounded-md text-center text-[0.85rem] font-bold ${isSafe ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {isSafe 
                ? '✅ 대구 산격지역 경락률 대비 전세 보증금 안전 한도 내에 있습니다.' 
                : '⚠️ 경락가 낙찰 안전 한도를 초과하여 계약 전 추가 확인이 필요합니다.'}
            </div>
          </div>
        </section>

        {/* 가족/아들 설득용 요약 설명문구 */}
        <section className="mx-6 mt-6 p-5 bg-[#E7E0D2]/20 border border-[#A7A091]/30 rounded-lg text-left">
          <h3 className="text-[0.95rem] font-bold text-[#242725] mb-2">
            👨‍👩‍👧‍👦 가족에게 설명하기 위한 요약
          </h3>
          <p className="text-[0.85rem] text-[#6F716B] mt-2 leading-relaxed">
            {isSafe ? (
              `현재 모의 계산 결과, 입력하신 보증금(${deposit}만 원)과 채권금액은 대구 북구 산격권역 단독·다가구 경락 기준선(${safetyLimit}만 원) 이내에 머무는 비교적 안전한 축에 속합니다. 다만, 실질적인 국세 체납 및 임차인 선순위 보증금 총액 대조를 유선으로 최종 매핑해 보셔야 안전을 보증할 수 있습니다.`
            ) : (
              `⚠️ 현재 모의 계산 결과, 입력하신 보증금(${deposit}만 원)과 선순위 채무금액의 합계가 대구 북구 산격권역의 경락 낙찰선 안전 한도(${safetyLimit}만 원)를 초과하여 경고등이 켜졌습니다. 계약 전 반드시 공부 대조가 요구되며, 성급하게 가계약금이나 계약금을 넣지 마시고 선린부동산 유선 상담을 통해 위험성을 정량 소명받으시기 바랍니다.`
            )}
          </p>
        </section>

        {/* Footer 법적 준수 사항 고지 */}
        <footer className="px-6 py-8 mt-8 bg-[#E7E0D2] border-t border-[#A7A091]/30 text-[0.75rem] text-[#6F716B] leading-relaxed text-left">
          <p className="mb-3">
            <strong className="text-[#242725]">{OFFICE.name}</strong> | 대표 공인중개사: {OFFICE.owner} | 등록번호: {OFFICE.registrationNumber}
          </p>
          <p>
            본 명세서는 2026년 보건복지부 개정 고시와 대구광역시 수급 지침에 근거한 모의 정보제공용 차트입니다. 실제 보증금 회수의 안전성과 수급 요건 변동의 확정 검증은 공적 공부 대조 및 <strong>{OFFICE.phone}</strong> 유선 상담이 필요합니다.
          </p>
        </footer>

        {/* 하단 고정 바 */}
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

      </div>
    </main>
  );
}
