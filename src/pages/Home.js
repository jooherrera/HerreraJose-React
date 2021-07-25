import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <div className="App-header">
        <img
          src="https://i.ibb.co/2y0Fjvg/logo.png"
          alt="logo"
          className="mt-5"
        />
        <h1 className="fontConsultora anim">Consultora Natura</h1>
        <ItemListContainer isItem={false} />
      </div>
    </div>
  );
};

export default Home;
