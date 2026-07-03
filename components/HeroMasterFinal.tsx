'use client';

import styles from './HeroMasterFinal.module.css';

type Hotspot = {
  key: string;
  href: string;
  label: string;
  className: string;
};

const hotspots: Hotspot[] = [
  { key: 'call', href: 'tel:0539441116', label: '상담 예약하기', className: styles.call },
  { key: 'process', href: '#process', label: '확인 절차 보기', className: styles.process },
  { key: 'rights', href: '#rights', label: '권리검토 보기', className: styles.rights },
  { key: 'visit', href: '#visit', label: '방문 상담 보기', className: styles.visit },
  { key: 'phone', href: 'tel:0539441116', label: '전화 상담하기', className: styles.phone },
];

export default function HeroMasterFinal() {
  return (
    <main className={styles.shell}>
      <section className={styles.heroFinal} aria-label="선린공인중개사사무소 모바일 메인">
        <img
          className={styles.heroImage}
          src="/assets/hero-master-final.png"
          alt="선린공인중개사사무소: 권리관계는 정밀하게, 상담은 편하게. 대구 북구 산격로 95, 전화상담 053-944-1116"
          draggable={false}
        />

        {hotspots.map((spot) => (
          <a
            key={spot.key}
            className={`${styles.hotspot} ${spot.className}`}
            href={spot.href}
            aria-label={spot.label}
          />
        ))}
      </section>
    </main>
  );
}
