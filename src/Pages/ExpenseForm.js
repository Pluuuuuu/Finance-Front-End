import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExpenseForm.css";

const ExpenseForm = ({ onExpenseAdded }) => {
    const [formData, setFormData] = useState({
        date: "",
        category: "",
        amount: "",
        title: "",
        message: "",
    });

    
    const [categories, setCategories] = useState([]);



    // Predefined categories
    /*const categories = [
        { id: "fixed", name: "Fixed Expense" },
        { id: "recurring", name: "Recurring Expense" }
    ];*/



    useEffect(() => {
        axios.get("http://localhost:5000/api/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Error fetching categories:", err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentDate = new Date();
        const entryDate = new Date(formData.date);

        if (entryDate > currentDate) {
            alert("Date cannot be in the future.");
            return;
        }

        if (!formData.category) {
            alert("Please select a category.");
            return;
        }

        axios.post("http://localhost:5000/api/expenses", formData)
            .then(() => {
                alert("Expense added!");
                onExpenseAdded();
            })
            .catch(err => alert("Error adding expense: " + err.message));
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />

            <label>Category</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
            >
                <option value="">Select the category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            <label>Amount</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

            <label>Expense Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />

            <label>Enter Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

            <button type="submit">Save</button>
        </form>
    );
};

export default ExpenseForm;
