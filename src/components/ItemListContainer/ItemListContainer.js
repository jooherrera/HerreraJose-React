import React, {useState, useEffect } from "react";
import EmptyItem from "../EmptyItem/EmptyItem";
import ItemList from "../ItemList/ItemList";

const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(
          [
            {
              "title":"Perfumes",
              "productos":[
                {
                  "id":1,
                  "title":"Ekos Castanha",
                  "price":200,
                  "pictureURL":"https://i.ibb.co/qrMhMTD/ekos-Castanha.png",
                  "stock":4
                },
                {
                  "id":2,
                  "title":"Erva Doce",
                  "price":400,
                  "pictureURL":"https://i.ibb.co/vZfTXCX/ervaDoce.png",
                  "stock":2
                },
                {
                  "id":3,
                  "title":"Krika Drama",
                  "price":450,
                  "pictureURL":"https://i.ibb.co/mbnVVGh/kriska-Drama.png",
                  "stock":0
                },
                {
                  "id":4,
                  "title":"Humor Propio",
                  "price":750,
                  "pictureURL":"https://i.ibb.co/C2kSrs8/humor-Proprio.png",
                  "stock":6
                },
                {
                  "id":14,
                  "title":"kitVecwNDM",
                  "views":95
                },
                {
                  "id":5,
                  "title":"Todo Dia",
                  "price":850,
                  "pictureURL":"https://i.ibb.co/mzqYK3p/tododia.png",
                  "stock":3
                },
                {
                  "id":6,
                  "title":"Quimica de Humor M",
                  "price":1750,
                  "pictureURL":"https://i.ibb.co/7pvTGFf/quimica-De-Humor-M.png",
                  "stock":1
                },
                {
                  "id":7,
                  "title":"Kaiak Aventura F",
                  "price":550,
                  "pictureURL":"https://i.ibb.co/6RcQ69p/kaiak-Aventura-F.png",
                  "stock":7
                },
                {
                  "id":8,
                  "title":"Essencial Exclusivo",
                  "price":256,
                  "pictureURL":"https://i.ibb.co/xYQfF4N/essencial-Exclusivo.png",
                  "stock":3
                }
              ],
              "pictureURL":"https://i.ibb.co/QntczhN/perfumeria-Logo.png"
            },
            {
              "title":"Cremas",
              "productos":[
                {
                  "id":1,
                  "title":"Ekos Castanha",
                  "price":256,
                  "pictureURL":"https://i.ibb.co/3R4CXD2/ekos-Castanha.png",
                  "stock":3
                },
                {
                  "id":1,
                  "title":"Ekos Castanha",
                  "price":256,
                  "pictureURL":"https://i.ibb.co/GJ9kb4T/ekos-Maracuja.png",
                  "stock":3
                }
              ],
              "pictureURL":"https://i.ibb.co/xYQfF4N/essencial-Exclusivo.png"
            }
          ]
        ),
      2000
    );
  });
};


function ItemListContainer({isItem}) {

  const [productState, setProductState] = useState([])
  const [isLoading, setLoading] = useState(true);

  const consultarPromesa = () => {
    promise().then((products)=>{
      setProductState(products)
    })

  }

  useEffect(()=>{
  consultarPromesa()
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
