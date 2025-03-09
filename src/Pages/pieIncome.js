import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieIncome() {
  // Random values for demonstration
  const totalGoal = Math.floor(Math.random() * 10000) + 4500; // Random goal between 5k and 15k
  const currentProgress = Math.floor((Math.random() * 100) + 1); // Random progress percentage between 1 and 100
  const currentIncome = (totalGoal * currentProgress) / 100; // Current income based on progress
  const remainingIncome = totalGoal - currentIncome; // Calculate remaining income

  // Data for the single pie chart (current income and remaining income)
  const pieData = [
    { id: 'current-income', label: 'Current Income', value: currentIncome, color: '#2E97F2' }, // Green color
    { id: 'remaining-income', label: 'Remaining Income', value: remainingIncome, color: '#03A696' }, // Light green color
  ];

  return (
    <Box textAlign="center" width="100%">
      <Typography variant="h6" gutterBottom>
        Income Goal Progress
      </Typography>

      <Box mb={3}>
        <PieChart
          series={[
            {
              data: pieData, // Directly passing the pie data without unnecessary nesting
              innerRadius: 50, // You can adjust the inner radius to make it look like a donut chart
              arcLabel: (params) => `${params.label}: $${params.value.toFixed(2)}`, // Label with value formatted as currency
            },
          ]}
          height={300}
        />
      </Box>

      <Box>
        <Typography variant="body1">
          <strong>Goal:</strong> ${totalGoal} (Total Income Goal)
        </Typography>
        <Typography variant="body1">
          <strong>Current Progress:</strong> ${currentIncome.toFixed(2)} ({currentProgress}%)
        </Typography>
      </Box>
    </Box>
  );
}
