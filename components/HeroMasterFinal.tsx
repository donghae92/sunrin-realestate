'use client';

import React, { useState } from 'react';
import styles from './HeroMasterFinal.module.css';

type Hotspot = {
  key: string;
  href: string;
  label: string;
  className: string;
  action?: () => void;
};

export default function HeroMasterFinal() {
  const [activeModal, setActiveModal] = useState<'special-consult' | null>(null);

  const hotspots: Hotspot[] = [
    { 
      key: 'call', 
      href: 'tel:0539441116', 
      label: '전화 문의 (연중무휴)', 
      className: styles.call 
    },
    { 
      key: 'process', 
      href: '/benefit-logic', 
      label: '주소 찾기 (확인 절차)', 
      className: styles.process 
    },
    { 
      key: 'rights', 
      href: '/benefit-logic#rights', 
      label: '권리검토 보기', 
      className: styles.rights 
    },
    { 
      key: 'visit', 
      href: '#', 
      label: '분야별 전문 상담 보기', 
      className: styles.visit,
      action: () => setActiveModal('special-consult')
    },
    { 
      key: 'phone', 
      href: 'tel:0539441116', 
      label: '유선 전화 연결 (053-944-1116)', 
      className: styles.phone 
    },
  ];

  return (
    <main className={styles.shell}>
      {/* 360px 모바일 화면 및 핀치 줌 완벽 대응 쉘 */}
      <div className={styles.heroFinal} aria-label="선린공인중개사사무소 모바일 메인">
        <img
          className={styles.heroImage}
          src="/assets/hero-master-final.png"
          alt="선린공인중개사사무소: 권리관계는 정밀하게, 상담은 편하게. 대구 북구 산격로 95, 전화상담 053-944-1116"
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

        {/* 분야별 전문 상담 상세 안내 모달 (방문 상담 핫스팟 클릭 시) */}
        {activeModal === 'special-consult' && (
          <div className="fixed inset-0 bg-black/60 z- flex items-center justify-center px-4" onClick={() => setActiveModal(null)}>
            <div className="w-full max-w-[380px] bg-[#F6F4EE] rounded-lg shadow-2xl p-6 border border-[#A7A091]/30 max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center pb-4 border-b border-[#A7A091]/30">
                <span className="text-[1.05rem] font-bold text-[#242725]">선린 분야별 전문 자산 상담</span>
                <button onClick={() => setActiveModal(null)} className="text-[#6F716B] p-1" aria-label="닫기">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-6 text-[#242725] text-left">
                {/* 1. 주택 정리 및 아파트 이주 */}
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#9E4631] flex items-center gap-1.5">
                    🏠 주택 정리 및 아파트 이주 설계
                  </h4>
                  <p className="text-[0.85rem] text-[#6F716B] mt-2 leading-relaxed">
                    오래 거주해 온 주택 정리와 대현·복현동 대형 아파트 이주 시 잔금·취득세 시차 설계
                  </p>
                </div>

                {/* 2. LH 및 공공 전세임대 */}
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#9E4631] flex items-center gap-1.5">
                    📑 LH / 도시공사 전세임대 상담
                  </h4>
                  <p className="text-[0.85rem] text-[#6F716B] mt-2 leading-relaxed">
                    까다로운 기금 공사 심사 기준을 단번에 관통시키는 검증 노하우와 자산 방어선 설계
                  </p>
                </div>

                {/* 3. 상가 비공개 매칭 */}
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#9E4631] flex items-center gap-1.5">
                    🤫 산격시장 상업자산 비공개 매칭
                  </h4>
                  <p className="text-[0.85rem] text-[#6F716B] mt-2 leading-relaxed">
                    상인분들의 소중한 권리금과 상권 가치를 보호하기 위해 노출 광고 없이 조용하고 은밀하게 조율하는 1:1 비공개 매칭
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#A7A091]/20">
                <a
                  href="tel:053-944-1116"
                  className="flex justify-center items-center py-3 bg-[#1D211F] text-white rounded font-bold text-[0.9rem] hover:opacity-90"
                >
                  📞 지금 안심 유선 문의하기
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
