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

type DrawerItem = {
  index: string;
  title: string;
  summary: string;
  body: string[];
};

type FeatureModal = 'rights' | 'contract' | null;

const drawerItems: DrawerItem[] = [
  {
    index: '01',
    title: '선린부동산 소개',
    summary: '정식명칭, 등록정보, 협회·공제, 주소, 연락수단',
    body: [
      '선린공인중개사사무소는 대구 북구 산격로 95에서 운영되는 정식 등록 중개사무소입니다.',
      '대표 공인중개사, 중개업 등록정보, 사업자 정보, 사무소 소재지를 분리해 안내합니다.',
      '한국공인중개사협회 관련 구조와 손해배상책임 공제 구조를 갖추고 있어 거래 안전 설명이 가능합니다.',
      `정식명칭: ${OFFICE.name}`,
      `주소: ${OFFICE.address}`,
      `대표전화: ${OFFICE.phone}`,
      `FAX: ${OFFICE.fax}`,
    ],
  },
  {
    index: '02',
    title: '주거급여 · LH 안심 산식',
    summary: '기초생활보장법 구조, 소득인정액, 금융재산, 보증금 구조',
    body: [
      '이 항목은 계산기를 보여주는 메뉴가 아니라, 선린이 복지·임대차 구조를 이해하고 있다는 점을 보여주는 서류철입니다.',
      '소득인정액은 소득평가액과 재산의 소득환산액 구조로 분리해서 봅니다.',
      '근로·사업·재산·공적이전·사적이전소득, 금융재산, 금융소득, 생활준비금, 재산 공제, 부채 차감, 주거재산 구조를 함께 확인합니다.',
      '반복 입금되는 사적이전소득, 예금·적금·보험성 자산, 보증금이 실제 수급액과 자격 판단에 어떤 영향을 주는지 구조적으로 설명합니다.',
      '고객에게 산식을 외우게 하려는 것이 아니라, 수급자격과 계약안전이 흔들릴 수 있는 숫자를 선린이 먼저 알고 본다는 점을 전달하기 위한 항목입니다.',
    ],
  },
  {
    index: '03',
    title: '산격시장 상업 비공개 상담',
    summary: '상가건물 임대차보호법, 권리금, 영업가치, 비공개 매칭',
    body: [
      '상가 매물은 공개 방식이 거칠수록 기존 영업, 단골, 권리금 기대치에 손상을 줄 수 있습니다.',
      '선린은 매물 노출 자체가 리스크가 되는 상가·점포에 대해 조용한 상담 동선을 우선합니다.',
      '상가건물 임대차보호법 구조, 권리금 회수 기회, 임대인·임차인 이해관계, 영업가치 보존 포인트를 함께 봅니다.',
      '공개 광고보다 비공개 매칭이 유리한 경우를 분리해서 설명하고, 노출 강도를 조정하는 방식으로 접근합니다.',
    ],
  },
  {
    index: '04',
    title: '주택 정리 · 아파트 이동 · 가족 지분 조율',
    summary: '부모 지분, 자녀 이해관계, 상속·증여 논점, 잔금 시차',
    body: [
      '단순 매도·매수가 아니라 가족 안의 자산 이동을 정리하는 상담입니다.',
      '부모 지분과 자녀 이해관계가 얽힌 경우, 상속세·증여세 논점과 잔금 시차, 기존 임차인 보증금 반환 시점을 함께 고려합니다.',
      '단독주택·상가주택을 정리하고 아파트로 옮기려는 경우, 이주 자금 흐름과 거주 이전 리스크를 분리해서 봅니다.',
      '가족 간 이권 다툼이 커지기 전, 중간 설명과 절차 정리를 통해 갈등을 낮추는 상담 구조를 지향합니다.',
    ],
  },
];

const rightsModal: DrawerItem = {
  index: 'R',
  title: '권리검토',
  summary: '등기부 · 건축물대장 · 선순위 구조 확인',
  body: [
    '권리검토는 겁을 주기 위한 절차가 아니라, 계약 전에 확인할 항목을 차분히 나누는 과정입니다.',
    '등기부의 소유자, 근저당, 압류·가압류 가능성, 건축물대장의 용도와 면적, 선순위 보증금 구조를 함께 봅니다.',
    '주택 임대차는 대항력, 확정일자, 우선변제와 연결될 수 있으므로 전입·확정일자·선순위 임차관계를 따로 확인합니다.',
    '확정할 수 없는 내용은 단정하지 않고 추가 확인 항목으로 남깁니다.',
  ],
};

