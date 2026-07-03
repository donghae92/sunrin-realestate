const OFFICE = {
  name: '선린공인중개사사무소',
  address: '대구 북구 산격로 95, 1층 101호',
  phone: '053-944-1116',
  telHref: 'tel:0539441116',
};

const formulas = [
  {
    title: '1. 소득인정액 계산',
    formula: '(보증금 - 대구 기본재산공제 8,000만 원) × 월 1.04%',
    body:
      '보증금이 기본재산공제 구간을 넘는지 먼저 봅니다. 주거급여와 LH 전세임대 상담은 월세만 보는 것이 아니라 보증금이 소득인정액에 미치는 영향을 함께 확인해야 합니다.',
  },
  {
    title: '2. 자기부담분 계산',
    formula: '(소득인정액 - 생계급여 기준액) × 30%',
    body:
      '생계급여 기준을 넘는 구간에서는 초과분의 30%가 자기부담분으로 반영될 수 있습니다. 1만 원 차이도 수급액과 자격 판단에 영향을 줄 수 있으므로 계약 전 분리 확인이 필요합니다.',
  },
  {
    title: '3. 실질급여액 계산',
    formula: 'min(기준임대료, 실제임차료) - 자기부담분',
    body:
      '주거급여는 기준임대료와 실제임차료 중 낮은 금액을 기준으로 보고, 여기에서 자기부담분을 뺍니다. 실제 수급액은 보증금, 월세, 기준임대료, 자기부담분을 함께 봐야 합니다.',
  },
  {
    title: '4. 보증금 안전 시뮬레이션',
    formula: '보증금 + 선순위 채권 + 타 세대 보증금 ≤ 회수 가능성 검토선',
    body:
      '선순위 채권, 타 세대 보증금, 경락가율을 함께 놓고 보증금 회수 위험을 봅니다. 이 페이지는 확정 판단이 아니라 상담 전 위험 구간을 분리하기 위한 안내입니다.',
  },
];

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export const metadata = {
  title: '주거급여 안심 산식 | 선린공인중개사사무소',
  description:
    '소득인정액, 자기부담분, 실질급여액, 보증금 안전성을 계약 전 확인하기 위한 선린공인중개사사무소 안내 페이지.',
};

export default function BenefitLogicPage() {
  return (
    <main
      style={{
        minHeight: '100svh',
        margin: 0,
        padding: '28px 16px 96px',
        background: '#f6f4ee',
        color: '#242725',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif',
      }}
    >
      <section
        style={{
          width: 'min(100%, 430px)',
          margin: '0 auto',
          background: '#fdfbf7',
          border: '1px solid rgba(36,39,37,0.12)',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 24px 70px rgba(36,39,37,0.12)',
        }}
      >
        <header
          style={{
            padding: '28px 22px',
            background: '#efe3d4',
            borderBottom: '1px solid rgba(36,39,37,0.12)',
          }}
        >
          <p
            style={{
              margin: '0 0 8px',
              color: '#9e4631',
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: '0.1em',
            }}
          >
            HOUSING BENEFIT FORMULA
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: 27,
              lineHeight: 1.2,
              letterSpacing: '-0.07em',
            }}
          >
            주거급여 · LH
            <br />
            안심 산식 명세
          </h1>

          <p
            style={{
              margin: '14px 0 0',
              color: 'rgba(36,39,37,0.72)',
              fontSize: 15,
              lineHeight: 1.65,
              fontWeight: 650,
              letterSpacing: '-0.04em',
            }}
          >
            계약 전 소득인정액, 자기부담분, 실질급여액, 보증금 안전성을 분리해서 봅니다.
            감이 아니라 산식 구조로 위험 구간을 확인합니다.
          </p>
        </header>

        <div style={{ display: 'grid', gap: 14, padding: 20 }}>
          {formulas.map((item) => (
            <article
              key={item.title}
              style={{
                padding: 18,
                borderRadius: 18,
                background: '#fffaf4',
                border: '1px solid rgba(36,39,37,0.1)',
              }}
            >
              <h2
                style={{
                  margin: '0 0 10px',
                  fontSize: 18,
                  letterSpacing: '-0.06em',
                }}
              >
                {item.title}
              </h2>

              <div
                style={{
                  padding: 13,
                  borderRadius: 14,
                  background: 'rgba(158,70,49,0.08)',
                  color: '#9e4631',
                  fontSize: 13,
                  lineHeight: 1.45,
                  fontWeight: 900,
                  wordBreak: 'keep-all',
                }}
              >
                {item.formula}
              </div>

              <p
                style={{
                  margin: '12px 0 0',
                  color: 'rgba(36,39,37,0.72)',
                  fontSize: 14,
                  lineHeight: 1.65,
                  fontWeight: 650,
                  letterSpacing: '-0.04em',
                }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <footer
          style={{
            padding: 20,
            background: '#242725',
            color: '#fffaf4',
          }}
        >
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, opacity: 0.82 }}>
            본 페이지는 정보 제공용 사전 점검 안내입니다. 실제 수급 가능성, 세무, 법률 판단은
            공적 서류와 관계 기관 확인이 필요합니다.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              marginTop: 16,
            }}
          >
            <a
              href={OFFICE.telHref}
              style={{
                minHeight: 48,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 999,
                background: '#9e4631',
                color: '#fffaf4',
                textDecoration: 'none',
                fontWeight: 900,
              }}
            >
              {OFFICE.phone}
            </a>

            <a
              href="/"
              style={{
                minHeight: 48,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 999,
                background: '#f6f4ee',
                color: '#242725',
                textDecoration: 'none',
                fontWeight: 900,
              }}
            >
              홈으로
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
