'use client';

import React, { useState } from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { 
  Plus, Trash2, Link as LinkIcon, Move, 
  Type, Image as ImageIcon, Video, Box 
} from 'lucide-react';
import { ElementType } from '@/lib/types';

interface Props {
  sectionId: string;
  elementId: string;
  children: React.ReactNode;
}

export default function EditableAsset({ sectionId, elementId, children }: Props) {
  const { 
    selectedElementId, 
    setSelectedElementId, 
    removeElement, 
    addElement,
    pageData 
  } = useEditorStore();
  
  const [showAddMenu, setShowAddMenu] = useState(false);
  const isSelected = selectedElementId === elementId;

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeElement(sectionId, elementId);
  };

  const handleAddElement = (type: ElementType) => {
    const section = pageData.sections.find(s => s.id === sectionId);
    if (!section) return;
    
    const currentIndex = section.elements.findIndex(el => el.id === elementId);
    
    const defaultContent = {
      text: '새로운 텍스트를 입력하세요.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
      video: '',
      button: '새 버튼',
      spacer: '30px',
      icon: 'Star'
    };

    const newElement = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: defaultContent[type as keyof typeof defaultContent] || '',
      styles: { 
        fontSize: type === 'text' ? '16px' : undefined,
        textAlign: 'center' as const,
        margin: '10px 0'
      }
    };
    
    addElement(sectionId, newElement, currentIndex + 1);
    setShowAddMenu(false);
  };

  return (
    <div 
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElementId(elementId);
      }}
      className={`group relative transition-all duration-200 ${
        isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:ring-1 hover:ring-blue-300'
      }`}
    >
      {children}
      
      {/* Element Toolbar */}
      <div className={`absolute -top-10 left-0 flex items-center gap-1 bg-blue-600 text-white p-1 rounded shadow-lg transition-opacity z-50 ${
        isSelected ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button className="p-1 hover:bg-blue-700 rounded transition-colors" title="이동">
          <Move className="w-3.5 h-3.5" />
        </button>
        <div className="w-px h-3 bg-blue-500 mx-1" />
        <button className="p-1 hover:bg-blue-700 rounded transition-colors" title="링크 설정">
          <LinkIcon className="w-3.5 h-3.5" />
        </button>
        <button 
          onClick={handleDelete}
          className="p-1 hover:bg-red-500 rounded transition-colors" 
          title="삭제"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Add Button & Menu */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-40">
        <button 
          onClick={(e) => { e.stopPropagation(); setShowAddMenu(!showAddMenu); }}
          className="w-6 h-6 bg-white border border-blue-500 text-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-blue-500 hover:text-white transition-all shadow-sm"
        >
          <Plus className={`w-4 h-4 transition-transform ${showAddMenu ? 'rotate-45' : ''}`} />
        </button>

        {showAddMenu && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-neutral-100 p-2 flex gap-2 animate-in fade-in zoom-in duration-200 whitespace-nowrap">
            <AddMenuItem icon={<Type />} label="텍스트" onClick={() => handleAddElement('text')} />
            <AddMenuItem icon={<ImageIcon />} label="이미지" onClick={() => handleAddElement('image')} />
            <AddMenuItem icon={<Video />} label="영상" onClick={() => handleAddElement('video')} />
            <AddMenuItem icon={<Box />} label="여백" onClick={() => handleAddElement('spacer')} />
          </div>
        )}
      </div>
    </div>
  );
}

function AddMenuItem({ icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="flex flex-col items-center gap-1 p-2 hover:bg-blue-50 rounded-lg transition-colors text-neutral-600 hover:text-blue-600"
    >
      {React.cloneElement(icon, { className: 'w-4 h-4' })}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
