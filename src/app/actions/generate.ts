'use server';

import { AIInput } from '@/lib/ai-engine';

export async function generatePageAction(input: AIInput) {
  console.log('Generating strategic landing page for:', input.productName);
  
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Determine if it's the "All-in-one 598" project
  const is598 = input.productName.includes('598') || input.features.some(f => f.includes('598'));
  
  const sections = [
    // 1. Hero Section
    {
      id: 'hero-598',
      type: 'hero' as const,
      background: { type: 'color', value: '#ffffff' },
      styles: { paddingTop: '80px', paddingBottom: '60px', maxWidth: '1200px' },
      elements: [
        {
          id: 'h-1',
          type: 'text',
          content: is598 ? '올인원598, 가입 하나로 준비하는 생활·케어 혜택' : `${input.productName}: 당신을 위한 완벽한 솔루션`,
          styles: { fontSize: '46px', fontWeight: '900', textAlign: 'center', color: '#111827', marginBottom: '20px', letterSpacing: '-1.5px' }
        },
        {
          id: 'h-2',
          type: 'text',
          content: is598 ? '가입 고객 전용 혜택과 간편한 가입 절차를 한 번에' : `${input.targetAudience}를 위한 가장 스마트한 선택을 만나보세요.`,
          styles: { fontSize: '20px', textAlign: 'center', color: '#4b5563', marginBottom: '40px', lineHeight: '1.6' }
        },
        {
          id: 'h-points',
          type: 'text',
          content: '가입 고객 특별혜택  |  간편 상담 접수  |  맞춤 플랜 안내',
          styles: { fontSize: '14px', fontWeight: '600', textAlign: 'center', color: '#2563eb', marginBottom: '40px', backgroundColor: '#eff6ff', padding: '12px 24px', borderRadius: '100px', display: 'inline-block' }
        },
        {
          id: 'h-buttons',
          type: 'button',
          content: '무료 상담 신청하기',
          styles: { backgroundColor: '#2563eb', color: '#ffffff', padding: '18px 48px', borderRadius: '14px', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', width: 'fit-content' }
        }
      ]
    },
    // 2. Trust Bar
    {
      id: 'trust-598',
      type: 'cta' as const,
      background: { type: 'color', value: '#f9fafb' },
      styles: { paddingTop: '24px', paddingBottom: '24px', maxWidth: '1200px' },
      elements: [
        {
          id: 't-1',
          type: 'text',
          content: '🛡️ 공식 상담 채널에서 안전하게 안내받으세요. 가입 전 혜택과 절차를 투명하게 확인하실 수 있습니다.',
          styles: { fontSize: '14px', fontWeight: '600', textAlign: 'center', color: '#6b7280' }
        }
      ]
    },
    // 3. Summary Benefits (3 Items)
    {
      id: 'benefits-summary',
      type: 'benefits' as const,
      background: { type: 'color', value: '#ffffff' },
      styles: { paddingTop: '80px', paddingBottom: '80px', maxWidth: '1000px' },
      elements: [
        {
          id: 'bs-t',
          type: 'text',
          content: '가입 고객만의 특별한 3가지 혜택',
          styles: { fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }
        },
        {
          id: 'bs-1',
          type: 'text',
          content: '🎁 생활 지원 혜택\n가입 고객 대상 특별 구성을 제공해 드립니다.',
          styles: { fontSize: '18px', fontWeight: 'bold', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', marginBottom: '16px' }
        },
        {
          id: 'bs-2',
          type: 'text',
          content: '🌟 고객 전용 서비스\n이용 상황에 맞는 다양한 부가 혜택을 안내합니다.',
          styles: { fontSize: '18px', fontWeight: 'bold', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', marginBottom: '16px' }
        },
        {
          id: 'bs-3',
          type: 'text',
          content: '⚡ 간편한 상담 절차\n문의부터 가입까지 복잡함 없이 빠르게 진행됩니다.',
          styles: { fontSize: '18px', fontWeight: 'bold', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px' }
        }
      ]
    },
    // 4. Plan Comparison
    {
      id: 'pricing-598',
      type: 'comparison-table' as const,
      background: { type: 'color', value: '#f3f4f6' },
      styles: { paddingTop: '80px', paddingBottom: '80px', maxWidth: '1100px' },
      elements: [
        {
          id: 'pr-t',
          type: 'text',
          content: '나에게 맞는 플랜 선택',
          styles: { fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }
        },
        {
          id: 'pr-card-1',
          type: 'text',
          content: '💡 기본형\n가볍게 시작하려는 고객을 위한 실속 플랜',
          styles: { fontSize: '16px', padding: '32px', backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid #e5e7eb', marginBottom: '20px' }
        },
        {
          id: 'pr-card-2',
          type: 'text',
          content: '🔥 추천형 (가장 많이 선택)\n혜택과 조건의 완벽한 밸런스, 강력 추천 플랜',
          styles: { fontSize: '16px', padding: '32px', backgroundColor: '#eff6ff', borderRadius: '24px', border: '2px solid #2563eb', marginBottom: '20px' }
        }
      ]
    },
    // 5. Process
    {
      id: 'process-598',
      type: 'feature-cards' as const,
      background: { type: 'color', value: '#ffffff' },
      styles: { paddingTop: '80px', paddingBottom: '80px', maxWidth: '1000px' },
      elements: [
        {
          id: 'p-t',
          type: 'text',
          content: '상담부터 가입까지 간단하게',
          styles: { fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }
        },
        {
          id: 'p-step',
          type: 'text',
          content: '1. 상담 신청 → 2. 맞춤 안내 → 3. 가입 완료',
          styles: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', color: '#2563eb', padding: '30px', border: '2px dashed #d1d5db', borderRadius: '20px' }
        }
      ]
    },
    // 6. FAQ
    {
      id: 'faq-598',
      type: 'faq' as const,
      background: { type: 'color', value: '#f9fafb' },
      styles: { paddingTop: '80px', paddingBottom: '80px', maxWidth: '800px' },
      elements: [
        {
          id: 'f-t',
          type: 'text',
          content: '자주 묻는 질문',
          styles: { fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }
        },
        {
          id: 'f-1',
          type: 'text',
          content: 'Q. 가입은 어떻게 진행되나요?\nA. 상담 신청 후 전문 상담사가 맞춤 플랜을 안내해 드립니다.',
          styles: { fontSize: '15px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', marginBottom: '12px', border: '1px solid #e5e7eb' }
        },
        {
          id: 'f-2',
          type: 'text',
          content: 'Q. 혜택은 누구에게 제공되나요?\nA. 가입 조건을 충족하는 모든 고객님께 동일한 혜택을 드립니다.',
          styles: { fontSize: '15px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb' }
        }
      ]
    },
    // 7. Final CTA
    {
      id: 'final-cta-598',
      type: 'cta' as const,
      background: { type: 'color', value: '#111827' },
      styles: { paddingTop: '100px', paddingBottom: '100px', maxWidth: '1000px' },
      elements: [
        {
          id: 'fc-1',
          type: 'text',
          content: '지금 상담받고 내게 맞는 구성을 확인해보세요',
          styles: { fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: '#ffffff', marginBottom: '32px' }
        },
        {
          id: 'fc-btn',
          type: 'button',
          content: '무료 상담 신청하기',
          styles: { backgroundColor: '#2563eb', color: '#ffffff', padding: '18px 60px', borderRadius: '14px', fontSize: '18px', fontWeight: 'bold' }
        }
      ]
    }
  ];

  return {
    success: true,
    data: {
      id: Math.random().toString(36).substr(2, 9),
      title: is598 ? '올인원598 재구성 페이지' : `${input.productName} 상세페이지`,
      theme: {
        primaryColor: '#2563eb',
        secondaryColor: '#64748b',
        fontFamily: 'Inter',
        borderRadius: 'lg',
        darkMode: false,
      },
      sections: sections
    }
  };
}
