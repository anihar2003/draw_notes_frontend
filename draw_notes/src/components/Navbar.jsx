// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.svg';  
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-3 bg-white shadow-md rounded-lg mx-4 mt-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2">
                <Link to="/"><img src={logo} alt="logo" className="w-10 h-10" /></Link>
            </div>
            {/* Login and Sign Up Buttons */}
            <div className="flex items-center space-x-3">
                <button className="text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    <Link to="/login">Login</Link>
                </button>
                <button className="text-white bg-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-700 shadow-md transition-transform transform hover:scale-105">
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>
        </nav>
    );
}
