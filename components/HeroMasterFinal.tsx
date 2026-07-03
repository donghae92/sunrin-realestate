'use client';

import React from 'react';
import styles from './HeroMasterFinal.module.css';

export default function HeroMasterFinal() {
  return (
    <main className={styles.shell}>
      <section className={styles.heroFinal} aria-label="선린공인중개사사무소: 리스크 헷지 컨설팅 플랫폼">
        <img
          className={styles.heroImage}
          src="/assets/hero-master-final.png"
          alt="주소와 서류는 정밀하게, 상담은 편하게. 선린공인중개사사무소"
          draggable={false}
        />

        {/* 0. [삼선 메뉴] 플랫폼 데이터 궤적 진입점 */}
        <a 
          className={`${styles.hotspot} ${styles.menu}`} 
          href="#navigation" 
          aria-label="플랫폼 궤적 탐색 (전체 메뉴)" 
          title="메뉴"
        />

        {/* 1. 지번 서류 검증 (기존 '확인 절차' 격상) */}
        <a 
          className={`${styles.hotspot} ${styles.addr}`} 
          href="#address-check" 
          aria-label="지번 서류 검증: 공적 장부 기반 오차 제로 대조" 
          title="서류 정밀 대조" 
        />
        
        {/* 2. 권리 정량 분석 (기존 '권리 검토' 격상) */}
        <a 
          className={`${styles.hotspot} ${styles.exam}`} 
          href="#risk-review" 
          aria-label="권리 정량 분석: 은닉 리스크 선제적 차단" 
          title="권리 검토" 
        />

        {/* 3. 특수 자산 컨설팅 (3대 명품 콘텐츠 메타데이터 주입) */}
        <a 
          className={`${styles.hotspot} ${styles.spec}`} 
          href="#special-consult" 
          aria-label="특수 자산 컨설팅: 1. 주거 환경 격상 케어 / 2. 공공 금융 기금 심사 매칭 / 3. 비공개 점포 임대차" 
          title="선린 특수 케어" 
        />

        {/* 4. 즉각 유선 연결 (방문 예약 전면 폐기, 비대면 통제) */}
        <a 
          className={`${styles.hotspot} ${styles.call}`} 
          href="tel:0539441116" 
          aria-label="즉각 유선 연결 (연중무휴): 방문 전 비대면 정밀 진단. 상담은 편하게." 
          title="전화 문의 (053-944-1116)" 
        />
      </section>
    </main>
  );
}
