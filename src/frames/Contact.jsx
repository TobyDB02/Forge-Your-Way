import "./contact.css";
import "../styles/layout.css"
import "../styles/textContent.css"

import TextContent from "../components/TextContent.jsx";

import ilm from "../assets/ilm_lv7.png";
import WoaCS from "../assets/WoaCS.png";

export default function Contact() {

    return (
        <div>
            <TextContent className="background">
                    <div className="textcontent-img">
                        <div className="container-row" style={{ gap: "2rem" }}>
                            <img src={ilm} alt="ILM" style={{ width: "20vw", height: "auto" }}/>
                            <img src={WoaCS} alt="WoaCS" style={{ width: "10vw", height: "auto" }}/>
                        </div>
                    </div>
            </TextContent>
        </div>
    )
}