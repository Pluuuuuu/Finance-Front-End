import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IncomeList.css"; // Updated to IncomeList.css

const IncomeList = () => {
    const [incomes, setIncomes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/incomes")  // Updated to the income endpoint
            .then(res => {
                console.log("Incomes fetched:", res.data); // Debugging: log the fetched incomes
                setIncomes(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="incomes-container">
            <h2>Incomes</h2>
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
                    {incomes.length > 0 ? (
                        incomes.map(income => (
                            <tr key={income.id}>
                                <td>{income.title}</td>
                                <td>{income.description}</td>
                                <td>{income.amount}</td>
                                <td>{new Date(income.date).toLocaleDateString()}</td> {/* Adjusted date field name */}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No incomes available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default IncomeList;
