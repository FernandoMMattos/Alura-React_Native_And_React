import { Navigate, Outlet } from "react-router-dom";
import autenticaStore from "../stores/autenticaStore.store";

const RotaPrivada = () => {
  const { estaAutenticado } = autenticaStore;

  return estaAutenticado ? <Outlet /> : <Navigate to="/login" />;
};

export default RotaPrivada;
