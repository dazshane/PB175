import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SideBar() {
    return (
        <nav id="sidebarMenu" className="sidebar">
            <div className="logo">
                <a><b>CREMS</b></a>
            </div>
            <div className="sidebar-flex">
                <div className="link-wrap">
                    <Link to="/addentry">Add Entry</Link>
                </div>
                <div className="link-wrap">
                    <Link to="/tests">Tests</Link>
                </div>
                <div className="link-wrap">
                    <Link to="/mytests">My Tests</Link>
                </div>
                <div className="link-wrap">Statistics</div>
            </div>
        </nav>
    )
}

export default SideBar;