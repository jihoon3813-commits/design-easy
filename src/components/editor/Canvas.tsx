'use client';

import React from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SectionRenderer from './SectionRenderer';
import { SortableItem } from './SortableItem';
import GeneratorModal from './GeneratorModal';
import { Sparkles } from 'lucide-react';

export default function Canvas() {
  const { pageData, reorderSections, previewMode } = useEditorStore();
  const [isGeneratorOpen, setIsGeneratorOpen] = React.useState(false);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over?.id && pageData?.sections) {
      const oldIndex = pageData.sections.findIndex((s) => s.id === active.id);
      const newIndex = pageData.sections.findIndex((s) => s.id === over.id);
      reorderSections(oldIndex, newIndex);
    }
  }

  return (
    <main className="flex-1 overflow-y-auto bg-neutral-900 custom-scrollbar relative">
      <div className="flex justify-center p-8 min-h-full">
        {/* Preview Container: 캡처 대상 */}
        <div 
          id="canvas-container"
          className={`bg-white shadow-2xl transition-all duration-300 origin-top overflow-hidden flex flex-col ${
            previewMode === 'mobile' ? 'w-[375px]' : 'w-full max-w-[1200px]'
          }`}
          style={{ minHeight: previewMode === 'mobile' ? '667px' : '800px' }}
        >
          <div className="flex flex-col flex-1 bg-white pb-20">
            <DndContext 
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext 
                items={(pageData?.sections || []).map(s => s.id)}
                strategy={verticalListSortingStrategy}
              >
                {pageData?.sections?.map((section) => (
                  <SortableItem key={section.id} id={section.id}>
                    <SectionRenderer section={section} />
                  </SortableItem>
                ))}
              </SortableContext>
            </DndContext>
            
            {(!pageData?.sections || pageData.sections.length === 0) && (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <Sparkles className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">AI로 상세페이지 시작하기</h3>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                  상품 정보만 입력하면 AI가 전문적인<br/>상세페이지 초안을 만들어 드립니다.
                </p>
                <button 
                  onClick={() => setIsGeneratorOpen(true)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95"
                >
                  AI 초안 생성하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <GeneratorModal 
        isOpen={isGeneratorOpen} 
        onClose={() => setIsGeneratorOpen(false)} 
      />
    </main>
  );
}
