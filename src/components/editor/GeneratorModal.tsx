'use client';

import React from 'react';
import { Sparkles, X, ChevronRight, Loader2 } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';

import { generatePageAction } from '@/app/actions/generate';

export default function GeneratorModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [loading, setLoading] = React.useState(false);
  const [productName, setProductName] = React.useState('');
  const [features, setFeatures] = React.useState('');
  const { setPageData } = useEditorStore();

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!productName) {
      alert('상품명을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const result = await generatePageAction({
        productName,
        category: '일반 상품',
        features: features.split(',').map(f => f.trim()).filter(Boolean),
        targetAudience: '일반 고객',
        tone: '전문적이고 설득력 있는',
        requiredSections: ['hero', 'benefits', 'cta']
      });

      if (result.success && result.data) {
        setPageData(result.data as any);
        onClose();
      } else {
        alert('생성 중 오류가 발생했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('AI 엔진 연결에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-bold text-white">AI 초안 생성기</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-4">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
              <p className="text-neutral-400 animate-pulse">AI가 상세페이지를 기획하고 있습니다...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">상품명을 입력해주세요</label>
                <input 
                  type="text" 
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="예: 초경량 무선 청소기"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">핵심 특징 (쉼표로 구분)</label>
                <textarea 
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  placeholder="예: 강력한 흡입력, 1.2kg 초경량, HEPA 필터"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                />
              </div>

              <button 
                onClick={handleGenerate}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group"
              >
                초안 생성하기
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
