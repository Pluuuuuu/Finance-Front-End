import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// Yearly data (income and expenses)
const yearlyData = [
  { year: "2021", income: 500000, expenses: 340000 },
  { year: "2022", income: 600000, expenses: 390000 },
  { year: "2023", income: 700000, expenses: 450000 },
  { year: "2024", income: 800000, expenses: 500000 },
];

// Formatting function for the y-axis values (currency)
const valueFormatter = (value) => `$${value.toLocaleString()}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Total in $',
    },
  ],
  width: 600,
  height: 400,
};

export default function YearlyChart() {
  return (
    <BarChart
      dataset={yearlyData}
      xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
      series={[
        { dataKey: 'income', label: 'Income', valueFormatter },
        { dataKey: 'expenses', label: 'Expenses', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
