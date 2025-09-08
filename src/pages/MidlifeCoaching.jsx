import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import FYW from "../assets/FYW.png";

export default function MidlifeCoaching() {
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