import React, { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import axios from "axios";
import "./ItemDetail.css";
import EmptyItem from "../components/EmptyItem/EmptyItem";
import {direccion} from '../api.js'

const ItemDetail = ({ match }) => {
  let prodCategoria = match.params.categoria;
  let prodID = match.params.id;
  const [producto, setProducto] = useState([]);
  const [isLoading, setLoading] = useState(true);
 

  useEffect(() => {
    setTimeout(() => {
      axios(direccion).then(
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
    <div>
    {producto.map((item, idx) => {
      return (
        <>
          <h1 key={item + idx} className="ItemDetail_font mt-4">{item.title}</h1>
          <div key={idx + 1} className="p-2 ItemDetail">
            <Item item={item} isItem={true} />
          </div>
        </>
      );
    })}
  </div>
  )
};

export default ItemDetail;
