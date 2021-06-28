import React from "react";
import Card from "react-bootstrap/Card";
import './EmptyItem.css'
import img from './pngegg.png'


const EmptyItem = ({isItem}) => {
  return isItem ? (
    <div className="item m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} alt="item" width="30px" />
        <Card.Body>
          <Card.Title>xxxx</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            $xxxx
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  ) : (
    <div className="m-2">
      <Card className="item" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} alt="item" width="30px" />
        <Card.Body>
          <Card.Title>xxxx</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmptyItem;
