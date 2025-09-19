import "../styles/layout.css";
import "../frames/dashboard.css";
import "../styles/textButton.css";
import "../index.css"
import TextButton from "../components/TextButton.jsx";

export default function Dashboard({ page }) {
    return (
        <div className="dashboard-container">
            <div className="rectangle dashboard-inner">
                <TextButton to={"/about"}
                            style={page === 1 ? { color: "#2E3363" } : {}}>
                    About Me
                </TextButton>

                <TextButton to={"/menopause"}
                            style={page === 2 ? { color: "#2E3363" } : {}}>
                    Menopause Coaching
                </TextButton>

                <TextButton to={"/midlife"}
                            style={page === 3 ? { color: "#2E3363" } : {}}>
                    Midlife Coaching
                </TextButton>

                <TextButton to={"/pricing"}
                            style={page === 4 ? { color: "#2E3363" } : {}}>
                                Packages and Pricing
                </TextButton>
            </div>
        </div>
    );
}