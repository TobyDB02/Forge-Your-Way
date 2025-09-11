import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import FYW from "../assets/FYW.png";
import {Link} from "react-router-dom";
import React from "react";

export default function MidlifeCoaching() {
    return (
        <div align="center">
            <Link to={"/"}>
                <img src={FYW}/>
            </Link>
            <div className="container-row">
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}