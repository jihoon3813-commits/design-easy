"use client";

import { ReactNode, useMemo, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  // 컴포넌트가 브라우저에 마운트된 후에만 렌더링을 제어하기 위함 (Hydration 에러 방지)
  useEffect(() => {
    setMounted(true);
  }, []);

  const convex = useMemo(() => {
    if (!convexUrl) {
      return null;
    }
    return new ConvexReactClient(convexUrl);
  }, [convexUrl]);

  // 서버 사이드 렌더링 중이거나 아직 마운트 전이라면 아무것도 렌더링하지 않거나 기본 구조 유지
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  if (!convex) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-yellow-900/30 text-yellow-500 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">Convex 서버 연결 필요</h2>
        <p className="text-neutral-400 text-sm mb-8 max-w-md">
          백엔드 연동을 완료하려면 터미널에서 <strong>npx convex dev</strong>를 실행하여 프로젝트를 연결해야 합니다.
        </p>
        <div className="bg-neutral-900 p-4 rounded-xl font-mono text-xs text-blue-400 border border-neutral-800">
          npx convex dev
        </div>
      </div>
    );
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
