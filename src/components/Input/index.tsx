import { colorTransition } from "@/styles";
import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        className={clsx("dark:text-gray-300", colorTransition)}
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        className={clsx(
          "rounded px-2 py-1 border border-gray-500 bg-transparent dark:text-gray-300",
          colorTransition,
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
