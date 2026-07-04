'use client';

import { useState } from 'react';
import styles from './benefit-logic.module.css';

const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구광역시 북구 산격로 95, 1층 101호',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  registrationNumber: '제 27230-2023-00042호',
  owner: '이용호',
} as const;

/** Official figures below need 복지부·지자체·공부 대조 before treating as confirmed. */
const UNVERIFIED_REFERENCE_VALUES = [
  '대구광역시 기본재산공제 8,000만 원',
  '금융재산 공제 500만 원',
  '금융소득 기본공제 월 10만 원',
  '사적이전소득 공제 월 366,376원 (1인 가구 기준, 연도·지침별 변동 가능)',
  '생계급여 선정 기준 781,602원 (2026년 고시 기준, 수급 유형별 상이)',
  '대구 1인 가구 기준임대료 268,000원',
  '재산 소득환산율 월 1.04%',
  '산격권역 경락가율 63.5% (시뮬레이터용 내부 참고치, 공식 통계 아님)',
] as const;

type TabId = 'income' | 'burden' | 'benefit';

export default function BenefitLogicClient() {
  const [activeTab, setActiveTab] = useState<TabId>('income');
  const [deposit, setDeposit] = useState<number>(5000);
  const [otherLoans, setOtherLoans] = useState<number>(1000);

  const basicDeductionMan = 8000;
  const conversionRate = 0.0104;
  const liquidationRate = 0.635;
  const estimatedMarketValueMan = 12000;

  const netAssetValueMan = Math.max(0, deposit - basicDeductionMan);
  const monthlyAssetIncome = Math.round(netAssetValueMan * conversionRate * 10000);
  const safetyLimitMan = Math.round(estimatedMarketValueMan * liquidationRate);
  const totalDebtMan = deposit + otherLoans;
  const isSafe = totalDebtMan <= safetyLimitMan;

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>선린 행정·복지 수호 진단 원장</span>
          <h1 className={styles.title}>주거급여 안심 산식 명세서</h1>
          <p className={styles.lead}>
            대구광역시(광역시) 기초생활보장 수급 기준에 맞춘 3대 법률 산식과 산격권역 다가구
            경락가율을 기반으로, 계약 전 실질 월세 보조금 수급 변동을 정밀 검토합니다.
          </p>
          <div className={styles.notice} role="note">
            <strong>공식 수치 검증 필요:</strong> 아래 안내·시뮬레이터의 금액·비율은 상담 전
            이해를 돕는 참고치입니다. 실제 수급 자격·감액·보증금 안전성은{' '}
            <strong>복지로·구청·공부 대조 및 {OFFICE.phone} 유선 상담</strong>으로 확정해야
            합니다.
            <ul className={styles.list} style={{ marginTop: '0.65rem' }}>
              {UNVERIFIED_REFERENCE_VALUES.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.check}>·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div id="process" className={`${styles.tabsWrap} ${styles.anchor}`}>
          <div className={styles.tabs} role="tablist" aria-label="주거급여 산식 단계">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'income'}
              className={`${styles.tab} ${activeTab === 'income' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('income')}
            >
              1. 소득인정액
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'burden'}
              className={`${styles.tab} ${activeTab === 'burden' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('burden')}
            >
              2. 자기부담분
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'benefit'}
              className={`${styles.tab} ${activeTab === 'benefit' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('benefit')}
            >
              3. 실질급여액
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {activeTab === 'income' && (
            <section aria-labelledby="formula-income">
              <div className={styles.sectionTitle}>
                <span className={styles.formulaLabel} id="formula-income">
                  FORMULA 01
                </span>
                <h2 className={styles.formulaHeading}>임차보증금의 재산 소득환산율 연산</h2>
              </div>
              <div className={styles.formulaBox}>
                <p className={styles.formulaBoxLabel}>임대 보증금의 재산소득 환산 공식</p>
                <p className={styles.formulaBoxExpr}>
                  [(보증금 - 기본재산공제 8,000만) × 월 1.04%]
                </p>
              </div>
              <h3 className={styles.bodyHeading}>대구광역시 1원 단위 행정 면제 기준</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>대구광역시 기본재산공제 8,000만 원:</strong> 광역시 기준으로 계약
                    보증금 중 8,000만 원까지는 소득인정액 산정에서 공제될 수 있습니다. (일반시
                    7,700만 원 등과 지역·연도별 상이 — 최신 지침 확인 필요)
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>비상 금융재산 공제 500만 원:</strong> 기초수급가구 금융 자산 중 일부는
                    소득 산정에서 추가 제외될 수 있습니다.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>금융소득 기본공제 월 10만 원:</strong> 예금 이자 등 금융 소득의
                    기본공제 한도(지침·연도별 확인).
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>자녀 보장 사적이전소득 공제 (월 36.6만 원):</strong> 1인 가구 기준
                    월 366,376원 한도 내 면제 가능(고시 기준, 가구원·연도별 변동).
                  </span>
                </li>
              </ul>
            </section>
          )}

          {activeTab === 'burden' && (
            <section id="rights" className={styles.anchor} aria-labelledby="formula-burden">
              <div className={styles.sectionTitle}>
                <span className={styles.formulaLabel} id="formula-burden">
                  FORMULA 02
                </span>
                <h2 className={styles.formulaHeading}>최저 생계수급 기준 초과분 차감 산식</h2>
              </div>
              <div className={styles.formulaBox}>
                <p className={styles.formulaBoxLabel}>월 자기부담 차감액 산출 공식</p>
                <p className={styles.formulaBoxExpr}>
                  [(소득인정액 - 2026년 생계급여 기준 781,602원) × 30%]
                </p>
              </div>
              <h3 className={styles.bodyHeading}>자기부담분 산입 및 감액 방어 요건</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>생계급여 기준 이내 (전액 지급 가능):</strong> 소득인정액이 생계급여
                    선정 기준(781,602원, 2026년 고시 참고치) 이하이면 자기부담분 0원 구간일 수
                    있습니다.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>기준 초과 시 (30% 차감):</strong> 초과분의 30%가 주거급여에서
                    자기부담분으로 반영될 수 있으므로, 보증금·월세 설계가 수령액에 영향을 줄
                    수 있습니다.
                  </span>
                </li>
              </ul>
            </section>
          )}

          {activeTab === 'benefit' && (
            <section id="lh" className={styles.anchor} aria-labelledby="formula-benefit">
              <div className={styles.sectionTitle}>
                <span className={styles.formulaLabel} id="formula-benefit">
                  FORMULA 03
                </span>
                <h2 className={styles.formulaHeading}>
                  대구 북구(2급지) 주거보장 및 실질 수령 산식
                </h2>
              </div>
              <div className={styles.formulaBox}>
                <p className={styles.formulaBoxLabel}>최종 실질 주거급여액 산출식</p>
                <p className={styles.formulaBoxExpr}>
                  [기준임대료(26.8만)와 실제 임차료 중 최저값] - 자기부담분
                </p>
              </div>
              <h3 className={styles.bodyHeading}>주거급여 변화율 및 실질 수급 안전선</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>대구광역시 1인 가구 기준임대료 (268,000원):</strong> 북구 권역
                    주거급여 지급 상한 참고치입니다. 실제 임차료·기준임대료·자기부담분을 함께
                    봐야 합니다.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.check}>✔</span>
                  <span>
                    <strong>산격권역 단독·다가구 경락가율 63.5% 반영:</strong> 시뮬레이터용
                    내부 참고치이며, 공식 경매 통계가 아닙니다. 최악 청산 시나리오 검토용
                    안내선입니다.
                  </span>
                </li>
              </ul>
            </section>
          )}
        </div>

        <section className={styles.simulator} aria-labelledby="sim-title">
          <h3 className={styles.simulatorTitle} id="sim-title">
            보증금 안전 &amp; 주거급여 시뮬레이션
          </h3>
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="deposit-input">
              내 계약 보증금 (만 원 단위)
            </label>
            <input
              id="deposit-input"
              type="number"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.target.value) || 0)}
              className={styles.input}
              min={0}
            />
            <span className={styles.hint}>
              {deposit <= basicDeductionMan
                ? '* 기본재산공제(8,000만 원) 이하: 재산 소득환산 0원 구간(참고)'
                : `* 공제 초과 ${(deposit - basicDeductionMan).toLocaleString()}만 원 → 월 환산 참고 ${monthlyAssetIncome.toLocaleString()}원`}
            </span>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="loans-input">
              선순위 채권 / 타 세대 보증금 합계 (만 원)
            </label>
            <input
              id="loans-input"
              type="number"
              value={otherLoans}
              onChange={(e) => setOtherLoans(Number(e.target.value) || 0)}
              className={styles.input}
              min={0}
            />
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>경락가 낙찰선 안심 한도 (63.5% 참고):</span>
              <span>{safetyLimitMan.toLocaleString()}만 원</span>
            </div>
            <div className={styles.summaryRow}>
              <span>총 인수 부채액:</span>
              <span>{totalDebtMan.toLocaleString()}만 원</span>
            </div>
          </div>

          <div className={isSafe ? styles.verdictSafe : styles.verdictWarn}>
            {isSafe
              ? '참고 시뮬레이션: 경락가율 63.5% 기준선 이내입니다. 공부·체납·선순위 대조는 별도 필요.'
              : '참고 시뮬레이션: 경락가율 63.5% 기준선을 초과했습니다. 계약 전 공부 대조·유선 상담을 권합니다.'}
          </div>
        </section>

        <section className={styles.family} aria-labelledby="family-title">
          <h3 className={styles.familyTitle} id="family-title">
            가족에게 설명하기 위한 요약
          </h3>
          <p className={styles.familyBody}>
            {isSafe
              ? `입력 보증금 ${deposit.toLocaleString()}만 원과 채권 합계는 시뮬레이터 기준선(${safetyLimitMan.toLocaleString()}만 원) 이내 참고 구간입니다. 국세 체납·선순위 보증금 총액은 ${OFFICE.phone} 유선 상담과 공부 대조로 최종 확인하세요.`
              : `입력 보증금 ${deposit.toLocaleString()}만 원과 선순위 채무 합계가 시뮬레이터 기준선(${safetyLimitMan.toLocaleString()}만 원)을 초과했습니다. 가계약·계약금 전에 반드시 공부 대조와 유선 상담을 받으세요.`}
          </p>
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerOffice}>
            <strong>{OFFICE.name}</strong> | 대표 공인중개사: {OFFICE.owner} | 등록번호:{' '}
            {OFFICE.registrationNumber}
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            본 명세서는 2026년 보건복지부·대구광역시 지침을 참고한 모의 안내입니다. 실제 수급
            요건·보증금 회수 가능성의 확정은 공적 공부 대조 및 <strong>{OFFICE.phone}</strong>{' '}
            유선 상담이 필요합니다.
          </p>
        </footer>

        <div className={styles.fixedBar}>
          <div>
            <span className={styles.phoneMeta}>상담 가능 시간 06:00 ~ 22:00</span>
            <div className={styles.phoneNumber}>{OFFICE.phone}</div>
          </div>
          <a href={OFFICE.telHref} className={styles.callBtn} aria-label="선린공인중개사 대표번호로 전화 걸기">
            전화 연결
          </a>
        </div>
      </div>
    </main>
  );
}
