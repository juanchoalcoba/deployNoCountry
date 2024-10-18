import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import DashboardPaciente from "../pages/DashboardPaciente";
import Login from "../pages/Login";
import FirstStep from "../pages/FirstStep";


const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/dashboardpaciente"
        element={<DashboardPaciente />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route 
      path="/firststep" 
      element={<FirstStep />} 
      />
    </Routes>
  );
};

export default Routers;
