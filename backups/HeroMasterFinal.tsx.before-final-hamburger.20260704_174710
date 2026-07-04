'use client';

import { useState } from 'react';
import styles from './HeroMasterFinal.module.css';

const OFFICE = {
  name: '선린부동산공인중개사사무소',
  shortName: '선린공인중개사사무소',
  address: '대구 북구 산격로 95',
  phone: '053-944-1116',
  fax: '053-944-1114',
  naverMapUrl: 'https://map.naver.com/p/search/대구%20북구%20산격로%2095',
  kakaoChannelUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '#',
};

type DetailSection = {
  heading: string;
  text: string;
};

type InfoRow = {
  label: string;
  value: string;
};

type DetailItem = {
  index: string;
  title: string;
  summary: string;
  intro?: string[];
  infoTitle?: string;
  infoRows?: InfoRow[];
  sections?: DetailSection[];
};

type FeatureModal = 'rights' | 'contract' | null;

const drawerItems: DetailItem[] = [
  {
    index: '01',
    title: '선린부동산 소개',
    summary: '정식 중개사무소, 대표 공인중개사, 협회·공제가입 안내',
    intro: [
      '선린부동산은 대구 북구 산격로 95에서 상담하는 정식 등록 중개사무소입니다. 상담은 대표 공인중개사 이용호가 직접 진행합니다.',
      '한국공인중개사협회 가입 및 손해배상 책임보장 공제가입을 갖추고 있어, 거래 전 기본 안전장치를 확인하실 수 있습니다.',
    ],
    infoTitle: '확인 가능한 기준',
    infoRows: [
      { label: '정식명칭', value: '선린부동산공인중개사사무소' },
      { label: '대표 공인중개사', value: '이용호' },
      { label: '중개사무소 등록번호', value: '제27230-2023-00042호' },
      { label: '사업자등록번호', value: '559-01-02996' },
      { label: '협회·공제가입', value: '한국공인중개사협회 / 손해배상 책임보장 공제' },
      { label: '주소', value: '대구 북구 산격로 95' },
      { label: '대표전화', value: '053-944-1116' },
      { label: 'FAX', value: '053-944-1114' },
    ],
  },
  {
    index: '02',
    title: '주거급여 · LH 전세임대 상담',
    summary: '보증금, 소득인정액, 자기부담분을 함께 살펴봅니다',
    sections: [
      {
        heading: '왜 함께 확인해야 할까요',
        text: '주거급여나 LH·도시개발공사 전세임대는 집 조건만큼 사람의 자격과 권리관계도 함께 확인해야 합니다.',
      },
      {
        heading: '확인이 필요한 항목',
        text: '보증금, 소득인정액, 자기부담분에 따라 실제 부담액과 진행 가능성이 달라질 수 있습니다.',
      },
      {
        heading: '상담에서 도와드리는 것',
        text: '어떤 부분을 먼저 확인하셔야 하는지 안내해드리며, 계산 구조는 아래 산식 버튼에서 확인하실 수 있습니다.',
      },
    ],
  },
  {
    index: '03',
    title: '점포 특별 상담',
    summary: '권리금, 임대조건, 영업가치, 이해관계를 함께 정리합니다',
    sections: [
      {
        heading: '점포 상담이 다른 이유',
        text: '점포·상가는 권리금, 시설비, 영업 흐름, 임대조건이 함께 얽히는 경우가 많습니다.',
      },
      {
        heading: '정보 공개 범위 조율',
        text: '매물 정보가 알려지는 시점과 범위는 영업에 영향을 줄 수 있어 상황에 맞게 조율해드립니다.',
      },
      {
        heading: '함께 확인하는 항목',
        text: '권리금, 보증금, 월세, 잔금일, 영업 인수 시점을 하나씩 확인합니다.',
      },
      {
        heading: '상가건물 임대차보호법 안내',
        text: '권리금 회수기회 보호 규정도 참고해 상담해드리며, 법률적 판단을 대신하지는 않습니다.',
      },
    ],
  },
  {
    index: '04',
    title: '주택 정리 · 아파트 이동',
    summary: '잔금, 이사, 임차보증금, 가족 지분까지 함께 봅니다',
    sections: [
      {
        heading: '정리가 필요한 이유',
        text: '주택 정리와 이동은 매도·매수 한 건으로 끝나지 않는 경우가 많습니다.',
      },
      {
        heading: '확인할 순서',
        text: '임차보증금 반환, 잔금일, 이사 일정이 맞물리므로 순서를 먼저 정리해보시는 것이 좋습니다.',
      },
      {
        heading: '가족 지분과 상속',
        text: '가족 지분이나 상속·증여가 걸린 경우에도 확인할 쟁점을 차분히 안내해드립니다.',
      },
      {
        heading: '안내 원칙',
        text: '세금이나 법률 판단을 대신하지는 않으며, 필요한 경우 세무사·법무사 확인 지점을 미리 안내해드립니다.',
      },
    ],
  },
];

