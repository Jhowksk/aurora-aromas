import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#F2E8CF]/30 border-t border-[#B07D62]/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* COLUNA 1: SOBRE A MARCA */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-[#B07D62]">Aurora Aromas</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Criamos experiências olfativas únicas através de produtos artesanais, 
            feitos para transformar seu ambiente e eternizar seus momentos.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-[#B07D62] hover:text-[#A16B54] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-[#B07D62] hover:text-[#A16B54] transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* COLUNA 2: LINKS RÁPIDOS */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-800 text-xs uppercase tracking-[0.2em]">Navegação</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-[#B07D62] text-sm transition-colors">Início</Link>
            </li>
            <li>
              <Link to="/carrinho" className="text-gray-500 hover:text-[#B07D62] text-sm transition-colors">Meu Carrinho</Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-500 hover:text-[#B07D62] text-sm transition-colors">Entrar / Cadastro</Link>
            </li>
          </ul>
        </div>

        {/* COLUNA 3: CONTATO */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-800 text-xs uppercase tracking-[0.2em]">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-gray-500">
              <Mail size={16} className="text-[#B07D62]" /> contato@auroraaromas.com
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-500">
              <Phone size={16} className="text-[#B07D62]" /> (11) 99999-9999
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-500">
              <MapPin size={16} className="text-[#B07D62]" /> São Paulo, Brasil
            </li>
          </ul>
        </div>
      </div>

      {/* LINHA FINAL: COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center md:text-left">
          © 2026 <span className="text-[#B07D62] font-semibold">Aurora Aromas</span>. Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          Desenvolvido por Jhonathan | Inspiração e fragrância em cada detalhe.
        </p>
      </div>
    </footer>
  );
}

export default Footer;