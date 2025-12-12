import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="p-6 bg-gray-100 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
