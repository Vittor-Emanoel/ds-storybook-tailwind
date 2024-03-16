import { Check } from "phosphor-react";
import React, { ChangeEvent, ReactNode } from "react";
import { cn } from "../utils/cn";

type CheckboxProps = {
  children: ReactNode;
};

const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
  return <div className="flex items-center">{children}</div>;
};

type CheckboxInputLabelProps = {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const CheckboxInput: React.FC<CheckboxInputLabelProps> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <label
      className={cn(
        "relative flex items-center cursor-pointer p-[10px]",
        className
      )}
    >
      <input
        type="checkbox"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-400/70 hover:border-gray-400 transition-colors"
        checked={checked}
        onChange={onChange}
      />
      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <Check weight="bold" className="w-5 h-5 font-bold text-gray-900/70" />
      </span>
    </label>
  );
};

type CheckboxLabelProps = {
  children: ReactNode;
};

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ children }) => {
  return (
    <label className="pl-3 font-light text-zinc-700 cursor-pointer">
      {children}
    </label>
  );
};

export default {
  Root: Checkbox,
  Input: CheckboxInput,
  Label: CheckboxLabel,
};
