
export default function ActivitySection() {
  const activities = [
    {
      avatar: "https://i.pravatar.cc/30?img=1",
      text: "You have a bug that needs...",
      time: "Just now",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=2",
      text: "Released a new version",
      time: "59 minutes ago",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=3",
      text: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=4",
      text: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=5",
      text: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  return (
    <div className="sidebar-section">
      <h3 className="section-title">Activities</h3>
      <ul className="section-list">
        {activities.map((a, idx) => (
          <li key={idx} className="section-item">
            <img src={a.avatar} alt="" className="avatar" />
            <div>
              <p className="text">{a.text}</p>
              <span className="time">{a.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
