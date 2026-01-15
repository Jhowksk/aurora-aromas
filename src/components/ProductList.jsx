import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import products from "../data/products.json";
import ProductCard from "./ProductCard";

function ProductList() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const categories = ["todos", "velas", "difusores", "sprays", "lembrancinhas"];

  const filteredProducts = activeCategory === "todos"
    ? products
    : products.filter(item => item.category === activeCategory);

  return (
    <section className="py-2 bg-white">
    

      <div className="flex flex-wrap justify-center gap-3 mb-12 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-xs font-semibold tracking-widest transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-[#B07D62] text-white border-[#B07D62] shadow-md"
                : "bg-white text-gray-400 border-gray-200 hover:border-[#B07D62] hover:text-[#B07D62]"
            } uppercase`} // Categorias em caixa alta e fonte menor ficam mais profissionais
          >
            {cat}
          </button>
        ))}
      </div>
      

      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductCard product={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default ProductList;