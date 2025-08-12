import { useState } from "react";
import "./src/css/Responsive_button.css";

export default function ResponsiveButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="responsive-button">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Hide" : "Show"} Message
            </button>
            <div className={`message ${isOpen ? "open" : ""}`}>
                Hello World
            </div>
        </div>
    );
}
