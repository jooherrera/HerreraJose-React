import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const CartDetail = ({data}) => {

  return (
    <div>
        <h1>{data.quantity} * ${data.price} = ${data.quantity *data.price } </h1>
        <ItemCount data={data} datos={ data.stock - data.quantity}/>
    </div>
  )
}

export default CartDetail
