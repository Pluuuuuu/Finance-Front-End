import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// Weekly data (income and expenses)
const weeklyData = [
  { date: "Week 1", income: 12000, expenses: 7400 },
  { date: "Week 2", income: 15000, expenses: 9300 },
  { date: "Week 3", income: 18000, expenses: 8700 },
  { date: "Week 4", income: 20000, expenses: 12000 },
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

export default function WeeklyChart() {
  return (
    <BarChart
      dataset={weeklyData}
      xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
      series={[
        { dataKey: 'income', label: 'Income', valueFormatter },
        { dataKey: 'expenses', label: 'Expenses', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
