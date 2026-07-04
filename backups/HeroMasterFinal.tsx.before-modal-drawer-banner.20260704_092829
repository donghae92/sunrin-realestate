'use client';

import { useMemo, useState } from 'react';
import styles from './HeroMasterFinal.module.css';

const OFFICE = {
  name: '선린부동산공인중개사사무소',
  shortName: '선린공인중개사사무소',
  address: '대구 북구 산격로 95',
  phone: '053-944-1116',
  fax: '053-944-1114',
  mobile: '010-9889-2838',
  naverMapUrl: 'https://map.naver.com/p/search/대구%20북구%20산격로%2095',
  kakaoChannelUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '#',
};

type DrawerItem = {
  index: string;
  title: string;
  summary: string;
  body: string[];
};

const drawerItems: DrawerItem[] = [
  {
    index: '01',
    title: '선린부동산 소개',
    summary: '등록정보, 협회·공제, 주소, 연락수단',
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
    summary: '소득인정액, 재산 공제, 보증금 구조',
    body: [
      '기초생활보장법 구조를 바탕으로 소득인정액, 재산의 소득환산액, 금융재산, 보증금 구조를 함께 봅니다.',
      '반복 입금되는 사적이전소득, 금융소득, 금융재산 공제, 대구 기준 재산 공제, 주거재산 구조가 실제 수급과 계약 안정성에 어떤 영향을 주는지 설명합니다.',
      '손님에게 공식을 외우게 하는 것이 아니라, 선린이 위험 지점을 먼저 알고 본다는 점을 보여주는 항목입니다.',
    ],
  },
  {
    index: '03',
    title: '산격시장 상업 비공개 상담',
    summary: '상가건물 임대차보호법, 권리금, 비공개 매칭',
    body: [
      '공개 노출이 리스크가 되는 상가·점포는 조용한 상담 동선을 우선합니다.',
      '상가건물 임대차보호법, 권리금 회수 기회, 임대인·임차인 이해관계, 영업가치 보존 포인트를 함께 봅니다.',
      '공개 광고보다 비공개 매칭이 유리한 경우를 분리해서 설명합니다.',
    ],
  },
  {
    index: '04',
    title: '주택 정리 · 아파트 이동 · 가족 지분 조율',
    summary: '지분, 상속·증여 논점, 잔금 시차, 이주 설계',
    body: [
      '단순 매도·매수가 아니라 가족 안의 자산 이동을 정리하는 상담입니다.',
      '부모 지분, 자녀 이해관계, 상속세·증여세 논점, 잔금 시차, 기존 보증금 반환 시점을 함께 고려합니다.',
      '이주 자금 흐름과 거주 이전 리스크를 분리해서 봅니다.',
    ],
  },
];

