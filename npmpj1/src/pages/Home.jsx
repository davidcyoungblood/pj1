
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <title>Home</title>
      <div className="App-mainContent">
        <br />
        <br />
        <br />
        <br />
          <h2>Get Started</h2>
        <br />
      <button className="gs-button" >
          <Link to="/expense" id="link">
          Add Expense
          </Link>
        </button>
        <button className="gs-button">
          <Link to="/table" id="link">
          View Table
          </Link>
        </button>
      </div>
    </>
  );
};
