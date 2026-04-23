import { TemplateVariant } from './templates-gemini-hero';
const id = () => Math.random().toString(36).substr(2, 9);

export const geminiFeatureTemplates: TemplateVariant[] = [
  { name: '퓨처 그리드', preview: '⚡', bg: { type: 'color', value: '#0f172a' }, elements: [
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=80', styles: { borderRadius: '24px', border: '1px solid #334155' } },
    { id: id(), type: 'text', content: '차세대 코어', styles: { fontSize: '18px', fontWeight: 'bold', color: '#fff', margin: '16px 0 4px' } },
    { id: id(), type: 'text', content: '심층 학습 기반의 최적화 알고리즘 탑재', styles: { fontSize: '13px', color: '#94a3b8' } },
    { id: id(), type: 'spacer', content: '24px', styles: {} },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80', styles: { borderRadius: '24px', border: '1px solid #334155' } },
    { id: id(), type: 'text', content: '무한한 확장성', styles: { fontSize: '18px', fontWeight: 'bold', color: '#fff', margin: '16px 0 4px' } },
    { id: id(), type: 'text', content: '전 세계 어디서든 중단 없는 확장 지원', styles: { fontSize: '13px', color: '#94a3b8' } },
  ]},
  { name: '스마트 인포', preview: '📱', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '사용자 중심 인터페이스', styles: { fontSize: '22px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 24px' } },
    { id: id(), type: 'icon', content: 'Smartphone', styles: { fontSize: '40px', color: '#2563eb', textAlign: 'center' } },
    { id: id(), type: 'text', content: '모바일 최적화', styles: { fontSize: '16px', fontWeight: 'bold', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: '어떤 기기에서도 동일한 경험', styles: { fontSize: '14px', color: '#64748b', textAlign: 'center', margin: '0 0 24px' } },
    { id: id(), type: 'icon', content: 'MousePointer2', styles: { fontSize: '40px', color: '#2563eb', textAlign: 'center' } },
    { id: id(), type: 'text', content: '직관적인 클릭', styles: { fontSize: '16px', fontWeight: 'bold', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: '복잡한 과정 없는 원클릭 서비스', styles: { fontSize: '14px', color: '#64748b', textAlign: 'center' } },
  ]},
  { name: '다크 테크 나열', preview: '⚙️', bg: { type: 'color', value: '#000' }, elements: [
    { id: id(), type: 'text', content: 'TECHNICAL SPEC', styles: { fontSize: '10px', color: '#4f46e5', letterSpacing: '4px', textAlign: 'center' } },
    { id: id(), type: 'text', content: '강력한 기술 명세', styles: { fontSize: '24px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '8px 0 24px' } },
    { id: id(), type: 'text', content: 'CPU: Octa-core Neural Engine', styles: { fontSize: '14px', color: '#e2e8f0', padding: '12px', borderBottom: '1px solid #1e293b' } },
    { id: id(), type: 'text', content: 'RAM: 16GB High-Speed DDR5', styles: { fontSize: '14px', color: '#e2e8f0', padding: '12px', borderBottom: '1px solid #1e293b' } },
    { id: id(), type: 'text', content: 'NET: 5G & Wi-Fi 7 Ready', styles: { fontSize: '14px', color: '#e2e8f0', padding: '12px' } },
  ]},
  { name: '이미지 스토리', preview: '📖', bg: { type: 'color', value: '#f8fafc' }, elements: [
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', styles: { borderRadius: '16px' } },
    { id: id(), type: 'text', content: '몰입감 넘치는 경험', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '20px 0 8px' } },
    { id: id(), type: 'text', content: '기술이 당신의 삶에 자연스럽게 스며듭니다.', styles: { fontSize: '14px', textAlign: 'center', color: '#64748b' } },
  ]},
  { name: '스텝 바이 스텝', preview: '🚀', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '혁신을 향한 여정', styles: { fontSize: '22px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 24px' } },
    { id: id(), type: 'text', content: 'START', styles: { fontSize: '11px', fontWeight: 'bold', color: '#6366f1', textAlign: 'center' } },
    { id: id(), type: 'text', content: '간단한 가입만으로 준비 끝', styles: { fontSize: '16px', fontWeight: 'bold', textAlign: 'center', margin: '4px 0 24px' } },
    { id: id(), type: 'text', content: 'GROW', styles: { fontSize: '11px', fontWeight: 'bold', color: '#6366f1', textAlign: 'center' } },
    { id: id(), type: 'text', content: 'AI 분석으로 사업 확장', styles: { fontSize: '16px', fontWeight: 'bold', textAlign: 'center', margin: '4px 0 24px' } },
    { id: id(), type: 'text', content: 'SCALE', styles: { fontSize: '11px', fontWeight: 'bold', color: '#6366f1', textAlign: 'center' } },
    { id: id(), type: 'text', content: '전 세계로 뻗어나가세요', styles: { fontSize: '16px', fontWeight: 'bold', textAlign: 'center', margin: '4px 0' } },
  ]},
  { name: '비주얼 갤러리', preview: '🖼️', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '갤러리', styles: { fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80', styles: { borderRadius: '8px' } },
    { id: id(), type: 'spacer', content: '8px', styles: {} },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80', styles: { borderRadius: '8px' } },
    { id: id(), type: 'spacer', content: '8px', styles: {} },
    { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80', styles: { borderRadius: '8px' } },
  ]},
  { name: '핵심 수치 하이라이트', preview: '🏁', bg: { type: 'color', value: '#4f46e5' }, elements: [
    { id: id(), type: 'text', content: '지금 이 순간에도', styles: { fontSize: '12px', color: '#c7d2fe', textAlign: 'center' } },
    { id: id(), type: 'text', content: '2,492 건', styles: { fontSize: '36px', fontWeight: '900', color: '#fff', textAlign: 'center', margin: '8px 0' } },
    { id: id(), type: 'text', content: '매분 처리되는 자동화 작업', styles: { fontSize: '14px', color: '#c7d2fe', textAlign: 'center' } },
  ]},
  { name: '다크 아이콘 리스트', preview: '🔮', bg: { type: 'color', value: '#0f172a' }, elements: [
    { id: id(), type: 'icon', content: 'Sparkles', styles: { fontSize: '32px', color: '#a855f7', textAlign: 'left' } },
    { id: id(), type: 'text', content: '매력적인 효과', styles: { fontSize: '16px', fontWeight: 'bold', color: '#fff', margin: '8px 0 4px' } },
    { id: id(), type: 'text', content: '눈을 사로잡는 화려한 비주얼 효과 적용', styles: { fontSize: '12px', color: '#94a3b8', margin: '0 0 20px' } },
    { id: id(), type: 'icon', content: 'Zap', styles: { fontSize: '32px', color: '#f59e0b', textAlign: 'left' } },
    { id: id(), type: 'text', content: '번개 같은 반응성', styles: { fontSize: '16px', fontWeight: 'bold', color: '#fff', margin: '8px 0 4px' } },
    { id: id(), type: 'text', content: '클릭 즉시 반응하는 인터랙션 시스템', styles: { fontSize: '12px', color: '#94a3b8' } },
  ]},
  { name: '심플 데이터 보드', preview: '📝', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '데이터 요약', styles: { fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: '• 일일 평균 접속자: 50,000+', styles: { fontSize: '14px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px' } },
    { id: id(), type: 'text', content: '• 평균 응답 시간: 12ms', styles: { fontSize: '14px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', margin: '8px 0' } },
    { id: id(), type: 'text', content: '• 시스템 가동률: 99.99%', styles: { fontSize: '14px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px' } },
  ]},
  { name: '오로라 섹션', preview: '🌈', bg: { type: 'color', value: '#4338ca' }, elements: [
    { id: id(), type: 'text', content: '당신의 상상이 현실이 됩니다', styles: { fontSize: '24px', fontWeight: '900', color: '#fff', textAlign: 'center' } },
    { id: id(), type: 'button', content: '체험하기', styles: { backgroundColor: '#fff', color: '#4338ca', padding: '16px 32px', borderRadius: '50px', fontWeight: 'bold', margin: '24px auto 0', textAlign: 'center' } },
  ]},
];

