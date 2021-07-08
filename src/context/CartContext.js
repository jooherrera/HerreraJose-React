import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const getFromCart = (id) => {
    return itemsCart.find((obj) => obj.id === id);
  };

  const isInCart = (id) => {
    return id === undefined ? undefined : getFromCart(id) !== undefined;
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = itemsCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        } else return cartItem;
      });
      setItemsCart(newCart);
    } else {
      setItemsCart((itemsCart) => [...itemsCart, { ...item, quantity }]);
    }
  };

  //Eliminar un item mediante su id
  const removeItem = (evn) => {
    setItemsCart((itemsCart) =>
      itemsCart.filter((el) => el.id !== Number(evn.target.value))
    );
  };

  //Borrar todo el carrito
  const clear = () => {
    setItemsCart([]);
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear, itemsCart }}>
      {children}
    </CartContext.Provider>
  );
};
