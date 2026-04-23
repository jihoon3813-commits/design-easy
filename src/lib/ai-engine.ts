import { SectionType, PageData } from './types';

export interface AIInput {
  productName: string;
  category: string;
  features: string[];
  targetAudience: string;
  tone: string;
  requiredSections: SectionType[];
}

export function generateSystemPrompt() {
  return `
    너는 이커머스 상세페이지 기획 전문가이자 카피라이터야.
    사용자가 제공한 상품 정보를 바탕으로 논리적이고 설득력 있는 상세페이지 구조를 JSON으로 생성해야 해.
    
    [규칙]
    1. 반드시 지정된 JSON 스키마를 준수할 것.
    2. 상품의 장점을 부각시키고 고객의 문제 해결을 강조하는 카피를 작성할 것.
    3. 모든 텍스트는 한국어로 작성할 것.
    4. 섹션의 순서는 논리적 흐름(관심 유도 -> 문제 제기 -> 해결책 제시 -> 신뢰 구축 -> 행동 유도)을 따를 것.
    
    [JSON 스키마]
    {
      "title": "페이지 제목",
      "sections": [
        {
          "id": "고유ID",
          "type": "hero | benefits | feature-cards | faq | comparison-table | sticky-cta",
          "props": {
            "title": "섹션 제목",
            "description": "상세 설명",
            "items": [ ... 섹션 타입에 따른 아이템 배열 ... ]
          }
        }
      ]
    }
  `;
}

export function generateUserPrompt(input: AIInput) {
  return `
    다음 상품 정보를 바탕으로 상세페이지 초안을 생성해줘:
    
    상품명: ${input.productName}
    카테고리: ${input.category}
    주요 특징: ${input.features.join(', ')}
    타겟 고객: ${input.targetAudience}
    톤앤매너: ${input.tone}
    포함할 섹션: ${input.requiredSections.join(', ')}
  `;
}
