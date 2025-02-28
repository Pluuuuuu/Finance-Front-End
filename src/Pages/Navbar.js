import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/home" className="nav-item">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </Link>
            <Link to="/statistics" className="nav-item">
                <i className="fas fa-chart-bar"></i>
                <span>Statistics</span>
            </Link>
            <Link to="/transactions" className="nav-item">
                <i className="fas fa-exchange-alt"></i>
                <span>Transactions</span>
            </Link>
            <Link to="/expenses" className="nav-item">
                <i className="fas fa-money-bill"></i>
                <span>Expenses</span>
            </Link>
            <Link to="/profile" className="nav-item">
                <i className="fas fa-user"></i>
                <span>Profile</span>
            </Link>
        </div>
    );
};

export default Navbar;
