import React from 'react'

const CartDetail = ({data}) => {

  return (
    <div className='d-flex flex-column align-items-center'>
        <h2>Cantidad: {data.quantity}</h2>
        <h2>Stock: {data.stock}</h2>
    </div>
  )
}

export default CartDetail
