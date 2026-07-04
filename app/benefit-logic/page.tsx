import type { Metadata } from 'next';
import BenefitLogicClient from './BenefitLogicClient';

export const metadata: Metadata = {
  title: '주거급여 안심 산식 | 선린공인중개사사무소',
  description:
    '소득인정액, 자기부담분, 실질급여액, 보증금 안전성을 계약 전 확인하기 위한 선린공인중개사사무소 안내 페이지.',
};

export default function BenefitLogicPage() {
  return <BenefitLogicClient />;
}
