import { useLocalConfig } from "@/context";
import { colorTransition } from "../../styles";
import clsx from "clsx";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
  const { language, handleLanguageChange } = useLocalConfig();
  return (
    <header
      className={clsx(
        "bg-stone-300 dark:bg-gray-800 dark:text-white h-16 flex items-center px-5 min-w-full min-h-20",
        className,
        colorTransition,
      )}
    >
      {children}
      <select
        value={language}
        onChange={(e) => {
          e.preventDefault();

          handleLanguageChange(e.target.value as "pt-BR" | "en-US");
        }}
      >
        Lingua
        <option label="pt-BR" value={"pt-BR"} />
        <option label="en-US" value={"en-US"} />
      </select>
    </header>
  );
};
