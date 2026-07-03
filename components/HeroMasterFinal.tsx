'use client';

import React, { useState } from 'react';
import styles from './HeroMasterFinal.module.css';

// 선린부동산 공식 정보 원장
const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구광역시 북구 산격로 95, 1층 101호',
  phone: '053-944-1116',
  telHref: 'tel:053-944-1116',
  representative: '이용호',
  registrationNumber: '제 27230-2023-00042호',
  businessHours: '09:00 ~ 18:00',
  consultationHours: '06:00 ~ 22:00',
} as const;

// 사장님의 3대 특수 자산 컨설팅 명품 콘텐츠 데이터 (Universal Value-Up Schema)
const SPECIAL_CARE_CONTENTS = {
  residential_value_up: {
    title: '주거 환경 격상 (Residential Value-Up Care)',
    description: '기존 자산의 정밀 매도 처리 및 신축 정주 환경으로의 안정적인 이전을 지원합니다. 번거롭고 복잡한 행정 서류 처리는 선린의 전문 인프라가 대행하여 완결합니다.',
    badge: '자산 청산·이주'
  },
  public_fund_matching: {
    title: '공공 금융 기금 심사 매칭 (Public Fund Matching)',
    description: 'LH 및 도시공사 전세임대 기금 사업 특화 모듈입니다. 다년간 축적된 권리 분석 실무 경험과 고도화된 지식을 바탕으로, 까다롭고 예민한 승인 절차를 단 한 번에 리드합니다.',
    badge: 'LH·공공기금'
  },
  private_commercial_leasing: {
    title: '비공개 점포 임대차 (Private Commercial Leasing)',
    description: '상가 영업권 보호와 비즈니스 니즈 관철을 최우선으로 합니다. 외부 노출이 없는 고도로 절제되고 조용한 중개 아키텍처를 가동하여 자산의 가치를 방어합니다.',
    badge: '비공개·상가수호'
  }
} as const;

type Hotspot = {
  key: string;
  href: string;
  label: string;
  className: string;
  action?: () => void;
};

