import HeroMasterFinal from '../components/HeroMasterFinal';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const siteUrl = 'https://sunrin-realestate-f4u5.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '선린공인중개사사무소 | 대구 북구 산격로 95',
  description:
    '대구 북구 산격로 95 선린공인중개사사무소. 주소, 등기부, 건축물대장, 선순위 보증금 확인과 매매, 전월세, LH전세임대, 주거이전, 점포 상담을 안내합니다.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: '선린공인중개사사무소 | 대구 북구 산격로 95',
    description:
      '주소와 서류를 먼저 살피고, 상담은 편하게. 대구 북구 산격로 95 선린부동산입니다.',
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
