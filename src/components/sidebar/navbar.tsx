import ToggleTheme from "./theme"

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold dark:text-white">Dashboard</h2>
      <ToggleTheme />
    </header>
  );
}
