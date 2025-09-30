import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import FYW from "../assets/FYW.png";
import Meno_img from "../assets/Meno_img.png";
import {Link} from "react-router-dom";
import React from "react";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";
import Reviews from "../frames/Reviews.jsx";

export default function MenopauseCoaching() {
    const page = 2
    return (
        <div align="center" className="container-col" style={{gap: "2rem"}}>
            <Link to={"/"}>
                <img src={FYW} className="img-fluid" alt="Find Your Way logo" style={{marginTop: "1rem"}}/>
            </Link>
            <div className="about-container">
                <div className="dashboard-wrapper">
                    <Dashboard page={page}/>
                </div>
                <div className="content-wrapper">
                    <TextContent image={Meno_img} style={{ backgroundColor: "white", borderColor: "white" }}>
                        <ul>
                            Coaching is a deeply personal experience so deciding who you would like to work with you is
                            very important. I pride myself on being a professional, trained, experienced and empathetic
                            coach who will support, challenge and encourage you throughout our time together to achieve
                            the results you want to achieve.
                            <br/><br/>
                            Before we start you will have a free 30 min discovery call to enable you to decide if
                            coaching is right for you and whether I am the right person for you.
                            <br/><br/>
                            I will be your trusted partner to hear, listen and understand your own experience and invite
                            you to take forward actions that will be right for you and have the greatest impact on your
                            life today.
                            <br/><br/>
                            If you chose to work with me, you will
                            <br/><br/>
                                <li>Feel informed about the menopause and your unique experience</li>
                                <li>Feel listened to, heard and supported</li>
                                <li>Discover the small, incremental changes that work for you</li>
                                <li>Feel confident and empowered to act</li>
                                <li>Feel energised and positive about the changes you experience</li>
                                <li>Feel you have taken back control</li>
                                <li>Have a sense of the 'old you' back again</li>
                                <li>Know that you are taking better care of yourself</li>
                                <li>Achieve results</li>
                                <li>Have forged a clear path ahead… your way</li>
                        </ul>
                    </TextContent>
                </div>
            </div>
            <div className={'rectangle'} style={{borderWidth: 0, width:'100%', borderRadius: 0}}>
                <h1>
                    From those who say it best...
                </h1>
            </div>
            <Reviews/>
            <Contact/>
        </div>
    )
}