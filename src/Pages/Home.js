import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './Home.css'; // Import the updated CSS

const Home = () => {
    const [summary, setSummary] = useState({ totalIncome: 0, totalExpenses: 0, netProfit: 0 });
    const [recentActivities, setRecentActivities] = useState([]);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Income vs Expenses',
                data: [],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
        ],
    });
    const [totalExpenses, setTotalExpenses] = useState(0); // Add state for total expenses

    const chartRef = useRef(null); // Create a ref for the chart

    useEffect(() => {
        fetchSummary();
        fetchRecentActivities();
        fetchChartData();
        fetchTotalExpenses(); // Fetch total expenses
    }, []);

    const fetchSummary = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/summary');
            setSummary(response.data);
        } catch (error) {
            console.error('Error fetching summary:', error);
        }
    };

    const fetchRecentActivities = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/recent-activities');
            setRecentActivities(response.data);
        } catch (error) {
            console.error('Error fetching recent activities:', error);
        }
    };

    const fetchChartData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/chart-data');
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

            // Destroy the previous chart instance if it exists
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            // Create a new chart instance
            const ctx = document.getElementById('myChart').getContext('2d');
            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: response.data.labels,
                    datasets: [
                        {
                            label: 'Income vs Expenses',
                            data: response.data.data,
                            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });
        } catch (error) {
            console.error('Error fetching chart data:', error);
        }
    };

    const fetchTotalExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/total-expenses');
            setTotalExpenses(response.data.totalExpenses);
        } catch (error) {
            console.error('Error fetching total expenses:', error);
        }
    };

    const handleExpenseAdded = () => {
        fetchTotalExpenses(); // Refresh the total expenses when a new expense is added
    };

    return (
        <div>
            <div className="summary">
                <h2>Summary</h2>
                <p>Total Income: ${summary.totalIncome}</p>
                <p>Total Expenses: ${summary.totalExpenses}</p>
                <p>Net Profit: ${summary.netProfit}</p>
                <h2>Total Expenses: ${totalExpenses.toFixed(2)}</h2> {/* Display total expenses */}
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
                <canvas id="myChart" /> {/* Use a canvas element with an ID */}
            </div>
        </div>
    );
};

export default Home;
