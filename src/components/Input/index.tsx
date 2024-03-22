import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?(value: string): void;
}

export function Select({
  className,
  placeholder,
  options,
  error,
  onChange,
  value,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
    setIsOpen(false);
  }

  return (
    <div className="relative" ref={selectRef}>
      <label
        className={cn(
          "absolute z-10 top-6 -translate-y-1/2 left-3 text-gray-700 pointer-events-none",
          selectedValue &&
            "text-xs left-[13px] top-2 transition-all translate-y-0"
        )}
      >
        {placeholder}
      </label>

      <div
        className={cn(
          "bg-white w-full rounded-lg border cursor-pointer border-gray-500 px-3 h-[52px] text-gray-800 focus:border-gray-800 transition-all outline-none text-left relative pt-5",
          error && "!border-red-900",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue}

        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="z-[99] p-2 overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] absolute w-full">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="p-2 text-gray-800 text-sm cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-900">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 12H6m12 0a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
