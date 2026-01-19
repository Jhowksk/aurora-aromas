import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, LogOut, LayoutDashboard } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const { cart, user, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const controls = useAnimation();
  const prevTotal = useRef(0);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (totalItems !== prevTotal.current) {
      controls.start({
        scale: [1, 1.3, 1],
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      prevTotal.current = totalItems;
    }
  }, [totalItems, controls]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { path: "/", label: "Início" },
    { path: "/contact", label: "Contato" }
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        <Link to="/" className="text-2xl font-bold text-[#B07D62] tracking-wide font-serif">
          Aurora Aromas
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {/* Links de Navegação */}
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-200 px-3 py-1 rounded-md text-[11px] uppercase font-bold tracking-widest ${
                  isActive 
                    ? "text-[#B07D62] bg-[#F2E8CF]/80" 
                    : "text-gray-600 hover:text-[#B07D62] hover:bg-[#F2E8CF]/40"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Link Admin (Dinâmico) */}
          {user?.role === "admin" && (
            <NavLink 
              to="/admin" 
              className="flex items-center gap-1 text-[11px] font-bold text-[#B07D62] uppercase tracking-widest hover:opacity-70"
            >
              <LayoutDashboard size={14} /> Admin
            </NavLink>
          )}

          {/* Área do Usuário */}
          {user ? (
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-gray-100">
              <NavLink to="/minha-conta" className="text-xs font-bold text-gray-800 hover:text-[#B07D62]">
                Olá, {user.name.split(' ')[0]}
              </NavLink>
              <button 
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Sair"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <NavLink 
              to="/login" 
              className="bg-[#B07D62] text-white px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#A16B54] transition ml-4"
            >
              Entrar
            </NavLink>
          )}

          {/* Carrinho com Animação */}
          <motion.div animate={controls} className="relative ml-4">
            <Link to="/carrinho" className="text-[#B07D62] flex items-center">
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B07D62] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;