const rightsModal: DetailItem = {
  index: 'R',
  title: '권리검토',
  summary: '등기부 · 건축물대장 · 선순위 구조 확인',
  sections: [
    {
      heading: '권리검토란',
      text: '권리검토는 계약 전에 확인할 항목을 차분히 나누는 과정입니다.',
    },
    {
      heading: '확인하는 서류',
      text: '등기부에서 소유자·근저당·권리관계를, 건축물대장에서 용도·면적을 확인합니다.',
    },
    {
      heading: '보조 전문성 안내',
      text: '부동산권리분석사 1급 자격을 보조 전문성으로 활용하며, 법률 판단을 대신하지는 않습니다.',
    },
    {
      heading: '보증금과 임차관계 확인',
      text: '선순위 보증금과 임차관계는 전입·확정일자·우선변제 구조로 따로 확인합니다.',
    },
    {
      heading: '확정하지 않는 부분',
      text: '확정할 수 없는 내용은 단정하지 않고 추가 확인 항목으로 안내해드립니다.',
    },
  ],
};

const contractModal: DetailItem = {
  index: 'C',
  title: '종류별 계약 상담',
  summary: '매매·전월세·LH전세임대·점포·주택 정리 상담',
  sections: [
    {
      heading: '상황별로 다른 확인 순서',
      text: '물건 종류와 상황에 따라 먼저 확인해야 할 순서가 달라질 수 있습니다.',
    },
    {
      heading: '매매 · 전월세',
      text: '등기부, 건축물대장, 임대차 조건, 보증금, 잔금일을 함께 정리합니다.',
    },
    {
      heading: 'LH · 도시개발공사 전세임대',
      text: '소득인정액, 보증금, 선순위, 전입·확정일자 구조를 함께 살펴봅니다.',
    },
    {
      heading: '점포 · 상가',
      text: '권리금, 영업가치, 이해관계를 당사자 의사에 맞춰 조율합니다.',
    },
    {
      heading: '주택 정리 · 이동',
      text: '잔금 시차, 보증금 반환, 가족 지분을 차분히 나누어 봅니다.',
    },
    {
      heading: '상담 이어가기',
      text: '필요하면 카카오톡 또는 전화상담으로 이어서 일정을 조율해드립니다.',
    },
  ],
};

type FormulaDetail = {
  index: string;
  title: string;
  summary: string;
  body: string[];
};

const formulaItems: FormulaDetail[] = [
  {
    index: 'F1',
    title: '소득인정액 산식',
    summary: '수급 여부와 급여액 판단의 기본이 되는 계산 구조입니다',
    body: [
      '소득인정액은 단순 월소득만 보는 것이 아니라, 소득평가액과 재산의 소득환산액을 함께 보는 구조입니다.',
      '기본 구조:',
      '소득인정액 = 소득평가액 + 재산의 소득환산액',
      '소득평가액은 실제소득에서 가구특성별 지출비용과 근로소득공제 등을 반영해 산정합니다.',
      '재산의 소득환산액은 재산가액에서 기본재산액과 부채 등을 공제한 뒤, 재산 종류별 소득환산율을 적용해 계산합니다.',
      '즉, 반복적으로 들어오는 사적이전소득, 금융재산, 예금·적금, 보험성 자산, 임차보증금, 부채, 지역별 기본재산액 공제 등이 함께 영향을 줄 수 있습니다.',
      '상담에서는 고객님이 직접 공식을 계산하시게 하기보다, 어떤 금액이 심사에 영향을 줄 수 있는지 먼저 짚어드립니다.',
    ],
  },
  {
    index: 'F2',
    title: '자기부담분 산식',
    summary: '소득인정액이 생계급여 선정기준을 넘을 때 차감되는 금액입니다',
    body: [
      '주거급여 임차급여에서는 소득인정액이 생계급여 선정기준 이하인 경우 기준임대료 또는 실제임차료 범위 안에서 전액 지원될 수 있습니다.',
      '반대로 소득인정액이 생계급여 선정기준을 넘는 경우에는 자기부담분을 차감합니다.',
      '기본 구조:',
      '자기부담분 = (소득인정액 - 생계급여 선정기준) × 30%',
      '따라서 겉으로 보기에는 작은 금액 차이처럼 보여도, 심사에서는 실제 지원액에 영향을 줄 수 있습니다.',
      '상담에서는 계약 전 보증금, 월차임, 소득인정액 변화 가능성을 함께 살펴보는 것이 중요합니다.',
    ],
  },
  {
    index: 'F3',
    title: '주거급여액 산식',
    summary: '기준임대료, 실제임차료, 자기부담분을 함께 봅니다',
    body: [
      '임차가구 주거급여는 실제 월세만 그대로 보는 것이 아니라, 지역·가구원수별 기준임대료와 실제임차료를 비교해 산정합니다.',
      '기본 구조:',
      '주거급여액 = 기준임대료와 실제임차료 중 낮은 금액 - 자기부담분',
      '단, 소득인정액이 생계급여 선정기준 이하인 경우에는 자기부담분이 적용되지 않아 기준임대료 또는 실제임차료 범위에서 전액 지원될 수 있습니다.',
      '실제 상담에서는 보증금, 월차임, 계약 형태, 선순위 보증금, 전입·확정일자 구조까지 함께 보는 것이 안전합니다.',
      '※ 위 산식은 기초생활보장법 체계와 주거급여 고시·안내 기준을 손님이 이해하기 쉽게 정리한 설명입니다. 실제 심사 결과는 관할 행정기관과 주거급여 조사 결과에 따라 달라질 수 있습니다.',
    ],
  },
];

