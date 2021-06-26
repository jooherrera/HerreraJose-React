// import logo from './logo.svg';
// import logo from './images/index/logo.png' 
import './App.css';
import NavBar from './components/NavBar/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import logo from './images/index/logo.png'

function App() {
  const clientName = "Jose Herrera"
  return (
    
    <div className="App">
        <NavBar />
      <div className="App-header">
        <img src={logo} alt="logo" className="mt-5"/>
        <h1 className="fontConsultora anim">Consultora Natura</h1>
        <ItemListContainer greeting={clientName}/>
      </div>
     
    </div>
  );
}

export default App;
