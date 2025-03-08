import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import AnalysisChart from "./AnalysisChart";
import AnalysisTable from "./AnalysisTable";
import "./AnalysisPage.css";


const AnalysisPage = () => {
  const [timeFrame, setTimeFrame] = useState("monthly"); // Default to monthly
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAnalysisData = useCallback(async () => { // ✅ Add `async` here
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/analysis/${timeFrame}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching analysis data:", error);
    } finally {
      setLoading(false);
    }
  }, []); 
  
  useEffect(() => {
    fetchAnalysisData();
  }, [fetchAnalysisData]); // ✅ Fetch data when component mounts
  
  return (
    <Box className="analysis-page">
      <Typography variant="h4" className="title">
        Financial Analysis
      </Typography>

      <Box className="buttons">
        {["daily", "weekly", "monthly", "yearly"].map((frame) => (
          <Button 
            key={frame} 
            variant={timeFrame === frame ? "contained" : "outlined"} 
            onClick={() => setTimeFrame(frame)}
          >
            {frame.charAt(0).toUpperCase() + frame.slice(1)}
          </Button>
        ))}
      </Box>

      {loading ? <Typography>Loading data...</Typography> : (
        <>
          {data && <AnalysisChart data={data} />}
          {data && <AnalysisTable data={data} />}
        </>
      )}
    </Box>
  );
};

export default AnalysisPage;