export default function HeroMasterFinal() {
  // 모달 팝업 상태 (null | 'drawer' | 'special-care')
  const [activeModal, setActiveModal] = useState<'drawer' | 'special-care' | null>(null);

  const hotspots: Hotspot[] = [
    { 
      key: 'menu', 
      href: '#', 
      label: '선린 자산보호 메뉴 목록 열기', 
      className: styles.menu,
      action: () => setActiveModal('drawer')
    },
    { 
      key: 'call', 
      href: OFFICE.telHref, 
      label: '즉각 유선 연결 및 전화 문의 (연중무휴)', 
      className: styles.call 
    },
    { 
      key: 'process', 
      href: '/benefit-logic', 
      label: '지번 및 주소 찾기 검증', 
      className: styles.process 
    },
    { 
      key: 'rights', 
      href: '/benefit-logic#rights', 
      label: '권리 관계 정밀 분석 및 대조', 
      className: styles.rights 
    },
    { 
      key: 'visit', 
      href: '#', 
      label: '선린 특수 자산 컨설팅 (3선 전문 상담) 보기', 
      className: styles.visit,
      action: () => setActiveModal('special-care')
    },
    { 
      key: 'phone', 
      href: OFFICE.telHref, 
      label: '유선 전화 연결 (053-944-1116)', 
      className: styles.phone 
    },
  ];

  return (
    <main className={styles.shell}>
      <section className={styles.heroFinal} aria-label="선린공인중개사사무소 모바일 메인">
        <img
          className={styles.heroImage}
          src="/assets/hero-master-final.png"
          alt="선린공인중개사사무소: 주소와 서류는 정밀하게, 상담은 편하게. 대구 북구 산격로 95, 전화상담 053-944-1116"
          draggable={false}
        />

        {hotspots.map((spot) => {
          if (spot.action) {
            return (
              <button
                key={spot.key}
                type="button"
                className={`${styles.hotspot} ${spot.className}`}
                onClick={spot.action}
                aria-label={spot.label}
              />
            );
          }
          return (
            <a
              key={spot.key}
              className={`${styles.hotspot} ${spot.className}`}
              href={spot.href}
              aria-label={spot.label}
            />
          );
        })}

        {/* 1. 삼선(☰) 메뉴 터치 시 슬라이딩 마닐라 서류철 드로워 */}
        {activeModal === 'drawer' && (
          <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
            <div className={styles.drawerSheet} onClick={(e) => e.stopPropagation()}>
              <div className={styles.drawerHeader}>
                <span className={styles.drawerTitle}>선린 자산보호 안내책 (Index)</span>
                <button 
                  onClick={() => setActiveModal(null)} 
                  className={styles.closeButton}
                  aria-label="닫기"
                >
                  <svg className={styles.closeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className={styles.drawerNav}>
                {[
                  {
                    num: '01',
                    title: '주소·서류 확인 상담',
                    desc: '전월세 / 다가구 / 선순위 보증금 정밀 대조',
                    href: '/benefit-logic',
                  },
                  {
                    num: '02',
                    title: '공공 금융 기금 심사 매칭',
                    desc: 'LH 및 도시공사 전세임대 승인 서류 원패스 리드',
                    href: '#',
                    action: () => {
                      setActiveModal('special-care');
                    }
                  },
                  {
                    num: '03',
                    title: '비공개 점포 임대차',
                    desc: '산격시장 영업권 보호를 위한 소리 없는 매칭',
                    href: '#',
                    action: () => {
                      setActiveModal('special-care');
                    }
                  },
                  {
                    num: '04',
                    title: '주거 환경 격상 상담',
                    desc: '노후 주택 정리 후 아파트 정주 이주 잔금 설계',
                    href: '#',
                    action: () => {
                      setActiveModal('special-care');
                    }
                  },
                  {
                    num: '05',
                    title: '사무소 찾아오시는 길',
                    desc: '대구 북구 산격로 95 (산격시장 앞 1층)',
                    href: 'https://map.naver.com/v5/entry/place/1069320504',
                    external: true,
                  },
                ].map((item, idx) => {
                  const content = (
                    <div className={styles.navCard}>
                      <span className={styles.navNum}>{item.num}</span>
                      <div className={styles.navText}>
                        <span className={styles.navCardTitle}>{item.title}</span>
                        <span className={styles.navCardDesc}>{item.desc}</span>
                      </div>
                    </div>
                  );

                  if (item.action) {
                    return (
                      <button
                        key={idx}
                        onClick={item.action}
                        className={styles.navButton}
                      >
                        {content}
                      </button>
                    );
                  }

                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      rel={item.external ? 'noopener noreferrer' : ''}
                      className={styles.navLink}
                    >
                      {content}
                    </a>
                  );
                })}
              </nav>

              <div className={styles.drawerFooter}>
                <a href={OFFICE.telHref} className={styles.drawerCallBtn}>
                  📞 {OFFICE.phone} 유선 직통 연결
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 2. 특수 자산 컨설팅 (3선) 팝업 모달 */}
        {activeModal === 'special-care' && (
          <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
            <div className={styles.modalSheet} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div className={styles.modalHeaderTitleBlock}>
                  <span className={styles.modalSubtitle}>선린 자산보호 특수 상담 원장</span>
                  <h3 className={styles.modalTitle}>분야별 전문 상담 명세</h3>
                </div>
                <button onClick={() => setActiveModal(null)} className={styles.closeBtn} aria-label="닫기">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className={styles.modalBody}>
                {Object.entries(SPECIAL_CARE_CONTENTS).map(([key, content]) => (
                  <div key={key} className={styles.careCard}>
                    <div className={styles.careBadgeBlock}>
                      <span className={styles.careBadge}>{content.badge}</span>
                    </div>
                    <h4 className={styles.careCardTitle}>{content.title}</h4>
                    <p className={styles.careCardDesc}>{content.description}</p>
                  </div>
                ))}
              </div>

              <div className={styles.modalFooter}>
                <p className={styles.modalFooterText}>
                  * 상담 가능 시간: {OFFICE.consultationHours} (연중무휴)<br />
                  선린부동산은 팩트 중심의 장부 대조 및 차분한 유선 안내를 원칙으로 작동합니다.
                </p>
                <a href={OFFICE.telHref} className={styles.modalCallBtn}>
                  📞 {OFFICE.phone} 지금 유선 상담하기
                </a>
              </div>
            </div>
          </div>
        )}

      </section>
    </main>
  );
}
