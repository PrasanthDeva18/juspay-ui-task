import { useTheme } from "../../context/theme-context";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ToggleTheme() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? (
        <IconSun size={20} className="text-yellow-400" />
      ) : (
        <IconMoon size={20} />
      )}
    </button>
  );
}
