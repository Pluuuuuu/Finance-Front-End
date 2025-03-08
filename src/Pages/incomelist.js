import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IncomeList.css";

const IncomeList = () => {
    const [incomes, setIncomes] = useState([]);

    useEffect(() => {
        fetchIncomes();
    }, []);

    const fetchIncomes = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/incomes");
            setIncomes(response.data);
        } catch (error) {
            console.error("Error fetching incomes:", error);
        }
    };

    const handleDelete = async (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this income?");
        if (!confirmation) return;
    
        try {
            await axios.delete(`http://localhost:5000/api/incomes/${id}`);
            fetchIncomes(); // Refresh the income list
        } catch (error) {
            console.error("Error deleting income:", error);
            alert("Failed to delete the income. Please try again.");
        }
    };

    const handleEdit = async (id) => {
        const title = prompt("Enter new title:");
        const message = prompt("Enter new message:");
        const amount = prompt("Enter new amount:");
        const date = prompt("Enter new date:");
    
        if (!title || !message || !amount || !date) {
            alert("All fields are required to update an income.");
            return;
        }
    
        try {
            console.log(`Editing income with ID: ${id}`);
            await axios.put(`http://localhost:5000/api/incomes/${id}`, { title, message, amount, date });
            fetchIncomes(); // Refresh the income list
             // ✅ Instead of refetching, update state manually
            /*setIncomes((prevIncomes) =>
            prevIncomes.map((income) =>
                income.id === id ? { ...income, title, message, amount, date } : income
            )
        );*/
        } catch (error) {
            console.error("Error editing income:", error);
        }
    };

    return (
        <div className="incomes-container">
            <h2>Incomes</h2>
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
                    {incomes.length > 0 ? (
                        incomes.map(income => (
                            <tr key={income.id}>
                                <td>{income.title}</td>
                                <td>{income.message}</td>
                                <td>{income.amount}</td>
                                <td>{new Date(income.date).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => handleEdit(income.id)}>Edit</button>
                                    <button onClick={() => handleDelete(income.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No incomes available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default IncomeList;
