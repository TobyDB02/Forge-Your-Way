import "./contact.css";
import "../styles/layout.css"
import "../styles/textContent.css"

import TextContent from "../components/TextContent.jsx";

import ilm from "../assets/ilm_lv7.png";
import WoaCS from "../assets/WoaCS.png";
import { Link } from 'react-router-dom';

export default function Contact() {

    return (
        <div
        style={{
            justifyContent: "flex-end",
        }}
        >
            <TextContent
                className="background"
                         style={{
                             display: "flex",
                             height: "100%",
                             borderWidth: 0,
                             padding: 0,
                             gap: 0,
                             justifyContent: "right",
            }}
            >
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                }}>
                    <div
                        className="container-row"
                        style={{
                            display: "flex",
                            justifyContent: "right",
                        }}
                    >
                        <div>
                            <div
                                className="container-row"
                                style={{
                                    gap: "2rem",
                                    justifyContent: "right",
                                }}
                            >
                                <div
                                    className='textcontent-img'>
                                    <img
                                        src={ilm}
                                        alt="ILM"
                                        style={{
                                            width: "20vw",
                                            height: "auto",
                                            padding: 0,
                                            justifyContent: "right",
                                        }}
                                    />

                                </div>

                                <div className='textcontent-img'>
                                    <img
                                        src={WoaCS}
                                        alt="WoaCS"
                                        style={{
                                            width: "10vw",
                                            height: "auto",
                                            padding: 0,
                                            justifyContent: "right",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="container-row"
                            style={{
                                gap: "2rem",
                                justifyContent: "right",
                            }}
                        >
                            <div
                                className="container-col"
                                style={{
                                    gap: "2rem",
                                    justifyContent: "right",
                                }}
                            >
                                <ul
                                    className="contact-text container-row"
                                >
                                    Contact me at:
                                    <span>
                                    {'  '}mornadb@gmail.com
                                    <br/>
                                        {'  '}07919217039
                                </span>
                                </ul>
                                <Link
                                    to={'/privacy'}
                                    state={{
                                        from: location.pathname
                                    }}
                                    className="textMobile"
                                    style={{
                                        color: "black",
                                        paddingLeft: "2rem",
                                    }}
                                >
                                    Privacy Policy
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </TextContent>
        </div>
    )
}