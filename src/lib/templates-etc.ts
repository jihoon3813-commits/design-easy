import { TemplateVariant } from './templates-hero';
const id = () => Math.random().toString(36).substr(2, 9);

export const featureTemplates: TemplateVariant[] = [
  { name: '이미지 + 설명', preview: '📷', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', styles: { borderRadius: '12px' } },
    { id: id(), type: 'text', content: '강력한 성능', styles: { fontSize: '18px', fontWeight: 'bold', margin: '12px 0 4px' } },
    { id: id(), type: 'text', content: '최신 기술로 완성된 퍼포먼스를 경험하세요.', styles: { fontSize: '13px', color: '#666' } },
    { id: id(), type: 'spacer', content: '20px', styles: {} },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', styles: { borderRadius: '12px' } },
    { id: id(), type: 'text', content: '직관적인 디자인', styles: { fontSize: '18px', fontWeight: 'bold', margin: '12px 0 4px' } },
    { id: id(), type: 'text', content: '누구나 쉽게 사용할 수 있습니다.', styles: { fontSize: '13px', color: '#666' } },
  ]},
  { name: '아이콘 그리드', preview: '⚡', bg: { type: 'color', value: '#f8fafc' }, elements: [
    { id: id(), type: 'text', content: '주요 기능', styles: { fontSize: '22px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 20px' } },
    { id: id(), type: 'icon', content: 'Wifi', styles: { fontSize: '28px', color: '#3b82f6', textAlign: 'center' } },
    { id: id(), type: 'text', content: '무선 연결', styles: { fontSize: '14px', fontWeight: 'bold', textAlign: 'center', margin: '6px 0 16px' } },
    { id: id(), type: 'icon', content: 'Battery', styles: { fontSize: '28px', color: '#22c55e', textAlign: 'center' } },
    { id: id(), type: 'text', content: '72시간 배터리', styles: { fontSize: '14px', fontWeight: 'bold', textAlign: 'center', margin: '6px 0 16px' } },
    { id: id(), type: 'icon', content: 'Droplets', styles: { fontSize: '28px', color: '#06b6d4', textAlign: 'center' } },
    { id: id(), type: 'text', content: 'IP68 방수', styles: { fontSize: '14px', fontWeight: 'bold', textAlign: 'center', margin: '6px 0' } },
  ]},
  { name: '스텝 가이드', preview: '👣', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '사용 방법', styles: { fontSize: '22px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 20px' } },
    { id: id(), type: 'text', content: 'STEP 1', styles: { fontSize: '11px', fontWeight: 'bold', color: '#2563eb', letterSpacing: '2px' } },
    { id: id(), type: 'text', content: '포장을 개봉합니다', styles: { fontSize: '16px', fontWeight: 'bold', margin: '4px 0 16px' } },
    { id: id(), type: 'text', content: 'STEP 2', styles: { fontSize: '11px', fontWeight: 'bold', color: '#2563eb', letterSpacing: '2px' } },
    { id: id(), type: 'text', content: '전원 버튼을 누릅니다', styles: { fontSize: '16px', fontWeight: 'bold', margin: '4px 0 16px' } },
    { id: id(), type: 'text', content: 'STEP 3', styles: { fontSize: '11px', fontWeight: 'bold', color: '#2563eb', letterSpacing: '2px' } },
    { id: id(), type: 'text', content: '앱과 연동하여 시작하세요', styles: { fontSize: '16px', fontWeight: 'bold', margin: '4px 0' } },
  ]},
  { name: '풀 이미지 갤러리', preview: '🎨', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '디테일 컷', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', styles: { borderRadius: '12px' } },
    { id: id(), type: 'spacer', content: '8px', styles: {} },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80', styles: { borderRadius: '12px' } },
    { id: id(), type: 'spacer', content: '8px', styles: {} },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&q=80', styles: { borderRadius: '12px' } },
  ]},
  { name: '스펙 나열형', preview: '📐', bg: { type: 'color', value: '#f9fafb' }, elements: [
    { id: id(), type: 'text', content: '제품 사양', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: '무게 | 320g', styles: { fontSize: '14px', padding: '10px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' } },
    { id: id(), type: 'text', content: '크기 | 150 x 75 x 8mm', styles: { fontSize: '14px', padding: '10px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' } },
    { id: id(), type: 'text', content: '소재 | 항공급 알루미늄', styles: { fontSize: '14px', padding: '10px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' } },
    { id: id(), type: 'text', content: '색상 | 블랙 / 실버 / 골드', styles: { fontSize: '14px', padding: '10px', textAlign: 'center' } },
  ]},
  { name: '다크 기능 카드', preview: '🖤', bg: { type: 'color', value: '#0f172a' }, elements: [
    { id: id(), type: 'text', content: 'FEATURES', styles: { fontSize: '11px', letterSpacing: '3px', color: '#94a3b8', textAlign: 'center' } },
    { id: id(), type: 'text', content: '핵심 기능', styles: { fontSize: '22px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '8px 0 20px' } },
    { id: id(), type: 'text', content: '⚡ 초고속 충전 — 30분 만에 80%', styles: { fontSize: '14px', color: '#e2e8f0', backgroundColor: '#1e293b', padding: '14px', borderRadius: '10px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '🎯 정밀 센서 — 0.01mm 정확도', styles: { fontSize: '14px', color: '#e2e8f0', backgroundColor: '#1e293b', padding: '14px', borderRadius: '10px', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: '🔒 보안 잠금 — 지문 인식 탑재', styles: { fontSize: '14px', color: '#e2e8f0', backgroundColor: '#1e293b', padding: '14px', borderRadius: '10px', textAlign: 'center' } },
  ]},
  { name: 'Before / After', preview: '🔄', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '사용 전후 비교', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: 'BEFORE', styles: { fontSize: '11px', fontWeight: 'bold', color: '#ef4444', letterSpacing: '2px', textAlign: 'center' } },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80', styles: { borderRadius: '12px', margin: '8px 0 16px' } },
    { id: id(), type: 'text', content: 'AFTER', styles: { fontSize: '11px', fontWeight: 'bold', color: '#22c55e', letterSpacing: '2px', textAlign: 'center' } },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', styles: { borderRadius: '12px', margin: '8px 0' } },
  ]},
  { name: '리뷰 하이라이트', preview: '⭐', bg: { type: 'color', value: '#fffbeb' }, elements: [
    { id: id(), type: 'text', content: '⭐⭐⭐⭐⭐', styles: { fontSize: '24px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '"인생템 찾았습니다!"', styles: { fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: '— 구매자 김** 님', styles: { fontSize: '12px', color: '#92400e', textAlign: 'center' } },
    { id: id(), type: 'spacer', content: '16px', styles: {} },
    { id: id(), type: 'text', content: '"이 가격에 이 품질은 진짜 미쳤어요"', styles: { fontSize: '16px', fontWeight: 'bold', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: '— 구매자 이** 님', styles: { fontSize: '12px', color: '#92400e', textAlign: 'center' } },
  ]},
  { name: '타임라인형', preview: '📅', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '브랜드 히스토리', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 20px' } },
    { id: id(), type: 'text', content: '2020', styles: { fontSize: '24px', fontWeight: '900', color: '#2563eb' } },
    { id: id(), type: 'text', content: '브랜드 런칭 및 첫 제품 출시', styles: { fontSize: '13px', color: '#666', margin: '4px 0 16px' } },
    { id: id(), type: 'text', content: '2022', styles: { fontSize: '24px', fontWeight: '900', color: '#2563eb' } },
    { id: id(), type: 'text', content: '누적 판매 10만 돌파', styles: { fontSize: '13px', color: '#666', margin: '4px 0 16px' } },
    { id: id(), type: 'text', content: '2024', styles: { fontSize: '24px', fontWeight: '900', color: '#2563eb' } },
    { id: id(), type: 'text', content: '글로벌 진출 & 시리즈 B 투자 유치', styles: { fontSize: '13px', color: '#666', margin: '4px 0' } },
  ]},
  { name: '컬러 블록', preview: '🟦', bg: { type: 'color', value: '#2563eb' }, elements: [
    { id: id(), type: 'text', content: '지금 가입하면', styles: { fontSize: '14px', color: '#bfdbfe', textAlign: 'center' } },
    { id: id(), type: 'text', content: '첫 구매 20% 할인', styles: { fontSize: '28px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '4px 0 16px' } },
    { id: id(), type: 'button', content: '할인 받기', styles: { backgroundColor: '#fff', color: '#2563eb', padding: '14px 28px', borderRadius: '50px', textAlign: 'center', fontWeight: 'bold' } },
  ]},
];

export const comparisonTemplates: TemplateVariant[] = [
  { name: '표 스타일', preview: '📊', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '제품 비교', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: '항목          당사       타사', styles: { fontSize: '13px', fontWeight: 'bold', backgroundColor: '#f1f5f9', padding: '10px 12px', borderRadius: '6px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '가격          ✅ 합리적    ❌ 비쌈', styles: { fontSize: '13px', padding: '10px 12px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' } },
    { id: id(), type: 'text', content: '배송          ✅ 무료      ❌ 유료', styles: { fontSize: '13px', padding: '10px 12px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' } },
    { id: id(), type: 'text', content: 'AS            ✅ 2년      ❌ 6개월', styles: { fontSize: '13px', padding: '10px 12px', textAlign: 'center' } },
  ]},
  { name: 'VS 대결형', preview: '⚔️', bg: { type: 'color', value: '#f8fafc' }, elements: [
    { id: id(), type: 'text', content: '🏆 우리 vs 경쟁사', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: '우리: 국내산 원료 100%', styles: { fontSize: '14px', backgroundColor: '#dbeafe', padding: '12px', borderRadius: '8px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '경쟁사: 수입산 원료 혼합', styles: { fontSize: '14px', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '8px', textAlign: 'center', margin: '6px 0' } },
    { id: id(), type: 'text', content: '우리: 24시간 고객센터', styles: { fontSize: '14px', backgroundColor: '#dbeafe', padding: '12px', borderRadius: '8px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '경쟁사: 평일 업무시간만', styles: { fontSize: '14px', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '8px', textAlign: 'center', margin: '6px 0' } },
  ]},
  { name: '다크 비교표', preview: '🌙', bg: { type: 'color', value: '#111' }, elements: [
    { id: id(), type: 'text', content: '경쟁 제품과 비교해보세요', styles: { fontSize: '20px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: '✅ 더 가볍고, 더 튼튼합니다', styles: { fontSize: '14px', color: '#a5f3fc', padding: '10px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '✅ 더 오래 갑니다 (배터리 2배)', styles: { fontSize: '14px', color: '#a5f3fc', padding: '10px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '✅ 더 저렴합니다 (30% 절약)', styles: { fontSize: '14px', color: '#a5f3fc', padding: '10px', textAlign: 'center' } },
  ]},
  { name: '장단점 비교', preview: '⚖️', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '솔직한 비교', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: '✅ 장점', styles: { fontSize: '16px', fontWeight: 'bold', color: '#16a34a', margin: '0 0 8px' } },
    { id: id(), type: 'text', content: '• 업계 최고 내구성\n• 디자인 어워드 수상\n• 합리적인 가격', styles: { fontSize: '13px', color: '#666', lineHeight: '2' } },
    { id: id(), type: 'text', content: '⚠️ 참고사항', styles: { fontSize: '16px', fontWeight: 'bold', color: '#d97706', margin: '16px 0 8px' } },
    { id: id(), type: 'text', content: '• 색상은 모니터마다 다를 수 있음\n• 주문 후 제작 (3~5일 소요)', styles: { fontSize: '13px', color: '#666', lineHeight: '2' } },
  ]},
  { name: '플랜 비교', preview: '💳', bg: { type: 'color', value: '#f0f9ff' }, elements: [
    { id: id(), type: 'text', content: '요금제 비교', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: 'Basic — ₩19,900/월', styles: { fontSize: '16px', fontWeight: 'bold', backgroundColor: '#fff', padding: '16px', borderRadius: '10px', border: '1px solid #e0f2fe', textAlign: 'center' } },
    { id: id(), type: 'text', content: 'Pro — ₩39,900/월 ⭐추천', styles: { fontSize: '16px', fontWeight: 'bold', backgroundColor: '#2563eb', color: '#fff', padding: '16px', borderRadius: '10px', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: 'Enterprise — 문의', styles: { fontSize: '16px', fontWeight: 'bold', backgroundColor: '#fff', padding: '16px', borderRadius: '10px', border: '1px solid #e0f2fe', textAlign: 'center' } },
  ]},
];

export const ctaTemplates: TemplateVariant[] = [
  { name: '강렬한 CTA', preview: '🔥', bg: { type: 'color', value: '#111' }, elements: [
    { id: id(), type: 'text', content: '지금이 최저가입니다', styles: { fontSize: '24px', fontWeight: 'bold', color: '#fff', textAlign: 'center' } },
    { id: id(), type: 'text', content: '오늘 자정까지만 유효한 특별 할인', styles: { fontSize: '13px', color: '#aaa', textAlign: 'center', margin: '8px 0 20px' } },
    { id: id(), type: 'button', content: '지금 구매하기', styles: { backgroundColor: '#ef4444', color: '#fff', padding: '16px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' } },
  ]},
  { name: '부드러운 유도', preview: '🌿', bg: { type: 'color', value: '#f0fdf4' }, elements: [
    { id: id(), type: 'icon', content: 'Gift', styles: { fontSize: '40px', color: '#16a34a', textAlign: 'center' } },
    { id: id(), type: 'text', content: '첫 구매 혜택 안내', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '12px 0 4px' } },
    { id: id(), type: 'text', content: '회원가입 후 첫 주문 시 무료 배송 + 샘플 증정', styles: { fontSize: '13px', color: '#666', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'button', content: '혜택 받으러 가기', styles: { backgroundColor: '#16a34a', color: '#fff', padding: '14px 28px', borderRadius: '50px', textAlign: 'center', fontWeight: 'bold' } },
  ]},
  { name: '카운트다운형', preview: '⏰', bg: { type: 'color', value: '#7c3aed' }, elements: [
    { id: id(), type: 'text', content: '⏰ 마감임박!', styles: { fontSize: '14px', color: '#e9d5ff', textAlign: 'center' } },
    { id: id(), type: 'text', content: '한정 수량 50개', styles: { fontSize: '26px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: '남은 수량이 얼마 없습니다. 서두르세요!', styles: { fontSize: '13px', color: '#c4b5fd', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'button', content: '바로 구매', styles: { backgroundColor: '#fff', color: '#7c3aed', padding: '14px 28px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' } },
  ]},
];
