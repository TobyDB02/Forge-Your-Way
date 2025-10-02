import FYW from "../assets/FYW.png"
import Homeimg from "../assets/Homeimg.png"
import Dashboard from "../frames/Dashboard.jsx";
import "../index.css"
import "../styles/layout.css"
import "../styles/textContent.css"
import TextContent from "../components/TextContent.jsx";
import React from "react";
import Contact from "../frames/Contact.jsx";
import Reviews from "../frames/Reviews.jsx";

export default function HomePage() {
    return (
        <div align="center" className="container-col" style={{gap: "2rem"}}>
            <img src={FYW} className="img-fluid" style={{marginTop: "1rem", width: "100%", maxWidth: '30vw'}} />
            <div className="container-row">
                <div style={{padding: "1vw"}}>
                    <Dashboard/>
                    <TextContent image={Homeimg} className="dash-content" style={{ backgroundColor: "white", borderColor: "white", maxWidth: '100%', maxHeight: 'auto' }}>
                        <div>
                            <ul>
                                Thrive through midlife, menopause and beyond...
                                <br/><br/>
                                One to one transformative coaching leading to:
                                <ul style={{ textAlign: 'left', paddingLeft: '2rem', margin: '1rem 0' }}>
                                    <li>A renewed sense of purpose</li>
                                    <li>A renewed sense of self</li>
                                    <li>Reconnection with past joys</li>
                                </ul>
                                <br/><br/>
                                Whether you are feeling overwhelmed with menopause symptoms, feeling you’ve lost your sense of
                                self, or navigating the many ups and downs of midlife, I’m here to tell you that you are not
                                alone and that it is possible for you to move forward, achieve your goals and thrive as you
                                transition through midlife, menopause and beyond.
                                <br/><br/>
                                I am both an Accredited Coach and Certified Menopause Coach, and offer a range of one- to- one
                                coaching sessions so do please reach out so that we can chat through the different options and
                                what might work best for you.
                            </ul>
                        </div>
                    </TextContent>
                </div>
            </div>
            <div className={'rectangle'} style={{borderWidth: 0, width:'100%', maxWidth: '100vw', borderRadius: 0, padding: '0 0 0 3vw', margin: 0, boxSizing: 'border-box'}}>
                <h1 style={{fontFamily: 'Brush Script MT', fontSize: '3vw'}}>
                    From those who say it best...
                </h1>
            </div>
            <Reviews/>
            <Contact/>
        </div>
    )
}