import FYW from "../assets/FYW.png"
import Homeimg from "../assets/Homeimg.png"
import Dashboard from "../frames/Dashboard.jsx";
import "../index.css"
import "../styles/layout.css"

export default function HomePage() {
    return (
        <div align="center">
            <img src={FYW} className="img-fluid"/>
            <div className="container-row">
                <img src={Homeimg} className="img-fluid"/>
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}