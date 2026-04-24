'use client';

import React from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { Layout, Plus, Trash2, Layers, Library, GripVertical, ChevronLeft, Sparkles, BrainCircuit } from 'lucide-react';
import { SectionType, SectionData } from '@/lib/types';

// Opus Templates
import { heroTemplates as opusHero } from '@/lib/templates-hero';
import { benefitsTemplates as opusBenefits } from '@/lib/templates-benefits';
import { featureTemplates as opusFeature, comparisonTemplates as opusComparison, ctaTemplates as opusCta } from '@/lib/templates-etc';

// Gemini Templates
import { geminiHeroTemplates as gemHero } from '@/lib/templates-gemini-hero';
import { geminiBenefitsTemplates as gemBenefits } from '@/lib/templates-gemini-benefits';
import { geminiFeatureTemplates as gemFeature, geminiComparisonTemplates as gemComparison, geminiCtaTemplates as gemCta } from '@/lib/templates-gemini-etc';

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type StyleFlavor = 'opus' | 'gemini';

const SECTION_CATEGORIES = [
  { type: 'hero' as SectionType, label: '히어로', emoji: '🎯' },
  { type: 'benefits' as SectionType, label: '핵심 혜택', emoji: '🛡️' },
  { type: 'feature-cards' as SectionType, label: '특징 그리드', emoji: '⚡' },
  { type: 'comparison-table' as SectionType, label: '비교표', emoji: '📊' },
  { type: 'cta' as SectionType, label: '구매 유도(CTA)', emoji: '🔥' },
];

