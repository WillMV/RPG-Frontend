import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface HeaderContextValue {
  theme: Theme;
  handleThemeChange: (theme: Theme) => void;
}

const HeaderContext = createContext<HeaderContextValue | undefined>({
  theme: "dark",
  handleThemeChange: () => {},
});

const useLocalConfig = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useLocalConfig must be used within a LocalConfigProvider");
  }
  return context;
};

const LocalConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <HeaderContext.Provider value={{ theme, handleThemeChange }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </HeaderContext.Provider>
  );
};

export { useLocalConfig, LocalConfigProvider };
