
import { Link } from "react-router-dom";
import "../styles/textButton.css"
import "../index.css"

export default function TextButton({ children, to }) {
    return (
        <div className="text textButton-dash">
            <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
                {children}
            </Link>
        </div>
    );
}