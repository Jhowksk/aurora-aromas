import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react"; 

function Login() {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mantendo sua lógica: enviamos um objeto com os dados do usuário
    // Adicionei 'role: admin' para você conseguir testar as telas administrativas
    login({ name: "Jhonathan", email: email, role: "admin" }); 
    navigate("/"); // Redirecionando para Home após login
  };
  
  return (
    <section className="flex justify-center items-center min-h-[85vh] bg-white px-6 font-sans">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md border border-gray-100">
        
        {/* Título com a fonte Serif do projeto */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-[#B07D62] mb-2">Entrar</h1>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">Acesse sua conta Aurora</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-100 bg-[#F9F9F9] p-4 rounded-xl focus:ring-1 focus:ring-[#B07D62] outline-none transition-all font-light text-sm"
              required
            />
          </div>
          
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              Senha
            </label>
            <input
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border border-gray-100 bg-[#F9F9F9] p-4 rounded-xl focus:ring-1 focus:ring-[#B07D62] outline-none transition-all font-light text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B07D62] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#A16B54] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <LogIn size={18} /> Acessar Conta
          </button>
        </form>

        {/* Links de auxílio padronizados */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-[11px] text-gray-500 uppercase tracking-wider">
            Não tem conta?{" "}
            <button
              onClick={() => navigate("/cadastro")}
              className="text-[#B07D62] font-bold hover:underline ml-1"
            >
              Cadastre-se
            </button>
          </p>
          <p className="text-[11px]">
            <button
              onClick={() => navigate("/recuperar-senha")}
              className="text-gray-400 uppercase tracking-tighter hover:text-[#B07D62] transition-colors"
            >
              Esqueci minha senha
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;