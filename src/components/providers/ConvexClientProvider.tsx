"use client";

import { ReactNode, useMemo, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  // 환경 변수 인식이 안 될 경우를 대비해 실제 서버 주소를 직접 입력합니다.
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || "https://dependable-kingfisher-269.convex.cloud";

  useEffect(() => {
    setMounted(true);
  }, []);

  const convex = useMemo(() => {
    // 하드코딩된 주소나 환경 변수 둘 중 하나라도 있으면 클라이언트를 생성합니다.
    return new ConvexReactClient(convexUrl);
  }, [convexUrl]);

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
