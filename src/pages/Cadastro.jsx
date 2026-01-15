import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

function Cadastro() {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula o registro e loga o usuário
    login({ name: nome, email: email });
    navigate("/carrinho");
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-white px-6 font-sans">
      <div className="w-full max-w-md">
        {/* Cabeçalho do Formulário */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F9F9F9] mb-4">
            <UserPlus size={28} className="text-[#B07D62]" />
          </div>
          <h1 className="text-4xl font-serif text-[#B07D62]">Criar Conta</h1>
          <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">
            Junte-se à nossa comunidade
          </p>
        </div>

        {/* Formulário */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Ex: Jhonathan Silva"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62] transition-all"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62] transition-all"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
              Senha
            </label>
            <input
              type="password"
              placeholder="No mínimo 6 caracteres"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62] transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B07D62] text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#A16B54] transition-all shadow-sm active:scale-[0.98]"
          >
            Finalizar Cadastro
          </button>
        </form>

        {/* Link para Login */}
        <div className="mt-10 text-center border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-500">
            Já possui uma conta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#B07D62] font-bold uppercase text-[10px] tracking-widest hover:underline ml-1"
            >
              Entrar
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;