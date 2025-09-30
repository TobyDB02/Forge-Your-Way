import "./contact.css";
import "../styles/layout.css"
import "../styles/textContent.css"

import TextContent from "../components/TextContent.jsx";

import ilm from "../assets/ilm_lv7.png";
import WoaCS from "../assets/WoaCS.png";

export default function Contact() {

    return (
        <div>
            <TextContent className="background" style={{ height: "100%", borderWidth: 0, padding: 0, gap: 0}}>
                <div className="container-row">
                    <div className="textcontent-img">
                        <div className="container-row" style={{ gap: "2rem" }}>
                            <img src={ilm} alt="ILM" style={{ width: "20vw", height: "auto", padding: 0 }}/>
                            <img src={WoaCS} alt="WoaCS" style={{ width: "10vw", height: "auto", padding: 0 }}/>
                        </div>
                    </div>
                    <div className="container-row" style={{ gap: "2rem" }}>
                        <ul style={{ paddingTop: "3rem", paddingLeft: "40rem", whiteSpace: "pre" }}>
                            Contact me at:     mornadb@gmail.com
                        </ul>
                    </div>
                </div>
            </TextContent>
        </div>
    )
}