import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const CartDetail = ({data}) => {

  return (
    <div className='d-flex flex-column align-items-center'>
        <h2>Cantidad: {data.quantity}</h2>
        <ItemCount data={data} datos={ data.stock - data.quantity}/>
    </div>
  )
}

export default CartDetail
