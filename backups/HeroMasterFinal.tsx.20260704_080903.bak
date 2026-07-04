'use client';

import { useEffect, useState } from 'react';
import styles from './HeroMasterFinal.module.css';

type MainPanelId =
  | 'intro'
  | 'welfare'
  | 'commerce'
  | 'familyMove'
  | 'process'
  | 'contact'
  | 'reserve'
  | 'rights'
  | 'visit';

type SubPanelId =
  | 'incomeCalc'
  | 'burdenCalc'
  | 'benefitCalc'
  | 'depositSafety'
  | 'parentShare'
  | 'childrenInterest'
  | 'taxIssue'
  | 'timingPlan';

type PanelContent = {
  kicker: string;
  title: string;
  body: string[];
  bullets?: string[];
  subItems?: Array<{
    id: SubPanelId;
    title: string;
    desc: string;
  }>;
  actions?: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
};

const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구 북구 산격로 95, 1층 101호',
  shortAddress: '대구 북구 산격로 95',
  phone: '053-944-1116',
  telHref: 'tel:0539441116',
  owner: '이용호',
  registrationNumber: '제 27230-2023-00042호',
  businessNumber: '559-01-02996',
  naverMapUrl: 'https://map.naver.com/p/search/대구%20북구%20산격로%2095',
} as const;

const menuItems: Array<{ id: MainPanelId; num: string; title: string; desc: string }> = [
  {
    id: 'intro',
    num: '01',
    title: '선린부동산 소개',
    desc: '등록번호, 대표 공인중개사, 공제, 사무소 기준',
  },
  {
    id: 'welfare',
    num: '02',
    title: '주거급여 · LH 안심 산식',
    desc: '1만 원 차이도 수급액과 자격에 영향을 줄 수 있습니다',
  },
  {
    id: 'commerce',
    num: '03',
    title: '산격시장 상업 비공개 상담',
    desc: '상가건물 임대차보호법, 권리금, 영업가치, 비공개 매칭',
  },
  {
    id: 'familyMove',
    num: '04',
    title: '주택 정리 · 아파트 이동 · 가족 지분 조율',
    desc: '부모 지분, 자녀 이해관계, 세금 쟁점, 잔금 시차',
  },
  {
    id: 'process',
    num: '05',
    title: '확인 절차 심화',
    desc: '주소 → 등기부 → 건축물대장 → 선순위 → 현장확인',
  },
  {
    id: 'contact',
    num: '06',
    title: '위치 및 연락',
    desc: '산격로95, 전화, 지도, 방문 전 준비자료',
  },
];

