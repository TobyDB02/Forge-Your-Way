
import React, { useState, useEffect } from "react";
import "../styles/layout.css";
import "../frames/dashboard.css";
import "../styles/textButton.css";
import "../index.css"
import TextButton from "../components/TextButton.jsx";
import TextContent from "../components/TextContent.jsx";
import img_meno from "../assets/meno_img.png";
import Meno_img from "../assets/home_img.png";
import Image_Meno from "../assets/Image_Meno.png";
import Location from "../features/Location.jsx";

export default function Dashboard({ page }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div>
                {isMobile ? <MobileDashboard /> : <DesktopDashboard page={page} />}
            </div>
        </div>
    );
}


function DesktopDashboard({ page }) {
    return (
        <div
            className="dashboard-container">
            <div
                className="rectangle dashboard-inner">
                <TextButton
                    to={"/about"}
                    style={page === 1 ? { color: "#2E3363" } : {}}>
                    About Me
                </TextButton>

                <TextButton
                    to={"/menopause"}
                    style={page === 2 ? { color: "#2E3363" } : {}}>
                    Menopause Coaching
                </TextButton>

                <TextButton
                    to={"/midlife"}
                    style={page === 3 ? { color: "#2E3363" } : {}}>
                    Midlife Coaching
                </TextButton>

                <TextButton
                    to={"/pricing"}
                    style={page === 4 ? { color: "#2E3363" } : {}}>
                    Packages and Pricing
                </TextButton>
            </div>
        </div>
    );
}

function MobileDashboard() {
    const [openIndex, setOpenIndex] = useState(null);

    const sections = [
        { title: "About Me", content: <div
                className="about-container">
                <div
                    className="content-wrapper">
                    <TextContent
                        style={{
                            backgroundColor: "white",
                            borderColor: "white"
                        }}
                    >
                        <div
                            className="container-row + textMobile"
                            style={{ gap: "2rem"
                            }}
                        >
                            <p>
                                <span
                                    style={{
                                        fontFamily: "Brush Script MT",
                                        fontSize: "30px"
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
                                    className="textMobile-Title"
                                    style={{
                                        fontFamily: "Brush Script MT",
                                        paddingBottom: 0,
                                        fontSize: "26px",
                                    }}
                                >
                                    Morna
                                </ul>
                            </p>
                        </div>
                    </TextContent>
                </div>
                <img src={img_meno}
                style={{maxWidth: "80%"}}/>
            </div> },
        { title: "Menopause Coaching", content:
            <div
                className="about-container">
                <div
                    className="content-wrapper">
                    <TextContent
                        style={{
                            backgroundColor: "white",
                            borderColor: "white"
                        }}
                    >
                        <ul
                            className="textMobile"
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
                <img src={Meno_img}
                     style={{maxWidth: "80%"}}/>
            </div>
                 },
        { title: "Midlife Coaching", content:
            <div
                className="about-container">
                <div
                    className="content-wrapper">
                    <TextContent
                        style={{
                            backgroundColor: "white",
                            borderColor: "white"
                        }}
                    >
                        <ul
                            className="textMobile"
                            style={{
                                fontWeight: 'lighter'
                            }}
                        >
                                <span
                                    style={{
                                        fontWeight: "bold"
                                    }}
                                >
                                    Midlife{' '}
                                </span>
                            brings many, and varied challenges and opportunities.  From career, family, to life
                            and lifestyle choices and changes.  Whatever you are looking to achieve, coaching will
                            enable you to identify goals, overcome challenges and move forward with clarity and purpose.
                            <br/><br/>
                            <p
                                style={{
                                    fontWeight: "bold"
                                }}
                            >
                                Together we will:
                            </p>
                            <li>Explore your goals</li>
                            <li>Identify meaningful actions that bring about positive change</li>
                            <li>Achieve results</li>
                            <li>Have forged a clear path ahead... your way</li>
                            <br/><br/>
                            Ready to forge your path? …
                            <span
                                style={{
                                    fontWeight: 'bold',
                                }}
                            >
                                    {' '}Get in touch
                                </span>
                        </ul>
                    </TextContent>
                </div>
                <img src={Image_Meno}
                     style={{maxWidth: "80%"}}/>
            </div>
                 },
        { title: "Packages and Pricing", content: <div
                className="about-container">
                <TextContent
                    style={{
                        backgroundColor: "white",
                        borderColor: "white"
                    }}
                >
                        <div
                        style={{
                            alignItems: "left",
                        }}>
                            <div
                                className='container-col'>
                                <div
                                    className='container-row + textMobile'
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
                                </div>
                                <div
                                    style={{
                                        alignItems: "center",
                                    }}>
                                    <Location/>
                                    <br/><br/><br/>
                                </div>
                        </div>
                        <div
                            className={'rectangle textMobile'}
                            style={{
                                borderColor: "white"
                            }}
                        >
                            Packages
                        </div>

                        <ul
                        className='textMobile'>
                            <br/>
                            Before we start you will have a free 30 min discovery call to enable you to decide if
                            coaching is right for you and whether I am the right person for you.
                            <br/><br/><br/>
                            <p className={"rectangle"}>
                                Transformational Menopause Plan - £495 (flexible payment options)
                            </p>
                            <br/>
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
                            <br/><br/>
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
                            <p className={'rectangle'}>
                                From Chaos to Calm - £325 (flexible payment options)
                            </p>
                            <br/>
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
                            <p className={"rectangle"}>
                                Feeling better from the inside out - £195 (flexible payment options)
                            </p>
                            <br/>
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
                            <p className={"rectangle"}>
                                Midlife & Ad Hoc Coaching - £65 per session
                            </p>
                            <br/>
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
                            <p className={"rectangle"}>
                                Understanding the Menopause - £30
                            </p>
                            <br/>
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
                                className={ ' rectangle quote '}
                            >
                                'Even if our bodies aren't what they once were, they carry our souls, our courage
                                and our strength'
                            </p>
                        </ul>
                    </div>
                </TextContent>
            </div> },
    ];

    return (
        <div className="space-y-4" >
            {sections.map((section, index) => (
                <div key={index} className="mobile-section">
                    <button
                        className="toggle-button"
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                    >
                        {section.title}
                    </button>
                    {openIndex === index && (
                        <div className="toggle-content">{section.content}</div>
                    )}
                    <br/><br/>
                </div>
        ))}
        </div>
    )}