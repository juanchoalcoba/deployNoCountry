import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import DashboardPaciente from "../pages/DashboardPaciente";
import Login from "../pages/Login";
import FirstStep from "../pages/FirstStep";
import SecondStep from "../pages/SecondStep";
import ThirdStep from "../pages/ThirdStep";


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
      <Route 
      path="/secondstep" 
      element={<SecondStep />} 
      />
      <Route 
      path="/thirdstep" 
      element={<ThirdStep />} 
      />
    </Routes>
  );
};

export default Routers;