const panels: Record<MainPanelId, PanelContent> = {
  intro: {
    kicker: 'OFFICE FILE 01',
    title: '선린부동산 소개',
    body: [
      '선린공인중개사사무소는 매물을 먼저 포장하지 않습니다.',
      '말로 들은 조건보다 주소, 등기부, 건축물대장, 선순위 보증금, 실제 점유 상태를 먼저 맞춥니다.',
      '불확실한 조건은 확정처럼 말하지 않고, 추가 확인 항목으로 남깁니다.',
    ],
    bullets: [
      `사무소명: ${OFFICE.name}`,
      `대표 공인중개사: ${OFFICE.owner}`,
      `중개업 등록번호: ${OFFICE.registrationNumber}`,
      `사업자등록번호: ${OFFICE.businessNumber}`,
      `주소: ${OFFICE.address}`,
      '한국공인중개사협회 공제 가입 여부 확인',
    ],
  },

  welfare: {
    kicker: 'OFFICE FILE 02',
    title: '주거급여 · LH 안심 산식',
    body: [
      '주거급여와 LH·도시공사 전세임대는 단순히 월세만 보고 판단하지 않습니다.',
      '소득인정액, 기준임대료, 실제임차료, 자기부담분, 보증금과 선순위 구조를 함께 놓고 봐야 합니다.',
      '1만 원 차이도 수급액 감액이나 자격 변동에 영향을 줄 수 있는 구간이 있으므로, 계약 전 산식 구조를 먼저 분리합니다.',
      '선린은 감으로 말하지 않고, 기초생활보장법상 산식 구조를 기준으로 위험한 보증금·월세 조합을 먼저 걸러봅니다.',
    ],
    subItems: [
      {
        id: 'incomeCalc',
        title: '소득인정액 계산',
        desc: '대구 기본재산공제 8,000만 원, 금융재산 공제, 사적이전소득 한계선',
      },
      {
        id: 'burdenCalc',
        title: '자기부담분 계산',
        desc: '생계급여 기준 초과분의 30% 감액 구조',
      },
      {
        id: 'benefitCalc',
        title: '실질급여액 계산',
        desc: '기준임대료와 실제임차료 중 낮은 금액에서 자기부담분 차감',
      },
      {
        id: 'depositSafety',
        title: '보증금 안전 시뮬레이션',
        desc: '선순위 채권, 타 세대 보증금, 경락가율 기준 회수 위험',
      },
    ],
    actions: [
      {
        label: '안심 산식 명세 페이지 보기',
        href: '/benefit-logic',
      },
    ],
  },

  commerce: {
    kicker: 'OFFICE FILE 03',
    title: '산격시장 상업 비공개 상담',
    body: [
      '산격시장과 인근 점포는 공개 광고가 항상 유리하지 않습니다.',
      '영업 중인 점포는 매물 노출만으로도 단골 이탈, 직원 불안, 거래처 오해, 권리금 협상력 약화가 생길 수 있습니다.',
      '선린은 상가·점포 상담에서 무리한 포털 노출보다 비공개 1:1 조건 대조를 우선합니다.',
      '상가건물 임대차보호법상 권리금 회수기회, 신규임차인 주선 과정, 임대인·임차인 조건을 분리해서 봅니다.',
    ],
    bullets: [
      '권리금 회수기회 보호',
      '신규임차인 주선 과정 확인',
      '보증금·월세·권리금·시설비 분리',
      '업종 적합성 검토',
      '영업 중 매장 비공개 1:1 매칭',
      '잔금일과 영업 인수 시점 조율',
    ],
  },

  familyMove: {
    kicker: 'OFFICE FILE 04',
    title: '주택 정리 · 아파트 이동 · 가족 지분 조율',
    body: [
      '집은 단순한 매물이 아니라 가족 자산입니다.',
      '오래 보유한 집을 처분하거나 아파트로 이동할 때는 매매가 하나만 보면 안 됩니다.',
      '부모 지분, 자녀 간 이해관계, 기존 임차보증금 반환 시점, 새 주거지 계약금·잔금일, 취득세와 상속·증여세 쟁점을 분리해야 합니다.',
      '상속세·증여세를 확정 계산하지 않습니다. 다만 거래 전에 세무 쟁점이 생길 수 있는 구조를 분리하고, 필요하면 세무 전문가 확인이 필요한 지점을 표시합니다.',
    ],
    subItems: [
      {
        id: 'parentShare',
        title: '부모 지분 확인',
        desc: '등기상 명의, 지분, 실제 의사결정자 확인',
      },
      {
        id: 'childrenInterest',
        title: '자녀 간 이해관계 정리',
        desc: '실거주, 현금화, 임대 유지, 매각 반대 의견 분리',
      },
      {
        id: 'taxIssue',
        title: '세금 쟁점 확인',
        desc: '상속세·증여세·취득세 가능 쟁점 분리',
      },
      {
        id: 'timingPlan',
        title: '잔금·이사 시차 설계',
        desc: '매도 잔금, 보증금 반환, 새 주거지 잔금·이사일 조율',
      },
    ],
  },

  process: {
    kicker: 'OFFICE FILE 05',
    title: '확인 절차 심화',
    body: [
      '상담은 주소 확인에서 시작합니다.',
      '주소가 흔들리면 등기부, 건축물대장, 선순위 보증금 확인도 같이 흔들립니다.',
      '주택 임대차는 주택임대차보호법상 대항력, 확정일자, 우선변제와 연결됩니다.',
      '확정일자, 전입, 보증금, 선순위 임차관계는 계약 전에 따로 떼어 확인해야 합니다.',
    ],
    bullets: [
      '1. 주소 확인: 지번, 도로명, 실제 건물 위치를 맞춥니다.',
      '2. 등기부 확인: 소유자, 근저당, 압류, 가압류 등 권리관계를 봅니다.',
      '3. 건축물대장 확인: 용도, 면적, 확인이 필요한 이유를 정리합니다.',
      '4. 선순위 확인: 기존 보증금, 채권, 임차관계를 함께 봅니다.',
      '5. 현장 확인: 실제 사용 상태와 상담 내용이 맞는지 확인합니다.',
    ],
  },

  contact: {
    kicker: 'OFFICE FILE 06',
    title: '위치 및 연락',
    body: [
      `주소: ${OFFICE.shortAddress}`,
      `전화: ${OFFICE.phone}`,
      '방문 전 전화로 상담 가능 시간을 먼저 확인하세요.',
      '주소, 보증금, 월세, 관리비, 등기부, 건축물대장, 임대차계약서, LH·주거급여 관련 문서가 있으면 상담 시간이 줄어듭니다.',
    ],
    actions: [
      {
        label: '전화 연결',
        href: OFFICE.telHref,
      },
      {
        label: '네이버 지도 보기',
        href: OFFICE.naverMapUrl,
        external: true,
      },
    ],
  },

  reserve: {
    kicker: 'MAIN ACTION',
    title: '상담 예약하기',
    body: [
      '전화 상담 후 방문 가능 시간을 맞춥니다.',
      '주소, 보증금, 월세, 관리비를 먼저 정리합니다.',
      '서류 확인이 필요한 경우 방문 전 지참 자료를 안내합니다.',
    ],
    actions: [
      {
        label: `${OFFICE.phone} 전화하기`,
        href: OFFICE.telHref,
      },
    ],
  },

  rights: {
    kicker: 'MAIN ACTION',
    title: '권리검토',
    body: [
      '등기부와 건축물대장을 기준으로 계약 전 확인 항목을 분리합니다.',
      '선순위 권리, 보증금 회수 가능성, 실제 점유 상태를 함께 봅니다.',
      '확정할 수 없는 항목은 단정하지 않고 추가 확인 대상으로 남깁니다.',
    ],
  },

  visit: {
    kicker: 'MAIN ACTION',
    title: '방문 상담',
    body: [
      `주소: ${OFFICE.shortAddress}`,
      '서류를 지참하면 상담 속도가 빨라집니다.',
      '방문 전 전화로 상담 가능 시간을 먼저 확인하세요.',
    ],
    actions: [
      {
        label: '네이버 지도에서 위치 확인',
        href: OFFICE.naverMapUrl,
        external: true,
      },
    ],
  },
};

