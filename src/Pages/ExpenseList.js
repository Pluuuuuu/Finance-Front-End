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
        const confirmation = window.confirm("Are you sure you want to delete this expense?");
        if (!confirmation) return;
    
        try {
            await axios.delete(`http://localhost:5000/api/expenses/${id}`);
            fetchExpenses(); // Refresh the expense list
        } catch (error) {
            console.error("Error deleting expense:", error);
            alert("Failed to delete the expense. Please try again.");
        }
    };

    const handleEdit = async (id) => {
        const title = prompt("Enter new title:");
        const message = prompt("Enter new message:");
        const amount = prompt("Enter new amount:");
        const date = prompt("Enter new date:");
    
        if (!title || !message || !amount || !date) {
            alert("All fields are required to update an expense.");
            return;
        }
    
        try {
            console.log(`Editing expense with ID: ${id}`);
            await axios.put(`http://localhost:5000/api/expenses/${id}`, { title, message, amount, date });
            fetchExpenses(); // Refresh the expense list
             // ✅ Instead of refetching, update state manually
            /*setExpenses((prevExpenses) =>
            prevExpenses.map((expense) =>
                expense.id === id ? { ...expense, title, message, amount, date } : expense
            )
        );*/
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
                        <th>Message</th>
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
                                <td>{expense.message}</td>
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
