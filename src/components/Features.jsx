import { Truck, ShieldCheck, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";

function Features() {
  const data = [
    { icon: <Leaf className="text-[#B07D62]" />, title: "100% Artesanal", desc: "Produtos feitos à mão com insumos naturais." },
    { icon: <Truck className="text-[#B07D62]" />, title: "Entrega Rápida", desc: "Enviamos para todo o Brasil com cuidado." },
    { icon: <ShieldCheck className="text-[#B07D62]" />, title: "Compra Segura", desc: "Seus dados protegidos em todo o processo." },
    { icon: <Heart className="text-[#B07D62]" />, title: "Feito com Amor", desc: "Aromas que criam conexões reais." },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-[#F2E8CF]/30 transition-colors"
          >
            <div className="mb-4 p-3 bg-[#F2E8CF] rounded-full">
              {item.icon}
            </div>
            <h3 className="font-bold text-[#3E3E3E] mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;