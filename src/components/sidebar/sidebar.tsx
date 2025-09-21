import { useState, useEffect, useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { sidebarMenu } from "../../data/sidebar-section";
import SidebarSection from "./section";
import "./sidebar.css";
import { tabs } from "../../data/sidebar-section";

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Favorites");

  const currentTab = tabs.find((t) => t.label === activeTab);

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const tooltipRef = useRef<HTMLDivElement>(null);
  useClickOutside(tooltipRef as any, () => setTooltipOpen(false));

  return (
    <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-header">
        {isOpen && <h1 className="logo">ByeWind</h1>}
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IconChevronLeft size={20} />
          ) : (
            <IconChevronRight size={20} />
          )}
        </button>
      </div>
      {/* <div className="sidebar-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`sidebar-tab ${tab.label === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </div>
        ))}
      </div> */}

      <div className="sidebar-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`sidebar-tab group relative ${
              tab.label === activeTab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.icon}
            {isOpen && <span>{tab.label}</span>}

            {/* Tooltip when collapsed */}
            {!isOpen && (
              <div className="tooltip absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-white border shadow-lg rounded-md min-w-[100px] z-50 hidden group-hover:block">
                <div className="p-2 flex items-center gap-2">{tab.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="sidebar-tab-items">
        {currentTab?.items.map((item) => (
          <div key={item.label} className="sidebar-tab-item group relative">
            <div className="tab-item-main flex items-center gap-2 px-3 py-2 cursor-pointer rounded hover:bg-gray-100">
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </div>

            {/* Tooltip when sidebar is collapsed */}
            {!isOpen && (
              <div className="tooltip absolute left-full top-0 ml-2 bg-white border shadow-lg rounded-md min-w-[150px] z-50 hidden group-hover:block">
                <div className="p-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <nav className="sidebar-menu">
        {sidebarMenu.map((section, idx) => (
          <SidebarSection key={idx} item={section} isOpen={isOpen} />
        ))}
      </nav>
    </aside>
  );
}