const contractModal: DrawerItem = {
  index: 'C',
  title: '계약 상담',
  summary: '계약 조건 · 잔금 시차 · 가족 지분 조율',
  body: [
    '계약 상담은 단순히 날짜를 잡는 것이 아니라, 실제 계약으로 넘어가기 전 조건을 정리하는 창구입니다.',
    ...drawerItems[3].body,
    '상담이 필요한 경우 카카오 채널 또는 전화상담으로 연결해 구체적인 일정을 조율합니다.',
  ],
};

export default function HeroMasterFinal() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [drawerDetail, setDrawerDetail] = useState<DrawerItem | null>(null);
  const [featureModal, setFeatureModal] = useState<FeatureModal>(null);

  const activeFeature =
    featureModal === 'rights' ? rightsModal : featureModal === 'contract' ? contractModal : null;

  const closeAll = () => {
    setDrawerOpen(false);
    setConsultOpen(false);
    setDrawerDetail(null);
    setFeatureModal(null);
  };

  const openDrawerDetail = (item: DrawerItem) => {
    setDrawerOpen(false);
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
              주소와 서류는
              <br />
              정밀하게,
              <br />
              상담은 편하게
            </h1>

            <p className={styles.heroBody}>
              등기부 · 건축물대장 · 선순위 보증금을 함께 확인합니다.
              <br />
              산격로95 계약 상담과 서류 지참 상담이 가능합니다.
            </p>

            <div className={styles.ctaGroup}>
              <button type="button" className={styles.primaryCta} onClick={() => setConsultOpen(true)}>
                <span>상담 예약하기</span>
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
                <strong className={styles.cardTitle}>계약 상담</strong>
                <span className={styles.cardArrow}>→</span>
              </button>
            </div>

            <section className={styles.bottomBanner} aria-label="사무소 기본 정보">
              <div className={styles.bannerCell}>
                <span>전화</span>
                <strong>{OFFICE.phone}</strong>
              </div>
              <div className={styles.bannerCell}>
                <span>FAX</span>
                <strong>{OFFICE.fax}</strong>
              </div>
              <div className={styles.bannerCell}>
                <span>주소</span>
                <strong>{OFFICE.address}</strong>
              </div>
              <div className={styles.bannerCell}>
                <span>상호</span>
                <strong>{OFFICE.name}</strong>
              </div>
            </section>
          </section>
        </section>
      </main>

      {(drawerOpen || consultOpen || drawerDetail || activeFeature) && (
        <button type="button" className={styles.overlayDim} aria-label="닫기" onClick={closeAll} />
      )}

      {consultOpen && (
        <section className={styles.consultModal} role="dialog" aria-modal="true" aria-label="상담 방식 선택">
          <div className={styles.modalHeader}>
            <div>
              <p>CONSULT CHANNEL</p>
              <h2>상담 방식을 선택하세요</h2>
            </div>
            <button type="button" className={styles.closeButton} onClick={closeAll} aria-label="닫기">
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

            <button type="button" className={styles.closeButton} onClick={closeAll} aria-label="닫기">
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

      {(drawerDetail || activeFeature) && (
        <section className={styles.detailModal} role="dialog" aria-modal="true">
          <div className={styles.detailHeader}>
            <span>{(drawerDetail || activeFeature)?.index}</span>
            <button type="button" className={styles.closeButton} onClick={closeAll} aria-label="닫기">
              ×
            </button>
          </div>

          <h2>{(drawerDetail || activeFeature)?.title}</h2>
          <p className={styles.detailSummary}>{(drawerDetail || activeFeature)?.summary}</p>

          <div className={styles.detailBody}>
            {(drawerDetail || activeFeature)?.body.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {featureModal === 'contract' && (
            <button type="button" className={styles.detailCta} onClick={() => {
              setFeatureModal(null);
              setConsultOpen(true);
            }}>
              상담 방식 선택하기
            </button>
          )}
        </section>
      )}
    </>
  );
}
