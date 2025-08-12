import { useState } from "react";
import PropTypes from "prop-types";

const CollapsibleToggle = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ width: "100%", marginTop: "1rem" }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: "100%",
                    padding: "2rem",
                    backgroundColor: "#2D3250",
                    color: "white",
                    fontWeight: "bold",
                    border: "2px solid gold",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "var(--font-large)",
                }}
            >
                {title}
            </button>
            {isOpen && (
                <div
                    style={{
                        padding: "0.5rem",
                        border: "2px solid gold",
                        backgroundColor: "#2D3250",
                        borderRadius: "8px",
                        fontSize: "var(--font-base)"
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

CollapsibleToggle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default CollapsibleToggle;