'use client';

import React from 'react';
import './style.css';

export default function HeroMaster() {
  return (
    <section className="hero-final">
      {/* 원본 이미지를 full-bleed로 고정 */}
      <img 
        className="hero-image" 
        src="/assets/hero-master-final.png" 
        alt="선린공인중개사사무소 모바일 메인" 
      />

      {/* 클릭 가능 영역 (Hotspots) - 텍스트 중복 배제 */}
      <a className="hotspot hotspot-call" href="tel:0539441116" aria-label="상담 예약하기" />
      <a className="hotspot hotspot-process" href="/process" aria-label="확인 절차 보기" />
      <a className="hotspot hotspot-rights" href="/rights" aria-label="권리검토 보기" />
      <a className="hotspot hotspot-visit" href="/visit" aria-label="방문 상담 보기" />
      <a className="hotspot hotspot-phone" href="tel:0539441116" aria-label="전화 상담하기" />
    </section>
  );
}
