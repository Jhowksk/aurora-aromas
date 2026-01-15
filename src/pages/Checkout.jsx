import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, CreditCard, Truck, User, ShoppingBag } from "lucide-react";

function Checkout() {
  const { cart, clearCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const total = cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);
  const formatMoney = (v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  const handleFinalizarPedido = () => {
    alert("Pedido realizado com sucesso!");
    clearCart();
    navigate("/");
  };

  if (!user || cart.length === 0) return null;

  return (
    <section className="py-12 px-6 font-sans bg-white min-h-screen pb-40 lg:pb-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate("/carrinho")} 
          className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 hover:text-[#B07D62] transition-colors"
        >
          <ArrowLeft size={14} className="mr-2" /> Revisar Carrinho
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUNA ESQUERDA: FORMULÁRIOS */}
          <div className="lg:col-span-7 space-y-12">
            <h1 className="text-4xl font-serif text-[#B07D62]">Finalizar Compra</h1>

            {/* Dados Pessoais */}
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b pb-2">
                <User size={16} className="text-[#B07D62]" /> 01. Dados Pessoais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Nome Completo</label>
                  <input type="text" placeholder="Nome do titular" className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">CPF</label>
                  <input type="text" placeholder="000.000.000-00" className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Telefone</label>
                  <input type="text" placeholder="(00) 00000-0000" className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" />
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b pb-2">
                <Truck size={16} className="text-[#B07D62]" /> 02. Endereço de Entrega
              </h3>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">CEP</label>
                  <input type="text" placeholder="00000-000" className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" />
                </div>
                <div className="col-span-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Cidade</label>
                  <input type="text" placeholder="Sua cidade" className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" />
                </div>
                <div className="col-span-5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Rua</label>
                  <input type="text" placeholder="Logradouro" className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" />
                </div>
                <div className="col-span-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Nº</label>
                  <input type="text" placeholder="SN" className="w-full p-4 bg-[#F9F9F9] border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" />
                </div>
              </div>
            </div>

            {/* Pagamento */}
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b pb-2">
                <CreditCard size={16} className="text-[#B07D62]" /> 03. Pagamento
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 border border-gray-100 bg-[#F9F9F9] rounded-xl cursor-pointer">
                  <input type="radio" name="pay" className="accent-[#B07D62]" defaultChecked />
                  <span className="text-sm font-medium">Cartão de Crédito</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-100 bg-[#F9F9F9] rounded-xl cursor-pointer">
                  <input type="radio" name="pay" className="accent-[#B07D62]" />
                  <span className="text-sm font-medium">Pix</span>
                </label>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: RESUMO SEM IMAGEM */}
          <aside className="lg:col-span-5 w-full">
            <div className="bg-[#F9F9F9] p-8 rounded-2xl lg:sticky lg:top-28 border border-gray-100 shadow-sm">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-200 pb-4">
                Resumo da Compra
              </h4>
              
              <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
                    <div className="flex-1 pr-4">
                      <h5 className="text-[11px] font-bold uppercase tracking-tight text-gray-800 leading-tight">
                        {item.name}
                      </h5>
                      <p className="text-[10px] text-gray-400 uppercase mt-1">
                        Qtd: {item.quantity} un.
                      </p>
                    </div>
                    <div className="text-sm font-bold text-gray-700 whitespace-nowrap">
                      {formatMoney(Number(item.price) * Number(item.quantity))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-6 border-t border-gray-200">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatMoney(total)}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Frete</span>
                  <span className="text-green-600 font-medium tracking-widest uppercase text-[9px]">Grátis</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-6 border-t border-gray-200 mb-8">
                <span className="font-serif text-xl text-gray-800">Total</span>
                <span className="text-3xl font-serif font-bold text-[#B07D62]">
                  {formatMoney(total)}
                </span>
              </div>

              <button 
                onClick={handleFinalizarPedido}
                className="hidden lg:flex w-full bg-[#B07D62] text-white py-5 rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] items-center justify-center gap-3 hover:bg-[#A16B54] shadow-lg"
              >
                <ShieldCheck size={18} /> Finalizar Pedido
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* FOOTER MOBILE */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none mb-1">Total</p>
            <p className="text-xl font-bold text-[#B07D62] leading-none">{formatMoney(total)}</p>
          </div>
          <button 
            onClick={handleFinalizarPedido}
            className="flex-1 bg-[#B07D62] text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag size={16} /> Finalizar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;