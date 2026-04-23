'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonProps {
  title: string;
  items: Array<{ feature: string; us: boolean; others: boolean }>;
}

export default function ComparisonTable({ props }: { props: ComparisonProps }) {
  const items = props.items || [
    { feature: '품질 보증', us: true, others: false },
    { feature: '당일 배송', us: true, others: false },
    { feature: '친환경 소재', us: true, others: true },
    { feature: '전용 앱 지원', us: true, others: false },
  ];

  return (
    <section className="w-full py-12 px-6 bg-white">
      <h3 className="text-xl font-bold mb-8 text-center text-neutral-900">
        {props.title || '타사 대비 압도적인 경쟁력'}
      </h3>
      
      <div className="overflow-hidden border border-neutral-100 rounded-2xl shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-100">
              <th className="py-4 px-4 text-left font-medium text-neutral-500">기능</th>
              <th className="py-4 px-2 text-center font-bold text-blue-600">당사</th>
              <th className="py-4 px-2 text-center font-medium text-neutral-400">타사</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="border-b border-neutral-50 border-last:border-0">
                <td className="py-4 px-4 text-neutral-700 font-medium">{item.feature}</td>
                <td className="py-4 px-2 text-center">
                  <div className="flex justify-center">
                    {item.us ? <Check className="w-5 h-5 text-blue-500" /> : <X className="w-5 h-5 text-neutral-300" />}
                  </div>
                </td>
                <td className="py-4 px-2 text-center">
                  <div className="flex justify-center">
                    {item.others ? <Check className="w-5 h-5 text-neutral-400" /> : <X className="w-5 h-5 text-neutral-200" />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
