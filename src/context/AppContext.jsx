import { createContext, useState, useEffect } from "react";
import productsData from "../data/products.json";

// Criação do contexto
export const AppContext = createContext();

function AppProvider({ children }) {
  // Estado de Produtos - Inicializa com localStorage ou com o JSON padrão
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : productsData;
  });

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // Carregar dados do localStorage na montagem do componente
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedUser = JSON.parse(localStorage.getItem("user")) || null;
    setCart(storedCart);
    setUser(storedUser);
  }, []);

  // Persistência: Carrinho
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Persistência: Usuário
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Persistência: Produtos (Essencial para o Admin funcionar)
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // --- FUNÇÕES DE PRODUTOS (ADMIN) ---
  
  const updateProducts = (newProductsList) => {
    setProducts(newProductsList);
  };

  // --- FUNÇÕES DO CARRINHO ---

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const updateCartItemQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => setCart([]);

  // --- FUNÇÕES DE AUTENTICAÇÃO ---
  
  const login = (usuario) => setUser(usuario);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AppContext.Provider
      value={{
        products,
        updateProducts,
        cart,
        user,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;