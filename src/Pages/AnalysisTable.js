import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const AnalysisTable = ({ data }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "amount", headerName: "Amount", width: 120, type: "number" },
    { field: "date", headerName: "Date", width: 150 },
  ];

  const rows = [
    ...data.incomeData.map((item) => ({
      id: `I-${item.id}`,
      title: item.title || "Income",
      category: item.category || "N/A",
      amount: item.totalIncome,
      date: item.date,
    })),
    ...data.expenseData.map((item) => ({
      id: `E-${item.id}`,
      title: item.title || "Expense",
      category: item.category || "N/A",
      amount: item.totalExpense,
      date: item.date,
    })),
  ];

  return (
    <Box className="table-container">
      <Typography variant="h5" className="table-title">Transaction Details</Typography>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Box>
  );
};

export default AnalysisTable;
