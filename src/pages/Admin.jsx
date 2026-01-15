import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PlusCircle, Trash2, Edit, Save, X, Image as ImageIcon } from "lucide-react";

function Admin() {
  // Consumindo produtos e a função de atualização do contexto global
  const { products, updateProducts } = useContext(AppContext);
  
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const initialFormState = { name: "", price: "", category: "velas", image: "", description: "" };
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedProducts;

    if (editingId) {
      // Lógica de Edição: mapeia a lista global
      updatedProducts = products.map(p => 
        p.id === editingId ? { ...formData, id: editingId, price: Number(formData.price) } : p
      );
      setEditingId(null);
    } else {
      // Lógica de Adição: gera novo ID e concatena na lista global
      const newProduct = { ...formData, id: Date.now(), price: Number(formData.price) };
      updatedProducts = [newProduct, ...products];
    }

    // Atualiza o Contexto Global (que por sua vez atualiza o localStorage)
    updateProducts(updatedProducts);
    setFormData(initialFormState);
    setShowForm(false);
  };

  const startEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      const updatedProducts = products.filter(p => p.id !== id);
      updateProducts(updatedProducts);
    }
  };

  return (
    <main className="min-h-screen bg-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header de Gestão */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-4xl font-serif text-[#B07D62]">Catálogo</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-2">Gerenciamento de Inventário Aurora</p>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData(initialFormState); }}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
              showForm ? "bg-gray-100 text-gray-500" : "bg-[#B07D62] text-white shadow-lg shadow-[#B07D62]/20"
            }`}
          >
            {showForm ? <X size={16} /> : <PlusCircle size={16} />} 
            {showForm ? "Cancelar Edição" : "Adicionar Produto"}
          </button>
        </div>

        {/* Formulário Refinado */}
        {showForm && (
          <div className="mb-16 animate-in fade-in slide-in-from-top-4 duration-300">
            <form onSubmit={handleSubmit} className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Caminho da Imagem</label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input name="image" value={formData.image} onChange={handleInputChange} type="text" className="w-full p-4 pl-12 bg-white border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" placeholder="URL da imagem..." required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Categoria</label>
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full p-4 bg-white border border-gray-100 rounded-xl text-[10px] font-bold uppercase tracking-widest focus:outline-[#B07D62]">
                  <option value="velas">Velas</option>
                  <option value="difusores">Difusores</option>
                  <option value="sprays">Sprays</option>
                  <option value="lembrancinhas">Lembrancinhas</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nome do Produto</label>
                <input name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full p-4 bg-white border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Preço Unitário</label>
                <input name="price" value={formData.price} onChange={handleInputChange} type="number" step="0.01" className="w-full p-4 bg-white border border-gray-100 rounded-xl text-sm focus:outline-[#B07D62]" required />
              </div>

              <div className="md:col-span-3">
                <button type="submit" className="w-full md:w-auto bg-gray-900 text-white px-12 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black transition-all">
                  <Save size={16} /> {editingId ? "Confirmar Alterações" : "Publicar Produto"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tabela Administrativa consome 'products' do Contexto */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-[#F9F9F9] border-b border-gray-100">
              <tr>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Referência</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Produto</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Preço</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-4">
                    <span className="text-[10px] font-mono text-gray-400">ID-{product.id.toString().slice(-4)}</span>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <img src={product.image} alt="" className="w-12 h-14 rounded-lg object-cover border border-gray-100 shadow-sm" />
                      <div>
                        <p className="font-bold text-gray-800 text-xs uppercase tracking-tight">{product.name}</p>
                        <p className="text-[9px] text-[#B07D62] font-bold uppercase tracking-widest">{product.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-serif text-gray-800">
                    R$ {Number(product.price).toFixed(2)}
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => startEdit(product)} className="p-2.5 text-gray-400 hover:text-gray-800 bg-gray-50 rounded-lg transition-all border border-transparent hover:border-gray-200">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => deleteProduct(product.id)} className="p-2.5 text-gray-400 hover:text-red-500 bg-gray-50 rounded-lg transition-all border border-transparent hover:border-red-100">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Admin;