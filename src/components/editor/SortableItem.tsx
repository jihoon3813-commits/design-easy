'use client';

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useEditorStore } from '@/store/useEditorStore';

interface Props {
  id: string;
  children: React.ReactNode;
}

export function SortableItem({ id, children }: Props) {
  const { 
    attributes, 
    listeners, 
    setNodeRef, 
    transform, 
    transition,
    isDragging
  } = useSortable({ id });
  
  const { selectedSectionId, setSelectedSectionId } = useEditorStore();
  const isSelected = selectedSectionId === id;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      onClick={() => setSelectedSectionId(id)}
      className={`group relative outline-none transition-all ${
        isSelected ? 'ring-2 ring-blue-500 ring-inset z-10' : 'hover:ring-1 hover:ring-blue-300 hover:ring-inset'
      } ${isDragging ? 'opacity-50 grayscale shadow-2xl scale-[1.02]' : ''}`}
    >
      {/* Drag Handle Overlay */}
      {isSelected && !isDragging && (
        <div 
          {...attributes} 
          {...listeners}
          className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-12 bg-blue-500 rounded-r-full cursor-grab active:cursor-grabbing z-20 shadow-sm"
        />
      )}
      
      {children}
    </div>
  );
}
