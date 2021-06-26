import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export const ItemCount = ({ cantidad }) => {
  //USE STATE HOOK
  const [number, setNumber] = useState(0); //Cantidad para agregar
  const [stock, setStock] = useState(cantidad); //Stock..
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
    setStock(stock - number);
    setNumber(0);
  };
  const actualizar = () => {
    stock === 0 || number === 0 ? setDisabled(true) : setDisabled(false);
    number !== stock ? setDisabledIncrement(false) : setDisabledIncrement(true);
    number !== 0 ? setDisabledDecrement(false) : setDisabledDecrement(true);
  };

  useEffect(() => {
    actualizar();
  });

  return (
    <div className="container_ItemCount">
      <div className="containerName">
        {/* <p>Crema para el pelo --> STOCK: {stock}</p> */}
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
