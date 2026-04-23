'use client';

import React from 'react';
import { Plus, Folder, Clock, MoreVertical } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [projects, setProjects] = React.useState([
    { id: '1', name: '프리미엄 가습기 상세페이지', updatedAt: '2시간 전', items: 12 },
    { id: '2', name: '무선 이어폰 런칭 기획', updatedAt: '1일 전', items: 8 },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
            <h1 className="text-lg font-bold">AI 상세페이지 편집기</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-neutral-100 rounded-full" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">내 프로젝트</h2>
            <p className="text-neutral-500 mt-1 text-sm">총 {projects.length}개의 프로젝트가 있습니다.</p>
          </div>
          <Link href="/editor">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95">
              <Plus className="w-5 h-5" />
              새 프로젝트
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group border border-neutral-100 rounded-2xl p-6 hover:shadow-xl hover:border-blue-100 transition-all cursor-pointer bg-white">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Folder className="w-6 h-6" />
                </div>
                <button className="p-2 hover:bg-neutral-50 rounded-full text-neutral-400">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-bold text-lg text-neutral-900 group-hover:text-blue-600 transition-colors">{project.name}</h3>
              <div className="flex items-center gap-4 mt-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {project.updatedAt}
                </div>
                <div className="flex items-center gap-1">
                  <span>섹션 {project.items}개</span>
                </div>
              </div>
            </div>
          ))}
          
          <Link href="/editor" className="border-2 border-dashed border-neutral-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-neutral-50 hover:border-blue-200 transition-all group">
            <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-300 group-hover:bg-blue-50 group-hover:text-blue-400 transition-all">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-neutral-400 group-hover:text-blue-500 transition-all">신규 프로젝트 만들기</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
