import { ChangeEvent } from "react";

import { Check } from "phosphor-react";
import { cn } from "../utils/cn";

type CheckboxProps = {
  label?: string;
  checked: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export default function Checkbox({
  label,
  checked,
  onChange,
  className,
}: CheckboxProps) {
  return (
    <div className="flex items-center ">
      <label
        id="checkbox"
        className={cn(
          "relative flex items-center cursor-pointer p-[10px] ",
          className
        )}
      >
        <input
          id="checkbox"
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-400/70  hover:border-gray-400 transition-colors"
          checked={checked}
          onChange={(event) => onChange(event)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <Check
            weight="bold"
            className="w-5 h-5 font-bold text-gray-900/70 "
          />
        </span>
      </label>
      {label && (
        <label
          className="pl-3 font-light text-zinc-700 cursor-pointer"
          htmlFor="check"
        >
          {label}
        </label>
      )}
    </div>
  );
}
