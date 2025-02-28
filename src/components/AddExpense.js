/*import { useState } from 'react';

const AddExpense = () => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const expenseData = { date, category, amount, title, message };
        
        try {
            const response = await fetch('http://localhost:5000/api/expenses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(expenseData)
            });
            
            if (response.ok) {
                alert('Expense added successfully!');
                setDate('');
                setCategory('');
                setAmount('');
                setTitle('');
                setMessage('');
            } else {
                alert('Failed to add expense');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-green-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-4">Add Expenses</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2 border rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded-lg" required>
                        <option value="">Select the category</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Expense Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg">
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddExpense;*/
