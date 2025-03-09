import React, { useState } from "react";
import { Card, CardContent, Typography, Button, ButtonGroup } from "@mui/material";
import YearlyChart from "./YearlyChart";  
import MonthlyChart from "./MonthlyChart";  
import DailyChart from "./DailyChart";  
import WeeklyChart from "./WeeklyChart";  
import "./Analysis.css"; // Import the CSS file
import PieIncome from "./pieIncome";

const Analysis = () => {
  const [selectedChart, setSelectedChart] = useState("daily");

  const handleButtonClick = (chartType) => {
    setSelectedChart(chartType);
  };

  return (
    <Card className="analysis-container">
      <CardContent>
        <Typography variant="h5" gutterBottom className="title">
          Analysis - Income vs Expenses
        </Typography>

        {/* Button Group */}
        <div className="button-group-container">
        <ButtonGroup variant="contained" className="buttons">
          <Button 
            onClick={() => handleButtonClick("daily")} 
            className={`chart-button ${selectedChart === "daily" ? "active-chart" : ""}`}
          >
            Daily
          </Button>
          <Button 
            onClick={() => handleButtonClick("weekly")} 
            className={`chart-button ${selectedChart === "weekly" ? "active-chart" : ""}`}
          >
            Weekly
          </Button>
          <Button 
            onClick={() => handleButtonClick("monthly")} 
            className={`chart-button ${selectedChart === "monthly" ? "active-chart" : ""}`}
          >
            Monthly
          </Button>
          <Button 
            onClick={() => handleButtonClick("yearly")} 
            className={`chart-button ${selectedChart === "yearly" ? "active-chart" : ""}`}
          >
            Yearly
          </Button>
        </ButtonGroup> </div>

        {/* Conditionally Render the Selected Chart */}
        {selectedChart === "daily" && <DailyChart />}
        {selectedChart === "weekly" && <WeeklyChart />}
        {selectedChart === "monthly" && <MonthlyChart />}
        {selectedChart === "yearly" && <YearlyChart />}

        <PieIncome/>
      </CardContent>
    </Card>
  );
};

export default Analysis;
