import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Expenses } from "./Expenses";

export const ExpenseForm = () => {
  const [exps, setExps] = useState([]);
  const [name, setName] = useState("");
  const reasonRef = useRef();
  const notesRef = useRef(); // Creates a reference object
  //const statusRef = useRef();

  useEffect(() => {
    axios.get(`http://localhost:8080/pj1/api`).then((res) => setExps(res.data)); // sets my devs state to be that array of devs
  }, []); // Be sure this is an empty array

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("http://localhost:8080/pj1/api", {
        name, 
        reason: reasonRef.current.value,
        notes: notesRef.current.value,

      });
      console.log(data);
      setExps([...exps, data]);
      setName("");
      reasonRef.current.value = null;
      notesRef.current.value = null;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <tr>
          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Please enter Name"
          />
        </tr>
        <tr>
          <input
            name="reason"
            ref={reasonRef}
            placeholder="Please Enter Reason"
          />
        </tr>
        <tr>
          <input
            name="notes"
            ref={notesRef}
            placeholder="Please Enter Notes"
          />
        </tr>
        
        <button>Add New Expense Report</button>
    </form>
  );
};
