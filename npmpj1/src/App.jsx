import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Forms, Table, Home, Error } from "./pages";
import { Navigation } from "./components/Navigation";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="home-button">
          <img src={logo} className="App-logo" alt="logo" />
        </button>
      </header>
      <BrowserRouter>
        <Navigation>
          {/* Component Composition */}
          <section className="App-navigation">
            {/* Anchor tags refresh the page. Instead, I'll use Link from React-Router-dom */}
            {/* <a href="/day1">Day1</a> */}
            <div className="App-pages">
              <Link className="App-pages" to="/expense">
                Add Expense
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
