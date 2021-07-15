import React, { useState, useEffect, useCallback } from "react";
import Item from "../components/Item/Item";
import './Category.css'
import {Link} from 'react-router-dom'
import EmptyItem from "../components/EmptyItem/EmptyItem";

import { db } from "../firebase";

const Category = ({ match }) => {
  let prodID = match.params.id;
  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const getProducts = useCallback(() => {
    const docs = []
      db.collection('Productos').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           docs.push({...doc.data()})
        })
        // console.log(docs)
        let filter = docs.filter((elem) => elem.title === prodID);
         let mapeado = filter.map((element) => element.productos);
        

         setProductos(mapeado.flat())
      })

  },[prodID])












  useEffect(() => {
    setTimeout(()=> {
    getProducts()
    setLoading(false)
   
   
   
    },2000)
    
   




  }, [getProducts]);

  
   

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
