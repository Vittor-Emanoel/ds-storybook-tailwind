import { Check } from "phosphor-react";
import { ChangeEvent } from "react";
import { cn } from "../../utils/cn";

export type CheckboxInputProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
};

export default function CheckboxInput({
  checked,
  onChange,
  className,
  label,
  disabled,
}: CheckboxInputProps) {
  return (
    <div className="flex items-center">
      <label
        htmlFor="checkbox"
        className={cn(
          "relative flex items-center cursor-pointer p-[10px] ",
          disabled && "cursor-not-allowed",
          className
        )}
      >
        <input
          type="checkbox"
          id="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed appearance-none rounded-md border-2 border-zinc-400/70 hover:border-zinc-400 transition-colors"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={checked}
          aria-disabled={disabled}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <Check
            weight="bold"
            className={cn(
              "w-5 h-5 font-bold text-orange-700",
              disabled && "text-zinc-400 opacity-50"
            )}
          />
        </span>
      </label>

      {label && (
        <span
          className={cn(
            "pl-3 font-light text-zinc-700 cursor-pointer",
            disabled && "opacity-50"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
