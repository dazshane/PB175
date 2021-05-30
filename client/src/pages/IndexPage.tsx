import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SideBar from '../components/SideBar';

export default IndexPage;

function IndexPage() {
    return (
        <div>
            <SideBar />
        </div>
    )
}