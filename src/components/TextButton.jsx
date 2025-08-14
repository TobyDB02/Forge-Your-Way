import { useState } from "react";
import "../styles/textButton.css"

export default function TextButton({ children }) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="textButton textButton-dash">
            <span onClick={() => setIsSelected(!isSelected)}
            style={{ cursor: "pointer" }}>
                {children}
            </span>
            <div className={`dashBtn ${isSelected ? "open" : ""}`}>
            </div>
        </div>
    )
}