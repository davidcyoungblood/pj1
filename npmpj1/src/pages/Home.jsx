
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <title>Home</title>
      <div className="App-mainContent">
        <br />
        <br />
        <section id="home-title">Welcome!</section>
        <p id ="home-text">This website demostrates the requirements for project 1.  </p>
        <br />
          <section id="home-gs-text">Get Started</section>
      <button className="gs-button">
          <Link to="/expense" id="gs-buttons">
          Add New Expense
          </Link>
        </button>
        <button className="gs-button">
          <Link to="/table" id="gs-buttons">
          View Table
          </Link>
        </button>
      </div>
    </>
  );
};
