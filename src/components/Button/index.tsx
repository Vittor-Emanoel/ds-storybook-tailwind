import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return <button className="text-blue-500" {...props} />;
}
