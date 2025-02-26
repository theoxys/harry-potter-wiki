"use client";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="6px"
      color="#000"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <NuqsAdapter>{children}</NuqsAdapter>
    </ProgressProvider>
  );
};

export default Providers;
