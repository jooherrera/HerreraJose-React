import React, { useContext, useState, useEffect } from "react";
import Item from "../components/Item/Item";

import "./ItemDetail.css";
import EmptyItem from "../components/EmptyItem/EmptyItem";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { db } from "../firebase";

const ItemDetail = ({ match }) => {
  let prodCategoria = match.params.categoria;
  let prodID = match.params.id;

  const [producto, setProducto] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { itemsCart, setCategory } = useContext(CartContext);
  const [cant, setCant] = useState(0);

  useEffect(() => {
    const unSub = db
      .collection("Productos")
      .doc(prodCategoria)
      .onSnapshot((querySnapshot) => {
        const docs = [];
        const produc = querySnapshot.data()["productos"];
        docs.push({ ...produc[prodID], origen: prodID });
        setProducto(docs);
        setCategory(prodCategoria);
        setLoading(false);
      });

    return () => unSub();
  }, [prodCategoria, prodID, setCategory]);

  return isLoading ? (
    <div key={0}>
      <h1 className="ItemDetail_font mt-4">Cargando...</h1>
      <div className="p-2 ItemDetail">
        <EmptyItem isItem={true} />
      </div>
    </div>
  ) : (
    <>
      {producto.map((item, idx) => {
        return (
          <div key={idx}>
            <p>
              Volver a |{" "}
              <Link to="/" className="font-weight-bold">
                {" "}
                Home
              </Link>{" "}
              &gt;&gt;{" "}
              <Link
                to={`/category/${prodCategoria}`}
                className="font-weight-bold"
              >
                {" "}
                {prodCategoria}
              </Link>
            </p>
            <h1 className="ItemDetail_font mt-4">{item.title}</h1>
            <div className="p-2 ItemDetail">
              <Item item={item} isItem={true} />

              <div>
                <ItemCount data={item} datos={cant} funcCant={setCant} />

                {itemsCart.length !== 0 ? (
                  <>
                    <Link to="/cart" className="button btn-terminar">
                      {" "}
                      Terminar mi compra
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemDetail;
