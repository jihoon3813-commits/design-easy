'use client';

import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
  ctaText?: string;
}

export default function HeroSection({ props }: { props: HeroProps }) {
  return (
    <section className="relative w-full aspect-[4/5] flex flex-col justify-end p-6 overflow-hidden bg-neutral-100">
      {props.backgroundImage && (
        <img 
          src={props.backgroundImage} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="relative z-10 text-white">
        <h2 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-wrap">
          {props.title || '제목을 입력하세요'}
        </h2>
        <p className="text-sm text-white/80 mb-6 max-w-[80%]">
          {props.description || '상세 설명을 입력하여 고객의 관심을 끌어보세요.'}
        </p>
        
        {props.ctaText && (
          <button className="w-full py-4 bg-white text-black font-bold rounded-lg shadow-lg hover:scale-[0.98] transition-transform">
            {props.ctaText}
          </button>
        )}
      </div>
    </section>
  );
}
