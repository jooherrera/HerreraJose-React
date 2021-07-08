import React from "react";
import "./NavBarComponent.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/CartWidget";

import {Link} from "react-router-dom";


const NavBarComponent = () => {
 

    return (
      <>
      <div className="">
        <Navbar className="customColor" expand="lg">
          <Navbar.Brand><Link className="link" to="/">CH</Link> </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="link p-2" to="/cart"><CartWidget /></Link>
            <Link className="link p-2" to="/envio">Formas de entrega</Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </>
    );
  
}

export default NavBarComponent;
