import "../styles/layout.css";
import "../frames/dashboard.css";
import "../styles/textButton.css";
import TextButton from "../components/TextButton.jsx";

export default function Dashboard() {
    return (
        <div className="container-dash container-row">
            <div className="rectangle">
                <TextButton to={"/about"}>About Me</TextButton>
                <TextButton to={"/menopause"}>Menopause Coaching</TextButton>
                <TextButton to={"/midlife"}>Midlife Coaching</TextButton>
                <TextButton to={"/packages"}>Packages and Pricing</TextButton>
            </div>
        </div>
    );
}
