"use client";

import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="self-start mb-8 flex items-center gap-2 text-neutral hover:opacity-80 cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
