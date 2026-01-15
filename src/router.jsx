import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import MinhaConta from "./pages/MinhaConta";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Products /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/recuperar-senha", element: <RecuperarSenha /> },
      { path: "/carrinho", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/admin", element: <Admin /> },
      { path: "/contact", element: <Contact /> },
      { path: "/minha-conta", element: <MinhaConta /> },
    ],
  },
]);

export default router;
