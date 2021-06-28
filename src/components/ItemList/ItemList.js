import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

function ItemList({ productos, isItem }) {
  return (
    <>
      <div className="carrouselList">
        {productos.map((product,idx) => {
          return (
            <div key={idx} className="p-2">
              <Link to={`/category/${product.title}`}>
                <Item item={product} isItem={isItem} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemList;
