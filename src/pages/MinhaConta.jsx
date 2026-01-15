import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { User, Package, LogOut, Settings } from "lucide-react";

function MinhaConta() {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  // Redireciona se não houver usuário (segurança extra)
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-[#F9F9F9] py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#B07D62] mb-8">Minha Conta</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* MENU LATERAL */}
          <aside className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 bg-[#F2E8CF] rounded-full flex items-center justify-center text-[#B07D62] mb-3">
                <User size={40} />
              </div>
              <h2 className="font-bold text-gray-800">{user.name}</h2>
              <p className="text-xs text-gray-400 uppercase tracking-widest">{user.email}</p>
            </div>

            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-[#B07D62] bg-[#F2E8CF]/50 rounded-lg">
                <Package size={18} /> Meus Pedidos
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition">
                <Settings size={18} /> Dados Cadastrais
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition mt-4"
              >
                <LogOut size={18} /> Sair da Conta
              </button>
            </nav>
          </aside>

          {/* CONTEÚDO PRINCIPAL */}
          <section className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-6 uppercase text-xs tracking-widest">Últimos Pedidos</h3>
              
              {/* ESTADO VAZIO (SIMULADO) */}
              <div className="border-2 border-dashed border-gray-100 rounded-xl py-12 flex flex-col items-center">
                <Package size={48} className="text-gray-200 mb-4" />
                <p className="text-gray-400 text-sm">Você ainda não realizou nenhum pedido.</p>
                <button 
                  onClick={() => navigate("/")}
                  className="mt-4 text-[#B07D62] font-bold text-xs uppercase tracking-tighter hover:underline"
                >
                  Ir às compras
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default MinhaConta;