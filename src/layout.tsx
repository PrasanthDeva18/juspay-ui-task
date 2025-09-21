import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/sidebar/navbar";

function Layout({ children }) {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 text-gray-800 dark:text-gray-100">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
