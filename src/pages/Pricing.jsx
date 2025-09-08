import FYW from "../assets/FYW.png"
import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"

export default function Pricing() {
    return (
        <div align="center">
            <img src={FYW}/>
            <div className="container-row">
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}