export default function ContactSection() {
  const contacts = [
    { avatar: "https://i.pravatar.cc/30?img=11", name: "Natali Craig" },
    { avatar: "https://i.pravatar.cc/30?img=12", name: "Drew Cano" },
    { avatar: "https://i.pravatar.cc/30?img=13", name: "Orlando Diggs" },
    { avatar: "https://i.pravatar.cc/30?img=14", name: "Andi Lane" },
    { avatar: "https://i.pravatar.cc/30?img=15", name: "Kate Morrison" },
    { avatar: "https://i.pravatar.cc/30?img=16", name: "Koray Okumus" },
  ];

  return (
    <div className="sidebar-section">
      <h3 className="section-title">Contacts</h3>
      <ul className="section-list">
        {contacts.map((c, idx) => (
          <li key={idx} className="section-item">
            <img src={c.avatar} alt="" className="avatar" />
            <span className="text">{c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
