import React from "react";
import FormComponent from "./FormComponent";
import { db } from "../firebase";

const Carrito = () => {
  // const [buyer, setBuyer] = useState([])
  const addBuyer = async (object) => {
    console.log(object);
    const data = await db.collection("Buyers").doc();
    data.set(object);
    alert(`Su codigo generado es: ${data.id}`);
  };

  const actualizarStock = async (lista) => {
    for (let categoria in lista) {
      const data = await db.collection("Productos").doc(categoria);
      for (let producto in lista[categoria]) {
        let stock = lista[categoria][producto].stock;
        let where = `productos.${producto}.stock`;
        data.update({ [where]: stock });
      }
    }
  };

  return (
    <div className="w-100">
      <h1>Carrito</h1>
      <FormComponent addBuyer={addBuyer} actualizarStock={actualizarStock} />
    </div>
  );
};

export default Carrito;
