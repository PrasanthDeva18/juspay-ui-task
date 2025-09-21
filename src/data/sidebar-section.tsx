import {
  IconLayoutDashboard,
  IconUser,
  IconFileText,
  IconShoppingCart,
  IconBriefcase,
  IconBook,
  IconStar,
  IconClock,
  IconFolder,
  IconUsers,
  IconFileDescription,
} from "@tabler/icons-react";
import { type MenuItem } from "../types/menu";

export const tabs = [
  {
    label: "Favorites",
    icon: <IconStar size={18} />,
    items: [
      {
        label: "Overview",
        icon: <IconLayoutDashboard size={16} />,
        // subItems: ["Dashboard 1", "Dashboard 2"],
      },
      {
        label: "Projects",
        icon: <IconBriefcase size={16} />,
        // subItems: ["Project A", "Project B"],
      },
    ],
  },
  {
    label: "Recently",
    icon: <IconClock size={18} />,
    items: [
      {
        label: "Recent Project",
        icon: <IconBriefcase size={16} />,
        // subItems: ["Task 1", "Task 2"],
      },
      {
        label: "Recent Dashboard",
        icon: <IconLayoutDashboard size={16} />,
        // subItems: ["Dash 1"],
      },
    ],
  },
];

export const sidebarMenu: MenuItem[] = [
  // {
  //   label: "Favorites",
  //   icon: <IconStar size={18} />,
  //   children: [
  //     { label: "Overview", icon: <IconLayoutDashboard size={16} /> },
  //     { label: "Projects", icon: <IconBriefcase size={16} /> },
  //     { label: "Recently", icon: <IconClock size={16} /> },
  //   ],
  // },
  {
    label: "Dashboards",
    icon: <IconLayoutDashboard size={18} />,
    isHeading: true, // mark as heading
    children: [
      { label: "Default", icon: <IconLayoutDashboard size={16} /> },
      { label: "eCommerce", icon: <IconShoppingCart size={16} /> },
      { label: "Projects", icon: <IconBriefcase size={16} /> },
      { label: "Online Courses", icon: <IconBook size={16} /> },
    ],
  },
  {
    label: "Pages",
    icon: <IconFileText size={18} />,
    isHeading: true, // mark as heading

    children: [
      {
        label: "User Profile",
        icon: <IconUser size={16} />,
        children: [
          { label: "Overview", icon: <IconLayoutDashboard size={14} /> },
          { label: "Projects", icon: <IconBriefcase size={14} /> },
          { label: "Campaigns", icon: <IconFileDescription size={14} /> },
          { label: "Documents", icon: <IconFolder size={14} /> },
          { label: "Followers", icon: <IconUsers size={14} /> },
        ],
      },
      { label: "Account", icon: <IconUser size={16} /> },
      { label: "Corporate", icon: <IconBriefcase size={16} /> },
      { label: "Blog", icon: <IconBook size={16} /> },
      { label: "Social", icon: <IconUsers size={16} /> },
    ],
  },
];
