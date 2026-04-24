'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import PropertyPanel from './PropertyPanel';
import { useEditorStore } from '@/store/useEditorStore';
import { 
  Monitor, Smartphone, Save, FolderOpen, Download, 
  RotateCcw, RotateCw, X, Trash2, Clock, ArrowLeft 
} from 'lucide-react';
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from 'next/link';

interface EditorLayoutProps {
  projectId?: string;
}

export default function EditorLayout({ projectId }: EditorLayoutProps) {
  const { 
    previewMode, setPreviewMode, 
    undo, redo, canUndo, canRedo,
    pageData, setPageData
  } = useEditorStore();

  // Convex Hooks
  const savedProjects = useQuery(api.projects.getProjects) || [];
  // Get specific project if projectId is provided
  const currentProject = useQuery(
    api.projects.getProjects
  )?.find(p => p._id === projectId);

  const saveProjectMutation = useMutation(api.projects.saveProject);
  const updateProjectMutation = useMutation(api.projects.updateProject);
  const deleteProjectMutation = useMutation(api.projects.deleteProject);

  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  
  // Load project data when projectId changes
  useEffect(() => {
    if (currentProject) {
      setPageData(JSON.parse(JSON.stringify(currentProject.data)));
      setProjectName(currentProject.name);
    }
  }, [currentProject, setPageData]);

  const handleSave = async () => {
    const name = projectName || (currentProject?.name) || `새 프로젝트 ${new Date().toLocaleTimeString()}`;
    
    if (projectId) {
      // Update existing
      await updateProjectMutation({ 
        id: projectId as any, 
        name, 
        data: pageData 
      });
    } else {
      // Save as new
      await saveProjectMutation({ name, data: pageData });
    }
    
    setProjectName('');
    setShowSaveModal(false);
    alert('저장되었습니다.');
  };

  const handleLoad = (data: any) => {
    setPageData(JSON.parse(JSON.stringify(data)));
    setShowLoadModal(false);
  };

  const handleDelete = async (e: React.MouseEvent, id: any) => {
    e.stopPropagation();
    if (confirm('정말로 이 프로젝트를 삭제하시겠습니까?')) {
      await deleteProjectMutation({ id });
    }
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById('canvas-container');
    if (!element) return;
    
    setIsExporting(true);
    try {
      const { toPng } = await import('html-to-image');
      const dataUrl = await toPng(element, {
        quality: 1.0,
        pixelRatio: 2, 
        skipFonts: false,
        backgroundColor: '#ffffff',
      });
      
      const link = document.createElement('a');
      link.download = `${projectName || 'landing-page'}-${previewMode}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Image export failed:', err);
      alert('이미지 생성 중 오류가 발생했습니다.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Top Navigation */}
      <header className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-950 z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="p-2 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-all">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-black text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xs tracking-tighter text-white">GEMINI BUILDER</h1>
                {currentProject && <span className="text-[10px] text-neutral-500 font-medium truncate max-w-[150px]">{currentProject.name}</span>}
              </div>
            </div>
          </div>
          
          <div className="h-4 w-px bg-neutral-800" />
          
          <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800">
            <button 
              onClick={() => setPreviewMode('desktop')}
              className={`p-1.5 rounded-md transition-all ${previewMode === 'desktop' ? 'bg-blue-600 text-white shadow-lg' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setPreviewMode('mobile')}
              className={`p-1.5 rounded-md transition-all ${previewMode === 'mobile' ? 'bg-blue-600 text-white shadow-lg' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 mr-2">
            <button onClick={undo} disabled={!canUndo} className={`p-1.5 rounded ${canUndo ? 'text-neutral-300 hover:bg-neutral-800' : 'text-neutral-700 cursor-not-allowed'}`}><RotateCcw className="w-4 h-4" /></button>
            <button onClick={redo} disabled={!canRedo} className={`p-1.5 rounded ${canRedo ? 'text-neutral-300 hover:bg-neutral-800' : 'text-neutral-700 cursor-not-allowed'}`}><RotateCw className="w-4 h-4" /></button>
          </div>

          <button 
            onClick={() => setShowLoadModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <FolderOpen className="w-4 h-4" />
            프로젝트 열기
          </button>
          
          <button 
            onClick={projectId ? handleSave : () => setShowSaveModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-xs font-bold transition-all"
          >
            <Save className="w-4 h-4 text-blue-500" />
            {projectId ? '업데이트' : '저장하기'}
          </button>

          <button 
            onClick={handleDownloadImage}
            disabled={isExporting}
            className={`flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold transition-all shadow-lg shadow-blue-600/20 ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Download className={`w-4 h-4 ${isExporting ? 'animate-bounce' : ''}`} />
            {isExporting ? '생성 중...' : '이미지 다운로드'}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Canvas />
        <PropertyPanel />
      </div>

      {/* Save Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
              <Save className="w-5 h-5" /> 프로젝트 클라우드 저장
            </h3>
            <p className="text-xs text-neutral-500 mb-4">현재 작업 내용이 Convex 데이터베이스에 안전하게 저장됩니다.</p>
            <input 
              autoFocus
              type="text" 
              placeholder="프로젝트 이름을 입력하세요"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all mb-6 text-white"
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowSaveModal(false)} className="px-6 py-2.5 text-xs font-bold text-neutral-500 hover:text-white transition-colors">취소</button>
              <button onClick={handleSave} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-bold transition-all text-white">서버에 저장</button>
            </div>
          </div>
        </div>
      )}

      {/* Load Modal */}
      {showLoadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-blue-500" /> 클라우드 프로젝트 목록
              </h3>
              <button onClick={() => setShowLoadModal(false)} className="p-2 hover:bg-neutral-800 rounded-full transition-colors"><X className="w-5 h-5" /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {savedProjects.length > 0 ? (
                savedProjects.map((project: any) => (
                  <div 
                    key={project._id}
                    className="flex items-center justify-between p-4 bg-black border border-neutral-800 rounded-xl hover:border-blue-500/50 transition-all group"
                  >
                    <div className="flex flex-col gap-1 cursor-pointer flex-1" onClick={() => handleLoad(project.data)}>
                      <span className="font-bold text-sm group-hover:text-blue-500 transition-colors text-white">{project.name}</span>
                      <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                        <Clock className="w-3 h-3" />
                        {new Date(project.updatedAt).toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <button 
                        onClick={() => handleLoad(project.data)}
                        className="px-3 py-1.5 bg-neutral-800 hover:bg-blue-600 rounded-lg text-[11px] font-bold transition-all text-white"
                       >
                         불러오기
                       </button>
                       <button 
                        onClick={(e) => handleDelete(e, project._id)}
                        className="p-1.5 text-neutral-600 hover:text-red-500 transition-colors"
                       >
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                    <FolderOpen className="w-8 h-8 text-neutral-600" />
                  </div>
                  <p className="text-neutral-500 text-sm">클라우드에 저장된 프로젝트가 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
