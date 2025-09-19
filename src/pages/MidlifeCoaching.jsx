import Dashboard from "../frames/Dashboard.jsx";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";
import "../styles/layout.css"
import FYW from "../assets/FYW.png";
import Midl_img from "../assets/Midl_img.png";
import {Link} from "react-router-dom";
import React from "react";

export default function MidlifeCoaching() {
    const page = 3;
    return (
        <div align="center" className="container-col" style={{gap: "2rem"}}>
            <Link to={"/"}>
                <img src={FYW} className="img-fluid" alt="Find Your Way logo" style={{marginTop: "1rem"}}/>
            </Link>
            <div className="container-row">
                <div className="about-container">
                    <div className="dashboard-wrapper">
                        <Dashboard page={page} />
                    </div>
                    <div className="content-wrapper">
                        <TextContent image={Midl_img}>
                            Midlife brings many and varied challenges and opportunities.  From career, family to life and
                            lifestyle choices and changes.  Whatever you are looking to achieve, coaching will enable you to
                            identify goals, overcome challenges and move forward with clarity and purpose.
                            <br/><br/>
                            Before we start you will have a free 30 min discovery call to enable you to decide if coaching
                            is right for you and whether I am the right person for you.
                            <br/><br/>
                            As a qualified Coach, I will be your trusted partner to hear, listen and understand your own
                            experience and invite you to take forward actions that will be right for you and have the
                            greatest impact on your life today.
                            <br/><br/>
                            Ready to forge your path … Contact Me

                        </TextContent>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}