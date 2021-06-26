import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

function ItemList({productos}) {
   return (
     <>
     <div className="carrouselList">
      
     {productos.map((product) => {
        return ( 
          <li key={product.id} className="p-2">
            <Item item = {product}/> 
          </li>     
        )
        } )}    
     </div>
     
      </>
  );
}

export default ItemList
