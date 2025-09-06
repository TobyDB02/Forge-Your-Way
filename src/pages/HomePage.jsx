import FYW from "../assets/FYW.png"
import Homeimg from "../assets/Homeimg.png"
import Dashboard from "../frames/Dashboard.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../styles/layout.css"

export default function HomePage() {
    return (
        <div align="center">
            <img src={FYW}/>
            <div className="container-row">
                <img src={Homeimg}/>
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}