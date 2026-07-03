'use client';

import React from 'react';
import styles from './HeroMasterFinal.module.css';

interface HotspotConfig {
  key: string;
  href: string;
  label: string;
  title: string;
  className: string;
}

export default function HeroMasterFinal() {
  // 12시간 교차 학습의 정점: 프리미엄 클리닉 감성의 은닉 메타데이터 정의
  const hotspots: HotspotConfig[] = [
    {
      key: 'menu',
      href: '#navigation',
      label: '플랫폼 궤적 탐색 전체 메뉴',
      title: '메뉴',
      className: styles.menu
    },
    {
      key: 'addr',
      href: '#address-verification',
      label: '지번 서류 검증: 공적 장부 기반의 오차 제로 팩트 대조',
      title: '서류 정밀 대조',
      className: styles.addr
    },
    {
      key: 'exam',
      href: '#quantitative-review',
      label: '권리 정량 분석: 은닉된 채권 및 보증금 리스크 선제적 차단',
      title: '권리 검토',
      className: styles.exam
    },
    {
      key: 'spec',
      href: '#special-asset-consulting',
      label: '특수 자산 컨설팅: 주거 환경 격상 케어, 공공 금융 기금 심사 매칭, 비공개 점포 임대차 자산 보호',
      title: '선린 특수 케어',
      className: styles.spec
    },
    {
      key: 'call',
      href: 'tel:0539441116',
      label: '즉각 유선 연결: 06시-23시 연중무휴. 유선 주소 포착 및 비대면 사전 진단 전용 다이렉트 콜',
      title: '전화 문의 (연중무휴)',
      className: styles.call
    }
  ];

  return (
    <main className={styles.shell}>
      <section className={styles.heroFinal} aria-label="선린공인중개사사무소 자산 리스크 헷지 플랫폼">
        {/* 실용적 미학 선행의 법칙: 텍스트 중복 혼용을 완전히 차단한 단일 그래픽 백그라운드 홀딩 */}
        <img
          className={styles.heroImage}
          src="/assets/hero-master-final.png"
          alt="주소와 서류는 정밀하게, 상담은 편하게. 보증금 사고율 0%의 궤적, 선린공인중개사사무소"
          draggable={false}
        />

        {/* 인터랙티브 인비저블 핫스팟 루핑 */}
        {hotspots.map((spot) => (
          <a
            key={spot.key}
            href={spot.href}
            className={`${styles.hotspot} ${spot.className}`}
            aria-label={spot.label}
            title={spot.title}
          />
        ))}
      </section>
    </main>
  );
}