function SortableLayer({ section, index, isSelected, onSelect, onRemove }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  return (
    <div ref={setNodeRef} style={style} onClick={() => onSelect(section.id)}
      className={`group flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${isSelected ? 'bg-blue-600/10 border-blue-500/50 text-blue-500' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}>
      <div className="flex items-center gap-3">
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing hover:text-neutral-300"><GripVertical className="w-3.5 h-3.5" /></div>
        <span className="text-[10px] font-mono opacity-50">{index + 1}</span>
        <span className="text-xs font-medium">{section.type}</span>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onRemove(section.id); }} className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-900/30 text-red-500 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
    </div>
  );
}

export default function Sidebar() {
  const { pageData, selectedSectionId, setSelectedSectionId, removeSection, addSection, reorderSections } = useEditorStore();
  const [activeTab, setActiveTab] = React.useState<'layers' | 'library'>('layers');
  const [selectedCategory, setSelectedCategory] = React.useState<SectionType | null>(null);
  const [flavor, setFlavor] = React.useState<StyleFlavor>('opus');

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id && pageData?.sections) {
      const oldIdx = pageData.sections.findIndex(s => s.id === active.id);
      const newIdx = pageData.sections.findIndex(s => s.id === over.id);
      reorderSections(oldIdx, newIdx);
    }
  };

  const getTemplateList = (type: SectionType) => {
    const isOpus = flavor === 'opus';
    switch (type) {
      case 'hero': return isOpus ? opusHero : gemHero;
      case 'benefits': return isOpus ? opusBenefits : gemBenefits;
      case 'feature-cards': return isOpus ? opusFeature : gemFeature;
      case 'comparison-table': return isOpus ? opusComparison : gemComparison;
      case 'cta': return isOpus ? opusCta : gemCta;
      default: return [];
    }
  };

  const handleAddFromTemplate = (type: SectionType, tpl: any) => {
    const sectionId = Math.random().toString(36).substr(2, 9);
    const deepCopy = JSON.parse(JSON.stringify(tpl.elements));
    deepCopy.forEach((el: any) => { el.id = Math.random().toString(36).substr(2, 9); });

    const newSection: SectionData = {
      id: sectionId, type,
      elements: deepCopy,
      background: { ...tpl.bg },
      styles: { paddingTop: '60px', paddingBottom: '60px' },
    };
    addSection(newSection);
    setActiveTab('layers');
    setSelectedCategory(null);
  };

  return (
    <aside className="w-64 border-r border-neutral-800 flex flex-col bg-neutral-950 h-full overflow-hidden">
      <div className="flex border-b border-neutral-800">
        <button onClick={() => { setActiveTab('layers'); setSelectedCategory(null); }}
          className={`flex-1 py-3 text-xs font-medium flex items-center justify-center gap-2 ${activeTab === 'layers' ? 'text-blue-500 bg-neutral-900 border-b-2 border-blue-500' : 'text-neutral-500 hover:text-neutral-300'}`}>
          <Layers className="w-3.5 h-3.5" /> 페이지 구조
        </button>
        <button onClick={() => { setActiveTab('library'); setSelectedCategory(null); }}
          className={`flex-1 py-3 text-xs font-medium flex items-center justify-center gap-2 ${activeTab === 'library' ? 'text-blue-500 bg-neutral-900 border-b-2 border-blue-500' : 'text-neutral-500 hover:text-neutral-300'}`}>
          <Library className="w-3.5 h-3.5" /> 섹션 템플릿
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
        {activeTab === 'layers' ? (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={(pageData?.sections || []).map(s => s.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-2">
                {pageData?.sections?.map((s, i) => (
                  <SortableLayer key={s.id} section={s} index={i} isSelected={selectedSectionId === s.id} onSelect={setSelectedSectionId} onRemove={removeSection} />
                ))}
                {(!pageData?.sections || pageData.sections.length === 0) && <p className="text-xs text-neutral-600 text-center py-12">추가된 섹션이 없습니다.</p>}
              </div>
            </SortableContext>
          </DndContext>
        ) : (
          <div className="space-y-4">
            {/* Style Flavor Switcher */}
            <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800 mb-4">
              <button 
                onClick={() => setFlavor('opus')}
                className={`flex-1 py-2 flex flex-col items-center gap-1 rounded-lg transition-all ${flavor === 'opus' ? 'bg-neutral-800 text-blue-500 shadow-lg' : 'text-neutral-600 hover:text-neutral-400'}`}
              >
                <BrainCircuit className="w-4 h-4" />
                <span className="text-[10px] font-bold">OPUS STYLE</span>
              </button>
              <button 
                onClick={() => setFlavor('gemini')}
                className={`flex-1 py-2 flex flex-col items-center gap-1 rounded-lg transition-all ${flavor === 'gemini' ? 'bg-indigo-900/30 text-indigo-400 shadow-lg border border-indigo-500/20' : 'text-neutral-600 hover:text-neutral-400'}`}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-bold">GEMINI STYLE</span>
              </button>
            </div>

            {selectedCategory ? (
              <div className="space-y-3 animate-in slide-in-from-right duration-200">
                <button onClick={() => setSelectedCategory(null)} className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white mb-2">
                  <ChevronLeft className="w-3.5 h-3.5" /> 뒤로가기
                </button>
                {getTemplateList(selectedCategory).map((tpl, i) => (
                  <button key={i} onClick={() => handleAddFromTemplate(selectedCategory, tpl)}
                    className="w-full flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-blue-500/50 transition-all text-left group">
                    <span className="text-xl">{tpl.preview}</span>
                    <span className="text-xs text-neutral-400 group-hover:text-neutral-200 font-medium">{tpl.name}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3 animate-in slide-in-from-left duration-200">
                {SECTION_CATEGORIES.map(cat => (
                  <button key={cat.type} onClick={() => setSelectedCategory(cat.type)}
                    className="w-full flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-blue-500/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{cat.emoji}</span>
                      <span className="text-xs text-neutral-400 group-hover:text-neutral-200 font-medium">{cat.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {activeTab === 'layers' && (
        <div className="p-4 border-t border-neutral-800">
          <button onClick={() => { setActiveTab('library'); setSelectedCategory(null); }}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-600/20">
            <Plus className="w-4 h-4" /> 새 섹션 추가하기
          </button>
        </div>
      )}
    </aside>
  );
}
