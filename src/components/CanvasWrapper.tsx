"use client";

import dynamic from "next/dynamic";

const ScrollCanvas = dynamic(() => import("./ScrollCanvas"), { ssr: false });

export default function CanvasWrapper() {
  return <ScrollCanvas />;
}
