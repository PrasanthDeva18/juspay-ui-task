import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/sidebar/navbar";

function Layout({ children }: any) {
  return (
    <div className="flex  bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
