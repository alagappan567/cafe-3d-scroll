"use client";

import dynamic from "next/dynamic";

const CookingScrollCanvas = dynamic(() => import("./CookingScrollCanvas"), { ssr: false });

export default function CookingCanvasWrapper() {
  return <CookingScrollCanvas />;
}
