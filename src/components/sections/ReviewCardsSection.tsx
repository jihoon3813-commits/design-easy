'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface ReviewProps {
  title: string;
  reviews: Array<{ author: string; content: string; rating: number }>;
}

export default function ReviewCardsSection({ props }: { props: ReviewProps }) {
  const reviews = props.reviews || [
    { author: '김*현', content: '정말 만족합니다. 배송도 빠르고 제품 퀄리티가 최고예요!', rating: 5 },
    { author: '이*우', content: '생각보다 디자인이 더 예뻐요. 기능도 충실합니다.', rating: 4 },
  ];

  return (
    <section className="w-full py-12 px-6 bg-neutral-50">
      <h3 className="text-xl font-bold mb-8 text-center text-neutral-900">
        {props.title || '구매 고객들의 실제 후기'}
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-200'}`} 
                />
              ))}
            </div>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed italic">
              "{review.content}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600 uppercase">
                {review.author[0]}
              </div>
              <span className="text-xs font-medium text-neutral-400">{review.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
