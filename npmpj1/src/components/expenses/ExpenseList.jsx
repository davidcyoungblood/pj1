import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import {  Expenses } from './Expenses';

export const ExpenseList = () => {
    const [exps, setExps] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/pj1/api`)
            .then(res => setExps(res.data)); // sets my devs state to be that array of devs
    }, []); // Be sure this is an empty array
    
    

    return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {exps.map((exp) => {
                        
                        return (
                            <Expenses key={exp.id} exp={exp} expenses={exps} setExps={setExps} />
                        );
                    })}
                </tbody>
            </table>
    );
}