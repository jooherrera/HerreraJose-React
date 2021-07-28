import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  let s = {
    Cremas: {},
    Perfumes: {},
  };

  const [itemsCart, setItemsCart] = useState([]);
  const [itemsActualizar, setItemsActualizar] = useState(s);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("");
  const [itemsComprados, setItemsComprados] = useState([]);

  const getFromCart = (id) => {
    return itemsCart.find((obj) => obj.id === id);
  };

  const isInCart = (id) => {
    return id === undefined ? undefined : getFromCart(id) !== undefined;
  };

  const addItem = (item, quantity, origen) => {
    const a = {
      stock: item.stock - quantity,
    };

    const b = {
      id: item.id,
      price: item.price,
      title: item.title,
      quantity: quantity,
    };

    if (isInCart(item.id)) {
      const newCart = itemsCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: quantity };
        } else return cartItem;
      });
      setItemsCart(newCart);
    } else {
      setItemsCart((itemsCart) => [...itemsCart, { ...item, quantity }]);

      setItemsComprados((items) => [...items, b]);

      setItemsActualizar((prevState) => ({
        ...prevState,
        [category]: { ...prevState[category], [origen]: a },
      }));
    }
  };

  const getTotal = (itemsCart) => {
    const totalPlata = itemsCart.reduce((acc, el) => {
      return (acc += el.quantity * el.price);
    }, 0);
    setTotal(totalPlata);
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

  useEffect(() => {
    getTotal(itemsCart);
  }, [itemsCart]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        itemsCart,
        total,
        setCategory,
        itemsActualizar,
        itemsComprados,
        setItemsComprados,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
