import axios from "axios"; 

export const Expenses = ({exp, setExp, expenses}) => {

    const handleDelete = async (e) => {
        try {
            e.preventDefault(); 
            await axios.delete(`http://localhost:8080/pj1/api/${exp.id}`); 
            setExp(expenses.filter(expense => exp.id !== expense.id)); 
        }
        catch (err) {
            console.error(err); 
        }


    }

    return (
        <tr>
            <td>{exp.name}</td>
            <td>{exp.reason}</td>
            <td>{exp.status.status}</td>
            <button onClick={handleDelete}>Delete</button>
        </tr>
    )

}