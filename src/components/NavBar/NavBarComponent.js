import React,{useContext} from "react";
import "./NavBarComponent.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/CartWidget";

import {Link} from "react-router-dom";


import {CartContext} from '../../context/CartContext'

const NavBarComponent = () => {
  const {itemsCart , total} = useContext(CartContext)





    return (
      <>
      <div className="">
        <Navbar className="customColor" expand="lg">
          <Navbar.Brand><Link className="link" to="/">CH</Link> </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ml-auto" >

            {itemsCart.length > 0  && 
            <>
            <span className="link p-2 mx-5">Total: ${total}</span>
            <Link className="link p-2" to="/cart">{itemsCart.length > 0 && <CartWidget />   }</Link>
            </>
            }

            
            <Link className="link p-2" to="/envio">Formas de entrega</Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </>
    );
  
}

export default NavBarComponent;
