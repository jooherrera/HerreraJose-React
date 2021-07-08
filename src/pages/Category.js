import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item/Item";
import './Category.css'
import {Link} from 'react-router-dom'
import EmptyItem from "../components/EmptyItem/EmptyItem";


const Category = ({ match }) => {
  let prodID = match.params.id;
  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(()=> {
      axios(process.env.REACT_APP_BASE_URL).then(
        (res) => {
          let filter = res.data.filter((elem) => elem.title === prodID);
          let mapeado = filter.map((element) => element.productos);
  
          return setProductos(mapeado.flat());
        }
      );
      setLoading(false)
   
   
   
    },2000)
    
   




  }, [prodID]);

  
   

  return !isLoading ? (
    <div>
      <p>Volver a | <Link to="/"  className="font-weight-bold">Home</Link></p>
      <h1 className ="category_font mt-4">Lista de {prodID} </h1>
      <div className="category_carrouselList">
        {productos.map((producto,idx) => {
          return (
            <div key={producto.id} className="p-2">
            <Link to={`/producto/${prodID}/${producto.id}`}>
              <Item item={producto} isItem={false} />
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <h1 className ="category_font mt-4">Lista de {prodID} </h1>
      <div className="category_carrouselList">

      <div className="Empty_carrouselList p-2">
       <EmptyItem isItem={false}/>
       <EmptyItem isItem={false}/>
       <EmptyItem isItem={false}/>
       <EmptyItem isItem={false}/>
      </div>


      </div>
    </div>
  )




};

export default Category;
