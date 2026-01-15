import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function RecuperarSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Um link de recuperação foi enviado para ${email}`);
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 font-sans">
      <div className="w-full max-w-sm">
        
        {/* Cabeçalho do formulário */}
        <div className="mb-10">
          <h1 className="text-3xl font-serif text-gray-800 mb-2">Recuperar Senha</h1>
          <p className="text-sm text-gray-500 font-light">
            Informe seu e-mail para receber as instruções de redefinição.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-lg text-sm focus:outline-none focus:border-[#B07D62] transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B07D62] text-white py-4 rounded-lg font-bold uppercase text-[10px] tracking-widest hover:bg-[#A16B54] transition-all active:scale-95 shadow-sm"
          >
            Enviar Link
          </button>
        </form>

        {/* Links de navegação inferiores */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={14} /> Voltar para o login
          </button>
        </div>

      </div>
    </section>
  );
}

export default RecuperarSenha;