'use client';

import { useState } from 'react';
import styles from './HeroMasterFinal.module.css';

type Hotspot = {
  key: string;
  href?: string;
  label: string;
  className: string;
  onClick?: () => void;
};

export default function HeroMasterFinal() {
  const [menuOpen, setMenuOpen] = useState(false);

  const hotspots: Hotspot[] = [
    {
      key: 'menu',
      label: menuOpen ? '메뉴 닫기' : '메뉴 열기',
      className: styles.menu,
      onClick: () => setMenuOpen((value) => !value),
    },
    {
      key: 'call',
      href: 'tel:0539441116',
      label: '상담 예약하기',
      className: styles.call,
    },
    {
      key: 'process',
      href: '/benefit-logic',
      label: '확인 절차 보기',
      className: styles.process,
    },
    {
      key: 'rights',
      href: '/benefit-logic',
      label: '권리검토 보기',
      className: styles.rights,
    },
    {
      key: 'visit',
      href: 'https://map.naver.com/p/search/대구%20북구%20산격로%2095',
      label: '방문 상담 위치 확인',
      className: styles.visit,
    },
    {
      key: 'phone',
      href: 'tel:0539441116',
      label: '전화 상담하기',
      className: styles.phone,
    },
  ];

  return (
    <main className={styles.shell}>
      <section className={styles.heroFinal} aria-label="선린공인중개사사무소 모바일 메인">
        <img
          className={styles.heroImage}
          src="/assets/hero-master-final.png"
          alt="선린공인중개사사무소: 권리관계는 정밀하게, 상담은 편하게. 대구 북구 산격로 95, 전화상담 053-944-1116"
          draggable={false}
        />

        {hotspots.map((spot) => {
          if (spot.onClick) {
            return (
              <button
                key={spot.key}
                type="button"
                className={`${styles.hotspot} ${spot.className}`}
                aria-label={spot.label}
                aria-expanded={menuOpen}
                onClick={spot.onClick}
              />
            );
          }

          return (
            <a
              key={spot.key}
              className={`${styles.hotspot} ${spot.className}`}
              href={spot.href}
              aria-label={spot.label}
              target={spot.href?.startsWith('http') ? '_blank' : undefined}
              rel={spot.href?.startsWith('http') ? 'noreferrer' : undefined}
            />
          );
        })}

        {menuOpen && (
          <nav className={styles.menuPanel} aria-label="빠른 메뉴">
            <a href="tel:0539441116">전화 상담</a>
            <a href="/benefit-logic">확인 절차</a>
            <a href="/benefit-logic">권리검토</a>
            <a
              href="https://map.naver.com/p/search/대구%20북구%20산격로%2095"
              target="_blank"
              rel="noreferrer"
            >
              위치 확인
            </a>
          </nav>
        )}
      </section>
    </main>
  );
}
