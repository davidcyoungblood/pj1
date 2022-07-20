//import { useState } from "react";
import {ExpenseList} from "../components/expenses";

export const Table = () => {
    
    
    // Whatever is returned from this function will be rendered to the page
    return (
        // You may only return ONE JSX element per function
        // This is a fragment. Fragments allow us to return multiple JSX elements
        // They do NOT render to the webpage
        <>
        <title>Expense Table</title>
        <section className="App-mainContent">
            <ExpenseList/>
        </section>
        </>
    );
}