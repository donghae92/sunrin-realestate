import HeroMasterFinal from '../components/HeroMasterFinal';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export const metadata = {
  title: '선린공인중개사사무소 | 대구 북구 산격로 95',
  description:
    '대구 북구 산격로 95 선린공인중개사사무소. 주소, 서류, 권리관계, LH·주거급여, 점포 상담, 가족 자산 정리 상담.',
};

export default function HomePage() {
  return <HeroMasterFinal />;
}
