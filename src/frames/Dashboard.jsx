import "../styles/layout.css";
import "../frames/dashboard.css";
import "../styles/textButton.css";
import TextButton from "../components/TextButton.jsx";

export default function Dashboard() {
    return (
        <div className="container-dash container-row">
            <div className="rectangle">
                <TextButton>About Me</TextButton>
                <TextButton>Menopause Coaching</TextButton>
                <TextButton>Midlife Coaching</TextButton>
                <TextButton>Packages and Pricing</TextButton>
            </div>
        </div>
    );
}
