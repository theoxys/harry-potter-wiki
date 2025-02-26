// Tremor Button [v0.2.0]

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { cx } from "@/utils/tailwind";
import { Loader } from "lucide-react";

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md border px-3 py-2 text-center font-medium shadow-sm transition-all duration-100 ease-in-out",
    "cursor-pointer",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
  ],
  variants: {
    variant: {
      primary: ["border-transparent bg-primary text-neutral"],
      secondary: ["border-neutral/10 bg-element text-neutral"],
      darker: [
        "bg-background/80 backdrop-blur-sm text-neutral border-transparent",
      ],
      ghost: [
        "bg-transparent text-neutral hover:bg-primary/10 border-transparent",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        disabled={disabled || isLoading}
        tremor-id="tremor-raw"
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <Loader
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : "Loading"}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
