import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import FYW from "../assets/FYW.png";
import HomePage from "./HomePage.jsx";
import {Link, Route} from "react-router-dom";
import React from "react";

export default function About() {
    return (
        <div align="center">
            <Link to={"/"}>
                <img src={FYW}/>
            </Link>
            <div align="center" className="container-row">
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}