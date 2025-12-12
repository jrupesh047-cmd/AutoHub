import { NavLink } from "react-router-dom";

const activeLink = "bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md";
const inactiveLink = "text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md";

const SideBar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white border-r">
      <div className="p-6 font-bold text-xl">AutoPlantHub</div>

      <nav className="flex flex-col gap-2 px-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
          Dashboard
        </NavLink>

        <NavLink to="/Alert" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
          Alerts
        </NavLink>

        <NavLink to="/Trips" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
          Trips
        </NavLink>

        <NavLink to="/Users" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
          Users
        </NavLink>

        <NavLink to="/Settings" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
