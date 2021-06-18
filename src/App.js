// import logo from './logo.svg';
import logo from './images/index/logo.png' 
import './App.css';
import NavBar from './components/NavBar/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Jose Herrera"}/>
      <div className="App-header">
        
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="fontConsultora">
          Consultora : Candela Herrera
        </p>
        <a
          className="App-link anim  "
          href="/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingresar
        </a>
        </div>
      
      </div>
     
    </div>
  );
}

export default App;
