'use client';

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  title: string;
  items: Array<{ question: string; answer: string }>;
}

export default function FAQSection({ props }: { props: FAQProps }) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);
  const items = props.items || [
    { question: '배송은 얼마나 걸리나요?', answer: '주문 후 영업일 기준 2-3일 내에 수령 가능합니다.' },
    { question: '환불 규정이 어떻게 되나요?', answer: '미사용 제품에 한해 7일 이내 100% 환불 가능합니다.' },
  ];

  return (
    <section className="w-full py-12 px-6 bg-white">
      <h3 className="text-xl font-bold mb-8 text-neutral-900">
        {props.title || '궁금한 점이 있으신가요?'}
      </h3>
      
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="border border-neutral-100 rounded-lg overflow-hidden">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 transition-colors"
            >
              <span className="text-sm font-bold text-neutral-800">{item.question}</span>
              {openIdx === idx ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
            </button>
            {openIdx === idx && (
              <div className="p-4 bg-neutral-50 border-t border-neutral-100">
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
