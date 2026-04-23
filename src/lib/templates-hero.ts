import { BaseElement } from './types';
const id = () => Math.random().toString(36).substr(2, 9);

export interface TemplateVariant {
  name: string;
  preview: string;
  bg: { type: 'color' | 'image'; value: string; overlay?: number };
  elements: BaseElement[];
}

export const heroTemplates: TemplateVariant[] = [
  {
    name: '클래식 중앙 정렬',
    preview: '🎯',
    bg: { type: 'color', value: '#ffffff' },
    elements: [
      { id: id(), type: 'text', content: '최고의 품질을 경험하세요', styles: { fontSize: '28px', fontWeight: 'bold', textAlign: 'center' } },
      { id: id(), type: 'text', content: '프리미엄 소재와 장인의 손길로 완성된 제품', styles: { fontSize: '14px', textAlign: 'center', color: '#888' } },
      { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', styles: { borderRadius: '12px', margin: '20px 0' } },
      { id: id(), type: 'button', content: '지금 구매하기', styles: { backgroundColor: '#2563eb', color: '#fff', padding: '14px 28px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' } },
    ],
  },
  {
    name: '다크 시네마틱',
    preview: '🌙',
    bg: { type: 'color', value: '#0a0a0a' },
    elements: [
      { id: id(), type: 'text', content: 'PREMIUM COLLECTION', styles: { fontSize: '11px', letterSpacing: '3px', textAlign: 'center', color: '#666' } },
      { id: id(), type: 'text', content: '어둠 속에서 빛나는\n당신만의 아이템', styles: { fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: '#fff', lineHeight: '1.3' } },
      { id: id(), type: 'image', content: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80', styles: { borderRadius: '16px', margin: '24px 0' } },
      { id: id(), type: 'button', content: '컬렉션 보기', styles: { backgroundColor: '#fff', color: '#000', padding: '14px 28px', borderRadius: '50px', textAlign: 'center', fontWeight: 'bold' } },
    ],
  },
  {
    name: '그라데이션 감성',
    preview: '🌈',
    bg: { type: 'color', value: '#fef3c7' },
    elements: [
      { id: id(), type: 'icon', content: 'Sparkles', styles: { fontSize: '40px', color: '#f59e0b', textAlign: 'center' } },
      { id: id(), type: 'text', content: '올 여름, 새로운 시작', styles: { fontSize: '26px', fontWeight: 'bold', textAlign: 'center', color: '#92400e' } },
      { id: id(), type: 'text', content: '한정 수량으로 준비된 시즌 컬렉션을 만나보세요.', styles: { fontSize: '14px', textAlign: 'center', color: '#b45309' } },
      { id: id(), type: 'button', content: '시즌 한정 구매', styles: { backgroundColor: '#f59e0b', color: '#fff', padding: '14px 28px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' } },
    ],
  },
  {
    name: '미니멀 텍스트',
    preview: '✏️',
    bg: { type: 'color', value: '#f5f5f5' },
    elements: [
      { id: id(), type: 'text', content: '심플하게,\n그러나 강렬하게.', styles: { fontSize: '34px', fontWeight: '900', textAlign: 'left', color: '#111', lineHeight: '1.2' } },
      { id: id(), type: 'spacer', content: '10px', styles: {} },
      { id: id(), type: 'text', content: '불필요한 것은 빼고, 본질만 남긴 디자인.', styles: { fontSize: '15px', textAlign: 'left', color: '#999' } },
      { id: id(), type: 'button', content: '자세히 보기 →', styles: { backgroundColor: 'transparent', color: '#111', padding: '12px 0', textAlign: 'left', fontWeight: 'bold', border: 'none' } },
    ],
  },
  {
    name: '풀 이미지 + 오버레이',
    preview: '📸',
    bg: { type: 'image', value: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80', overlay: 0.5 },
    elements: [
      { id: id(), type: 'text', content: '2024 NEW ARRIVAL', styles: { fontSize: '12px', letterSpacing: '2px', textAlign: 'center', color: '#fff' } },
      { id: id(), type: 'text', content: '지금이 아니면\n만날 수 없는 기회', styles: { fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: '#fff', lineHeight: '1.3' } },
      { id: id(), type: 'button', content: '쇼핑 시작하기', styles: { backgroundColor: '#fff', color: '#000', padding: '14px 28px', borderRadius: '50px', textAlign: 'center', fontWeight: 'bold' } },
    ],
  },
];
