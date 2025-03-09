import React, { useState } from "react";
//import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@mui/material";

import { Typography, Button, ButtonGroup } from "@mui/material";
import YearlyChart from "./YearlyChart";

const dailyData = [
  { date: "Monday", income: 4000, expenses: 2400 },
  { date: "Tuesday", income: 3000, expenses: 1398 },
  { date: "Wednesday", income: 2000, expenses: 9800 },
  { date: "Thursday", income: 2780, expenses: 3908 },
  { date: "Friday", income: 1890, expenses: 4800 },
  { date: "Saturday", income: 2390, expenses: 3800 },
  { date: "Sunday", income: 3490, expenses: 4300 },
];

const weeklyData = [
  { date: "Week 1", income: 12000, expenses: 7400 },
  { date: "Week 2", income: 15000, expenses: 9300 },
  { date: "Week 3", income: 18000, expenses: 8700 },
  { date: "Week 4", income: 20000, expenses: 12000 },
];

const monthlyData = [
  { date: "January", income: 50000, expenses: 34000 },
  { date: "February", income: 45000, expenses: 29000 },
  { date: "March", income: 60000, expenses: 40000 },
  { date: "April", income: 70000, expenses: 50000 },
];

const yearlyData = [
  { date: "2021", income: 500000, expenses: 340000 },
  { date: "2022", income: 600000, expenses: 390000 },
  { date: "2023", income: 700000, expenses: 450000 },
  { date: "2024", income: 800000, expenses: 500000 },
];

const Analysis = () => {
  const [selectedData, setSelectedData] = useState(dailyData);

  return (
    <Card className="p-4 shadow-lg">
      <CardContent>
        <Typography variant="h5" gutterBottom>
           Analysis - Income vs Expenses
        </Typography>
        <YearlyChart/>
      </CardContent>
    </Card>
  );
};

export default Analysis;