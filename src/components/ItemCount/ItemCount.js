import React, { useState, useEffect, useContext } from "react";
import "./ItemCount.css";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ data, datos = 0 }) => {
  //ContextAPI
  const { addItem } = useContext(CartContext);
  //USE STATE HOOK
  // const [number, setNumber] = useState( !datos ? 0 : data.stock - datos ); //Cantidad para agregar
  const [quantity, setStock] = useState(!datos ? 0 : data.stock - data.quantity); //Stock..
  const [isDisabled, setDisabled] = useState(true); //onAdd
  const [isDisabledDecrement, setDisabledDecrement] = useState(true); //Decrement
  const [isDisabledIncrement, setDisabledIncrement] = useState(false); //Increment

  //Incrementa el numero de items a comprar.
  const handleIncrement = () => {
    setStock(quantity + 1);
  };
  //Decrementa el numero de items a comprar.
  const handleDecrement = () => {
    setStock(quantity - 1);
  };

  //Agrega al carrito.. y descuenta stock
  const onAdd = () => {
    alert(`Se agregó este producto al carrito.`);
    setStock(quantity);
    // setStock(0);
    addItem(data, quantity, data.origen);
  };

  useEffect(() => {
    if (quantity === data.stock) {
      setDisabledIncrement(true);
    } else {
      setDisabledIncrement(false);
    }

    if (quantity === 0) {
      setDisabledDecrement(true);
    } else {
      setDisabledDecrement(false);
    }

    if (quantity > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data.stock, quantity]);

  return (
    <div className="container_ItemCount">
      <div className="containerName">
        <div className="count">
          <button
            onClick={!isDisabledDecrement ? handleDecrement : null}
            disabled={isDisabledDecrement}
          >
            <span className="butt">-</span>
          </button>
          <p className="state">{quantity}</p>
          <button
            onClick={!isDisabledIncrement ? handleIncrement : null}
            disabled={isDisabledIncrement}
          >
            <span className="butt">+</span>
          </button>
        </div>
      </div>
      <button
        className="addCart"
        onClick={!isDisabled ? onAdd : null}
        disabled={isDisabled}
      >
        {" "}
        Agregar al carrito
      </button>
    </div>
  );
};