export default function HeroMasterFinal() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [drawerDetail, setDrawerDetail] = useState<DetailItem | null>(null);
  const [featureModal, setFeatureModal] = useState<FeatureModal>(null);
  const [formulaDetail, setFormulaDetail] = useState<FormulaDetail | null>(null);

  const activeFeature =
    featureModal === 'rights' ? rightsModal : featureModal === 'contract' ? contractModal : null;
  const activeDetail = drawerDetail || activeFeature;

  const closeEverything = () => {
    setDrawerOpen(false);
    setConsultOpen(false);
    setDrawerDetail(null);
    setFeatureModal(null);
    setFormulaDetail(null);
  };

  const closeTopLayer = () => {
    if (formulaDetail) {
      setFormulaDetail(null);
      return;
    }

    if (drawerDetail) {
      setDrawerDetail(null);
      return;
    }

    if (featureModal) {
      setFeatureModal(null);
      return;
    }

    if (consultOpen) {
      setConsultOpen(false);
      return;
    }

    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const openDrawerDetail = (item: DetailItem) => {
    setDrawerOpen(true);
    setDrawerDetail(item);
  };

  const openKakao = () => {
    if (!OFFICE.kakaoChannelUrl || OFFICE.kakaoChannelUrl === '#') {
      alert('카카오 채널 URL이 아직 연결되지 않았습니다.');
      return;
    }

    window.open(OFFICE.kakaoChannelUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <main className={styles.shell}>
        <section className={styles.heroFinal} aria-label="선린공인중개사사무소 모바일 메인">

          <header className={styles.topBar}>
            <div>
              <strong className={styles.topBarTitle}>{OFFICE.shortName}</strong>
              <span className={styles.topBarAddress}>{OFFICE.address}</span>
            </div>

            <button
              type="button"
              className={styles.menuButton}
              aria-label="메뉴 열기"
              onClick={() => setDrawerOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </header>

          <section className={styles.heroContent}>
            <div className={styles.heroTextPanel}>
              <p className={styles.kicker}>善隣 · 좋은 이웃</p>

              <h1 className={styles.heroTitle}>
                <span>주소와 서류를</span>
                <span>먼저 살피고,</span>
                <span>상담은 편하게</span>
              </h1>

              <p className={styles.heroBody}>
                등기부 · 건축물대장 · 선순위 보증금을
                <br />
                차분하게 함께 확인합니다.
              </p>
            </div>

            <div className={styles.ctaGroup}>
              <button type="button" className={styles.primaryCta} onClick={() => setConsultOpen(true)}>
                <span>상담 문의</span>
                <span aria-hidden="true">→</span>
              </button>

              <a
                className={styles.secondaryCta}
                href={OFFICE.naverMapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>주소 찾기</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.cardRow}>
              <button
                type="button"
                className={styles.featureCard}
                onClick={() => setFeatureModal('rights')}
              >
                <div className={styles.featureCardInner}>
                  <span className={styles.cardEyebrow}>DOCUMENT REVIEW</span>
                  <strong className={styles.cardTitle}>권리검토</strong>
                  <span className={styles.cardDesc}>등기·건축·보증금을{'\n'}정밀하게 살펴봅니다.</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </button>

              <button
                type="button"
                className={styles.featureCard}
                onClick={() => setFeatureModal('contract')}
              >
                <div className={styles.featureCardInner}>
                  <span className={styles.cardEyebrow}>CONTRACT CONSULT</span>
                  <strong className={styles.cardTitle}>종류별 계약 상담</strong>
                  <span className={styles.cardDesc}>매매·전월세·점포 등{'\n'}상황에 맞게 안내드립니다.</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </button>
            </div>

            <section className={styles.bottomBanner} aria-label="사무소 기본 정보">
              <div className={styles.bannerRow}>
                <span>{OFFICE.name}</span>
                <span>전화 <a href={`tel:${OFFICE.phone.replace(/-/g, '')}`}>{OFFICE.phone}</a></span>
              </div>
              <div className={styles.bannerRow}>
                <span>주소 {OFFICE.address}</span>
                <span>FAX {OFFICE.fax}</span>
              </div>
            </section>
          </section>
        </section>
      </main>

      {(drawerOpen || consultOpen || activeDetail || formulaDetail) && (
        <button type="button" className={styles.overlayDim} aria-label="닫기" onClick={closeTopLayer} />
      )}

      {consultOpen && (
        <section className={styles.consultModal} role="dialog" aria-modal="true" aria-label="상담 방식 선택">
          <div className={styles.modalHeader}>
            <div>
              <p>CONSULT CHANNEL</p>
              <h2>상담 방식을 선택하세요</h2>
            </div>
            <button type="button" className={styles.closeButton} onClick={closeTopLayer} aria-label="닫기">
              ×
            </button>
          </div>

          <div className={styles.modalButtons}>
            <button type="button" onClick={openKakao}>
              <strong>카카오톡 상담</strong>
              <span>채널로 문의를 남기고 순서대로 답변받습니다.</span>
            </button>

            <a href={`tel:${OFFICE.phone.replace(/-/g, '')}`}>
              <strong>전화상담</strong>
              <span>{OFFICE.phone} 연결</span>
            </a>
          </div>
        </section>
      )}

      {drawerOpen && (
        <aside className={styles.drawerPanel} role="dialog" aria-modal="true" aria-label="선린 상담 메뉴">
          <div className={styles.drawerHeader}>
            <div>
              <p>상담 안내</p>
              <h2>선린 상담 메뉴</h2>
              <span>필요한 상담을 고르시면 차분히 안내해드립니다.</span>
            </div>

            <button type="button" className={styles.closeButton} onClick={closeEverything} aria-label="닫기">
              ×
            </button>
          </div>

          <nav className={styles.drawerList}>
            {drawerItems.map((item) => (
              <button key={item.index} type="button" onClick={() => openDrawerDetail(item)}>
                <b>{item.index}</b>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.summary}</small>
                </span>
                <i>→</i>
              </button>
            ))}
          </nav>
        </aside>
      )}

      {activeDetail && (
        <section className={styles.detailModal} role="dialog" aria-modal="true">
          <div className={styles.detailHeader}>
            <span>{activeDetail.index}</span>
            <button type="button" className={styles.closeButton} onClick={closeTopLayer} aria-label="닫기">
              ×
            </button>
          </div>

          <h2>{activeDetail.title}</h2>
          <p className={styles.detailSummary}>{activeDetail.summary}</p>

          <div className={styles.detailBody}>
            {activeDetail.intro?.map((text, index) => (
              <p key={`intro-${index}`} className={styles.detailIntro}>{text}</p>
            ))}

            {activeDetail.infoRows && (
              <div className={styles.infoTable}>
                {activeDetail.infoTitle && (
                  <p className={styles.infoTableTitle}>{activeDetail.infoTitle}</p>
                )}
                <dl>
                  {activeDetail.infoRows.map((row) => (
                    <div key={row.label} className={styles.infoRow}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {activeDetail.sections?.map((section, index) => (
              <div key={section.heading} className={styles.detailSection}>
                <span className={styles.detailSectionBadge}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.detailSectionContent}>
                  <h3 className={styles.detailSectionHeading}>{section.heading}</h3>
                  <p className={styles.detailSectionText}>{section.text}</p>
                </div>
              </div>
            ))}
          </div>

          {featureModal === 'contract' && (
            <button
              type="button"
              className={styles.detailCta}
              onClick={() => {
                setFeatureModal(null);
                setConsultOpen(true);
              }}
            >
              상담 방식 선택하기
            </button>
          )}

          {drawerDetail?.index === '02' && (
            <div className={styles.formulaGroup}>
              <p className={styles.formulaGroupLabel}>산식으로 자세히 보기</p>
              <div className={styles.formulaRow}>
                {formulaItems.map((f) => (
                  <button
                    key={f.index}
                    type="button"
                    className={styles.formulaBtn}
                    onClick={() => setFormulaDetail(f)}
                  >
                    {f.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
      {formulaDetail && (
        <section className={styles.detailModal} role="dialog" aria-modal="true">
          <div className={styles.detailHeader}>
            <span>{formulaDetail.index}</span>
            <button type="button" className={styles.closeButton} onClick={closeTopLayer} aria-label="닫기">
              ×
            </button>
          </div>

          <h2>{formulaDetail.title}</h2>
          <p className={styles.detailSummary}>{formulaDetail.summary}</p>

          <div className={styles.detailBody}>
            {formulaDetail.body.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
