import { TemplateVariant } from './templates-gemini-hero';
const id = () => Math.random().toString(36).substr(2, 9);

export const geminiBenefitsTemplates: TemplateVariant[] = [
  {
    name: '네온 카드 그리드',
    preview: '💡',
    bg: { type: 'color', value: '#0f172a' },
    elements: [
      { id: id(), type: 'text', content: '혁신적인 기능', styles: { fontSize: '24px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '0 0 24px' } },
      { id: id(), type: 'icon', content: 'Zap', styles: { fontSize: '40px', color: '#38bdf8', textAlign: 'center' } },
      { id: id(), type: 'text', content: '초고속 성능', styles: { fontSize: '16px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '12px 0 4px' } },
      { id: id(), type: 'text', content: '지연 없는 실시간 처리', styles: { fontSize: '13px', color: '#94a3b8', textAlign: 'center', margin: '0 0 20px' } },
      { id: id(), type: 'icon', content: 'Layers', styles: { fontSize: '40px', color: '#a855f7', textAlign: 'center' } },
      { id: id(), type: 'text', content: '유연한 확장성', styles: { fontSize: '16px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '12px 0 4px' } },
      { id: id(), type: 'text', content: '어떤 환경에서도 완벽 작동', styles: { fontSize: '13px', color: '#94a3b8', textAlign: 'center' } },
    ],
  },
  {
    name: '3D 입체 뱃지',
    preview: '💎',
    bg: { type: 'color', value: '#ffffff' },
    elements: [
      { id: id(), type: 'text', content: 'PREMIUM VALUE', styles: { fontSize: '11px', fontWeight: 'bold', color: '#4f46e5', textAlign: 'center' } },
      { id: id(), type: 'text', content: '차원이 다른 품질', styles: { fontSize: '24px', fontWeight: 'bold', textAlign: 'center', margin: '8px 0 32px' } },
      { id: id(), type: 'icon', content: 'Award', styles: { fontSize: '48px', color: '#fbbf24', textAlign: 'center', backgroundColor: '#fff7ed', padding: '20px', borderRadius: '24px', border: '1px solid #ffedd5' } },
      { id: id(), type: 'text', content: '독보적인 기술력', styles: { fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '16px 0 4px' } },
      { id: id(), type: 'text', content: '국내 유일 원천 기술 보유', styles: { fontSize: '14px', color: '#64748b', textAlign: 'center', margin: '0 0 32px' } },
      { id: id(), type: 'icon', content: 'ShieldCheck', styles: { fontSize: '48px', color: '#22c55e', textAlign: 'center', backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '24px', border: '1px solid #dcfce7' } },
      { id: id(), type: 'text', content: '철저한 품질 관리', styles: { fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '16px 0 4px' } },
      { id: id(), type: 'text', content: '3단계 전수 검사 시스템', styles: { fontSize: '14px', color: '#64748b', textAlign: 'center' } },
    ],
  },
  {
    name: '미래형 리스트',
    preview: '📎',
    bg: { type: 'color', value: '#f1f5f9' },
    elements: [
      { id: id(), type: 'text', content: '주목해야 할 3가지', styles: { fontSize: '20px', fontWeight: 'bold', margin: '0 0 20px' } },
      { id: id(), type: 'text', content: '01. 인공지능 최적화', styles: { fontSize: '16px', fontWeight: 'bold', padding: '20px', backgroundColor: '#fff', borderRadius: '16px', borderLeft: '4px solid #6366f1' } },
      { id: id(), type: 'text', content: '02. 클라우드 동기화', styles: { fontSize: '16px', fontWeight: 'bold', padding: '20px', backgroundColor: '#fff', borderRadius: '16px', borderLeft: '4px solid #0ea5e9', margin: '12px 0' } },
      { id: id(), type: 'text', content: '03. 보안 암호화 기술', styles: { fontSize: '16px', fontWeight: 'bold', padding: '20px', backgroundColor: '#fff', borderRadius: '16px', borderLeft: '4px solid #10b981' } },
    ],
  },
  {
    name: '글로벌 테크',
    preview: '🌐',
    bg: { type: 'color', value: '#000' },
    elements: [
      { id: id(), type: 'icon', content: 'Globe', styles: { fontSize: '56px', color: '#818cf8', textAlign: 'center' } },
      { id: id(), type: 'text', content: '전 세계가 선택한 기술', styles: { fontSize: '24px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '16px 0 8px' } },
      { id: id(), type: 'text', content: '45개국 글로벌 서비스 지원', styles: { fontSize: '14px', color: '#6366f1', textAlign: 'center', margin: '0 0 32px' } },
      { id: id(), type: 'text', content: '미국, 유럽, 일본 등 주요 IT 시장에서\n이미 기술력을 인정받았습니다.', styles: { fontSize: '15px', color: '#94a3b8', textAlign: 'center', lineHeight: '1.6' } },
    ],
  },
  {
    name: '스마트 데이터',
    preview: '📊',
    bg: { type: 'color', value: '#fff' },
    elements: [
      { id: id(), type: 'text', content: '데이터로 증명된 가치', styles: { fontSize: '22px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 24px' } },
      { id: id(), type: 'icon', content: 'TrendingUp', styles: { fontSize: '32px', color: '#f43f5e', textAlign: 'left' } },
      { id: id(), type: 'text', content: '2.5배 빠른 처리', styles: { fontSize: '18px', fontWeight: 'bold', margin: '8px 0 4px' } },
      { id: id(), type: 'text', content: '이전 모델 대비 혁신적인 속도 향상', styles: { fontSize: '13px', color: '#64748b', margin: '0 0 24px' } },
      { id: id(), type: 'icon', content: 'Activity', styles: { fontSize: '32px', color: '#f43f5e', textAlign: 'left' } },
      { id: id(), type: 'text', content: '99.9% 안정성', styles: { fontSize: '18px', fontWeight: 'bold', margin: '8px 0 4px' } },
      { id: id(), type: 'text', content: '무중단 서비스 운영을 보장합니다.', styles: { fontSize: '13px', color: '#64748b' } },
    ],
  },
  {
    name: '사이버 카드',
    preview: '🧬',
    bg: { type: 'color', value: '#020617' },
    elements: [
      { id: id(), type: 'text', content: 'DNA OF TECH', styles: { fontSize: '10px', fontWeight: 'bold', letterSpacing: '4px', color: '#38bdf8', textAlign: 'center' } },
      { id: id(), type: 'text', content: '핵심 유전자', styles: { fontSize: '26px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '8px 0 24px' } },
      { id: id(), type: 'text', content: '✨ 지능형 분석 시스템', styles: { fontSize: '15px', color: '#fff', padding: '16px', backgroundColor: '#1e1b4b', borderRadius: '12px', border: '1px solid #312e81' } },
      { id: id(), type: 'text', content: '🛡️ 강력한 엔드포인트 보안', styles: { fontSize: '15px', color: '#fff', padding: '16px', backgroundColor: '#1e1b4b', borderRadius: '12px', border: '1px solid #312e81', margin: '10px 0' } },
      { id: id(), type: 'text', content: '⚡ 대규모 트래픽 분산처리', styles: { fontSize: '15px', color: '#fff', padding: '16px', backgroundColor: '#1e1b4b', borderRadius: '12px', border: '1px solid #312e81' } },
    ],
  },
  {
    name: '인포그래픽 서클',
    preview: '🔵',
    bg: { type: 'color', value: '#eff6ff' },
    elements: [
      { id: id(), type: 'text', content: '주요 성과', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 20px' } },
      { id: id(), type: 'text', content: '1M+', styles: { fontSize: '32px', fontWeight: '900', color: '#2563eb', textAlign: 'center', backgroundColor: '#fff', width: '100px', height: '100px', borderRadius: '50px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #bfdbfe' } },
      { id: id(), type: 'text', content: '활성 사용자 수', styles: { fontSize: '13px', fontWeight: 'bold', color: '#64748b', textAlign: 'center', margin: '8px 0 24px' } },
      { id: id(), type: 'text', content: '98%', styles: { fontSize: '32px', fontWeight: '900', color: '#2563eb', textAlign: 'center', backgroundColor: '#fff', width: '100px', height: '100px', borderRadius: '50px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #bfdbfe' } },
      { id: id(), type: 'text', content: '재구매율', styles: { fontSize: '13px', fontWeight: 'bold', color: '#64748b', textAlign: 'center', margin: '8px 0' } },
    ],
  },
  {
    name: '다크 하이라이트',
    preview: '🌌',
    bg: { type: 'color', value: '#000' },
    elements: [
      { id: id(), type: 'text', content: 'EXPERIENCE THE FUTURE', styles: { fontSize: '11px', color: '#818cf8', textAlign: 'center' } },
      { id: id(), type: 'text', content: '미래를 경험하세요', styles: { fontSize: '28px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '12px 0 24px' } },
      { id: id(), type: 'icon', content: 'Cpu', styles: { fontSize: '40px', color: '#818cf8', textAlign: 'center' } },
      { id: id(), type: 'text', content: '독자적인 칩셋 설계', styles: { fontSize: '16px', fontWeight: 'bold', color: '#fff', textAlign: 'center', margin: '12px 0' } },
      { id: id(), type: 'text', content: '최상의 효율을 위한 커스텀 하드웨어', styles: { fontSize: '13px', color: '#94a3b8', textAlign: 'center' } },
    ],
  },
  {
    name: '컬러풀 도트 리스트',
    preview: '🟢',
    bg: { type: 'color', value: '#fff' },
    elements: [
      { id: id(), type: 'text', content: '우리의 강점', styles: { fontSize: '22px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 20px' } },
      { id: id(), type: 'text', content: '• 365일 실시간 모니터링', styles: { fontSize: '15px', color: '#4f46e5', fontWeight: 'bold', padding: '12px', borderBottom: '2px solid #eef2ff', textAlign: 'center' } },
      { id: id(), type: 'text', content: '• 자동화된 백업 시스템', styles: { fontSize: '15px', color: '#0ea5e9', fontWeight: 'bold', padding: '12px', borderBottom: '2px solid #f0f9ff', textAlign: 'center' } },
      { id: id(), type: 'text', content: '• 1:1 전담 기술 엔지니어', styles: { fontSize: '15px', color: '#10b981', fontWeight: 'bold', padding: '12px', borderBottom: '2px solid #f0fdf4', textAlign: 'center' } },
    ],
  },
  {
    name: '스토리 텔링 레이아웃',
    preview: '✍️',
    bg: { type: 'color', value: '#fafaf9' },
    elements: [
      { id: id(), type: 'text', content: '"우리는 단순한 도구가 아닌,\n새로운 가능성을 만듭니다."', styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', color: '#1c1917', lineHeight: '1.5' } },
      { id: id(), type: 'spacer', content: '24px', styles: {} },
      { id: id(), type: 'text', content: 'Gemini Style은 당신의 브랜드가 세상과 소통하는\n가장 아름답고 강력한 방법을 제안합니다.', styles: { fontSize: '14px', textAlign: 'center', color: '#57534e', lineHeight: '1.7' } },
    ],
  },
];
