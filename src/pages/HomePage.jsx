import FYW from "../assets/FYW.png"
import Homeimg from "../assets/Homeimg.png"
import Dashboard from "../frames/Dashboard.jsx";
import "../index.css"
import "../styles/layout.css"
import "../styles/textContent.css"
import TextContent from "../components/TextContent.jsx";
import React from "react";

export default function HomePage() {
    return (
        <div align="center">
            <img src={FYW} className="img-fluid"/>
            <div className="container-row">
                <img src={Homeimg} className="img-fluid"/>
                <div style={{padding: "1vw"}}>
                    <Dashboard/>
                    <TextContent className="dash-content">
                        Thrive through midlife, menopause and beyond...
                        <br/><br/>
                        One to one transformative coaching leading to:
                        <ul style={{ textAlign: 'left', paddingLeft: '2rem', margin: '1rem 0' }}>
                            <li>A renewed sense of purpose</li>
                            <li>A renewed sense of self</li>
                            <li>Reconnection with past joys</li>
                        </ul>
                        <br/><br/>
                        Whether you are feeling overwhelmed with menopause symptoms, feeling you've lost your sense of
                        self or navigating the many ups and downs of midlife, I'm here to tell you that you are not
                        alone and that it is absolutely possible for you to move forward, achieve your goals and thrive
                        as you transform through midlife, menopause and beyond.
                        <br/><br/>
                        I am both an accredited Coach and a Certified Menopause Coach and offer a range of 1-2-1
                        coaching sessions so do please reach out so we can chat through the different options what might
                        work best for you.
                    </TextContent>
                </div>
            </div>
        </div>
    )
}