const subPanels: Record<SubPanelId, PanelContent> = {
  incomeCalc: {
    kicker: 'FORMULA 01',
    title: '소득인정액 계산',
    body: [
      '주거급여 판단은 보증금 자체가 아니라 소득인정액으로 이어지는 구조를 봅니다.',
      '대구광역시 기준 기본재산공제 8,000만 원, 금융재산 공제, 사적이전소득 한계선을 함께 확인해야 합니다.',
    ],
    bullets: [
      '모의 산식: (보증금 - 대구 기본재산공제 8,000만 원) × 월 1.04%',
      '기본재산공제 이하 구간과 초과 구간을 분리합니다.',
      '소득인정액은 수급액 감액과 자격 변동 판단의 출발점입니다.',
    ],
  },
  burdenCalc: {
    kicker: 'FORMULA 02',
    title: '자기부담분 계산',
    body: [
      '생계급여 기준을 넘는 구간에서는 초과분의 30%가 자기부담분으로 차감될 수 있습니다.',
      '1만 원 차이도 실수급액 계산에서 체감 차이를 만들 수 있으므로 계약 조건을 먼저 나눠 봅니다.',
    ],
    bullets: [
      '모의 산식: (소득인정액 - 2026년 생계급여 기준 781,602원) × 30%',
      '생계급여 기준 이하 구간은 차감 0원으로 봅니다.',
      '기준 초과 구간에서는 보증금과 월세 조합을 다시 점검합니다.',
    ],
  },
  benefitCalc: {
    kicker: 'FORMULA 03',
    title: '실질급여액 계산',
    body: [
      '주거급여는 기준임대료와 실제임차료 중 낮은 금액을 기준으로 보고, 여기에서 자기부담분을 뺍니다.',
      '월세만 보는 것이 아니라 보증금, 실제임차료, 기준임대료, 자기부담분을 함께 봐야 합니다.',
    ],
    bullets: [
      '모의 산식: min(기준임대료, 실제임차료) - 자기부담분',
      '대구 북구 1인 가구 기준임대료 상한을 함께 확인합니다.',
      '실수급액 변화 구간을 계약 전에 미리 분리합니다.',
    ],
  },
  depositSafety: {
    kicker: 'SIMULATION',
    title: '보증금 안전 시뮬레이션',
    body: [
      '보증금은 월세 조건만으로 안전성을 판단할 수 없습니다.',
      '선순위 채권, 타 세대 보증금, 경락가율 기준을 함께 놓고 회수 위험을 봅니다.',
    ],
    bullets: [
      '보증금 + 선순위 채권 + 타 세대 보증금 합계를 봅니다.',
      '산격권역 단독·다가구 경락가율 기준을 보수적으로 반영합니다.',
      '계약 전 공부 대조와 유선 확인이 필요한 항목을 분리합니다.',
    ],
  },
  parentShare: {
    kicker: 'FAMILY ASSET 01',
    title: '부모 지분 확인',
    body: [
      '가족 자산 상담은 등기상 명의와 실제 의사결정자를 먼저 나눠야 합니다.',
      '부모 지분, 공동명의, 실거주자, 임차인 존재 여부를 분리해서 봅니다.',
    ],
    bullets: [
      '등기상 명의 확인',
      '공동지분 여부 확인',
      '실제 의사결정자와 연락 구조 정리',
      '임차보증금 반환 책임 구조 확인',
    ],
  },
  childrenInterest: {
    kicker: 'FAMILY ASSET 02',
    title: '자녀 간 이해관계 정리',
    body: [
      '자녀 간 의견은 실거주, 현금화, 임대 유지, 매각 반대처럼 서로 다르게 갈릴 수 있습니다.',
      '감정으로 설득하지 않고 이해관계를 항목별로 분리합니다.',
    ],
    bullets: [
      '실거주 희망 여부',
      '현금화 필요성',
      '임대 유지 선호',
      '매각 반대 또는 보류 의견',
      '가족 간 설명이 필요한 자금 흐름',
    ],
  },
  taxIssue: {
    kicker: 'FAMILY ASSET 03',
    title: '세금 쟁점 확인',
    body: [
      '상속세·증여세·취득세를 중개사가 확정 계산하지 않습니다.',
      '다만 거래 전에 세무 쟁점이 생길 수 있는 구조를 분리하고, 전문가 확인이 필요한 지점을 표시합니다.',
    ],
    bullets: [
      '상속세 가능 쟁점',
      '증여세 가능 쟁점',
      '취득세와 일시적 2주택 쟁점',
      '매각 시점과 잔금일의 세무 영향',
      '세무 전문가 확인 필요 지점 표시',
    ],
  },
  timingPlan: {
    kicker: 'FAMILY ASSET 04',
    title: '잔금·이사 시차 설계',
    body: [
      '주택 정리와 아파트 이동은 잔금일 하나만 맞추면 끝나는 문제가 아닙니다.',
      '매도 잔금, 임차보증금 반환, 새 주거지 계약금·잔금, 이사일을 함께 배열해야 합니다.',
    ],
    bullets: [
      '매도 잔금 유입 시점',
      '기존 임차인 보증금 반환 시점',
      '새 주거지 계약금·잔금 시점',
      '이사 가능일',
      '가족 간 자금 부담 순서',
    ],
  },
};

