import { useState, useEffect, } from "react";
import "./css/Responsive_button.css";


export default function ResponsiveButton() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width < 600) {
        return (
            <div className="mobile">
                <button>Hello Button</button>
                <div className="mobile-text">Hello World</div>
            </div>
        );
    }

    if (width < 1024) {
        return (
            <div className="tablet">
                <button>Hello Button</button>
                <div className="tablet-text">Hello World</div>
            </div>
        );
    }

    return (
        <div className="desktop">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Hide" : "Show"} Message
            </button>
            {isOpen && <div className="desktop-text">Hello World</div>}
        </div>
    );
}