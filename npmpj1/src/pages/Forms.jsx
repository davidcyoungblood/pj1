import { ExpenseForm } from "../components/expenses";

export const Forms = () => {
  return (
    <>
      <title>Add Expense Form</title>
      <section className="App-mainContent">
        <br />
        <h1>Add New Reimbursement</h1>
        <section id="jsx-content">
          <ExpenseForm />
        </section>
      </section>
    </>
  );
};
