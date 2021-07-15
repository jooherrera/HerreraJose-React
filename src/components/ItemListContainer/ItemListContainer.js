import React, {useState, useEffect } from "react";
import { db } from "../../firebase";
import EmptyItem from "../EmptyItem/EmptyItem";
import ItemList from "../ItemList/ItemList";



function ItemListContainer({isItem}) {

  const [productState, setProductState] = useState([])
  const [isLoading, setLoading] = useState(true);


  const getProducts = () => {
    const docs = []
      db.collection('Productos').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           docs.push({...doc.data()})
        })
        setProductState(docs)
      })

  }


  useEffect(()=>{
    getProducts()
    setTimeout(()=> {
      setLoading(false)
    },2000)
  },[])

  return isLoading ? (
   <>
   <div className="Empty_carrouselList">
    <EmptyItem isItem={false}/>
    <EmptyItem isItem={false}/>
   </div>
   
   </>
  ):(
    <>
    <div className="list-unstyled">
     <ItemList productos = {productState} isItem = {isItem}/>
    </div>
 </>
  )
}

export default ItemListContainer;
