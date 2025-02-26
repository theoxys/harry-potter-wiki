import { cx } from "@/utils/tailwind";
import * as React from "react";

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cx(
        "flex h-9 w-full rounded-md border border-neutral/10 bg-element px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral placeholder:text-neutral/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
};
Input.displayName = "Input";

export { Input };
