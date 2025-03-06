import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpenseList from "./Pages/ExpenseList";
import ExpenseForm from "./Pages/ExpenseForm";
import Home from "./Pages/Home";
import IncomeList from "./Pages/incomelist";
import IncomeForm from "./Pages/IncomeForm";
import AnalysisPage from './Pages/AnalysisPage';

function App() {
    const [updateTrigger, setUpdateTrigger] = useState(false);

    return (
        <Router>
            <Navbar />
            <div>
                <h1>Finance Tracker</h1>
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
                        <div className="App">
                            <AnalysisPage />
                        </div>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
