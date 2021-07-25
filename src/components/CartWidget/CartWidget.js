import React from 'react'
import './CartWidget.css'
import img from './carrito.png'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const {itemsCart} = useContext(CartContext)
  return (
    <div >
      <span>{itemsCart.reduce((acc,el) => {
       return acc += el.quantity
      },0)}</span> 

      
      <img src={img} alt="Icono de carrito de compras" width="30" />
    </div>
  )
}



export default CartWidget
