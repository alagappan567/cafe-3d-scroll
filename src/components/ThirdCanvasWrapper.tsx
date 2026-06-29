"use client";

import dynamic from "next/dynamic";

const ThirdScrollCanvas = dynamic(() => import("./ThirdScrollCanvas"), { ssr: false });

export default function ThirdCanvasWrapper() {
  return <ThirdScrollCanvas />;
}
