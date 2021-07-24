import React from 'react'
import FormComponent from './FormComponent'
import {db} from '../firebase'




const Carrito = () => {
  // const [buyer, setBuyer] = useState([])


  const addBuyer = async (object) => {
          console.log(object)
          const data = await db.collection('Buyers').doc()
           data.set(object)
          alert(`Su codigo generado es: ${data.id}`)
          
        
      //  setBuyer({...object, id : data.id})
       

  }






  const actualizarStock = async (lista) => {
      // const listaDeProductos = await lista
     
      // const data = await db.collection("productos").doc(categoria)



        for (let categoria in lista){
          // console.log(categoria)
           const data = await db.collection("Productos").doc(categoria)
            for (let producto in lista[categoria]){
              //  console.log(lista[categoria][producto].stock)

               let stock = lista[categoria][producto].stock
                let where = `productos.${producto}.stock`

                data.update({ [where] : stock})
            }

          }



      // }


      // const actualizarData = await db.collection("productos")
      // return actualizarData.update(
      //  {

      //   "producto2.2.stock" : 3



              
      // })


      // lista.forEach( (el) => {
        //  const data = await db.collection("productos").doc("Cremas")
       
          // console.log(el)
    //   //   return data.update({

          
    //   //      "producto2.0.stock" : el.quantity
    //   //     })
    //   //     .then(() => {console.log("Document successfully updated!")})


      // })

    
     
  }


  // useEffect(() => {
    
  // }, [] )
 

  return (
    <div className='w-100'>
      <h1>Carrito</h1>
      <FormComponent addBuyer={addBuyer} actualizarStock={actualizarStock}/>
    </div>
  )
}

export default Carrito
