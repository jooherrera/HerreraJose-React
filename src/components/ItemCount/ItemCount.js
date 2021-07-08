import React, { useState, useEffect, useContext } from "react";
import "./ItemCount.css";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({data,datos = 0 }) => {

  //ContextAPI
  const {addItem} = useContext(CartContext)
  //USE STATE HOOK
  const [number, setNumber] = useState( !datos ? 0 : data.stock - datos ); //Cantidad para agregar
  const [quantity, setStock] = useState( !datos ? data.stock : data.stock - data.quantity  ); //Stock..
  const [isDisabled, setDisabled] = useState(true); //onAdd
  const [isDisabledDecrement, setDisabledDecrement] = useState(true); //Decrement
  const [isDisabledIncrement, setDisabledIncrement] = useState(false); //Increment

  




  //Incrementa el numero de items a comprar.
  const handleIncrement = () => {
    setNumber(number + 1);
  };
  //Decrementa el numero de items a comprar.
  const handleDecrement = () => {
    setNumber(number - 1);
  };
  //Agrega al carrito.. y descuenta stock
  const onAdd = () => {
    alert(`Se agregó este producto al carrito.`)
    setStock(quantity - number);
    setNumber(0);
    addItem(data,number)

  
  };
  const actualizar = () => {
    quantity === 0 || number === 0 ? setDisabled(true) : setDisabled(false);
    number !== quantity ? setDisabledIncrement(false) : setDisabledIncrement(true);
    number !== 0 ? setDisabledDecrement(false) : setDisabledDecrement(true);
   
  };

  useEffect(() => {
    actualizar();
  });

  return (
    <div className="container_ItemCount">
      <div className="containerName">
        <div className="count">
          <button
            onClick={!isDisabledDecrement ? handleDecrement : null}
            disabled={isDisabledDecrement}
          >
            -
          </button>
          <p className="state">{number}</p>
          <button
            onClick={!isDisabledIncrement ? handleIncrement : null}
            disabled={isDisabledIncrement}
          >
            +
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
