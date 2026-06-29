"use client";

import dynamic from "next/dynamic";

const FifthScrollCanvas = dynamic(() => import("./FifthScrollCanvas"), { ssr: false });

export default function FifthCanvasWrapper() {
  return <FifthScrollCanvas />;
}
