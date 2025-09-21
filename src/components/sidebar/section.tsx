import { useState } from "react";
import { IconChevronDown, IconStar } from "@tabler/icons-react";
import { type MenuItem } from "../../types/menu";
import { useFavorites } from "../../store/use-favorites";

interface Props {
  item: MenuItem;
  isOpen: boolean;
  isHeading?: boolean;
}

export default function SidebarSection({
  item,
  isOpen,
  isHeading = false,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const { favorites } = useFavorites();
  const isFavorite = favorites.includes(item.label);

  // Headings are non-expandable
  if (isHeading) {
    return (
      <div className="sidebar-heading">
        {item.icon}
        {isOpen && <span>{item.label}</span>}
      </div>
    );
  }

  return (
    <div className="sidebar-section relative group">
      <div
        className="sidebar-item"
        onClick={() => isOpen && item.children && setExpanded(!expanded)}
      >
        <div className="sidebar-item-left">
          {item.icon}
          {isOpen && <span>{item.label}</span>}
        </div>

        {isOpen && (
          <div className="sidebar-item-right">
            {isFavorite && <IconStar size={14} />}
            {item.children && (
              <IconChevronDown
                size={14}
                className={`chevron ${expanded ? "rotated" : ""}`}
              />
            )}
          </div>
        )}
      </div>

      {/* Sub-items as tooltip when sidebar is closed */}
      {!isOpen && item.children && (
        <div className="tooltip absolute left-full top-0 ml-2 hidden group-hover:block bg-white border shadow-lg rounded-md min-w-[150px] z-50">
          {item.children.map((child, idx) => (
            <SubItemTooltip key={idx} item={child} />
          ))}
        </div>
      )}

      {/* Expanded sub-items inside sidebar when open */}
      {expanded && isOpen && item.children && (
        <div className="sidebar-children">
          {item.children.map((child, idx) => (
            <SubItem key={idx} item={child} isSidebarOpen={isOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

// SubItem component
function SubItem({
  item,
  isSidebarOpen,
}: {
  item: MenuItem;
  isSidebarOpen: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const { favorites } = useFavorites();
  const isFavorite = favorites.includes(item.label);

  if (!item.children) {
    return (
      <div className="sidebar-leaf">
        {item.icon}
        {isSidebarOpen && <span>{item.label}</span>}
      </div>
    );
  }

  return (
    <div className="sidebar-subitem">
      <div className="sidebar-item" onClick={() => setExpanded(!expanded)}>
        <div className="sidebar-item-left">
          {item.icon}
          {isSidebarOpen && <span>{item.label}</span>}
        </div>

        <div className="sidebar-item-right">
          {isFavorite && <IconStar size={12} />}
          {item.children && (
            <IconChevronDown
              size={12}
              className={`chevron ${expanded ? "rotated" : ""}`}
            />
          )}
        </div>
      </div>

      {expanded && isSidebarOpen && item.children && (
        <div className="sidebar-children nested">
          {item.children.map((child, idx) => (
            <div key={idx} className="sidebar-leaf">
              {child.icon}
              <span>{child.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Tooltip version for collapsed sidebar
function SubItemTooltip({ item }: { item: MenuItem }) {
  const { favorites } = useFavorites();
  const isFavorite = favorites.includes(item.label);

  return (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
      {item.icon}
      <span>{item.label}</span>
      {isFavorite && <IconStar size={12} />}
    </div>
  );
}
