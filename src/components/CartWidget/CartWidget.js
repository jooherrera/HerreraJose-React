import React from 'react'
import './CartWidget.css'
import img from './carrito.png'

function CartWidget() {
  return (
    <div>
      <img src={img} alt="Icono de carrito de compras" width="30" />
    </div>
  )
}



export default CartWidget
