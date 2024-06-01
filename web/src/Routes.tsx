import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/Base";
import PaginaHome from "./pages/Home";
import PaginaBaseFormulario from "./pages/BaseForm";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RotaPrivada from "./utils/RotaPrivada";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<PaginaHome />} />
          <Route element={<RotaPrivada />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<PaginaBaseFormulario />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
