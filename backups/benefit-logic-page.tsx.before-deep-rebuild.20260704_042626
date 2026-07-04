export const metadata = {
  title: '주거급여 안심 산식 | 선린공인중개사사무소',
  description: '대구광역시 주거급여 상담을 위한 기본 산식 안내 페이지',
};

export default function BenefitLogicPage() {
  return (
    <main
      style={{
        minHeight: '100svh',
        background: '#f6f4ee',
        color: '#242725',
        padding: '32px 18px',
        fontFamily:
          'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      }}
    >
      <section
        style={{
          width: 'min(920px, 100%)',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.78)',
          border: '1px solid rgba(36,39,37,0.14)',
          borderRadius: 24,
          padding: 'clamp(28px, 5vw, 56px)',
          boxShadow: '0 24px 70px rgba(36,39,37,0.10)',
        }}
      >
        <p
          style={{
            margin: '0 0 14px',
            color: '#9e4631',
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: '0.04em',
          }}
        >
          선린공인중개사사무소 · 주거급여 안심 산식
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(34px, 6vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.06em',
          }}
        >
          주소와 보증금 조건을 먼저 확인합니다
        </h1>

        <p
          style={{
            margin: '24px 0 0',
            maxWidth: 720,
            fontSize: 'clamp(17px, 2.2vw, 21px)',
            lineHeight: 1.75,
            color: 'rgba(36,39,37,0.72)',
            wordBreak: 'keep-all',
          }}
        >
          이 페이지는 대구 북구 산격동·복현동 생활권의 LH 전세임대,
          주거급여, 임대 조건 상담을 위한 내부 확인용 안내 페이지입니다.
          실제 가능 여부는 주소, 보증금, 월세, 가구원, 소득·재산 조건을
          함께 확인해야 합니다.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 14,
            marginTop: 34,
          }}
        >
          {[
            ['1단계', '주소 확인'],
            ['2단계', '보증금·월세 확인'],
            ['3단계', '가구 기준 확인'],
            ['4단계', 'LH·주거급여 가능성 분리'],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                border: '1px solid rgba(36,39,37,0.14)',
                borderRadius: 18,
                padding: 18,
                background: '#fffaf0',
              }}
            >
              <span
                style={{
                  display: 'block',
                  marginBottom: 8,
                  fontSize: 13,
                  color: 'rgba(36,39,37,0.55)',
                }}
              >
                {label}
              </span>
              <strong style={{ fontSize: 19 }}>{value}</strong>
            </div>
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
            background: '#242725',
            color: '#fffaf0',
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
