import HeroMasterFinal from '../components/HeroMasterFinal';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export const metadata = {
  title: '선린공인중개사사무소 | 대구 북구 산격로 95',
  description:
    '대구 북구 산격로 95 선린공인중개사사무소. 주소, 등기부, 건축물대장, 선순위 보증금, 주거급여 산식, 상가 권리금, 가족 자산 이동 상담.',
};

export default function HomePage() {
  return <HeroMasterFinal />;
}
