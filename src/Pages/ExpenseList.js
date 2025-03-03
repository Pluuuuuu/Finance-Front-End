import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExpenseList.css";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/expenses")
            .then(res => {
                console.log("Expenses fetched:", res.data); // Debugging: log the fetched expenses
                setExpenses(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="expenses-container">
            <h2>Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.length > 0 ? (
                        expenses.map(expense => (
                            <tr key={expense.id}>
                                <td>{expense.title}</td>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                                <td>{new Date(expense.date).toLocaleDateString()}</td> {/* Adjusted date field name */}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No expenses available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
