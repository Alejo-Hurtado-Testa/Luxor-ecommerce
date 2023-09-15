import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export function ThemeProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    const updatedCart = [...cartList];
    const existeItem = updatedCart.findIndex((produc) => produc.id === item.id);
    if (existeItem !== -1) {
      updatedCart[existeItem].quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }
    setCartList(updatedCart);
  };

  const removeItem = (itemId) => {
    const cartFiltrado = cartList.filter((item) => item.id !== itemId);
    setCartList(cartFiltrado);
  };

  const clearList = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    const fountItem = cartList.find((item) => item.id === id);
    if (fountItem) {
      return alert('Esta en carrito');
    }
  };

  return (
    <div>
      <CartContext.Provider
        value={{ cartList, addItem, removeItem, clearList }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}
