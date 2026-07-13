import { colorTransition } from "@/styles";
import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      className={clsx(
        "rounded px-2 py-1 border border-gray-500 bg-transparent dark:text-gray-300",
        colorTransition,
      )}
      {...props}
    />
  );
};

export default Input;
