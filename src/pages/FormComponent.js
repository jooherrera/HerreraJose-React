import React, { useState, useContext,useEffect } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'
import "./FormComponent.css"


const FormComponent = ({addBuyer , actualizarStock}) => {
  const {itemsActualizar , clear , total,itemsComprados,setItemsComprados} = useContext(CartContext)
  


  const initialState = {
    nombre: '',
    telefono: '',
    email: '',
    confirmEmail: ''

  }

   const initialBuyer = {
    // buyer : {
    //   confirmEmail: "jooherrera4@gmail.com",
    //   email : "jooherrera4@gmail.com",
    //   nombre : "Jose",
    //   telefono : 1127748848,
    // },
    date : "23/7/21",
    items : [{
     id : 1,
     price : 200,
     title : "Nombre"
     }],
     total : 2000 
  }

  const [buyer , setBuyer] = useState(initialBuyer)
  const [values, setValues] = useState(initialState)

  // const [carrito, setCarrito] = useState(initialProducts)

  const handleOnChange = (e) => {

    const { name, value } = e.target
    setValues({ ...values, [name]: value })

    
  }

  const isDisabled = (object) => {
    for ( let clave in object){
      if(object[clave]===""){
        return true
      }
    }
    if (object.email !== object.confirmEmail){
      return true
    }
    return false
     
   }

  const getFecha = () => {

    let n = new Date()
    let y = n.getFullYear()
    let m = n.getMonth() + 1
    let d = n.getDate()
    // console.log(`Date :, ${d}/${m}/${y} `)
    const date = `${d}/${m}/${y}`
    setBuyer((prevState) => ({
      ...prevState, date : date
    }))
  }




  const handleSubmit = (e) => {
 
      // e.preventDefault()

      // getFecha()
      // getTotal()
     
      // getItems()
      // addBuyer(values)
      //  addBuyer(buyer)
      // setValues({...initialState})
      //  console.log(values)
     
      setItemsComprados([])
      addBuyer(buyer)
      actualizarStock(itemsActualizar)
      // addBuyer(buyer)
      //  actualizarStock(itemsActualizar)
      setValues({...initialState})
       clear()
       
     
     
  }






  useEffect(() => {
    setBuyer((prevState) => ({
      ...prevState, buyer : values
    }))
    getFecha()
    // getTotal()
    setBuyer((prevState) => ({
      ...prevState, total : total
    }))
    //  getBuyer()
    // getItems()

    setBuyer((prevState) => ({
      ...prevState, items :  itemsComprados 
    }))

  }, [values,total,itemsComprados])


  return (
    <div className='w-100' >
      <Form className='w-50 mx-auto'>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input valid={values.nombre !== '' ? true : false } onChange={handleOnChange} name='nombre' placeholder="Ingrese su nombre aquí" value={values.nombre} required />
           {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
        </FormGroup>
        <FormGroup>
          <Label for="telefono">Telefono</Label>
          <Input valid={values.telefono !== '' ? true : false } onChange={handleOnChange} type='number' name='telefono' placeholder="Ingrese su telefono aquí" value={values.telefono} required />
         
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input valid={values.email !== '' ? true : false } onChange={handleOnChange} type="email" name="email" id="exampleEmail" placeholder="Ingrese su Email aquí" value={values.email} required />
        </FormGroup>
        <FormGroup>
          <Label for="confirmEmail">Confirmar Email</Label>
          <Input valid={values.email === values.confirmEmail && values.email !== '' && values.confirmEmail !== ''  ? true : false } onChange={handleOnChange} type="confirmEmail" name="confirmEmail" id="confirmEmail" placeholder="Confirme su Email aquí" value={values.confirmEmail} required/>
        </FormGroup>
        
        {/* <Button  color="primary" disabled={isDisabled(values) || total === 0  } className='mt-2' onClick={handleSubmit}>sdadsa  </Button>  */}
        <Link to="/"  className={isDisabled(values) || total === 0 ?  "disabled-link": "button btn-terminar"} onClick={handleSubmit} > Comprar!</Link> 
       
       
      </Form>

    </div>
  )
}

export default FormComponent
