import { createContext, useContext, useEffect, useState } from "react";
import lang, { type LanguageDictionary } from "@/assets/lang";
import clsx from "clsx";
import { colorTransition } from "@/styles";

type Theme = "light" | "dark";
type LanguageOptions = keyof typeof lang;
type LanguageValue = LanguageDictionary;
interface HeaderContextValue {
  theme: Theme;
  language: LanguageOptions;
  languageValue: LanguageValue;
  handleThemeChange: (theme: Theme) => void;
  handleLanguageChange: (language: LanguageOptions) => void;
}

const HeaderContext = createContext<HeaderContextValue | undefined>({
  theme: "dark",
  handleThemeChange: () => {},
  language: "pt-BR",
  languageValue: lang["pt-BR"],
  handleLanguageChange: () => {},
});

const useLocalConfig = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useLocalConfig must be used within a LocalConfigProvider");
  }
  return context;
};

const setInitialLanguage = () => {
  const languageOptions: LanguageOptions[] = Object.keys(lang).map(
    (v) => v,
  ) as LanguageOptions[];

  const preferredLanguages = navigator.languages;

  console.log("Preferred Languages:", preferredLanguages); // Log the preferred languages

  for (const preferredLanguage of preferredLanguages) {
    const matchedLanguage = languageOptions.find(
      (lang) => lang === preferredLanguage,
    );
    console.log("Matched Language:", matchedLanguage); // Log the matched language

    if (matchedLanguage) {
      return matchedLanguage;
    }
  }

  console.log("No matched language found. Defaulting to:", languageOptions[0]); // Log the default language

  return languageOptions[0];
};

const LocalConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  const [language, setLanguage] = useState<LanguageOptions>(setInitialLanguage);
  const [languageValue, setLanguageValue] = useState<LanguageValue>(
    lang[language],
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleLanguageChange = (newLanguage: LanguageOptions) => {
    setLanguage(newLanguage);
    setLanguageValue(lang[newLanguage]);
    console.log("newLang", newLanguage);
    console.log("langValue", lang[newLanguage]);
  };
  const handleThemeChange = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <HeaderContext.Provider
      value={{
        theme,
        handleThemeChange,
        language,
        handleLanguageChange,
        languageValue,
      }}
    >
      <div
        className={clsx(
          "h-screen bg-gray-200 dark:bg-gray-900",
          colorTransition,
          theme === "dark" ? "dark" : "",
        )}
      >
        {children}
      </div>
    </HeaderContext.Provider>
  );
};

export { useLocalConfig, LocalConfigProvider };
