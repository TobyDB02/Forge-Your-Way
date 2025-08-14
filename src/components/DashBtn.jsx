import { useState } from "react";
import "../css/dashButton.css"

export default function DashBtn({ children }) {
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