export default function HeroMasterFinal() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DrawerItem>(drawerItems[0]);

  const overlayOpen = isDrawerOpen || isConsultModalOpen;

  const infoRows = useMemo(
    () => [
      { label: '전화', value: OFFICE.phone, href: `tel:${OFFICE.phone.replace(/-/g, '')}` },
      { label: 'FAX', value: OFFICE.fax, href: null },
      { label: '주소', value: OFFICE.address, href: OFFICE.naverMapUrl },
      { label: '상호', value: OFFICE.name, href: null },
    ],
    []
  );

  const openConsultModal = () => {
    setIsConsultModalOpen(true);
  };

  const openDrawerItem = (item: DrawerItem) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  const handleKakaoConsult = () => {
    if (!OFFICE.kakaoChannelUrl || OFFICE.kakaoChannelUrl === '#') {
      alert('카카오 채널 URL이 아직 설정되지 않았습니다.');
      return;
    }
    window.open(OFFICE.kakaoChannelUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneConsult = () => {
    window.location.href = `tel:${OFFICE.phone.replace(/-/g, '')}`;
  };

  return (
    <>
      <main className={styles.shell}>
        <section className={styles.heroFinal} aria-label="선린공인중개사사무소 모바일 메인">
          <img
            className={styles.heroImage}
            src="/assets/hero-master-final.png"
            alt="선린공인중개사사무소 메인 배경"
            draggable={false}
          />

          <div className={styles.topBar}>
            <div className={styles.topBarTextWrap}>
              <strong className={styles.topBarTitle}>{OFFICE.shortName}</strong>
              <span className={styles.topBarAddress}>{OFFICE.address}</span>
            </div>

            <button
              type="button"
              className={styles.menuButton}
              aria-label="메뉴 열기"
              onClick={() => {
                setSelectedItem(drawerItems[0]);
                setIsDrawerOpen(true);
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className={styles.heroContent}>
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
              산격로95 방문 상담과 서류 지참 상담이 가능합니다.
            </p>

            <div className={styles.ctaGroup}>
              <button type="button" className={styles.primaryCta} onClick={openConsultModal}>
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
                className={`${styles.featureCard} ${styles.reviewCard}`}
                onClick={() => openDrawerItem(drawerItems[1])}
              >
                <div className={styles.cardShade} />
                <div className={styles.cardInner}>
                  <span className={styles.cardEyebrow}>DOCUMENT REVIEW</span>
                  <strong className={styles.cardTitle}>권리검토</strong>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </button>

              <button
                type="button"
                className={`${styles.featureCard} ${styles.contractCard}`}
                onClick={() => openDrawerItem(drawerItems[3])}
              >
                <div className={styles.cardShade} />
                <div className={styles.cardInner}>
                  <span className={styles.cardEyebrow}>CONTRACT CONSULT</span>
                  <strong className={styles.cardTitle}>계약 상담</strong>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </button>
            </div>

            <div className={styles.bottomBanner}>
              {infoRows.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === '주소' ? '_blank' : undefined}
                    rel={item.label === '주소' ? 'noreferrer' : undefined}
                    className={styles.bottomBannerItem}
                  >
                    <span className={styles.bottomBannerLabel}>{item.label}</span>
                    <strong className={styles.bottomBannerValue}>{item.value}</strong>
                  </a>
                ) : (
                  <div key={item.label} className={styles.bottomBannerItem}>
                    <span className={styles.bottomBannerLabel}>{item.label}</span>
                    <strong className={styles.bottomBannerValue}>{item.value}</strong>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      {overlayOpen && <div className={styles.overlayDim} onClick={() => {
        setIsDrawerOpen(false);
        setIsConsultModalOpen(false);
      }} />}

      {isConsultModalOpen && (
        <div className={styles.consultModal} role="dialog" aria-modal="true" aria-label="상담 방식 선택">
          <div className={styles.modalHeader}>
            <div>
              <p className={styles.modalEyebrow}>CONSULT CHANNEL</p>
              <h2 className={styles.modalTitle}>상담 방식을 선택하세요</h2>
            </div>
            <button
              type="button"
              className={styles.closeButton}
              aria-label="닫기"
              onClick={() => setIsConsultModalOpen(false)}
            >
              ×
            </button>
          </div>

          <div className={styles.modalButtonGroup}>
            <button type="button" className={styles.modalActionButton} onClick={handleKakaoConsult}>
              <span className={styles.modalActionTitle}>카카오톡 상담</span>
              <span className={styles.modalActionDesc}>채널로 문의를 남기고 순서대로 답변받습니다.</span>
            </button>

            <button type="button" className={styles.modalActionButton} onClick={handlePhoneConsult}>
              <span className={styles.modalActionTitle}>전화상담</span>
              <span className={styles.modalActionDesc}>{OFFICE.phone} 연결</span>
            </button>
          </div>
        </div>
      )}

      {isDrawerOpen && (
        <aside className={styles.drawerPanel} role="dialog" aria-modal="true" aria-label="선린 자산보호 서류철">
          <div className={styles.drawerHeader}>
            <div>
              <p className={styles.drawerEyebrow}>MANILA FILE INDEX</p>
              <h2 className={styles.drawerTitle}>선린 자산보호 서류철</h2>
              <p className={styles.drawerLead}>매물보다 먼저 보는 것은 주소, 서류, 권리, 숫자입니다.</p>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              aria-label="메뉴 닫기"
              onClick={() => setIsDrawerOpen(false)}
            >
              ×
            </button>
          </div>

          <div className={styles.drawerBody}>
            <nav className={styles.drawerIndex}>
              {drawerItems.map((item) => (
                <button
                  key={item.index}
                  type="button"
                  className={`${styles.drawerIndexButton} ${
                    selectedItem.index === item.index ? styles.drawerIndexButtonActive : ''
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  <span className={styles.drawerIndexNumber}>{item.index}</span>
                  <span className={styles.drawerIndexTextWrap}>
                    <strong className={styles.drawerIndexTitle}>{item.title}</strong>
                    <span className={styles.drawerIndexSummary}>{item.summary}</span>
                  </span>
                </button>
              ))}
            </nav>

            <section className={styles.drawerDetail}>
              <div className={styles.drawerDetailHeader}>
                <span className={styles.drawerDetailNumber}>{selectedItem.index}</span>
                <div>
                  <h3 className={styles.drawerDetailTitle}>{selectedItem.title}</h3>
                  <p className={styles.drawerDetailSummary}>{selectedItem.summary}</p>
                </div>
              </div>

              <div className={styles.drawerDetailBody}>
                {selectedItem.body.map((paragraph, idx) => (
                  <p key={`${selectedItem.index}-${idx}`} className={styles.drawerParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </aside>
      )}
    </>
  );
}
