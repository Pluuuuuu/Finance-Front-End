import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// Daily data (income and expenses)
const dailyData = [
  { date: "Monday", income: 4000, expenses: 2400 },
  { date: "Tuesday", income: 3000, expenses: 1398 },
  { date: "Wednesday", income: 2000, expenses: 9800 },
  { date: "Thursday", income: 2780, expenses: 3908 },
  { date: "Friday", income: 1890, expenses: 4800 },
  { date: "Saturday", income: 2390, expenses: 3800 },
  { date: "Sunday", income: 3490, expenses: 4300 },
];

// Formatting function for the y-axis values (currency)
const valueFormatter = (value) => `$${value.toLocaleString()}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Total in $',
    },
  ],
  width: 700,
  height: 450,
};

export default function DailyChart() {
  return (
    <BarChart
      dataset={dailyData}
      xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
      series={[
        { dataKey: 'income', label: 'Income', valueFormatter },
        { dataKey: 'expenses', label: 'Expenses', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
