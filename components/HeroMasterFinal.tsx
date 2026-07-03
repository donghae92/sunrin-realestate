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
  const hotspots: HotspotConfig[] = [
    {
      key: 'menu',
      href: '#navigation',
      label: '플랫폼 자산 궤적 전체 탐색',
      title: '메뉴',
      className: styles.menu
    },
    {
      key: 'addr',
      href: '#address-verification',
      label: '지번 서류 검증: 공적 장부 기반 원장 팩트 대조',
      title: '서류 정밀 대조',
      className: styles.addr
    },
    {
      key: 'exam',
      href: '#quantitative-review',
      label: '권리 정량 분석: 은닉 채권 및 리스크 선제 소거',
      title: '권리 검토',
      className: styles.exam
    },
    {
      key: 'spec',
      href: '#special-asset-consulting',
      label: '특수 자산 컨설팅: 정주 환경 격상 케어, 공공 금융 기금 심사 매칭, 비공개 점포 임대차 아키텍처',
      title: '선린 특수 케어',
      className: styles.spec
    },
    {
      key: 'call',
      href: 'tel:0539441116',
      label: '즉각 유선 연결: 06시-23시 다이렉트 비대면 유선 문의 및 주소 선포착 접수',
      title: '전화 문의 (연중무휴)',
      className: styles.call
    }
  ];

  return (
    <main className={styles.shell}>
      <section className={styles.heroFinal} aria-label="선린공인중개사사무소 자산 리스크 헷지 플랫폼">
        {/* 텍스트 중복 및 시각 왜곡을 영구 차단하기 위한 단일 마스터 자산 백그라운드 홀딩 */}
        <img
          className={styles.heroImage}
          src="/assets/hero-master-final.png"
          alt="주소와 서류는 정밀하게, 상담은 편하게. 선린공인중개사사무소"
          draggable={false}
        />

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
