import React, { useContext,useState, useEffect } from "react";
import Item from "../components/Item/Item";
import axios from "axios";
import "./ItemDetail.css";
import EmptyItem from "../components/EmptyItem/EmptyItem";
import {Link} from 'react-router-dom'
import { CartContext } from "../context/CartContext";
import { ItemCount } from "../components/ItemCount/ItemCount";


const ItemDetail = ({ match }) => {
  let prodCategoria = match.params.categoria;
  let prodID = match.params.id;

  const [producto, setProducto] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const {itemsCart} = useContext(CartContext)


  // console.log(items)



  useEffect(() => {
    setTimeout(() => {
      axios(process.env.REACT_APP_BASE_URL).then(
        (res) => {
          let filter = res.data.filter((elem) => elem.title === prodCategoria);
          let mapeado = filter.map((element) => element.productos).flat();
          let mapeadoID = mapeado.filter((ele) => ele.id === Number(prodID));

          return setProducto(mapeadoID);
        }
      );
      setLoading(false);
    }, 3000);
  }, [prodCategoria, prodID]);

  return isLoading ? (
   <div key={0}>
     <h1 className="ItemDetail_font mt-4">Cargando...</h1>
     <div className="p-2 ItemDetail">
     <EmptyItem isItem={true}/>
     </div>
   </div>
  ):
  (
    <>
    {producto.map((item, idx) => {
      return (
        <div key={idx}>
          <p>Volver a | <Link to="/" className="font-weight-bold"> Home</Link> &gt;&gt; <Link to={`/category/${prodCategoria}`}  className="font-weight-bold"> {prodCategoria}</Link></p>
          <h1  className="ItemDetail_font mt-4">{item.title}</h1>
          <div  className="p-2 ItemDetail">
            <Item item={item} isItem={true} />   

            <div>
            <ItemCount data={item}/> 
            
            {itemsCart.length !== 0 ? <>
             <Link to="/cart" className="button btn-terminar"> Terminar mi compra</Link> 
             


             
             </>
             : null}
            </div>  

          </div>
          </div>
      );
    })}
  </>
  )
};
export default ItemDetail;

