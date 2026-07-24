# 선린 홈페이지 카카오 첫접점 문구 점검

## 원칙

첫 방문 첫 문의 지점에서는 주소 서류 신분 노출을 요구하는 인상을 피한다.

허용 방향:
- 편하게 문의
- 필요한 내용은 차례대로
- 상담 유형만 먼저
- 원하시는 물건의 대략적인 조건
- 필요한 내용은 상담 과정에서 안내

주의 표현:
- 주소와 서류
- 주소 일부
- 서류를 먼저
- 계약 전 주소
- 등기부 건축물대장 선순위 보증금

이 표현들은 내부 상세 설명이나 상담 진행 후 안내에는 가능하지만 첫 화면 첫 채팅 첫 프로필에는 쓰지 않는다.


## 1. 홈페이지 전체 검색

```txt
app/benefit-logic/BenefitLogicClient.tsx:289:              ? `입력 보증금 ${deposit.toLocaleString()}만 원과 채권 합계는 시뮬레이터 기준선(${safetyLimitMan.toLocaleString()}만 원) 이내 참고 구간입니다. 국세 체납·선순위 보증금 총액은 ${OFFICE.phone} 유선 상담과 공부 대조로 최종 확인하세요.`
app/page.tsx:13:    '대구 북구 산격로 95 선린공인중개사사무소. 주소, 등기부, 건축물대장, 선순위 보증금 확인과 매매, 전월세, LH전세임대, 주거이전, 점포 상담을 안내합니다.',
app/page.tsx:21:      '주소와 서류를 먼저 살피고, 상담은 편하게. 대구 북구 산격로 95 선린부동산입니다.',
components/HeroMasterFinal.tsx:129:  summary: '등기부 · 건축물대장 · 선순위 구조 확인',
components/HeroMasterFinal.tsx:137:      text: '등기부에서 소유자·근저당·권리관계를, 건축물대장에서 용도·면적을 확인합니다.',
components/HeroMasterFinal.tsx:145:      text: '선순위 보증금과 임차관계는 전입·확정일자·우선변제 구조로 따로 확인합니다.',
components/HeroMasterFinal.tsx:165:      text: '등기부, 건축물대장, 임대차 조건, 보증금, 잔금일을 함께 정리합니다.',
components/HeroMasterFinal.tsx:230:      '실제 상담에서는 보증금, 월차임, 계약 형태, 선순위 보증금, 전입·확정일자 구조까지 함께 보는 것이 안전합니다.',
```

## 2. 첫 화면 핵심 문구 검색

```txt
components/HeroMasterFinal.tsx:323:                <span>편하게 문의하고,</span>
components/HeroMasterFinal.tsx:324:                <span>필요한 내용은</span>
components/HeroMasterFinal.tsx:325:                <span>차례대로</span>
components/HeroMasterFinal.tsx:339:                <span>상담 문의</span>
components/HeroMasterFinal.tsx:349:                <span>주소 찾기</span>
```

## 3. 판정 기준

- Hero h1 안에 주소와 서류가 있으면 수정 필요
- 카카오 웰컴메시지나 1대1 상담 첫말에 주소 일부가 있으면 수정 필요
- 상세 모달 내부의 등기부 건축물대장 선순위 보증금은 허용
- 첫 접점은 편하게 문의하고 필요한 내용은 차례대로로 통일
