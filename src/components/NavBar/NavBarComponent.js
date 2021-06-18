import React from "react";
import "./NavBarComponent.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/CartWidget";


class NavBarComponent extends React.Component {
  render() {
    return (
      <>
      <div className="">
        <Navbar className="customColor" expand="lg">
          <Navbar.Brand href="#home" className="text-dark">CH</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="text-dark"   >Home</Nav.Link>
            <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
            <Nav.Link href="#entrega" className="text-dark">Formas de entrega</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </>
    );
  }
}

export default NavBarComponent;
