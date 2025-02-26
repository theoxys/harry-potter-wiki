// Tremor Drawer [v0.0.2]

import * as React from "react";
import * as DrawerPrimitives from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/Button";
import { cx } from "@/utils/tailwind";
import { X } from "lucide-react";

const Drawer = (
  props: React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Root>
) => {
  return <DrawerPrimitives.Root tremor-id="tremor-raw" {...props} />;
};
Drawer.displayName = "Drawer";

const DrawerTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitives.Trigger>) => {
  return <DrawerPrimitives.Trigger className={cx(className)} {...props} />;
};
DrawerTrigger.displayName = "Drawer.Trigger";

const DrawerClose = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitives.Close>) => {
  return <DrawerPrimitives.Close className={cx(className)} {...props} />;
};
DrawerClose.displayName = "Drawer.Close";

const DrawerPortal = DrawerPrimitives.Portal;

DrawerPortal.displayName = "DrawerPortal";

const DrawerOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitives.Overlay>) => {
  return (
    <DrawerPrimitives.Overlay
      className={cx(
        "fixed inset-0 z-50 overflow-y-auto",
        "bg-neutral/50",
        "data-[state=closed]:animate-hide data-[state=open]:animate-dialogOverlayShow",
        className
      )}
      {...props}
      style={{
        animationDuration: "400ms",
        animationFillMode: "backwards",
      }}
    />
  );
};

const DrawerContent = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitives.Content>) => {
  return (
    <DrawerPortal>
      <DrawerOverlay>
        <DrawerPrimitives.Content
          className={cx(
            "fixed inset-y-2 z-50 mx-auto flex w-[95vw] flex-1 flex-col overflow-y-auto rounded-md border p-4 shadow-lg focus:outline-none max-sm:inset-x-2 sm:inset-y-2 sm:right-2 sm:max-w-lg sm:p-6",
            "border-neutral/10",
            "bg-element",
            "data-[state=closed]:animate-drawerSlideRightAndFade data-[state=open]:animate-drawerSlideLeftAndFade",
            className
          )}
          {...props}
        />
      </DrawerOverlay>
    </DrawerPortal>
  );
};

const DrawerHeader = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cx(
        "flex items-start justify-between gap-x-4 border-b border-neutral/10 pb-4",
        className
      )}
      {...props}
    >
      <div className="mt-1 flex flex-col gap-y-1">{children}</div>
      <DrawerPrimitives.Close asChild>
        <Button
          variant="ghost"
          className="aspect-square p-1 hover:bg-neutral/10"
        >
          <X className="size-6" aria-hidden="true" />
        </Button>
      </DrawerPrimitives.Close>
    </div>
  );
};

const DrawerTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitives.Title>) => (
  <DrawerPrimitives.Title
    className={cx("text-base font-semibold", "text-neutral", className)}
    {...props}
  />
);

const DrawerBody = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cx("flex-1 py-4", className)} {...props} />;
};

const DrawerDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitives.Description>) => {
  return (
    <DrawerPrimitives.Description
      className={cx("text-neutral/80", className)}
      {...props}
    />
  );
};

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        "flex flex-col-reverse border-t border-neutral/10 pt-4 sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
};

DrawerFooter.displayName = "DrawerFooter";

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
};
