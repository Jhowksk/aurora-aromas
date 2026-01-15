import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(AppContext);

  const formatMoney = (value) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group">
      {/* Container da Imagem com Aspect Ratio fixo */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badge de categoria discreto */}
        <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-[#B07D62] text-[9px] font-bold px-2 py-1 rounded uppercase tracking-tighter shadow-sm">
          {product.category}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-sm font-bold text-gray-800 mb-1 leading-tight uppercase tracking-widest">
          {product.name}
        </h3>
        
        {/* Preço */}
        <p className="text-[#B07D62] font-serif text-xl  mb-3">
          {formatMoney(product.price)}
        </p>
        
        {/* Descrição com limite de linhas */}
        <p className="text-gray-400 text-xs mb-6 font-light line-clamp-2 italic leading-relaxed">
          {product.description || "Fragrância exclusiva da coleção Aurora Aromas."}
        </p>

        {/* Botão posicionado sempre ao final do card */}
        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full bg-[#B07D62] text-white py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#A16B54] transition-all active:scale-[0.98] shadow-md shadow-[#B07D62]/10"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;