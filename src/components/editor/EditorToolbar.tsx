'use client';

import React from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { 
  Save, 
  Play, 
  Undo2, 
  Redo2, 
  Smartphone, 
  Monitor, 
  Share2,
  ChevronLeft
} from 'lucide-react';

import Link from 'next/link';

export default function EditorToolbar() {
  const { undo, redo, pageData, previewMode, setPreviewMode } = useEditorStore();

  return (
    <header className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-950 z-50">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-neutral-800 rounded-md transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div className="h-6 w-px bg-neutral-800" />
        <h1 className="font-semibold text-sm truncate max-w-[200px]">
          {pageData.title}
        </h1>
      </div>

      <div className="flex items-center bg-neutral-900 rounded-lg p-1">
        <button 
          onClick={() => setPreviewMode('mobile')}
          className={`p-1.5 px-3 rounded-md transition-colors ${previewMode === 'mobile' ? 'bg-neutral-800 shadow-sm text-white' : 'text-neutral-500 hover:text-white'}`}
        >
          <Smartphone className="w-4 h-4" />
        </button>
        <button 
          onClick={() => setPreviewMode('desktop')}
          className={`p-1.5 px-3 rounded-md transition-colors ${previewMode === 'desktop' ? 'bg-neutral-800 shadow-sm text-white' : 'text-neutral-500 hover:text-white'}`}
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 mr-4">
          <button 
            onClick={undo}
            className="p-2 hover:bg-neutral-800 rounded-md disabled:opacity-30"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button 
            onClick={redo}
            className="p-2 hover:bg-neutral-800 rounded-md disabled:opacity-30"
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>

        <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-neutral-800 rounded-md text-sm font-medium transition-colors">
          <Save className="w-4 h-4" />
          저장
        </button>
        
        <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors">
          <Share2 className="w-4 h-4" />
          배포하기
        </button>
      </div>
    </header>
  );
}
