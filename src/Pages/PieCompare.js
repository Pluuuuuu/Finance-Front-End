import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

// Sample Data for Pie Compare
const pieData = [
  { label: 'Fixed Income', value: 3500 },  // Fixed Income
  { label: 'Fixed Expense', value: 500 },  // Fixed Expense
  { label: 'Recurring Income', value: 800 },  // Recurring Income
  { label: 'Recurring Expense', value: 400 },  // Recurring Expense
];

// Formatter to display the value
const valueFormatter = (value) => `$${value}`;

export default function PieCompare() {
  return (
    <PieChart
      series={[
        {
          data: pieData,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={200}
    />
  );
}
