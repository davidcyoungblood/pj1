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
        <h5>Name</h5>
        <input
          required
          className="forms"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your Name"
        />
      </tr>
      <tr>
        <h5>Reason for Reimbursement</h5>
        <input
          required
          className="forms"
          name="reason"
          ref={reasonRef}
          placeholder="Your Reason"
        />
      </tr>
      <tr>
        <h5>Additional Notes</h5>
        <input
          className="forms"
          id="form_input"
          name="notes"
          ref={notesRef}
          placeholder="Your Notes"
        />
      </tr>

      <button className="form-button">
        <h5>Add Reimbursement</h5>
      </button>
    </form>
  );
};
