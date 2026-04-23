'use client';

import React from 'react';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react';

interface FeatureProps {
  title: string;
  items: Array<{ title: string; description: string; icon: string }>;
}

const ICON_MAP: Record<string, any> = {
  shield: ShieldCheck,
  zap: Zap,
  heart: Heart,
  award: Award,
};

export default function FeatureCardsSection({ props }: { props: FeatureProps }) {
  const items = props.items || [
    { title: '강력한 성능', description: '동급 최강의 엔진으로 압도적인 성능을 보장합니다.', icon: 'zap' },
    { title: '철저한 보안', description: '당신의 소중한 정보를 완벽하게 보호합니다.', icon: 'shield' },
    { title: '품질 보증', description: '철저한 검수를 거친 정품만을 판매합니다.', icon: 'award' },
    { title: '감각적 디자인', description: '어떤 공간에도 잘 어우러지는 미니멀한 디자인입니다.', icon: 'heart' },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <h3 className="text-2xl font-bold mb-12 text-center text-neutral-900">
        {props.title || '완벽함을 더하는 세부 기능'}
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, idx) => {
          const Icon = ICON_MAP[item.icon] || Zap;
          return (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 border border-neutral-100 group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2 text-sm">{item.title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
