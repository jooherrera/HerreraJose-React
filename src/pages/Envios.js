import React from "react";
import { Link } from "react-router-dom";

const Envios = () => {
  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <img src="https://i.ibb.co/4VLnXNB/error.png" alt="error" width="500" />
      <Link className="mt-5 font-weight-bolder" to="/">
        Ir al inicio
      </Link>
    </div>
  );
};

export default Envios;
