"use client";

import { ReactNode, useMemo, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  // 1. 환경 변수 확인 (Vercel 설정 값)
  // 2. 없으면 운영 서버 주소(556)를 기본값으로 사용
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || "https://necessary-gopher-556.convex.cloud";

  useEffect(() => {
    setMounted(true);
  }, []);

  const convex = useMemo(() => {
    return new ConvexReactClient(convexUrl);
  }, [convexUrl]);

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
