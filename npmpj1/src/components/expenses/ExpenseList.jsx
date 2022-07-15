import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import {  Expenses } from './Expenses';

export const ExpenseList = () => {
    const [exps, setExps] = useState([]);
    const [name, setName] = useState('');
    const reasonRef = useRef(); 
    const statusRef = useRef();

    useEffect(() => {
        axios.get(`http://localhost:8080/pj1/api`)
            .then(res => setExps(res.data)); // sets my devs state to be that array of devs
    }, []); // Be sure this is an empty array
    
    const handleSubmit = async (event) => {
        try {
            event.preventDefault(); // Prevent the default HTML form submission (AKA Reload the page)
            // 1. Extract the data
            // 2. Send out a POST request
            // 3. When you receive the newly created dev id, add it to the dev array
            const { data } = await axios.post('http://localhost:8080/pj1/api',
                {
                    name, 
                    reason: reasonRef.current.value,
                    status: statusRef.current.value
                }
            );
            console.log(data);
            setExps([...exps, data]);
            setName('');
            reasonRef.current.value = null;
            statusRef.current.value = '';
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    );
}