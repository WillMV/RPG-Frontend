import { colorTransition } from "@/styles";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  typeButton?: "button" | "text";
}

const Button = ({
  children,
  className,
  typeButton = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        colorTransition,
        "cursor-pointer",
        typeButton === "button"
          ? "bg-gray-900 hover:bg-gray-800 dark:bg-gray-300 hover:dark:bg-gray-400 dark:text-gray-900 text-white font-semibold py-2 px-4 rounded"
          : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 font-semibold py-2 px-4 rounded",
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
