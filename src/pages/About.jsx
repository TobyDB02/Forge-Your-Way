import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import "../index.css"
import "../styles/textContent.css"
import FYW from "../assets/FYW.png";
import {Link} from "react-router-dom";
import React from "react";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";
import Reviews from "../frames/Reviews.jsx";
import Privacy from "../features/PrivacyNotice.jsx";
import Meno_img from "../assets/Meno_img.png";
import img_meno from "../assets/Image_Meno.png";

export default function About() {
    const page = 1
    return (
        <div
            align="center"
            className="container-col"
            style={{gap: "2rem"}}>
            <Privacy/>
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
                        image={img_meno}
                        style={{
                            backgroundColor: "white",
                            borderColor: "white"
                    }}
                    >
                        <div
                            className="container-row"
                            style={{ gap: "2rem"
                        }}
                        >
                            <p>
                                <span
                                    style={{
                                        fontFamily: "Brush Script MT",
                                        fontSize: "3rem"
                                    }}
                                >
                                Hello...{' '}
                            </span>
                                <span
                                style={{
                                    fontWeight: "lighter"
                                }}
                                >
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
                                </span>
                                <ul
                                    style={{
                                        fontFamily: "Brush Script MT",
                                        paddingBottom: 0,
                                        fontSize: "3rem"
                                    }}
                                    >
                                    Morna
                                </ul>
                            </p>
                        </div>
                    </TextContent>
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