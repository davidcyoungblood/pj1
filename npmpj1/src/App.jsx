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

        <h1>Project 1</h1>
      </header>
      <section className="App-navigation">
      <a href="/error" className = "App-pages">Error</a>
      <a href="/error" className = "App-pages">Error</a>
      <a href="/error" className = "App-pages">Error</a>
        <a href="/error" className = "App-pages">Error</a>
      </section>

      <p className="App-mainContent">Hello</p>
    </div>
  );
}

export default App;
