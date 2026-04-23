import React from 'react';
import { PageData } from './types';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeatureCardsSection from '@/components/sections/FeatureCardsSection';
import ReviewCardsSection from '@/components/sections/ReviewCardsSection';
import FAQSection from '@/components/sections/FAQSection';
import ComparisonTable from '@/components/sections/ComparisonTable';
import StickyCTA from '@/components/sections/StickyCTA';

export function renderPageToHTML(pageData: PageData): string {
  // This is a simplified version. 
  // In a real app, you would use React.renderToStaticMarkup
  // and include the Tailwind CSS output.
  
  const sectionsHTML = pageData.sections.map(section => {
    switch (section.type) {
      case 'hero': return `<!-- Hero Section -->`;
      case 'benefits': return `<!-- Benefits Section -->`;
      default: return '';
    }
  }).join('\n');

  return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageData.metadata.seoTitle || pageData.title}</title>
      <meta name="description" content="${pageData.metadata.seoDescription || ''}">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white">
      <div id="root">
        ${sectionsHTML}
      </div>
    </body>
    </html>
  `;
}
