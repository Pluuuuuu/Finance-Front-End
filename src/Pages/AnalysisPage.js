import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "./AnalysisPage.css";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalysisPage = () => {
  const [period, setPeriod] = useState('monthly'); // Default to 'monthly'
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    // Fetch analysis data when the period changes
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/analysis/${period}`);
        const { totalIncome, totalExpense, incomeData, expenseData } = response.data;

        setIncomeData(incomeData);
        setExpenseData(expenseData);
        setTotalIncome(totalIncome);
        setTotalExpense(totalExpense);
      } catch (error) {
        console.error('Error fetching analysis data', error);
      }
    };

    fetchData();
  }, [period]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  // Prepare chart data
  const chartData = {
    labels: incomeData.map((item) => item.date), // X-axis labels (dates)
    datasets: [
      {
        label: 'Income',
        data: incomeData.map((item) => item.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Expense',
        data: expenseData.map((item) => item.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="analysis-page">
      <h2>Financial Analysis</h2>
      
      {/* Buttons for selecting period */}
      <div className="period-buttons">
        <button onClick={() => handlePeriodChange('daily')}>Daily</button>
        <button onClick={() => handlePeriodChange('weekly')}>Weekly</button>
        <button onClick={() => handlePeriodChange('monthly')}>Monthly</button>
        <button onClick={() => handlePeriodChange('yearly')}>Yearly</button>
      </div>

      {/* Bar chart for income and expenses */}
      <div className="bar-chart">
        <Bar data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: `Income & Expense Analysis (${period})` } } }} />
      </div>

      {/* Display total income and total expenses */}
      <div className="totals">
        <h3>Total Income: {totalIncome}</h3>
        <h3>Total Expense: {totalExpense}</h3>
      </div>
    </div>
  );
};

export default AnalysisPage;
