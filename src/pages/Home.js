import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import logo from "../images/index/logo.png"

const Home = () => {
  return (
    <div>
       <div className="App-header">
          <img src={logo} alt="logo" className="mt-5" />
          <h1 className="fontConsultora anim">Consultora Natura</h1>
          <ItemListContainer isItem ={false}/>            
        </div>
    </div>
  )
}

export default Home
