import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  // Função para rolagem suave
  const handleScroll = () => {
    const section = document.getElementById("produtos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#F2E8CF] rounded-3xl overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#3E3E3E] leading-tight mb-6">
            Sinta a Essência do <br />
            <span className="text-[#B07D62]">Bem-Estar</span>
          </h1>
          
          <p className="font-sans text-lg text-gray-700 mb-8 max-w-lg">
            Transforme seu ambiente com fragrâncias exclusivas e artesanais, 
            feitas para eternizar momentos especiais.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleScroll} // Alterado: agora ele rola a página
              className="bg-[#B07D62] text-white px-8 py-4 rounded-full font-sans font-bold flex items-center gap-2 hover:bg-[#A16B54] transition-all shadow-lg active:scale-95 uppercase text-xs tracking-widest"
            >
              Conhecer Produtos <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <img 
            src="/hero-woman.png"   
            alt="Produtos Aromáticos"
            className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;