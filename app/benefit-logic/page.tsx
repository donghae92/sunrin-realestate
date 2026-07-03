export const metadata = {
  title: '확인 절차 | 선린공인중개사사무소',
  description: '주소, 등기부, 건축물대장, 보증금 조건을 확인하는 상담 절차 안내',
};

const steps = [
  ['1', '주소 확인', '주소와 실제 건물 위치를 먼저 맞춥니다.'],
  ['2', '등기부 확인', '소유자, 근저당, 권리관계를 확인합니다.'],
  ['3', '건축물대장 확인', '용도, 면적, 확인이 필요한 이유를 정리합니다.'],
  ['4', '보증금 조건 확인', '보증금, 월세, 관리비, 선순위 보증금을 함께 봅니다.'],
];

export default function BenefitLogicPage() {
  return (
    <main
      style={{
        minHeight: '100svh',
        background: '#f8f2e9',
        color: '#322f2a',
        padding: '32px 18px',
        fontFamily:
          'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      }}
    >
      <section
        style={{
          width: 'min(920px, 100%)',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.72)',
          border: '1px solid rgba(50,47,42,0.12)',
          borderRadius: 28,
          padding: 'clamp(28px, 5vw, 56px)',
          boxShadow: '0 24px 70px rgba(50,47,42,0.10)',
        }}
      >
        <p style={{ margin: '0 0 12px', color: '#8b4831', fontWeight: 800 }}>
          선린공인중개사사무소 · 확인 절차
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(34px, 6vw, 64px)',
            lineHeight: 1.06,
            letterSpacing: '-0.07em',
          }}
        >
          주소와 서류를 먼저 확인합니다
        </h1>

        <div
          style={{
            display: 'grid',
            gap: 14,
            marginTop: 34,
          }}
        >
          {steps.map(([num, title, desc]) => (
            <article
              key={num}
              style={{
                display: 'grid',
                gridTemplateColumns: '44px 140px 1fr',
                gap: 14,
                alignItems: 'center',
                padding: 18,
                borderRadius: 20,
                background: '#fffaf4',
                border: '1px solid rgba(50,47,42,0.10)',
              }}
            >
              <b>{num}</b>
              <strong>{title}</strong>
              <span>{desc}</span>
            </article>
          ))}
        </div>

        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 50,
            marginTop: 34,
            padding: '0 22px',
            borderRadius: 999,
            background: '#322f2a',
            color: '#fffaf4',
            textDecoration: 'none',
            fontWeight: 800,
          }}
        >
          메인으로 돌아가기
        </a>
      </section>
    </main>
  );
}
