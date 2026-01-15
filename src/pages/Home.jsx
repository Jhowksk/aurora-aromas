import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <main className="bg-white min-h-screen rounded-2xl">
      {/* Hero ocupa o topo com o fundo bege claro dele */}
      <Hero />
      
      {/* Seção de Features em fundo branco para limpar o visual */}
      <Features />

      {/* Listagem de produtos em container centralizado */}
      <div id="produtos" className="container mx-auto pb-20">
        <ProductList />
      </div>
    </main>
  );
}

export default Home;