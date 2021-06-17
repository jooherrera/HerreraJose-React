// import logo from './logo.svg';
import logo from './images/index/logo.png' 
import './App.css';
let name = "Candela Herrera"

const styles = {
  color : "red"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={styles}>
          Consultora : {name}
        </p>
        <a
          className="App-link "
          href="/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingresar
        </a>
      </header>
    </div>
  );
}

export default App;
