import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Trash2, AlertCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addToCart, removeFromCart, updateCartItemQuantity, user } = useContext(AppContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return sum + (price * qty);
  }, 0);

  const formatMoney = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

  const handleCheckoutClick = () => {
    if (user) {
      navigate("/checkout");
    } else {
      setShowModal(true);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-sans">
        <h2 className="text-2xl font-serif text-gray-300 mb-6">Seu carrinho está vazio</h2>
        <button 
          onClick={() => navigate("/")} 
          className="bg-[#B07D62] text-white px-8 py-3 rounded-lg font-bold uppercase text-[10px] tracking-widest"
        >
          Ver Produtos
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 px-6 font-sans bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-[#B07D62] mb-12">Carrinho de Compras</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LISTA DE PRODUTOS (Ocupa 8 colunas no desktop) */}
          <div className="lg:col-span-8">
            <div className="border-t border-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-8 border-b border-gray-100">
                  <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded shadow-sm flex-shrink-0" />
                  <div className="ml-8 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest">{item.name}</h3>
                        <p className="text-[10px] text-gray-400 uppercase mt-1">{item.category}</p>
                      </div>
                      <button onClick={() => updateCartItemQuantity(item.id, 0)} className="text-gray-300 hover:text-red-500 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end mt-6">
                      <div className="flex border border-gray-200 rounded overflow-hidden">
                        <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-gray-50 hover:bg-gray-100">-</button>
                        <input 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 text-center text-sm focus:outline-none bg-white appearance-none"
                        />
                        <button onClick={() => addToCart(item)} className="px-3 py-1 bg-gray-50 hover:bg-gray-100">+</button>
                      </div>
                      <p className="font-bold text-gray-800">{formatMoney(Number(item.price) * Number(item.quantity))}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUNA DO RESUMO (Ocupa 4 colunas no desktop) */}
          <aside className="lg:col-span-4 w-full">
            <div className="bg-[#F9F9F9] p-8 rounded-xl sticky top-28 border border-gray-100 shadow-sm">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Resumo do Pedido</h4>
              
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-gray-800">{formatMoney(total)}</span>
              </div>
              
              <div className="flex justify-between items-center py-6 border-t border-gray-200 mt-6 mb-8">
                <span className="font-serif text-lg text-gray-700">Total</span>
                <span className="text-2xl font-bold text-[#B07D62]">{formatMoney(total)}</span>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={handleCheckoutClick}
                  className="w-full bg-[#B07D62] text-white py-4 rounded-md font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#A16B54] transition-all shadow-md active:scale-95"
                >
                  Finalizar Compra
                </button>

                <button 
                  onClick={() => navigate("/")}
                  className="w-full py-3 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#B07D62] transition-colors"
                >
                  <ArrowLeft size={14} /> Continuar Comprando
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* MODAL DE AVISO */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100] p-6">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl">
            <AlertCircle size={48} className="text-[#B07D62] mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-800 mb-2">Acesso Restrito</h3>
            <p className="text-gray-500 text-sm mb-8">Para concluir sua compra e garantir a segurança dos seus dados, você precisa estar logado.</p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => navigate("/login")}
                className="w-full bg-[#B07D62] text-white py-3 rounded-lg font-bold uppercase text-[10px] tracking-widest"
              >
                Ir para Login
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;