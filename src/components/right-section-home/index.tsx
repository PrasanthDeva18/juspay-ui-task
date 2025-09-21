import NotificationSection from "./notification/notification";
import ActivitySection from "./activities/activities-section";
import ContactSection from "./contacts/contacts-section";
import "./style.css";

export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <NotificationSection />
      <ActivitySection />
      <ContactSection />
    </aside>
  );
}
