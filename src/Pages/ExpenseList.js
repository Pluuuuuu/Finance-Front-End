import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExpenseList.css";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/expenses")
            .then(res => setExpenses(res.data))
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
                        <th>Currency</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.currency}</td>
                            <td>{new Date(expense.date_time).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
