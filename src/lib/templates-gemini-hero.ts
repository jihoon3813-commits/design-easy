import { BaseElement } from './types';
const id = () => Math.random().toString(36).substr(2, 9);

export interface TemplateVariant {
  name: string;
  preview: string;
  bg: { type: 'color' | 'image'; value: string; overlay?: number };
  elements: BaseElement[];
}

export const geminiHeroTemplates: TemplateVariant[] = [
  {
    name: 'Gemini 오로라',
    preview: '✨',
    bg: { type: 'color', value: '#1a1a2e' },
    elements: [
      { id: id(), type: 'text', content: '미래를 여는 혁신적인 가치', styles: { fontSize: '36px', fontWeight: '900', textAlign: 'center', color: '#ffffff', lineHeight: '1.2' } },
      { id: id(), type: 'text', content: 'Gemini AI로 더 빠르고 스마트하게.', styles: { fontSize: '16px', textAlign: 'center', color: '#a5b4fc', margin: '16px 0 32px' } },
      { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80', styles: { borderRadius: '24px', border: '2px solid #4f46e5' } },
      { id: id(), type: 'button', content: '무료로 시작하기', styles: { backgroundColor: '#4f46e5', color: '#fff', padding: '16px 32px', borderRadius: '50px', textAlign: 'center', fontWeight: 'bold', margin: '32px 0 0' } },
    ],
  },
  {
    name: '사이버 펑크',
    preview: '⚡',
    bg: { type: 'color', value: '#050505' },
    elements: [
      { id: id(), type: 'text', content: 'BEYOND LIMITS', styles: { fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px', color: '#ec4899', textAlign: 'center' } },
      { id: id(), type: 'text', content: '한계를 뛰어넘는\n퍼포먼스의 정점', styles: { fontSize: '32px', fontWeight: '900', textAlign: 'center', color: '#fff', lineHeight: '1.1' } },
      { id: id(), type: 'button', content: '지금 확인하기', styles: { backgroundColor: '#ec4899', color: '#fff', padding: '16px', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold', margin: '24px 0' } },
      { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', styles: { borderRadius: '8px' } },
    ],
  },
  {
    name: '미니멀 퓨처',
    preview: '🧊',
    bg: { type: 'color', value: '#f8fafc' },
    elements: [
      { id: id(), type: 'icon', content: 'Cpu', styles: { fontSize: '48px', color: '#0ea5e9', textAlign: 'center' } },
      { id: id(), type: 'text', content: '차세대 테크놀로지', styles: { fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: '#0f172a', margin: '16px 0 8px' } },
      { id: id(), type: 'text', content: '기술이 일상이 되는 순간을 만나보세요.', styles: { fontSize: '15px', textAlign: 'center', color: '#64748b' } },
      { id: id(), type: 'button', content: '기술서 보기', styles: { backgroundColor: '#0f172a', color: '#fff', padding: '14px 28px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', margin: '24px 0' } },
    ],
  },
  {
    name: '비주얼 센터',
    preview: '🌌',
    bg: { type: 'image', value: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80', overlay: 0.4 },
    elements: [
      { id: id(), type: 'text', content: '압도적인 첫인상', styles: { fontSize: '40px', fontWeight: '900', textAlign: 'center', color: '#fff', lineHeight: '1' } },
      { id: id(), type: 'spacer', content: '24px', styles: {} },
      { id: id(), type: 'text', content: '세상의 모든 가치를 하나의 페이지에 담았습니다.', styles: { fontSize: '16px', textAlign: 'center', color: '#e2e8f0' } },
      { id: id(), type: 'button', content: '자세히 알아보기', styles: { backgroundColor: '#ffffff', color: '#000', padding: '16px 40px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', margin: '32px 0 0' } },
    ],
  },
  {
    name: '팝 아트 그라디언트',
    preview: '🎨',
    bg: { type: 'color', value: '#fff' },
    elements: [
      { id: id(), type: 'text', content: '감각적인 선택', styles: { fontSize: '34px', fontWeight: '900', textAlign: 'center', backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '24px', color: '#0284c7' } },
      { id: id(), type: 'text', content: '세련된 감각으로 완성된 프리미엄 스타일.', styles: { fontSize: '14px', textAlign: 'center', color: '#0369a1', margin: '12px 0 0' } },
      { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80', styles: { borderRadius: '100px', margin: '32px auto 0', width: '200px', height: '200px' } },
    ],
  },
];
