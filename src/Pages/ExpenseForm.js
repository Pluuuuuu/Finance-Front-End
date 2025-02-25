import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExpenseForm.css";

const ExpenseForm = ({ onExpenseAdded }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        amount: "",
        currency: "USD",  // Default currency
        date_time: "",
        category_id: "",
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Error fetching categories:", err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentDate = new Date();
        const entryDate = new Date(formData.date_time);

        if (entryDate > currentDate) {
            alert("Date cannot be in the future.");
            return;
        }

        if (!formData.category_id) {
            alert("Please select a category.");
            return;
        }

        axios.post("http://localhost:5000/expenses", formData)
            .then(() => {
                alert("Expense added!");
                onExpenseAdded();
            })
            .catch(() => alert("Error adding expense"));
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" required onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" required onChange={handleChange} />

            {/* Amount input with currency dropdown */}
            <div className="amount-input">
                <input 
                    type="number" 
                    name="amount" 
                    placeholder="Amount" 
                    required 
                    onChange={handleChange} 
                />
                <select 
                    name="currency" 
                    value={formData.currency} 
                    onChange={handleChange} 
                    required
                >
                    <option value="USD">USD</option>
                    <option value="LBP">LBP</option>
                </select>
            </div>

            <input type="datetime-local" name="date_time" required onChange={handleChange} />

            {/* Category dropdown */}
            <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
            >
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
