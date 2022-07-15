import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Expenses } from "./Expenses";

export const ExpenseForm = () => {
  const [exps, setExps] = useState([]);
  const [name, setName] = useState("");
  const reasonRef = useRef(); // Creates a reference object
  //const statusRef = useRef();

  useEffect(() => {
    axios.get(`http://localhost:8080/pj1/api`).then((res) => setExps(res.data)); // sets my devs state to be that array of devs
  }, []); // Be sure this is an empty array

  const handleSubmit = async (event) => {
    try {
      event.preventDefault(); // Prevent the default HTML form submission (AKA Reload the page)
      // 1. Extract the data
      // 2. Send out a POST request
      // 3. When you receive the newly created dev id, add it to the dev array
      const { data } = await axios.post("http://localhost:8080/pj1/api", {
        name, // implied that it's name: name
        // Think of titleRef.current as <input />
        reason: reasonRef.current.value,
        //salary: statusRef.current.value,
      });
      console.log(data);
      setExps([...exps, data]);
      setName("");
      reasonRef.current.value = null;
      //statusRef.current.value = "";
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <tr>
        <td>
          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Please enter Name"
          />
        </td>
        <td>
          <input
            name="reason"
            ref={reasonRef}
            placeholder="Please Enter Reason"
          />
        </td>
        <button>Add New Expense Report</button>
      </tr>
    </form>
  );
};