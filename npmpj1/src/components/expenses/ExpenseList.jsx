import { useState, useEffect} from 'react';
import axios from 'axios';
import {  Expenses } from './Expenses';

export const ExpenseList = () => {
    const [exps, setExps] = useState([]);
    

    useEffect(() => {
        axios.get(`http://localhost:8080/pj1/api`)
            .then(res => setExps(res.data)); // sets my devs state to be that array of devs
    }, []); // Be sure this is an empty array
    
    

    return (
            <div>
            <table className='table'>
            <thead>
                    <tr>
                        <th >Id</th>
                        <th >Name</th>
                        <th >Reason</th>
                        <th>Notes </th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exps.sort((a, b) =>  a.id > b.id ? 1 : -1).sort((a, b) => a.status.status < b.status.status ? 1 : -1 ).map((exp) => {
                        return (
                            <Expenses  key={exp.id} exp={exp} expenses={exps} setExps={setExps} />
                        );
                    })}
                </tbody>
            </table>
            </div>
    );
}