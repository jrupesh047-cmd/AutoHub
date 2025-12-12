import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

import Dashboard from "../pages/Dashboard";
import Alert from "../pages/Alert";
import Trips from "../pages/Trips";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
