import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for Navbar

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/income">Income</Link></li>
      <li><Link to="/expense">Expense</Link></li>
      <li><Link to="/analysis">Analysis</Link></li>
    </ul>
  </nav>
);

export default Navbar;
