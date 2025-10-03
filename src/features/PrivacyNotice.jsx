import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PrivacyNotice() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const hasSeen = localStorage.getItem("seenPrivacyNotice");
        if (!hasSeen) {
            setShowModal(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem("seenPrivacyNotice", "true");
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            background: "white",
                            padding: "2rem",
                            borderRadius: "12px",
                            maxWidth: "500px",
                            textAlign: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        }}
                    >
                        <h2>Privacy Policy</h2>
                        <p>
                            Please read our{" "}
                            <Link
                                to="/privacy"
                                style={{
                                    color: "blue"
                            }}
                            >
                                Privacy Policy
                            </Link>{" "}
                            to understand how we use your data.
                        </p>

                        <button
                            onClick={handleClose}
                            style={{
                                marginTop: "1rem",
                                padding: "0.5rem 1.5rem",
                                border: "none",
                                borderRadius: "6px",
                                background: "#2E3363",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            I Understand
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
