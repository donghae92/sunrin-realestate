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
    summary: '정식명칭, 등록정보, 협회·공제, 주소, 연락수단',
    body: [
      '선린공인중개사사무소는 대구 북구 산격로 95에서 상담하는 정식 등록 중개사무소입니다.',
      '상담 전에는 상호, 소재지, 대표 공인중개사, 중개업 등록정보, 사업자 정보처럼 책임 주체가 확인되는 항목을 안내합니다.',
      '한국공인중개사협회 회원 및 손해배상책임 공제 가입 구조를 갖추고 있어, 중개사고 발생 시 공제 범위 안에서 손해배상 청구가 가능한 구조를 안내할 수 있습니다.',
      '전화가 부담스러운 경우에는 카카오톡 상담으로 먼저 문의를 남길 수 있고, 필요한 경우 전화상담 또는 계약 상담으로 이어갑니다.',
      `정식명칭: ${OFFICE.name}`,
      `주소: ${OFFICE.address}`,
      `대표전화: ${OFFICE.phone}`,
      `FAX: ${OFFICE.fax}`,
    ],
  },
  {
    index: '02',
    title: '주거급여 · LH 안심 산식',
    summary: '기초생활보장법 구조, 소득인정액, 금융재산, 보증금, 자기부담분',
    body: [
      'LH·도시공사 전세임대와 주거급여 상담은 월세만 보고 판단하기 어렵습니다.',
      '소득인정액은 소득평가액과 재산의 소득환산액으로 나뉘고, 실제소득·근로소득공제·사적이전소득·금융재산·기본재산액·부채 차감·주거재산 구조가 함께 움직입니다.',
      '자녀가 반복적으로 보내는 생활비, 예금·적금·보험성 자산, 금융소득, 보증금 증감은 수급액과 자격 판단에 영향을 줄 수 있습니다.',
      '주거급여는 기준임대료, 실제임차료, 자기부담분, 임차보증금, 선순위 보증금, 권리관계를 함께 보아야 합니다.',
      '손님에게 산식을 외우게 하려는 것이 아니라, 계약 전 어떤 숫자가 자격과 수급액을 흔들 수 있는지 알고 보는 상담입니다.',
    ],
  },
  {
    index: '03',
    title: '산격시장 상업 비공개 상담',
    summary: '상가건물 임대차보호법, 권리금, 영업가치, 조용한 거래',
    body: [
      '영업 중인 점포는 매물 노출 자체가 부담이 될 수 있습니다.',
      '상가·점포 상담에서는 권리금, 시설비, 보증금, 월세, 잔금일, 영업 인수 시점을 분리해서 봅니다.',
      '상가건물 임대차보호법상 권리금 회수기회 보호 구조를 의식하고, 신규 임차인 주선과 임대인·임차인 조건을 나누어 확인합니다.',
      '공개 광고가 유리한 매물과 조용한 1:1 상담이 더 안전한 매물을 구분해 접근합니다.',
    ],
  },
  {
    index: '04',
    title: '주택 정리 · 아파트 이동 · 가족 지분 조율',
    summary: '부모 지분, 자녀 이해관계, 상속·증여 논점, 잔금 시차',
    body: [
      '집을 정리하고 아파트로 이동하는 상담은 단순 매도·매수가 아닙니다.',
      '부모 지분, 자녀 간 이해관계, 실거주 의사, 현금화 필요성, 임대 유지 여부를 분리해서 봐야 합니다.',
      '상속세·증여세·취득세는 중개사가 확정 계산하지 않지만, 거래 전에 세무 쟁점이 생길 수 있는 구조는 미리 표시할 수 있습니다.',
      '기존 임차인 보증금 반환일, 매도 잔금일, 새 주거지 계약금·잔금일, 이사일이 맞물리므로 시차를 정리하는 상담이 필요합니다.',
    ],
  },
];

const rightsModal: DetailItem = {
  index: 'R',
  title: '권리검토',
  summary: '등기부 · 건축물대장 · 선순위 구조 확인',
  body: [
    '권리검토는 손님을 겁주기 위한 절차가 아니라, 계약 전에 확인할 항목을 차분히 나누는 과정입니다.',
    '등기부에서는 소유자, 근저당, 압류·가압류 가능성, 권리관계 흐름을 확인합니다.',
    '건축물대장에서는 용도, 면적, 확인이 필요한 이유를 정리합니다.',
    '주택 임대차는 대항력, 확정일자, 우선변제와 연결될 수 있으므로 전입·확정일자·선순위 임차관계를 따로 확인합니다.',
    '확정할 수 없는 내용은 단정하지 않고 추가 확인 항목으로 남깁니다.',
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
    '상가·점포 상담은 권리금과 영업가치가 드러나지 않도록 조용한 상담 동선을 우선할 수 있습니다.',
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
              <span className={styles.bannerText}>
                <span>상호 <b>{OFFICE.name}</b></span>
                <span>주소 <b>{OFFICE.address}</b></span>
                <span>
                  전화{' '}
                  <a href={`tel:${OFFICE.phone.replace(/-/g, '')}`}>{OFFICE.phone}</a>
                </span>
                <span>FAX <b>{OFFICE.fax}</b></span>
              </span>
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
