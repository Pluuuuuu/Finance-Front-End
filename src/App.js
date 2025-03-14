import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpenseList from "./Pages/ExpenseList";
import ExpenseForm from "./Pages/ExpenseForm";
import Home from "./Pages/Home";
import IncomeList from "./Pages/incomelist";
import IncomeForm from "./Pages/IncomeForm";
import Analysis from "./Pages/Analysis";
//import LoginSignup from "./Pages/LoginSignup";


function App() {
    const [updateTrigger, setUpdateTrigger] = useState(false);

    return (
        <Router>
            <Navbar />
            <div>
                <h1>Hi,Welcome back</h1>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/income" element={
                        <>
                            <IncomeForm onIncomeAdded={() => setUpdateTrigger(!updateTrigger)} /> {/* Updated to IncomeForm */}
                            <IncomeList key={updateTrigger} /> {/* Updated to IncomeList */}
                        </>
                    } /> 

                    <Route path="/expense" element={
                        <>
                            <ExpenseForm onExpenseAdded={() => setUpdateTrigger(!updateTrigger)} />
                            <ExpenseList key={updateTrigger} />
                        </>
                    } />
                    <Route path="/analysis" element={<Analysis />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
