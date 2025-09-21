import { IconBug, IconUser, IconBell } from "@tabler/icons-react";

export default function NotificationSection() {
  const notifications = [
    {
      icon: <IconBug size={16} />,
      text: "You have a bug that needs...",
      time: "Just now",
    },
    {
      icon: <IconUser size={16} />,
      text: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: <IconBug size={16} />,
      text: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      icon: <IconBell size={16} />,
      text: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  return (
    <div className="sidebar-section">
      <h3 className="section-title">Notifications</h3>
      <ul className="section-list">
        {notifications.map((n, idx) => (
          <li key={idx} className="section-item">
            <span className="icon">{n.icon}</span>
            <div>
              <p className="text">{n.text}</p>
              <span className="time">{n.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
