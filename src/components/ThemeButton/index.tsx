import { useLocalConfig } from "@/context/useLocalConfig";
import { colorTransition } from "@/styles";
import clsx from "clsx";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeButton = () => {
  const { theme, handleThemeChange } = useLocalConfig();

  const isDark = theme === "dark";

  if (!isDark) {
    return (
      <>
        <MdOutlineDarkMode
          className={clsx(
            "cursor-pointer dark:text-gray-300 overflow-clip text-gray-800 size-6",
            colorTransition,
          )}
          onClick={() => handleThemeChange("dark")}
        />
      </>
    );
  } else {
    return (
      <MdOutlineLightMode
        className={clsx(
          "cursor-pointer dark:text-gray-300 size-6",
          colorTransition,
        )}
        onClick={() => handleThemeChange("light")}
      />
    );
  }
};

export default ThemeButton;
