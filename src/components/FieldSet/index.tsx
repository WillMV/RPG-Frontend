import { colorTransition } from "@/styles";
import clsx from "clsx";
import type React from "react";

interface FieldSetProps {
  legend?: string;
  children: React.ReactNode[];
}

const FieldSet = ({ legend, children }: FieldSetProps) => {
  return (
    <fieldset className="flex flex-col gap-4 w-full max-w-sm p-6 border rounded-[5px] border-gray-500">
      {legend && (
        <legend className={clsx("px-2 dark:text-gray-300", colorTransition)}>
          {legend}
        </legend>
      )}
      {children}
    </fieldset>
  );
};
export default FieldSet;
