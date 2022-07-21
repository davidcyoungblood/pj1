import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Forms, Table, Home, Error } from "./pages";
import { Navigation } from "./components/Navigation";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">

        <Link className="App-pages" to="/">
          <button className="home-button">
            <img src={logo} id="App-logo" alt="logo" />
          </button>
        </Link>
        Project 1
      </header>
      
        <Navigation>
          {/* Component Composition */}
          <section className="App-navigation">
            <div className="App-pages">
              <Link className="App-pages" to="/expense">
                New Reimbursement
              </Link>
            </div>
            <div className="App-pages">
              <Link className="App-pages" to="/table">
                View Table
              </Link>
            </div>
          </section>
        </Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expense" element={<Forms />} />
          <Route path="/table" element={<Table />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
