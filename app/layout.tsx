.hero-final {
  position: relative;
  width: min(100vw, 430px);
  aspect-ratio: 941 / 1672; /* 이미지 원본 비율 */
  margin: 0 auto;
  overflow: hidden;
  background: #f4f7f8;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hotspot {
  position: absolute;
  z-index: 5;
  background: transparent;
  cursor: pointer;
  /* 좌표 및 크기 제어 변수 */
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: var(--h);
}

/* 위치 변수 설정 (이미지 스크린샷 기준 조정) */
.hotspot-call { --x: 10%; --y: 65%; --w: 35%; --h: 8%; }
.hotspot-process { --x: 55%; --y: 65%; --w: 35%; --h: 8%; }
.hotspot-rights { --x: 10%; --y: 75%; --w: 35%; --h: 8%; }
.hotspot-visit { --x: 55%; --y: 75%; --w: 35%; --h: 8%; }
.hotspot-phone { --x: 5%; --y: 90%; --w: 90%; --h: 7%; }
