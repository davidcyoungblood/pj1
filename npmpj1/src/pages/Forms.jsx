import { ExpenseForm } from "../components/expenses";

export const Forms = () => {
    
    return (

        <>
          <div className="App-mainContent">
            <h2>Welcome to The Forms</h2>
            <ExpenseForm/>
          </div>
            
            {/* Calling our ClassComponent this way will auto call render() on our behalf */}
            {/* If shouldRender is true, render ClassComponent. If false, return false. False does NOT render */}
            {/* This is known as "conditional rendering" */}

            {/* <ClassComponent /> */}
        </>

    );
}