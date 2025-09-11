import FYW from "../assets/FYW.png"
import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import {Link} from "react-router-dom";
import React from "react";

export default function Pricing() {
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