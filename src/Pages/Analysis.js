import React, { useState } from "react";
import { Card, CardContent, Typography, Button, ButtonGroup } from "@mui/material";
import YearlyChart from "./YearlyChart";  
import MonthlyChart from "./MonthlyChart";  
import DailyChart from "./DailyChart";  
import WeeklyChart from "./WeeklyChart";  
import "./Analysis.css"; // Import the CSS file
import PieIncome from "./pieIncome";
import PieCompare from "./PieCompare";
import PieExpense from "./pieExpense.js";

const Analysis = () => {
  const [selectedChart, setSelectedChart] = useState("daily");

  const handleButtonClick = (chartType) => {
    setSelectedChart(chartType);
  };

  return (
    <Card className="analysis-container">
      <CardContent>
        <Typography variant="h2" gutterBottom className="title">
          Analysis
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

        <div className="separator"></div>

        <Typography variant="h2" gutterBottom className="title">
          Total View
        </Typography>
        <PieCompare/> 
        <div className="pies">
          <div className="p1"><PieIncome/></div>
          <div className="p2"><PieExpense/></div>
        </div>

      </CardContent>
    </Card>
  );
};

export default Analysis;
