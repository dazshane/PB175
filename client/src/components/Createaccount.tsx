import React, { useState } from 'react';
import '../App.css';

function Createaccount() {
    return (
        <nav id="sidebarMenu" className="sidebar">
            <div className="logo">
                <a><b>CREMS</b></a>
            </div>
            <div className="sidebar-flex">
                <div className="link-wrap">Add Entry</div>
                <div className="link-wrap">Tests</div>
                <div className="link-wrap">My Tests</div>
                <div className="link-wrap">Statistics</div>
            </div>
        </nav>
    )
}

export default Createaccount;