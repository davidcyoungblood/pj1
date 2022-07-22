//import { useState } from "react";
import {ExpenseList} from "../components/expenses";

export const Table = () => {
    return (

        <>
        <title>Expense Table</title>
        <section className = "App-mainContent" id="jsx-content">
        <ExpenseList/>
        </section>
            
        </>
    );
}