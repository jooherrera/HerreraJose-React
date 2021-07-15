import "./App.css";
import NavBar from "./components/NavBar/NavBarComponent";
//React Router Dom
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import ItemDetail from "./pages/ItemDetail";
//Context
import {CartProvider} from './context/CartContext'
import Cart from "./pages/Cart";
import Envios from "./pages/Envios";



function App() {
  return (
    <Router>
      <CartProvider>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:id" component={Category} />
          <Route path="/producto/:categoria/:id" component={ItemDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/envio" component={Envios} />
        </Switch>
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;
