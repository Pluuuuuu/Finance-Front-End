import React, { useState } from "react";
import ExpenseList from "./Pages/ExpenseList";
import ExpenseForm from "./Pages/ExpenseForm";

function App() {
    const [updateTrigger, setUpdateTrigger] = useState(false);

    return (
        <div>
            <h1>Finance Tracker</h1>
            <ExpenseForm onExpenseAdded={() => setUpdateTrigger(!updateTrigger)} />
            <ExpenseList key={updateTrigger} />
        </div>
    );
}

export default App;
