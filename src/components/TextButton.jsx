import { useState } from "react";
import "../styles/dashButton.css"

export default function TextButton({ children }) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="dashBtn">
            <span onClick={() => setIsSelected(!isSelected)}
            style={{ cursor: "pointer" }}>
                {children}
            </span>
            <div className={`dashBtn ${isSelected ? "open" : ""}`}>
                Hello World
            </div>
        </div>
    )
}