"use client";

import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="ghost">
      <ArrowLeft className="w-4 h-4" />
      Back
    </Button>
  );
}
