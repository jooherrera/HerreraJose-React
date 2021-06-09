// import logo from './logo.svg';
import logo from './images/index/logo.png' 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-consultora">
          Consultora : Candela Herrera
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
