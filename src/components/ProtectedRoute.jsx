import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ isAdminRequired = false }) => {
  const { user } = useContext(AppContext);

  // Se não estiver logado, manda para o login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se exigir admin e o usuário não for, manda para home ou acesso negado
  if (isAdminRequired && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Se estiver tudo certo, renderiza a rota filha (Outlet)
  return <Outlet />;
};

export default ProtectedRoute;