export default function HeroMasterFinal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<MainPanelId | null>(null);
  const [activeSubPanel, setActiveSubPanel] = useState<SubPanelId | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setActivePanel(null);
    setActiveSubPanel(null);
  };

  const openMainPanel = (id: MainPanelId) => {
    setMenuOpen(false);
    setActiveSubPanel(null);
    setActivePanel(id);
  };

  const active = activePanel ? panels[activePanel] : null;
  const activeSub = activeSubPanel ? subPanels[activeSubPanel] : null;

  return (
    <main className={styles.shell}>
      <section className={styles.hero} aria-label="선린공인중개사사무소 메인">
        <div className={styles.background} aria-hidden="true">
          <span className={styles.gridSeal}>95</span>
          <span className={styles.landLineOne} />
          <span className={styles.landLineTwo} />
        </div>

        <header className={styles.topBar}>
          <div className={styles.brand}>
            <strong>{OFFICE.name}</strong>
            <span>{OFFICE.shortAddress}</span>
          </div>

          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => {
              setActivePanel(null);
              setActiveSubPanel(null);
              setMenuOpen((prev) => !prev);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <section className={styles.copy}>
          <p className={styles.eyebrow}>주소 · 서류 · 권리관계 확인</p>

          <h1>
            주소와 서류는
            <br />
            정밀하게,
            <br />
            상담은 편하게
          </h1>

          <p className={styles.subtitle}>
            등기부 · 건축물대장 · 선순위 보증금을 함께 확인합니다.
            산격로95 방문 상담과 서류 지참 상담이 가능합니다.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href={OFFICE.telHref}>
              상담 예약하기 <span>→</span>
            </a>

            <button type="button" className={styles.secondary} onClick={() => openMainPanel('process')}>
              확인 절차 보기 <span>→</span>
            </button>
          </div>
        </section>

        <section className={styles.cards} aria-label="주요 상담 메뉴">
          <button type="button" className={`${styles.card} ${styles.rightsCard}`} onClick={() => openMainPanel('rights')}>
            <small>DOCUMENT REVIEW</small>
            <strong>권리검토</strong>
            <span>→</span>
          </button>

          <button type="button" className={`${styles.card} ${styles.visitCard}`} onClick={() => openMainPanel('visit')}>
            <small>LOCAL VISIT</small>
            <strong>방문 상담</strong>
            <span>→</span>
          </button>
        </section>

        <footer className={styles.phoneBar}>
          <a href={OFFICE.telHref}>☎ {OFFICE.phone}</a>
          <i />
          <button type="button" onClick={() => openMainPanel('reserve')}>
            전화상담 06:00~22:00
          </button>
        </footer>
      </section>

      {menuOpen && (
        <div className={styles.drawerLayer} role="dialog" aria-modal="true" aria-label="선린 자산보호 서류철">
          <button type="button" className={styles.drawerDim} onClick={closeAll} aria-label="메뉴 닫기" />

          <aside className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <div>
                <p>MANILA FILE INDEX</p>
                <h2>선린 자산보호 서류철</h2>
                <span>매물보다 먼저 보는 것은 주소, 서류, 권리, 숫자입니다.</span>
              </div>

              <button type="button" onClick={closeAll} aria-label="닫기" className={styles.drawerClose}>
                ×
              </button>
            </div>

            <nav className={styles.drawerNav}>
              {menuItems.map((item) => (
                <button key={item.id} type="button" onClick={() => openMainPanel(item.id)}>
                  <b>{item.num}</b>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.desc}</small>
                  </span>
                </button>
              ))}
            </nav>

            <div className={styles.drawerFooter}>
              <a href={OFFICE.telHref}>☎ {OFFICE.phone}</a>
              <a href={OFFICE.naverMapUrl} target="_blank" rel="noreferrer">
                위치 보기
              </a>
            </div>
          </aside>
        </div>
      )}

      {active && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={active.title}>
          <button type="button" className={styles.overlayDim} onClick={closeAll} aria-label="닫기" />

          <section className={styles.panelScreen}>
            <button type="button" className={styles.close} onClick={closeAll} aria-label="닫기">
              ×
            </button>

            <p>{active.kicker}</p>
            <h2>{active.title}</h2>

            <div className={styles.bodyText}>
              {active.body.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>

            {active.bullets && (
              <ul className={styles.bulletList}>
                {active.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}

            {active.subItems && (
              <div className={styles.subGrid}>
                {active.subItems.map((item) => (
                  <button key={item.id} type="button" onClick={() => setActiveSubPanel(item.id)}>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </button>
                ))}
              </div>
            )}

            {active.actions && (
              <div className={styles.panelActions}>
                {active.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noreferrer' : undefined}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {activeSub && (
        <div className={styles.subOverlay} role="dialog" aria-modal="true" aria-label={activeSub.title}>
          <button
            type="button"
            className={styles.overlayDim}
            onClick={() => setActiveSubPanel(null)}
            aria-label="추가창 닫기"
          />

          <section className={styles.subPanelScreen}>
            <button type="button" className={styles.close} onClick={() => setActiveSubPanel(null)} aria-label="닫기">
              ×
            </button>

            <p>{activeSub.kicker}</p>
            <h2>{activeSub.title}</h2>

            <div className={styles.bodyText}>
              {activeSub.body.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>

            {activeSub.bullets && (
              <ul className={styles.bulletList}>
                {activeSub.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}

            <button type="button" className={styles.backButton} onClick={() => setActiveSubPanel(null)}>
              이전 서류철로 돌아가기
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
