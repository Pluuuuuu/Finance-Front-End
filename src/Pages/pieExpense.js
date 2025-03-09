import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieExpense() {
  // Random values for demonstration
  const totalExpenseGoal = Math.floor(Math.random() * 12000) + 2000; // Random expense goal between 2k and 14k
  const currentExpenseProgress = Math.floor((Math.random() * 70) + 30); // Random expense progress percentage between 30% and 100%
  const currentExpense = (totalExpenseGoal * currentExpenseProgress) / 100; // Current fixed expense based on progress
  const remainingExpense = totalExpenseGoal - currentExpense; // Calculate remaining expense

  // Data for the single pie chart (current fixed expense and remaining expense)
  const expenseData = [
    { id: 'current-expense', label: 'Fixed Expense', value: currentExpense, color: '#03A696' }, // Green color
    { id: 'remaining-expense', label: 'Remaining Expense', value: remainingExpense, color: '#2E97F2' }, // Light green color
  ];

  return (
    <Box textAlign="center" width="100%">
      <Typography variant="h6" gutterBottom>
        Expense Goal Progress
      </Typography>

      <Box mb={3}>
        <PieChart
          series={[
            {
              data: expenseData, // Directly passing the expense data
              innerRadius: 50, // Donut style
              arcLabel: (params) => `${params.label}: $${params.value.toFixed(2)}`, // Label with value formatted as currency
            },
          ]}
          height={300}
        />
      </Box>

      <Box>
        <Typography variant="body1">
          <strong>Expense Goal:</strong> ${totalExpenseGoal} (Total Expense Goal)
        </Typography>
        <Typography variant="body1">
          <strong>Current Fixed Expense:</strong> ${currentExpense.toFixed(2)} ({currentExpenseProgress}%)
        </Typography>
      </Box>
    </Box>
  );
}
