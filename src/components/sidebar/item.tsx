import type { JSX } from "react";

interface SidebarItemProps {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
}

export default function SidebarItem({ icon, label, isOpen }: SidebarItemProps) {
  return (
    <div
      className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-200 
      dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
    >
      <span>{icon}</span>
      {isOpen && <span>{label}</span>}
    </div>
  );
}
