import HeroMasterFinal from '../components/HeroMasterFinal';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const siteUrl = 'https://sunrin-realestate-f4u5.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '선린공인중개사사무소 | 대구 북구 산격로 95',
  description:
    '대구 북구 산격로95 선린공인중개사사무소. 매매 · 전월세 · 점포 · LH전세임대 · 주거이전 상담을 부담 없이 시작하시고, 필요한 내용은 상담 과정에서 차례대로 안내해드립니다.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: '선린공인중개사사무소 | 대구 북구 산격로 95',
    description:
      '편하게 문의하고, 필요한 내용은 차례대로. 산격로95 선린부동산입니다.',
    url: '/',
    siteName: '선린공인중개사사무소',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <HeroMasterFinal />;
}
