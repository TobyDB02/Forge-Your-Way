import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import "../index.css"
import "../styles/textContent.css"
import FYW from "../assets/FYW.png";
import glass from "../assets/glass.png";
import {Link} from "react-router-dom";
import React from "react";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";
import Reviews from "../frames/Reviews.jsx";

export default function About() {
    const page = 1
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
                    <TextContent image={glass} style={{ backgroundColor: "white", borderColor: "white" }}>
                        <div className="container-row" style={{ gap: "2rem" }}>
                            I’ve spent nearly 30 years working in senior HR roles, and for the last decade I’ve been an
                            ILM Level 7 qualified coach—helping people find their own answers, break through challenges,
                            and achieve what matters most to them.
                            <br/><br/>
                            My real passion?  Supporting women through midlife and menopause.
                            <br/><br/>
                            After my own difficult experience—navigating poor sleep, brain fog, anxiety, exhaustion, and
                            a sense of “losing myself’’ I decided to train as a certified menopause coach. Like so many
                            women, I kept going, somehow holding everything together, but never feeling I was truly
                            thriving.
                            <br/><br/>
                            Learning about how hormones, nutrition, hydration, and small incremental lifestyle changes
                            could completely shift my experience was life-changing.
                            <br/><br/>
                            I began to feel more like me again—vibrant, confident, and in control.
                            <br/><br/>
                            And I want that for you too.
                            <br/><br/>
                            Menopause is different for every woman, but one thing I hear over and over is the wish to
                            “get back to myself.” That’s where I come in.
                            <br/><br/>
                            I’ll work with you to understand what’s going on in your body, help you recognise what’s
                            possible, and create a plan that works for you—
                            whether you’re in perimenopause, menopause, or beyond.
                            <br/><br/>
                            The women I’ve supported tell me they feel informed, empowered, and more like themselves
                            again. I’d love to help you feel that way too.
                        </div>
                    </TextContent>
                </div>
            </div>
            <Reviews/>
            <Contact/>
        </div>
    )
}