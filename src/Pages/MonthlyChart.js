import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// Monthly data (income and expenses)
const monthlyData = [
  { date: "January", income: 50000, expenses: 34000 },
  { date: "February", income: 45000, expenses: 29000 },
  { date: "March", income: 60000, expenses: 40000 },
  { date: "April", income: 70000, expenses: 50000 },
  { date: "May", income: 65000, expenses: 42000 },
  { date: "June", income: 72000, expenses: 53000 },
  { date: "July", income: 68000, expenses: 47000 },
  { date: "August", income: 75000, expenses: 55000 },
  { date: "September", income: 77000, expenses: 56000 },
  { date: "October", income: 80000, expenses: 58000 },
  { date: "November", income: 85000, expenses: 60000 },
  { date: "December", income: 90000, expenses: 65000 },
];

// Formatting function for the y-axis values (currency)
const valueFormatter = (value) => `$${value.toLocaleString()}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Total in $',
    },
  ],
  width: 800,
  height: 500,
};

export default function MonthlyChart() {
  return (
    <BarChart
      dataset={monthlyData}
      xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
      series={[
        { dataKey: 'income', label: 'Income', valueFormatter },
        { dataKey: 'expenses', label: 'Expenses', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
