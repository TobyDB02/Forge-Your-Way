import FYW from "../assets/FYW.png"
import Dashboard from "../frames/Dashboard.jsx";
import "../styles/layout.css"
import {Link} from "react-router-dom";
import React from "react";
import TextContent from "../components/TextContent.jsx";
import Contact from "../frames/Contact.jsx";

export default function Pricing() {
    const page = 4
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
                    <TextContent style={{ backgroundColor: "white", borderColor: "white" }}>
                        <ul>
                            Before we start you will have a free 30 min discovery call to enable you to decide if
                            coaching is right for you and whether I am the right person for you.
                            <br/><br/>
                            <div className={"rectangle"} style={{height: "0.2rem", borderWidth: 0, margin: 0,
                                padding: 0,}}>
                            </div>
                            <br/><br/>
                            <b>Midlife & Ad Hoc Coaching - £65 per session</b>
                            <br/><br/>
                            Midlife brings many and varied challenges and opportunities.  From career, family to life
                            and lifestyle choices and changes.  Whatever you are looking to achieve, coaching will
                            enable you to identify goals, overcome challenges and move forward with clarity and purpose.
                            <br/><br/>
                            Minimum 3 sessions @ 60 mins
                            <br/><br/>
                            Typically delivered over 3 to 6
                            <br/><br/>
                            <div className={"rectangle"} style={{height: "0.2rem", borderWidth: 0, margin: 0,
                                padding: 0,}}>
                            </div>
                            <br/><br/>
                            Understanding the Menopause - £30
                            <br/><br/>
                            Knowledge is power - a virtual 45 mins call to chat through your experience and help
                            de-mystify perimenopause and menopause and leave you with a better  understanding of some of
                            the potential factors that can help or hinder your journey.
                            <br/><br/>
                            Virtual 45 mins
                            <br/><br/>
                            <div className={"rectangle"} style={{height: "0.2rem", borderWidth: 0, margin: 0,
                                padding: 0,}}>
                            </div>
                            <br/><br/>
                            Most of us are ageing through the next phase of our lives.  We are at the age where we see
                            wrinkles, grey hair and extra pounds.
                            <br/><br/>
                            We have less youth and zest, but we have wisdom and experience.
                            <br/><br/>
                            We have raised families, run households, paid the bills, dealt with diseases, sadness and
                            everything else life has assigned us.
                            <br/><br/>
                            Some of us have lost those that were nearest and dearest to us.
                            <br/><br/>
                            We are survivors.
                            <br/><br/>
                            We are warriors in the quiet.
                            <br/><br/>
                            We are women, like a fine wine or classic car.
                            <br/><br/>
                            Even if our bodies aren’t what they once were, they carry our souls, our courage and our
                            strength.
                            <br/><br/>
                            We shall enter this chapter in our lives with humility, grace and pride over everything we
                            have been through and, we should never feel bad about getting older.
                            <br/><br/>
                            It’s a privilege that is denied to so many.
                            <br/><br/>
                            Author unknown.
                        </ul>
                    </TextContent>
                </div>
            </div>
            <Contact/>
        </div>
    )
}