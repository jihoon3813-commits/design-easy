'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface BenefitsProps {
  title: string;
  items: Array<{ title: string; description: string }>;
}

export default function BenefitsSection({ props }: { props: BenefitsProps }) {
  const items = props.items || [
    { title: '핵심 혜택 1', description: '여기에 상세한 설명을 입력하세요.' },
    { title: '핵심 혜택 2', description: '여기에 상세한 설명을 입력하세요.' },
    { title: '핵심 혜택 3', description: '여기에 상세한 설명을 입력하세요.' },
  ];

  return (
    <section className="w-full py-12 px-6 bg-white">
      <h3 className="text-xl font-bold mb-8 text-center text-neutral-900">
        {props.title || '왜 이 제품인가요?'}
      </h3>
      
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="mt-1">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 mb-1">{item.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
