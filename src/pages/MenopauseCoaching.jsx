import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import FYW from "../assets/FYW.png";
import Meno_img from "../assets/home_img.png";
import {Link} from "react-router-dom";
import React from "react";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";
import Reviews from "../frames/Reviews.jsx";
import Privacy from "../features/PrivacyNotice.jsx";

export default function MenopauseCoaching() {
    const page = 2
    return (
        <div
            align="center"
            className="container-col"
            style={{
                gap: "2rem"
        }}
        >
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
                        image={Meno_img}
                        style={{
                            backgroundColor: "white",
                            borderColor: "white"
                    }}
                    >
                        <ul
                        style={{
                            fontWeight: "lighter",
                        }}
                        >
                            <span
                            style={{
                                fontWeight: "bold"
                            }}
                            >
                               Coaching{' '}
                            </span>
                            is a deeply personal experience so deciding who you would like to work with you is
                            very important. I pride myself on being a professional, trained, experienced and empathetic
                            coach who will support, challenge and encourage you throughout our time together to achieve
                            the results you want to achieve.
                            <br/><br/>
                            I will be your trusted partner to hear, listen and understand your own experience and invite
                            you to take forward actions that will be right for you and have the greatest impact on your
                            life today.
                            <br/><br/>
                            <p
                            style={{
                                fontWeight: "bold"
                            }}
                            >
                                If you chose to work with me, you will
                            </p>
                                <li>Feel informed about the menopause and your unique experience</li>
                                <li>Feel listened to, heard and supported</li>
                                <li>Discover the small, incremental changes that work for you</li>
                                <li>Feel confident and empowered to act</li>
                                <li>Feel energised and positive about the changes you experience</li>
                                <li>Feel you have taken back control</li>
                                <li>Have a sense of the 'old you' back again</li>
                                <li>Know that you are taking better care of yourself</li>
                                <li>Achieve results</li>
                                <li>Have forged a clear path ahead…
                                    <span
                                        style={{
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {' '}your way
                                    </span>
                                </li>
                        </ul>
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