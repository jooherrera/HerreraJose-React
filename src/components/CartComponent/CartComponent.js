import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import CartDetail from "../CartDetail/CartDetail";
import Item from "../Item/Item";
import "./CartComponent.css";
import {Link} from 'react-router-dom'

const CartComponent = () => {
  const { itemsCart, clear, removeItem } = useContext(CartContext);

  return (
    <div>
      {console.log(itemsCart)}
      {itemsCart.map((producto) => {
        return (
          <div key={producto.id} className="CartComponent-Container">
            <Item item={producto} isItem={false} />
            <div className="CartDetail">
              <CartDetail data={producto} />
              {
                <button onClick={removeItem} value={producto.id}>
                  {" "}
                  Eliminar producto
                </button>
              }
            </div>
          </div>
        );
      })}

      {itemsCart.length > 0 && (
        <>
        <button onClick={clear}>Eliminar Carrito</button>
        <Link to="/confirmCart" className="button btn-terminar"> Comprar Ahora!</Link> 
        </>
      )}
    </div>
  );
};

export default CartComponent;
