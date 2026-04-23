'use client';

import React from 'react';
import { Layout, Check } from 'lucide-react';

const TEMPLATES = [
  { id: 't1', name: '가전/디지털', description: '기술적 스펙과 신뢰도를 강조하는 템플릿', color: 'bg-blue-500' },
  { id: 't2', name: '뷰티/패션', description: '이미지와 감성적인 카피를 강조하는 템플릿', color: 'bg-pink-500' },
  { id: 't3', name: '리빙/주방', description: '실사용 예시와 혜택을 강조하는 템플릿', color: 'bg-green-500' },
];

export default function TemplateLibrary() {
  const [selected, setSelected] = React.useState('t1');

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-neutral-900">추천 템플릿</h3>
      <div className="grid grid-cols-1 gap-3">
        {TEMPLATES.map((t) => (
          <div 
            key={t.id}
            onClick={() => setSelected(t.id)}
            className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center gap-4 ${
              selected === t.id ? 'border-blue-500 bg-blue-50/50 shadow-sm' : 'border-neutral-100 hover:border-neutral-200'
            }`}
          >
            <div className={`w-10 h-10 ${t.color} rounded-lg flex items-center justify-center text-white`}>
              <Layout className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-neutral-900">{t.name}</h4>
              <p className="text-[11px] text-neutral-500">{t.description}</p>
            </div>
            {selected === t.id && <Check className="w-4 h-4 text-blue-500" />}
          </div>
        ))}
      </div>
    </div>
  );
}
