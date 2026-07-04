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

type DetailItem = {
  index: string;
  title: string;
  summary: string;
  body: string[];
};

type FeatureModal = 'rights' | 'contract' | null;

const drawerItems: DetailItem[] = [
  {
    index: '01',
    title: '선린부동산 소개',
    summary: '협회가입, 손해배상 공제가입, 정식 중개사무소 안내',
    body: [
      '선린부동산공인중개사사무소는 대구 북구 산격로 95에서 상담하는 정식 중개사무소입니다.',
      '고객님이 가장 먼저 확인하셔야 할 부분은 "믿고 맡길 수 있는 곳인가"입니다. 선린부동산은 한국공인중개사협회 가입 및 손해배상 책임보장 공제가입을 갖추고 있어, 거래 전에 기본적인 안전장치를 먼저 확인하실 수 있습니다.',
      '또한 부동산권리분석사 1급 자격을 보유하고 있어, 등기부·건축물대장·선순위 보증금처럼 계약 전에 함께 살펴봐야 할 부분을 더 차분하게 안내해드릴 수 있습니다.',
      '저희가 생각하는 정직한 중개는 좋은 말만 앞세우는 것이 아니라, 확인된 사실을 정확하게 말씀드리는 일입니다. 계약에 필요한 내용, 미리 살펴보셔야 할 부분, 서류에서 꼭 짚어야 할 부분을 차분하게 안내해드립니다.',
      '편하게 문의하셔도 부담 없이 설명을 들으실 수 있고, 실제 상담이 필요하실 때는 전화 또는 카카오톡으로 이어서 도와드리고 있습니다.',
      '정식명칭: 선린부동산공인중개사사무소',
      '주소: 대구 북구 산격로 95',
      '대표전화: 053-944-1116',
      'FAX: 053-944-1114',
      '부동산권리분석사 1급: 등록번호 2018-002756 / 한국자격검정평가진흥원 / 2022.06.07',
    ],
  },
  {
    index: '02',
    title: '주거급여 · LH 안심 산식',
    summary: '주거급여, LH 전세임대, 보증금 구조를 미리 살펴봅니다',
    body: [
      '주거급여나 LH·도시개발공사 전세임대는 집만 맞는다고 바로 진행되는 것이 아니라, 보증금 구조와 소득인정액, 자기부담분, 금융재산 반영, 지역별 재산 공제 기준까지 함께 살펴봐야 하는 경우가 많습니다.',
      '특히 금액 차이가 크지 않아 보여도 실제 심사에서는 결과에 영향을 줄 수 있어, 계약을 먼저 서두르기보다 현재 상황을 차분히 확인해보시는 것이 안전합니다.',
      '선린부동산은 고객님이 어떤 부분을 먼저 확인하셔야 하는지 방향을 안내해드립니다. 상담 과정에서는 보증금, 소득인정액, 금융재산, 지역 기준 재산 공제, 자기부담분처럼 놓치기 쉬운 요소를 함께 점검해보실 수 있습니다.',
      '어렵게 느껴지는 내용도 최대한 쉽게 풀어드리니, 부담 없이 먼저 상담 문의를 남겨주셔도 됩니다.',
    ],
  },
  {
    index: '03',
    title: '점포 특별 상담',
    summary: '점포·상가 계약, 권리금, 임대인·임차인 이해관계 조율',
    body: [
      '점포나 상가는 파는 분, 구하는 분, 건물주, 기존 임차인의 입장이 서로 다를 수 있습니다. 그래서 어떤 정보를 어디까지 안내할지, 어떤 방식으로 상담을 이어갈지부터 신중하게 정리하는 것이 중요합니다.',
      '영업 중인 점포는 매물 정보가 가볍게 퍼지는 것만으로도 권리금 분위기, 단골 손님, 기존 영업 흐름에 영향을 줄 수 있습니다. 반대로 필요한 범위에서는 충분히 알려야 거래가 진행되므로, 공개와 신중한 안내의 균형을 함께 살펴드립니다.',
      '상가·점포 상담에서는 권리금, 시설비, 보증금, 월세, 잔금일, 영업 인수 시점처럼 이해관계가 엇갈리기 쉬운 부분을 나누어 확인합니다.',
      '상가건물 임대차보호법상 권리금 회수기회 보호 구조와 신규 임차인 주선 흐름도 함께 고려하며, 당사자의 의사를 기준으로 조심스럽고 정확하게 상담을 도와드립니다.',
    ],
  },
  {
    index: '04',
    title: '주택 정리 · 아파트 이동 · 가족 지분 조율',
    summary: '이사, 잔금 시차, 가족 지분 문제까지 함께 정리해드립니다',
    body: [
      '주택을 정리하고 다른 곳으로 옮겨가시는 과정은 단순히 매도·매수 한 건으로 끝나지 않는 경우가 많습니다. 잔금 시차, 기존 임차인 보증금 반환 시점, 새 집 입주 일정, 이사 자금 흐름까지 함께 맞춰보셔야 할 때가 있습니다.',
      '가족 간 지분이 얽혀 있거나, 부모와 자녀 사이 이해관계, 상속이나 증여를 고민하시는 경우에도 중간에서 차분하게 설명을 정리해드리는 과정이 필요할 수 있습니다.',
      '선린부동산은 단순히 계약 날짜만 잡는 것이 아니라, 고객님 상황에 따라 어떤 순서로 정리하시는 것이 편한지 함께 살펴드립니다.',
      '일반 매매는 물론, LH·도시개발공사 관련 상담, 가족 자산 이동, 상속 관련 주거 이전, 점포 특별 상담까지 유형별로 문의하실 수 있습니다. 필요하신 내용이 명확하지 않으셔도 먼저 상담 문의를 주시면 방향부터 안내해드리겠습니다.',
    ],
  },
];

