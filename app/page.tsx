# 선린공인중개사사무소 메인 홈페이지 최종 코드 (app/page.tsx)

본 마크다운 문서에는 대구 북구 산격로 95 선린부동산의 공식 9:16 모바일 홈페이지 최종 마스터 소스 코드가 포함되어 있습니다.
이 코드는 **`hero-master-final.png`** 이미지의 완벽한 9:16 가독성을 1%도 해치지 않기 위해 이미지 위에 임의의 중복 텍스트를 덧쓰지 않고, 5대 핫스팟 투명 링크 레이어만 얹어 즉각적인 유선 번호(**`053-944-1116`**) 및 **`주거급여 안심 산식 명세서`** 페이지로 연결되도록 설계되었습니다.

---

## 🏛️ `app/page.tsx` 소스 코드 (Next.js App Router용)

```tsx
import { Metadata } from 'next';
import HeroMasterFinal from '../components/HeroMasterFinal';

export const metadata: Metadata = {
  title: '선린공인중개사사무소 | 대구 북구 산격로95',
  description: '대구 북구 산격로95 선린공인중개사사무소. 등기부, 건축물대장, 선순위 보증금 확인이 필요한 매매·임대차·LH 전세 상담은 053-944-1116으로 문의하십시오.',
  openGraph: {
    title: '선린공인중개사사무소',
    description: '대구 북구 산격로95 선린공인중개사사무소. 등기부, 건축물대장, 선순위 보증금 확인이 필요한 매매·임대차·LH 전세 상담은 053-944-1116으로 문의하십시오.',
    images: [
      {
        url: '/assets/hero-master-final.png',
        width: 1200,
        height: 630,
        alt: '선린공인중개사사무소 대화형 안심 명세',
      },
    ],
  },
};

export default function Page() {
  return <HeroMasterFinal />;
}
```
