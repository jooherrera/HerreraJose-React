import React from "react";
import Card from "react-bootstrap/Card";
import './Item.css'


import { ItemCount } from "../ItemCount/ItemCount";

const Item = ({ item, isItem }) => {
  return isItem ? (
    <>
  
    <div className="item">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureURL} alt="item" width="30px" />
        <Card.Body>
          
           {/* <Card.Title>Stock disponible: {item.stock}</Card.Title> */}
          <Card.Subtitle className="mb-2 text-muted">
            ${item.price}
          </Card.Subtitle>
          <ItemCount cantidad={item.stock} />
        </Card.Body>
      </Card>
    </div>
  </>
  ) : (
    <div className="">
      <Card className="item" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureURL} alt="item" width="30px" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
