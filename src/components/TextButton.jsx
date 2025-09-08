
import { Link } from "react-router-dom";
import "../styles/textButton.css"

export default function TextButton({ children, to }) {
    return (
        <div className="textButton textButton-dash">
            <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
                {children}
            </Link>
        </div>
    );
}