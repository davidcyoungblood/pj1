import axios from "axios";

export const Expenses = ({ exp, setExps, expenses }) => {
  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await axios.delete(`http://localhost:8080/pj1/api`, { data: exp.id });
      setExps(expenses.filter((expense) => exp.id !== expense.id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleApproved = async (e) => {
    try {
      e.preventDefault();
      const {data} = await axios.put("http://localhost:8080/pj1/api", {
        id: exp.id,
        name: exp.name,
        reason: exp.reason,
        notes: exp.notes,
        status: "Approved"
      }); 
      expenses = expenses.filter((expense) => exp.id !== expense.id);
      exp = data; 
      setExps([...expenses, data])
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleDenied = async (e) => {
    try {
      e.preventDefault();
      const {data} = await axios.put("http://localhost:8080/pj1/api", {
        id: exp.id,
        name: exp.name,
        reason: exp.reason,
        notes: exp.notes,
        status: "Declined"
      });
      expenses = expenses.filter((expense) => exp.id !== expense.id);
      exp = data; 
      setExps([...expenses, exp])
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr>
      <td>{exp.id}</td>
      <td>{exp.name}</td>
      <td>{exp.reason}</td>
      <td>{exp.notes}</td>
      <td>{exp.status.status}</td>
      <td>
        <button onClick={handleDelete} >Delete</button>
        <button onClick={handleApproved} disabled= {exp.status.status !== "Pending"} >Approve</button>
        <button onClick={handleDenied } disabled= {exp.status.status !== "Pending"}>Decline</button>
        
      </td>
    </tr>

  );
};
