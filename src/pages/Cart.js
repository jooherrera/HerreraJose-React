import React, {useContext} from 'react'
import CartComponent from '../components/CartComponent/CartComponent'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'



const Cart = () => {
  const {itemsCart} = useContext(CartContext)

  return (
    <div>
        {itemsCart.length > 0 ?
         <CartComponent /> 
         :
         ( 
         <>
          <div className='d-flex flex-column align-items-center mt-5'>
         
          <img src="https://firebasestorage.googleapis.com/v0/b/naturach-34049.appspot.com/o/carritovacio.png?alt=media&token=ff4817f9-3e53-463d-97e9-8dc11b591439" alt="" width='200' />
          <Link className="mt-5 font-weight-bolder" to="/">Ir al inicio</Link>
          </div>
          </>
          )
         
         }
    </div>
  )
}

export default Cart
