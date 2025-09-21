import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconChevronDown, IconStar } from "@tabler/icons-react";
import { type MenuItem } from "../../types/menu";
import { useFavorites } from "../../store/use-favorites";

interface Props {
  item: any;
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
  const location = useLocation();

  const isFavorite = favorites.includes(item.label);
  const hasChildren = !!item.children?.length;
  const isActive = item.path && location.pathname === item.path;

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
        className={`sidebar-item ${isActive ? "active" : ""}`}
        onClick={() => isOpen && hasChildren && setExpanded(!expanded)}
      >
        <div className="sidebar-item-left">
          {item.icon}
          {isOpen && item.path ? (
            <Link to={item.path} className="flex-1">
              <span>{item.label}</span>
            </Link>
          ) : (
            isOpen && <span>{item.label}</span>
          )}
        </div>

        {isOpen && (
          <div className="sidebar-item-right">
            {isFavorite && <IconStar size={14} />}
            {hasChildren && (
              <IconChevronDown
                size={14}
                className={`chevron ${expanded ? "rotated" : ""}`}
              />
            )}
          </div>
        )}
      </div>

      {/* Tooltip when closed */}
      {!isOpen && hasChildren && (
        <div className="tooltip absolute left-full top-0 ml-2 hidden group-hover:block bg-white border shadow-lg rounded-md min-w-[150px] z-50">
          {item.children.map((child: any) => (
            <SubItemTooltip key={child.label} item={child} />
          ))}
        </div>
      )}

      {/* Expanded children when open */}
      {expanded && isOpen && hasChildren && (
        <div className="sidebar-children">
          {item.children.map((child: any) => (
            <SubItem key={child.label} item={child} isSidebarOpen={isOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

function SubItem({
  item,
  isSidebarOpen,
}: {
  item: any;
  isSidebarOpen: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const { favorites } = useFavorites();
  const location = useLocation();

  const isFavorite = favorites.includes(item.label as any);
  const hasChildren = !!item.children?.length;
  const isActive = item.path && location.pathname === item.path;

  if (!hasChildren) {
    return (
      <Link
        to={item.path || "#"}
        className={`sidebar-leaf ${isActive ? "active" : ""}`}
      >
        {item.icon}
        {isSidebarOpen && <span>{item.label}</span>}
      </Link>
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
          {hasChildren && (
            <IconChevronDown
              size={12}
              className={`chevron ${expanded ? "rotated" : ""}`}
            />
          )}
        </div>
      </div>

      {expanded && isSidebarOpen && hasChildren && (
        <div className="sidebar-children nested">
          {item?.children.map((child: any) => (
            <Link
              key={child.label}
              to={child.path || "#"}
              className={`sidebar-leaf ${
                location.pathname === child.path ? "active" : ""
              }`}
            >
              {child.icon}
              <span>{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SubItemTooltip({ item }: { item: MenuItem }) {
  const { favorites } = useFavorites();
  const location = useLocation();
  const isFavorite: any = favorites.includes(item.label as any);
  const isActive = item.path && location.pathname === item.path;

  return (
    <Link
      to={item.path || "#"}
      className={`flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer ${
        isActive ? "bg-gray-200 font-semibold" : ""
      }`}
    >
      {item.icon}
      <span>{item.label}</span>
      {isFavorite && <IconStar size={12} />}
    </Link>
  );
}
