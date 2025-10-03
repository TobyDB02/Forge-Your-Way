import Dashboard from "../frames/Dashboard.jsx";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";
import Reviews from "../frames/Reviews.jsx";
import "../styles/layout.css"
import FYW from "../assets/FYW.png";
import Midl_img from "../assets/Midl_img.png";
import {Link} from "react-router-dom";
import React from "react";

export default function MidlifeCoaching() {
    const page = 3;
    return (
        <div
            align="center"
            className="container-col"
            style={{
                gap: "2rem"
        }}
        >
            <Link
                to={"/"}>
                <img
                    src={FYW}
                    className="img-fluid"
                    style={{
                        marginTop: "1rem",
                        width: "100%",
                        maxWidth: '30vw'
                }}
                />
            </Link>
            <div
                className="container-row">
                <div
                    className="about-container">
                    <div
                        className="dashboard-wrapper">
                        <Dashboard
                            page={page}
                        />
                    </div>
                    <div
                        className="content-wrapper">
                        <TextContent
                            image={Midl_img}
                            style={{
                                backgroundColor: "white",
                                borderColor: "white"
                        }}
                        >
                            <ul>
                                Midlife brings many, and varied challenges and opportunities.  From career, family, to life
                                and lifestyle choices and changes.  Whatever you are looking to achieve, coaching will
                                enable you to identify goals, overcome challenges and move forward with clarity and purpose.
                                <br/><br/>
                                Together we will
                                <br/><br/>
                                <li>Explore your goals</li>
                                <li>Identify meaningful actions that bring about positive change</li>
                                <li>Achieve results</li>
                                <li>Have forges a clear path ahead... your way</li>
                                <br/><br/>
                                Ready to forge your path … Contact Me
                            </ul>
                        </TextContent>
                    </div>
                </div>
            </div>
            <div
                className={'rectangle'}
                style={{
                    borderWidth: 0,
                    width:'100%',
                    maxWidth: '100vw',
                    borderRadius: 0,
                    padding: '0 0 0 3vw',
                    margin: 0,
                    boxSizing: 'border-box'
            }}
            >
                <h1
                    style={{
                        fontFamily: 'Brush Script MT',
                        fontSize: '3vw'
                }}
                >
                    From those who say it best...
                </h1>
            </div>
            <Reviews/>
            <Contact/>
        </div>
    )
}