export const geminiComparisonTemplates: TemplateVariant[] = [
  { name: '테크 비교표', preview: '📊', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '왜 Gemini 인가?', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 20px' } },
    { id: id(), type: 'text', content: '기능          Gemini       일반 에디터', styles: { fontSize: '12px', fontWeight: 'bold', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', textAlign: 'center' } },
    { id: id(), type: 'text', content: 'AI 생성력      🚀 초고속      ❌ 없음', styles: { fontSize: '12px', padding: '12px', borderBottom: '1px solid #f1f5f9', textAlign: 'center' } },
    { id: id(), type: 'text', content: '디자인 자유도   ✨ 무한대      ⚠️ 제한적', styles: { fontSize: '12px', padding: '12px', borderBottom: '1px solid #f1f5f9', textAlign: 'center' } },
    { id: id(), type: 'text', content: '반응형 대응     ✅ 자동완성    ❌ 수동작업', styles: { fontSize: '12px', padding: '12px', textAlign: 'center' } },
  ]},
  { name: 'VS 사이버 모드', preview: '🌑', bg: { type: 'color', value: '#0f172a' }, elements: [
    { id: id(), type: 'text', content: '비교 불가능한 성능', styles: { fontSize: '20px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '0 0 20px' } },
    { id: id(), type: 'text', content: 'Gemini: 독자적인 AI 엔진 탑재', styles: { fontSize: '14px', color: '#38bdf8', padding: '16px', backgroundColor: '#1e293b', borderRadius: '12px' } },
    { id: id(), type: 'text', content: '타사: 범용 라이브러리 사용', styles: { fontSize: '14px', color: '#94a3b8', padding: '16px', margin: '12px 0 0' } },
  ]},
  { name: '체크리스트 비교', preview: '✔️', bg: { type: 'color', value: '#fff' }, elements: [
    { id: id(), type: 'text', content: '이 모든 것이 포함되어 있습니다', styles: { fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 16px' } },
    { id: id(), type: 'text', content: '✅ 무제한 에셋 업로드 지원', styles: { fontSize: '14px', padding: '10px', color: '#2563eb' } },
    { id: id(), type: 'text', content: '✅ 4K 고해상도 동영상 스트리밍', styles: { fontSize: '14px', padding: '10px', color: '#2563eb' } },
    { id: id(), type: 'text', content: '✅ SEO 최적화 메타데이터 자동생성', styles: { fontSize: '14px', padding: '10px', color: '#2563eb' } },
  ]},
  { name: '가격 플랜 (퓨처)', preview: '💳', bg: { type: 'color', value: '#f8fafc' }, elements: [
    { id: id(), type: 'text', content: '무료 체험부터 전문가 플랜까지', styles: { fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 20px' } },
    { id: id(), type: 'text', content: 'STARTER — Free', styles: { fontSize: '15px', fontWeight: 'bold', padding: '20px', backgroundColor: '#fff', borderRadius: '16px', textAlign: 'center' } },
    { id: id(), type: 'text', content: 'PRO — $29/mo', styles: { fontSize: '15px', fontWeight: 'bold', padding: '20px', backgroundColor: '#6366f1', color: '#fff', borderRadius: '16px', textAlign: 'center', margin: '12px 0' } },
    { id: id(), type: 'text', content: 'ENTERPRISE', styles: { fontSize: '15px', fontWeight: 'bold', padding: '20px', backgroundColor: '#fff', borderRadius: '16px', textAlign: 'center' } },
  ]},
  { name: '스펙 대결', preview: '⚔️', bg: { type: 'color', value: '#000' }, elements: [
    { id: id(), type: 'text', content: '압도적인 스펙 차이', styles: { fontSize: '22px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '0 0 24px' } },
    { id: id(), type: 'text', content: '응답 속도: 10ms vs 250ms', styles: { fontSize: '14px', color: '#fbbf24', textAlign: 'center', padding: '12px', border: '1px solid #444', borderRadius: '8px' } },
    { id: id(), type: 'text', content: '가용성: 99.99% vs 95%', styles: { fontSize: '14px', color: '#fbbf24', textAlign: 'center', padding: '12px', border: '1px solid #444', borderRadius: '8px', margin: '10px 0' } },
  ]},
];

export const geminiCtaTemplates: TemplateVariant[] = [
  { name: '사이버 넥스트', preview: '🚀', bg: { type: 'color', value: '#4f46e5' }, elements: [
    { id: id(), type: 'text', content: '당신의 비즈니스를\n다음 단계로', styles: { fontSize: '28px', fontWeight: '900', color: '#fff', textAlign: 'center', lineHeight: '1.2' } },
    { id: id(), type: 'button', content: '지금 시작하기', styles: { backgroundColor: '#fff', color: '#4f46e5', padding: '18px 40px', borderRadius: '50px', fontWeight: 'bold', margin: '32px auto 0', textAlign: 'center' } },
  ]},
  { name: '글로우 버튼', preview: '✨', bg: { type: 'color', value: '#000' }, elements: [
    { id: id(), type: 'text', content: '혁신에 동참하세요', styles: { fontSize: '22px', fontWeight: 'bold', color: '#fff', textAlign: 'center' } },
    { id: id(), type: 'button', content: '무료 체험 신청', styles: { backgroundColor: '#818cf8', color: '#fff', padding: '16px 32px', borderRadius: '12px', fontWeight: 'bold', margin: '24px auto 0', textAlign: 'center' } },
  ]},
  { name: '다크 미니멀 CTA', preview: '🌑', bg: { type: 'color', value: '#0f172a' }, elements: [
    { id: id(), type: 'text', content: 'Ready to upgrade?', styles: { fontSize: '20px', fontWeight: 'bold', color: '#fff', textAlign: 'center' } },
    { id: id(), type: 'button', content: 'Go Pro Now', styles: { backgroundColor: 'transparent', color: '#38bdf8', padding: '12px', border: '1px solid #38bdf8', borderRadius: '8px', fontWeight: 'bold', margin: '20px auto 0', textAlign: 'center' } },
  ]},
];
