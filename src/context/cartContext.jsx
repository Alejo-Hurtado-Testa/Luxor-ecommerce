import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);

export function ThemeProvider({ children }) {
  const [quant, setQuant] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState();

  let cantidadItems = 0;
  useEffect(() => {
    cartList.forEach((element) => {
      cantidadItems += element.quantity;
    });
    setQuant(cantidadItems);
  }, [cartList]);

  const calcPriceTot = (price) => {
    let totalPrice = 0;
    totalPrice += price;
    setTotal(totalPrice);
  };

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

  return (
    <div>
      <CartContext.Provider
        value={{
          cartList,
          addItem,
          removeItem,
          clearList,
          calcPriceTot,
          total,
          quant,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}
