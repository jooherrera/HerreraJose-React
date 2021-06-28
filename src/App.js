// import logo from './logo.svg';
// import logo from './images/index/logo.png'
import "./App.css";
import NavBar from "./components/NavBar/NavBarComponent";

// import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer';

//React Router Dom
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import ItemDetail from "./pages/ItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:id" component={Category} />
          <Route path="/producto/:categoria/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
