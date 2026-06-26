"use client";

import dynamic from "next/dynamic";

const SiteAnimations = dynamic(() => import("./SiteAnimations"), { ssr: false });

export default function SiteAnimationsWrapper() {
  return <SiteAnimations />;
}
