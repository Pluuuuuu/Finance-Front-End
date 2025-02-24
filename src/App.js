import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Adjust paths if necessary
import ExpensesPage from './components/ExpensesPage'; // Adjust paths if necessary
import './App.css'; // Your CSS file

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>Company Financial Tracker</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/expenses">Expenses</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/expenses" element={<ExpensesPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;