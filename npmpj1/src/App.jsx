import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className='home-button'><img src={logo} className="App-logo" alt="logo" /></button>
        
        <h1 >Project 1</h1>
      </header>
      <h1 className = "App-navigation">Navigation</h1>
      <p className = "App-mainContent">Hello</p>  
    </div>

  );
}

export default App;