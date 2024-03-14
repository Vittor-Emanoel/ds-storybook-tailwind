import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

export interface TextProps {
  size?: "sm" | "md " | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md ", children, asChild }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md ",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