const rightsModal: DetailItem = {
  index: 'R',
  title: '권리검토',
  summary: '등기부 · 건축물대장 · 선순위 구조 확인',
  body: [
    '권리검토는 손님을 불안하게 만들기 위한 절차가 아니라, 계약 전에 확인할 항목을 차분히 나누는 과정입니다.',
    '등기부에서는 소유자, 근저당, 압류·가압류 가능성, 권리관계 흐름을 확인하고, 건축물대장에서는 용도와 면적, 실제 상담 내용과 맞는지 살펴봅니다.',
    '부동산권리분석사 1급 자격을 바탕으로, 선순위 보증금과 임차관계처럼 놓치기 쉬운 부분도 함께 짚어드립니다. 다만 법률 판단을 대신하는 것이 아니라, 계약 전에 추가 확인이 필요한 지점을 분명하게 안내해드리는 방식입니다.',
    '주택 임대차는 대항력, 확정일자, 우선변제와 연결될 수 있으므로 전입·확정일자·선순위 임차관계를 따로 확인합니다.',
    '확정할 수 없는 내용은 단정하지 않고, 추가 확인 항목으로 남겨 고객님이 무리하게 결정하지 않도록 도와드립니다.',
  ],
};

const contractModal: DetailItem = {
  index: 'C',
  title: '종류별 계약 상담',
  summary: '매매·전월세·LH전세임대·상속·상가·가족 자산 이동 상담',
  body: [
    '계약 상담은 일반 매매와 전월세만 다루는 창구가 아닙니다.',
    '아파트·단독주택·상가주택·다가구·점포처럼 물건의 종류에 따라 확인해야 할 서류와 위험 지점이 달라집니다.',
    'LH·도시공사 전세임대 상담은 사람의 자격과 집의 권리분석이 동시에 맞아야 합니다. 소득인정액, 보증금, 선순위, 확정일자, 전입 구조를 함께 봅니다.',
    '상속·증여 논점이 걸린 주택은 부모 지분, 자녀 간 이해관계, 잔금 시차, 세무 전문가 확인이 필요한 부분을 분리합니다.',
    '점포·상가 상담은 권리금, 영업가치, 공개 범위, 임대인·임차인 이해관계를 당사자 의사에 맞춰 신중하게 조율합니다.',
    '필요한 경우 카카오톡 상담 또는 전화상담으로 이어서 구체적인 일정을 조율합니다.',
  ],
};

export default function HeroMasterFinal() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [drawerDetail, setDrawerDetail] = useState<DetailItem | null>(null);
  const [featureModal, setFeatureModal] = useState<FeatureModal>(null);

  const activeFeature =
    featureModal === 'rights' ? rightsModal : featureModal === 'contract' ? contractModal : null;
  const activeDetail = drawerDetail || activeFeature;

  const closeEverything = () => {
    setDrawerOpen(false);
    setConsultOpen(false);
    setDrawerDetail(null);
    setFeatureModal(null);
  };

  const closeTopLayer = () => {
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
          <img
            className={styles.heroImage}
            src="/assets/hero-master-final.png"
            alt=""
            draggable={false}
          />

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
            <p className={styles.kicker}>주소 · 서류 · 권리관계 확인</p>

            <h1 className={styles.heroTitle}>
              <span>주소와 서류는</span>
              <span className={styles.titleStrong}>정밀하게,</span>
              <span className={styles.titleSoft}>상담은 편하게</span>
            </h1>

            <p className={styles.heroBody}>
              등기부 · 건축물대장 · 선순위 보증금을 함께 확인합니다.
              <br />
              산격로95 계약 상담과 서류 지참 상담이 가능합니다.
            </p>

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
                <span className={styles.cardEyebrow}>DOCUMENT REVIEW</span>
                <strong className={styles.cardTitle}>권리검토</strong>
                <span className={styles.cardArrow}>→</span>
              </button>

              <button
                type="button"
                className={styles.featureCard}
                onClick={() => setFeatureModal('contract')}
              >
                <span className={styles.cardEyebrow}>CONTRACT CONSULT</span>
                <strong className={styles.cardTitle}>종류별 계약 상담</strong>
                <span className={styles.cardArrow}>→</span>
              </button>
            </div>

            <section className={styles.bottomBanner} aria-label="사무소 기본 정보">
              <div className={styles.bannerRow}>{OFFICE.name} · 전화{' '}<a href={`tel:${OFFICE.phone.replace(/-/g, '')}`}>{OFFICE.phone}</a></div>
              <div className={styles.bannerRow}>주소 {OFFICE.address} · FAX {OFFICE.fax}</div>
            </section>
          </section>
        </section>
      </main>

      {(drawerOpen || consultOpen || activeDetail) && (
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
        <aside className={styles.drawerPanel} role="dialog" aria-modal="true" aria-label="선린 자산보호 서류철">
          <div className={styles.drawerHeader}>
            <div>
              <p>MANILA FILE INDEX</p>
              <h2>선린 자산보호 서류철</h2>
              <span>매물보다 먼저 보는 것은 주소, 서류, 권리, 숫자입니다.</span>
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
            {activeDetail.body.map((text, index) => (
              <p key={index}>{text}</p>
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
        </section>
      )}
    </>
  );
}
