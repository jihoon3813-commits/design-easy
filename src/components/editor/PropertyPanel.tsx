'use client';

import React, { useRef } from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { 
  Settings2, Type, Image as ImageIcon, Layout, Box, 
  Palette, Video, Maximize2, MoveVertical, Link as LinkIcon,
  AlignLeft, AlignCenter, AlignRight, Bold, Trash2, Upload,
  Type as TypeIcon, Baseline, ArrowUpDown, Languages
} from 'lucide-react';

export default function PropertyPanel() {
  const { 
    selectedSectionId, 
    selectedElementId, 
    pageData, 
    updateSection, 
    updateElement,
    removeElement 
  } = useEditorStore();
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedSection = pageData.sections.find(s => s.id === selectedSectionId);
  const selectedElement = selectedSection?.elements.find(el => el.id === selectedElementId);

  if (!selectedSectionId || !selectedSection) {
    return (
      <aside className="w-80 border-l border-neutral-800 bg-neutral-950 p-6 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mb-4">
          <Settings2 className="w-6 h-6 text-neutral-600" />
        </div>
        <p className="text-neutral-500 text-sm">편집할 섹션이나 요소를 선택하세요.</p>
      </aside>
    );
  }

  const handleElementUpdate = (updates: any) => {
    if (selectedElementId) {
      updateElement(selectedSectionId, selectedElementId, updates);
    }
  };

  const handleStyleUpdate = (key: string, value: string) => {
    if (selectedElement) {
      handleElementUpdate({
        styles: { ...selectedElement.styles, [key]: value }
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleElementUpdate({ content: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="w-80 border-l border-neutral-800 bg-neutral-950 flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings2 className="w-4 h-4 text-blue-500" />
          <h2 className="text-sm font-semibold uppercase tracking-wider">
            {selectedElement ? '에셋 편집' : '섹션 편집'}
          </h2>
        </div>
        {selectedElement && (
          <button 
            onClick={() => removeElement(selectedSectionId, selectedElementId!)}
            className="p-1.5 hover:bg-red-900/30 text-red-500 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        {selectedElement ? (
          <>
            {/* Content Section */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">내용</label>
              {selectedElement.type === 'text' && (
                <textarea 
                  value={selectedElement.content}
                  onChange={(e) => handleElementUpdate({ content: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-blue-500 min-h-[80px] outline-none"
                />
              )}
              {(selectedElement.type === 'image' || selectedElement.type === 'video') && (
                <div className="space-y-3">
                   <div className="aspect-video bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group relative">
                      {selectedElement.content ? (
                         <img src={selectedElement.content} className="w-full h-full object-cover" />
                      ) : (
                         <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600">
                           <Upload className="w-6 h-6 mb-2" />
                           <span className="text-[10px]">클릭하여 파일 업로드</span>
                         </div>
                      )}
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <Upload className="w-6 h-6 text-white" />
                      </button>
                      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
                   </div>
                   <input 
                    type="text" 
                    value={selectedElement.content}
                    onChange={(e) => handleElementUpdate({ content: e.target.value })}
                    placeholder="또는 URL을 입력하세요"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-xs text-white outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Typography Section */}
            {selectedElement.type === 'text' && (
              <div className="space-y-4 pt-6 border-t border-neutral-800">
                <label className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">타이포그래피</label>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-neutral-500">크기 (px)</span>
                    <input 
                      type="text" 
                      value={selectedElement.styles.fontSize?.replace('px', '') || ''}
                      onChange={(e) => handleStyleUpdate('fontSize', `${e.target.value}px`)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-neutral-500">정렬</span>
                    <div className="flex bg-neutral-900 rounded border border-neutral-800 p-0.5">
                      <button onClick={() => handleStyleUpdate('textAlign', 'left')} className={`flex-1 p-1 rounded ${selectedElement.styles.textAlign === 'left' ? 'bg-neutral-800 text-blue-500' : 'text-neutral-500'}`}><AlignLeft className="w-3.5 h-3.5 mx-auto" /></button>
                      <button onClick={() => handleStyleUpdate('textAlign', 'center')} className={`flex-1 p-1 rounded ${selectedElement.styles.textAlign === 'center' ? 'bg-neutral-800 text-blue-500' : 'text-neutral-500'}`}><AlignCenter className="w-3.5 h-3.5 mx-auto" /></button>
                      <button onClick={() => handleStyleUpdate('textAlign', 'right')} className={`flex-1 p-1 rounded ${selectedElement.styles.textAlign === 'right' ? 'bg-neutral-800 text-blue-500' : 'text-neutral-500'}`}><AlignRight className="w-3.5 h-3.5 mx-auto" /></button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] text-neutral-500"><Baseline className="w-3 h-3" /> 자간</div>
                    <input 
                      type="text" 
                      value={selectedElement.styles.letterSpacing || '0'}
                      onChange={(e) => handleStyleUpdate('letterSpacing', e.target.value)}
                      placeholder="-0.5px"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] text-neutral-500"><ArrowUpDown className="w-3 h-3" /> 행간</div>
                    <input 
                      type="text" 
                      value={selectedElement.styles.lineHeight || '1.5'}
                      onChange={(e) => handleStyleUpdate('lineHeight', e.target.value)}
                      placeholder="1.5"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                   <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-lg border border-neutral-800">
                      <span className="text-[10px] text-neutral-500">글자색</span>
                      <input 
                        type="color" 
                        value={selectedElement.styles.color || '#000000'}
                        onChange={(e) => handleStyleUpdate('color', e.target.value)}
                        className="w-6 h-6 rounded border-none bg-transparent cursor-pointer"
                      />
                   </div>
                   <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-lg border border-neutral-800">
                      <span className="text-[10px] text-neutral-500">배경색</span>
                      <input 
                        type="color" 
                        value={selectedElement.styles.backgroundColor || '#ffffff'}
                        onChange={(e) => handleStyleUpdate('backgroundColor', e.target.value)}
                        className="w-6 h-6 rounded border-none bg-transparent cursor-pointer"
                      />
                   </div>
                </div>
              </div>
            )}

            {/* Link & Common Styling */}
            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <label className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">공통 스타일 & 링크</label>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-400"><LinkIcon className="w-3 h-3" /> 연결 링크</div>
                <input 
                  type="text" 
                  value={selectedElement.link?.url || ''}
                  onChange={(e) => handleElementUpdate({ link: { url: e.target.value, target: '_blank' } })}
                  placeholder="https://example.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-xs text-white outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </>
        ) : (
          /* Section Editor Mode */
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-neutral-500 uppercase block tracking-wider">섹션 배경</label>
              <div className="flex gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800">
                <button 
                  onClick={() => updateSection(selectedSectionId, { background: { ...selectedSection.background, type: 'color' } })}
                  className={`flex-1 py-1.5 text-[10px] rounded transition-all ${selectedSection.background?.type === 'color' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  색상
                </button>
                <button 
                  onClick={() => updateSection(selectedSectionId, { background: { ...selectedSection.background, type: 'image' } })}
                  className={`flex-1 py-1.5 text-[10px] rounded transition-all ${selectedSection.background?.type === 'image' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  이미지
                </button>
              </div>
              <input 
                type={selectedSection.background?.type === 'color' ? 'color' : 'text'}
                value={selectedSection.background.value}
                onChange={(e) => updateSection(selectedSectionId, { background: { ...selectedSection.background, value: e.target.value } })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-xs text-white outline-none"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-neutral-800 bg-neutral-900/50">
        <p className="text-[10px] text-neutral-400 text-center italic">
          Tip: 모든 에셋은 드래그하여 순서를 바꿀 수 있습니다.
        </p>
      </div>
    </aside>
  );
}
