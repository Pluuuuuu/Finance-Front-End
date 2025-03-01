import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpenseList from "./Pages/ExpenseList";
import ExpenseForm from "./Pages/ExpenseForm";
import Home from "./Pages/Home";
import Income from "./Pages/Income";
import Analysis from "./Pages/Analysis";

function App() {
    const [updateTrigger, setUpdateTrigger] = useState(false);

    return (
        <Router>
            <Navbar />
            <div>
                <h1>Finance Tracker</h1>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/income" element={<Income />} />
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
