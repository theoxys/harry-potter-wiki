"use client";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <ProgressProvider
        height="6px"
        color="#000"
        options={{ showSpinner: false }}
        shallowRouting
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default Providers;
