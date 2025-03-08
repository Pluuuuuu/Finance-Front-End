import React from "react";
import { BarChart } from "@mui/x-charts";
import { Box, Typography } from "@mui/material";

const AnalysisChart = ({ data }) => {
  const chartData = {
    labels: data.incomeData.map((item) => item.date),
    datasets: [
      {
        label: "Income",
        data: data.incomeData.map((item) => item.totalIncome),
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Expenses",
        data: data.expenseData.map((item) => item.totalExpense),
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  return (
    <Box className="chart-container">
      <Typography variant="h5" className="chart-title">Income vs Expenses</Typography>
      <BarChart
        width={600}
        height={300}
        series={chartData.datasets}
        xAxis={[{ scaleType: "band", data: chartData.labels }]}
      />
    </Box>
  );
};

export default AnalysisChart;
