import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'; // Make sure to install react-chartjs-2 and chart.js

const HomePage = () => {
    const [summary, setSummary] = useState({ totalIncome: 0, totalExpenses: 0, netProfit: 0 });
    const [recentActivities, setRecentActivities] = useState([]);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetchSummary();
        fetchRecentActivities();
        fetchChartData();
    }, []);

    const fetchSummary = async () => {
        const response = await axios.get('/api/summary');
        setSummary(response.data);
    };

    const fetchRecentActivities = async () => {
        const response = await axios.get('/api/recent-activities');
        setRecentActivities(response.data);
    };

    const fetchChartData = async () => {
        const response = await axios.get('/api/chart-data');
        setChartData({
            labels: response.data.labels,
            datasets: [
                {
                    label: 'Income vs Expenses',
                    data: response.data.data,
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                },
            ],
        });
    };

    return (
        <div>
            <h1>Financial Tracker</h1>
            <div className="summary">
                <h2>Summary</h2>
                <p>Total Income: ${summary.totalIncome}</p>
                <p>Total Expenses: ${summary.totalExpenses}</p>
                <p>Net Profit: ${summary.netProfit}</p>
            </div>
            <div className="recent-activities">
                <h2>Recent Activities</h2>
                <ul>
                    {recentActivities.map(activity => (
                        <li key={activity.id}>{activity.title}: ${activity.amount} on {new Date(activity.date).toLocaleDateString()}</li>
                    ))}
                </ul>
            </div>
            <div className="chart">
                <h2>Income and Expenses Chart</h2>
                <Bar data={chartData} />
            </div>
        </div>
    );
};

export default HomePage;