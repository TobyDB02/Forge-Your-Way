import "../styles/layout.css"
import TextButton from "../components/TextButton.jsx";

export default function Dashboard() {
    return (
        <div
            className="Dashboard"
            style={"flexbox-container"}>

            <TextButton>
                About Me
            </TextButton>
            <TextButton>
                Menopause Coaching
            </TextButton>
            <TextButton>
                Packages and Pricing
            </TextButton>
        </div>
    )
}