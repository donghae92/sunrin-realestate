import styles from './HeroMasterFinal.module.css';

const checks = [
  '주소 확인',
  '등기부 확인',
  '건축물대장 확인',
  '보증금·월세 조건 확인',
];

export default function HeroMasterFinal() {
  return (
    <main className={styles.shell}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>선린공인중개사사무소 · 대구 북구 산격로 95</p>

          <h1 className={styles.title}>
            주소와 서류는
            <br />
            정밀하게,
            <br />
            상담은 편하게.
          </h1>

          <p className={styles.subtitle}>
            산격동·복현동 생활권의 임대, 매매, LH 전세임대 상담을
            주소·등기·건축물대장 기준으로 차분하게 확인합니다.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="tel:053-944-1116">
              053-944-1116 전화상담
            </a>

            <a
              className={styles.secondary}
              href="https://map.naver.com/p/search/대구%20북구%20산격로%2095"
              target="_blank"
              rel="noreferrer"
            >
              위치 확인
            </a>
          </div>
        </div>

        <aside className={styles.card}>
          <div className={styles.cardHeader}>
            <span>LOCAL DOCUMENT CHECK</span>
            <strong>산격로 95</strong>
          </div>

          <div className={styles.mapPanel}>
            <span className={styles.mapLabel}>SANGYEOK-DONG</span>
            <span className={styles.pin}>선린</span>
          </div>

          <div className={styles.checkPanel}>
            <p>상담 전 확인 순서</p>
            <ul>
              {checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
