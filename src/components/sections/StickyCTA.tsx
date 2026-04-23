'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface CTAProps {
  title: string;
  ctaText: string;
}

export default function StickyCTA({ props }: { props: CTAProps }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-neutral-200 z-[60] flex items-center justify-between max-w-[375px] mx-auto shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
      <div className="flex-1 mr-4">
        <p className="text-[10px] text-neutral-400 font-medium">오늘만 드리는 혜택</p>
        <p className="text-xs font-bold text-neutral-800 truncate">
          {props.title || '특별 할인가로 구매하기'}
        </p>
      </div>
      <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95">
        <ShoppingCart className="w-4 h-4" />
        {props.ctaText || '바로구매'}
      </button>
    </div>
  );
}
