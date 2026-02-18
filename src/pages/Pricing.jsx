import FYW from "../assets/FYW.png"
import Dashboard from "../frames/Dashboard.jsx";
import Reviews from "../frames/Reviews.jsx";
import "../styles/layout.css"
import {Link} from "react-router-dom";
import React from "react";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";
import Location from "../features/Location.jsx";
import Privacy from "../features/PrivacyNotice.jsx";

export default function Pricing() {
    const page = 4
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
                        style={{
                            backgroundColor: "white",
                            borderColor: "white"
                    }}
                    >
                        <div
                            className='container-col'>
                            <div
                                className={'container-row'}
                                style={{
                                    gap: '1rem'
                            }}
                            >
                                <div>
                                    Location:
                                    <br/>
                                    Close to Attleborough, Norfolk.
                                    <br/><br/>
                                    <ul
                                        style={{
                                            fontWeight: 'lighter'
                                    }}
                                    >
                                        I offer a private and relaxing space for one-to-one coaching to be undertaken
                                        in person for those who live close by. All session can be delivered virtually,
                                        and I am happy to offer a combination of both in person and virtual too.
                                    </ul>
                                    <br/><br/><br/>
                                    <div
                                        className={"rectangle"}
                                        style={{
                                            height: "0.2rem",
                                            borderWidth: 0,
                                            margin: 0,
                                            padding: 0}}>
                                    </div>
                                    <br/>
                                    Times:
                                    <ul
                                        style={{
                                            fontWeight: 'lighter'
                                    }}
                                    >
                                        <li>Evening appointments, Tuesday to Friday between 6pm and 8:30pm</li>
                                        <li>Saturday 8am to 2pm</li>
                                        <li>Sunday 9am to 1pm</li>
                                    </ul>
                                    <br/><br/>

                                </div>
                                <Location/>
                            </div>

                            <div
                                className={'rectangle'}
                                style={{
                                    borderColor: "white"
                            }}
                            >
                                Packages
                            </div>

                            <ul>
                                <br/>
                                Before we start you will have a free 30 min discovery call to enable you to decide if
                                coaching is right for you and whether I am the right person for you.
                                <br/><br/><br/>

                                <div
                                    className={"rectangle"}
                                    style={{
                                        height: "0.2rem",
                                        borderWidth: 0,
                                        margin: 0,
                                        padding: 0}}>
                                </div>
                                <br/><br/>
                                Transformational Menopause Plan - £495 (flexible payment options)
                                <br/><br/>
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    The most comprehensive and transformational plan, designed to look at key lifestyle
                                    choices and encourage small, incremental and consistent changes that deliver
                                    tangible and notable improvements to your symptoms and enable you to move forward
                                    feeling more energised, positive and in control of your menopause journey.
                                    <br/><br/>
                                    Topics that we cover include mindset, hydration, diet, movement, decluttering,
                                    receiving help and support and routines.
                                </ul>
                                <br/><br/><br/>
                                This plan is delivered as:
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    <br/>
                                    <li> 8x 60-90 min sessions</li>
                                    <li> Regular check ins</li>
                                    <br/>
                                </ul>
                                Typically delivered over 10 to 12 weeks
                                <br/><br/><br/>

                                <div
                                    className={"rectangle"}
                                    style={{
                                        height: "0.2rem",
                                        borderWidth: 0,
                                        margin: 0,
                                        padding: 0
                                }}
                                >
                                </div>
                                <br/><br/>
                                From Chaos to Calm - £325 (flexible payment options)
                                <br/><br/>
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    Feeling stressed and overwhelmed - is all too common, particularly when balancing
                                    work, family and competing demands and often leads to poor sleep as we navigate our
                                    menopause journey.  Elevated cortisol has a profound impact on how we experience the
                                    menopause and life in general. These sessions are designed to help you identify and
                                    protect your own needs, resulting in a greater sense of calm and wellbeing.
                                    <br/><br/>
                                    We will look at topics such as routines, receiving help and support, decluttering
                                    and the mind and body connection. You will learn simple breathing techniques and you
                                    will develop confidence in setting boundaries and ensuring you are better equipped
                                    to navigate life’s demands and lead the life you truly deserve.
                                </ul>
                                <br/><br/><br/>
                                This plan is delivered as:
                                <br/><br/>
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    <li> 5 x 60 min sessions</li>
                                    <li> 1 x 20 min check in call</li>
                                </ul>
                                <br/>
                                Typically delivered over 5-6 weeks
                                <br/><br/><br/>

                                <div
                                    className={"rectangle"}
                                    style={{
                                        height: "0.2rem",
                                        borderWidth: 0,
                                        margin: 0,
                                        padding: 0
                                }}
                                >
                                </div>
                                <br/><br/>
                                Feeling better from the inside out - £195 (flexible payment options)
                                <br/><br/>
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    How we nourish our bodies can have a profound impact on how we experience our
                                    menopause journey, and our symptoms can be greatly affected both positively and
                                    negatively by the choices we make in both what we eat and drink.
                                </ul>
                                <br/><br/><br/>
                                This plan is delivered as:
                                <br/><br/>
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    <li> 3 x 60 mins sessions</li>
                                </ul>
                                <br/>
                                Typically delivered over 4 weeks
                                <br/><br/><br/>

                                <div
                                    className={"rectangle"}
                                    style={{
                                        height: "0.2rem",
                                        borderWidth: 0,
                                        margin: 0,
                                        padding: 0
                                }}
                                >
                                </div>
                                <br/><br/>
                                <b>Midlife & Ad Hoc Coaching - £65 per session</b>
                                <br/><br/>
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    Midlife brings many and varied challenges and opportunities.  From career, family to
                                    life and lifestyle choices and changes.  Whatever you are looking to achieve,
                                    coaching will enable you to identify goals, overcome challenges and move forward
                                    with clarity and purpose.
                                </ul>
                                <br/><br/>
                                Minimum 3 sessions @ 60 mins
                                <br/><br/>
                                Typically delivered over 3 to 6 weeks
                                <br/><br/><br/>

                                <div
                                    className={"rectangle"}
                                    style={{
                                        height: "0.2rem",
                                        borderWidth: 0,
                                        margin: 0,
                                        padding: 0
                                }}
                                >
                                </div>
                                <br/><br/>
                                Understanding the Menopause - £30
                                <br/><br/>
                                <ul
                                    style={{
                                        fontWeight: 'lighter'
                                }}
                                >
                                    Knowledge is power - a virtual 45 mins call to chat through your experience and help
                                    de-mystify perimenopause and menopause and leave you with a better  understanding of
                                    some of the potential factors that can help or hinder your journey.
                                </ul>
                                <br/><br/>
                                Virtual 45 mins
                                <br/><br/><br/>

                                <div
                                    className={"rectangle"}
                                    style={{
                                        height: "0.2rem",
                                        borderWidth: 0,
                                        margin: 0,
                                        padding: 0
                                }}
                                >
                                </div>
                                <br/>
                                <p
                                    className={ ' rectangle '}
                                    style={{
                                        fontFamily: 'Times New Roman',
                                        color: 'black',
                                        fontSize: '1.5rem',
                                        textAlign: 'center',
                                        background: '#e0e0e0',
                                        borderColor: '#2E3363',
                                        padding: '1rem 0 1rem 0',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                }}
                                >
                                    'Even if our bodies aren't what they once were, they carry our souls, our courage
                                    and our strength'
                                </p>
                            </ul>
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