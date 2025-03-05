import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExpenseList.css";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/expenses");
            setExpenses(response.data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/expenses/${id}`);
            fetchExpenses();
        } catch (error) {
            console.error("Error deleting expense:", error);
        }
    };

    const handleEdit = async (id) => {
        const title = prompt("Enter new title:");
        const description = prompt("Enter new description:");
        const amount = prompt("Enter new amount:");
        const date = prompt("Enter new date:");

        try {
            await axios.put(`http://localhost:5000/api/expenses/${id}`, { title, description, amount, date });
            fetchExpenses();
        } catch (error) {
            console.error("Error editing expense:", error);
        }
    };

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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.length > 0 ? (
                        expenses.map(expense => (
                            <tr key={expense.id}>
                                <td>{expense.title}</td>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                                <td>{new Date(expense.date).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => handleEdit(expense.id)}>Edit</button>
                                    <button onClick={() => handleDelete(expense.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No expenses available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
