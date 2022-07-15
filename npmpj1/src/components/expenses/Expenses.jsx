import axios from "axios"; 
import { useState, useEffect, useRef, useContext } from 'react';

export const Expenses =  ({exp, setExps, expenses}) => {
    const handleDelete = async (e) => {
        try {
            e.preventDefault(); 
            await axios.delete(`http://localhost:8080/pj1/api`, {data : exp.id}); 
            setExps(expenses.filter(expense => exp.id !== expense.id)); 
            
           

        }
        catch (err) {
            console.error(err); 
        }


    }
    const handleApproved = async (e) => {
        try {
            e.preventDefault(); 
            
        }
        catch (err) {
            console.error(err); 
        }
    }

    return (
        <tr>
            <td>{exp.id}</td>
            <td>{exp.name}</td>
            <td>{exp.reason}</td>
            <td>{exp.notes}</td>
            <td>{exp.status.status}</td>
            <td><button onClick={handleDelete}>Delete</button>
            <button onClick = {handleApproved}>Approve</button>
            <button>Decline</button></td>
            
        </tr>
    )

}