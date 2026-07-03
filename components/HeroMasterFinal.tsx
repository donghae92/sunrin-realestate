'use client';

import { useEffect, useState } from 'react';
import styles from './HeroMasterFinal.module.css';

type PanelId = 'reserve' | 'process' | 'rights' | 'visit';

type PanelContent = {
  kicker: string;
  title: string;
  body: string[];
  action?: 'call' | 'map';
};

const menuItems: Array<{ id: PanelId; label: string; desc: string }> = [
  {
    id: 'reserve',
    label: '상담 예약하기',
    desc: '전화 후 방문 시간을 맞춥니다.',
  },
  {
    id: 'process',
    label: '확인 절차 보기',
    desc: '주소·등기·대장·보증금을 순서대로 봅니다.',
  },
  {
    id: 'rights',
    label: '권리검토 보기',
    desc: '근저당·선순위·보증금 위험을 분리합니다.',
  },
  {
    id: 'visit',
    label: '방문 상담 안내',
    desc: '산격로95 위치와 방문 준비를 확인합니다.',
  },
];

const panels: Record<PanelId, PanelContent> = {
  reserve: {
    kicker: 'APPOINTMENT',
    title: '상담 예약하기',
    body: [
      '전화 상담 후 방문 가능 시간을 맞춥니다.',
      '주소, 보증금, 월세, 관리비를 먼저 정리합니다.',
      '서류 확인이 필요한 경우 방문 전 지참 자료를 안내합니다.',
    ],
    action: 'call',
  },
  process: {
    kicker: 'CHECK PROCESS',
    title: '확인 절차 보기',
    body: [
      '1. 주소와 실제 건물 위치를 먼저 맞춥니다.',
      '2. 등기부등본으로 소유자, 근저당, 권리관계를 확인합니다.',
      '3. 건축물대장으로 용도, 면적, 확인이 필요한 이유를 봅니다.',
      '4. 보증금, 월세, 관리비, 선순위 보증금을 함께 확인합니다.',
    ],
  },
  rights: {
    kicker: 'RIGHTS REVIEW',
    title: '권리검토 보기',
    body: [
      '등기부와 건축물대장을 기준으로 계약 전 확인 항목을 분리합니다.',
      '선순위 권리, 보증금 회수 가능성, 실제 점유 상태를 함께 봅니다.',
      '확정할 수 없는 항목은 단정하지 않고 추가 확인 대상으로 남깁니다.',
    ],
  },
  visit: {
    kicker: 'LOCAL VISIT',
    title: '방문 상담 안내',
    body: [
      '주소: 대구 북구 산격로 95',
      '서류를 지참하면 상담 속도가 빨라집니다.',
      '방문 전 전화로 상담 가능 시간을 먼저 확인하세요.',
    ],
    action: 'map',
  },
};

export default function HeroMasterFinal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelId | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const openPanel = (id: PanelId) => {
    setActivePanel(id);
    setMenuOpen(false);
  };

  const closeOverlay = () => {
    setMenuOpen(false);
    setActivePanel(null);
  };

  const active = activePanel ? panels[activePanel] : null;

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
            <strong>선린공인중개사사무소</strong>
            <span>대구 북구 산격로 95</span>
          </div>

          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((value) => !value);
              setActivePanel(null);
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
            <a className={styles.primary} href="tel:0539441116">
              상담 예약하기 <span>→</span>
            </a>

            <button type="button" className={styles.secondary} onClick={() => openPanel('process')}>
              확인 절차 보기 <span>→</span>
            </button>
          </div>
        </section>

        <section className={styles.miniProof} aria-label="확인 기준">
          <button type="button" onClick={() => openPanel('process')}>주소</button>
          <button type="button" onClick={() => openPanel('rights')}>등기</button>
          <button type="button" onClick={() => openPanel('process')}>건축물대장</button>
          <button type="button" onClick={() => openPanel('rights')}>선순위 보증금</button>
        </section>

        <section className={styles.cards} aria-label="주요 상담 메뉴">
          <button type="button" className={styles.card} onClick={() => openPanel('rights')}>
            <small>DOCUMENT REVIEW</small>
            <strong>권리검토</strong>
            <span>→</span>
          </button>

          <button type="button" className={styles.card} onClick={() => openPanel('visit')}>
            <small>LOCAL VISIT</small>
            <strong>방문 상담</strong>
            <span>→</span>
          </button>
        </section>

        <footer className={styles.phoneBar}>
          <a href="tel:0539441116">☎ 053-944-1116</a>
          <i />
          <button type="button" onClick={() => openPanel('reserve')}>
            전화상담 06:00~23:00
          </button>
        </footer>

        {menuOpen && (
          <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="빠른 메뉴">
            <button type="button" className={styles.overlayDim} onClick={closeOverlay} aria-label="메뉴 닫기" />

            <nav className={styles.menuScreen}>
              <div className={styles.menuHead}>
                <p>QUICK MENU</p>
                <h2>필요한 상담을 선택하세요</h2>
              </div>

              <div className={styles.menuList}>
                {menuItems.map((item) => (
                  <button key={item.id} type="button" onClick={() => openPanel(item.id)}>
                    <strong>{item.label}</strong>
                    <span>{item.desc}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}

        {active && (
          <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={active.title}>
            <button type="button" className={styles.overlayDim} onClick={closeOverlay} aria-label="닫기" />

            <section className={styles.panelScreen}>
              <button type="button" className={styles.close} onClick={closeOverlay} aria-label="닫기">
                ×
              </button>

              <p>{active.kicker}</p>
              <h2>{active.title}</h2>

              <ul>
                {active.body.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              {active.action === 'call' && (
                <a className={styles.panelAction} href="tel:0539441116">
                  053-944-1116 전화하기
                </a>
              )}

              {active.action === 'map' && (
                <a
                  className={styles.panelAction}
                  href="https://map.naver.com/p/search/대구%20북구%20산격로%2095"
                  target="_blank"
                  rel="noreferrer"
                >
                  네이버 지도에서 위치 확인
                </a>
              )}
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
