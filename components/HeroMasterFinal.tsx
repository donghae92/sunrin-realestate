'use client';

import { useState } from 'react';
import styles from './HeroMasterFinal.module.css';

type PanelKey = 'process' | 'rights' | 'visit' | 'reserve' | null;

const panelContent: Record<Exclude<PanelKey, null>, { title: string; body: string[]; action?: string }> = {
  reserve: {
    title: '상담 예약',
    body: [
      '전화 상담 후 방문 시간을 맞춥니다.',
      '주소, 보증금, 월세, 관리비, 등기 확인 여부를 먼저 정리합니다.',
      '방문 전 확인할 서류가 있으면 미리 안내합니다.',
    ],
    action: '053-944-1116',
  },
  process: {
    title: '확인 절차',
    body: [
      '1. 주소와 건물 위치를 먼저 확인합니다.',
      '2. 등기부등본으로 소유자, 근저당, 권리관계를 확인합니다.',
      '3. 건축물대장으로 용도, 면적, 위반 여부를 확인합니다.',
      '4. 보증금, 월세, 관리비, 선순위 보증금을 함께 봅니다.',
    ],
  },
  rights: {
    title: '권리검토',
    body: [
      '계약 전 등기부와 건축물대장을 기준으로 위험 요소를 분리합니다.',
      '선순위 권리, 보증금 회수 가능성, 실제 점유 상태를 함께 확인합니다.',
      '불확실한 부분은 확정처럼 말하지 않고 추가 확인 대상으로 남깁니다.',
    ],
  },
  visit: {
    title: '방문 상담',
    body: [
      '주소: 대구 북구 산격로 95',
      '서류 지참이 가능하면 상담 속도가 빨라집니다.',
      '방문 전 전화로 상담 가능 시간을 먼저 확인하세요.',
    ],
    action: '위치 확인',
  },
};

export default function HeroMasterFinal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelKey>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setActivePanel(null);
  };

  return (
    <main className={styles.shell}>
      <section className={styles.hero} aria-label="선린공인중개사사무소 메인">
        <div className={styles.photoLayer} aria-hidden="true" />

        <header className={styles.topBar}>
          <div>
            <strong>선린공인중개사사무소</strong>
            <span>대구 북구 산격로 95</span>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        {menuOpen && (
          <nav className={styles.menuPanel} aria-label="빠른 메뉴">
            <button type="button" onClick={() => setActivePanel('reserve')}>상담 예약</button>
            <button type="button" onClick={() => setActivePanel('process')}>확인 절차</button>
            <button type="button" onClick={() => setActivePanel('rights')}>권리검토</button>
            <button type="button" onClick={() => setActivePanel('visit')}>방문 상담</button>
          </nav>
        )}

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
              상담 예약하기
              <span>→</span>
            </a>

            <button
              type="button"
              className={styles.secondary}
              onClick={() => setActivePanel('process')}
            >
              확인 절차 보기
              <span>→</span>
            </button>
          </div>
        </section>

        <p className={styles.location}>⌖ 산격로95 방문 상담 · 서류 지참 가능</p>

        <section className={styles.cards} aria-label="상담 메뉴">
          <button type="button" className={styles.card} onClick={() => setActivePanel('rights')}>
            <span>권리검토</span>
            <b>→</b>
          </button>

          <button type="button" className={styles.card} onClick={() => setActivePanel('visit')}>
            <span>방문 상담</span>
            <b>→</b>
          </button>
        </section>

        <footer className={styles.phoneBar}>
          <a href="tel:0539441116">☎ 053-944-1116</a>
          <span />
          <button type="button" onClick={() => setActivePanel('reserve')}>
            전화상담 06:00~23:00
          </button>
        </footer>

        {activePanel && (
          <div className={styles.sheet} role="dialog" aria-modal="true">
            <div className={styles.sheetCard}>
              <button type="button" className={styles.close} onClick={closeAll} aria-label="닫기">
                ×
              </button>

              <h2>{panelContent[activePanel].title}</h2>

              <ul>
                {panelContent[activePanel].body.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              {activePanel === 'reserve' && (
                <a className={styles.sheetAction} href="tel:0539441116">
                  053-944-1116 전화하기
                </a>
              )}

              {activePanel === 'visit' && (
                <a
                  className={styles.sheetAction}
                  href="https://map.naver.com/p/search/대구%20북구%20산격로%2095"
                  target="_blank"
                  rel="noreferrer"
                >
                  네이버 지도에서 위치 확인
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
