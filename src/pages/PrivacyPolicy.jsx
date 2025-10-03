import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const hasSeen = localStorage.getItem("seenPrivacyNotice");
        if (!hasSeen) {
            setShowModal(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem("seenPrivacyNotice", "true");
        setShowModal(false);

        if (location.state && location.state.from) {
            navigate(location.state.from);
        } else {
            navigate("/");
        }
    };

    return(
        <div
            style={{
                flexWrap: "wrap",
                fontSize: '20px',
                paddingLeft: '1rem'
        }}
        >
            <section>
                <h1>Privacy Policy</h1>

                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    Forge Your Way
                </p>
                Little Barn, Caston, Norfolk, NR17 1BW
                <br/>
                Email: info@forge-yourway.co.uk
                <br/><br/>
                <p
                    style={{
                        fontStyle: "italic"
                }}
                >
                    Last updated: 01-Oct-25
                </p>
                <br/><nr/>
                This privacy policy explains how Forge Your Way uses and protects the personal data you provide when you
                contact us about coaching services.
                <br/><br/>

                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    1. What data do we collect?
                </p>
                <br/>
                We may collect the following information when you contact us:
                <br/><br/>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Information you choose to share about your circumstances or goals (which may include
                        health-related details).</li>
                </ul>
                <br/>

                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    2. How do we collect your data?
                </p>
                <br/>
                You provide this data directly when you:
                <br/><br/>
                <ul>
                    <li>Contact us by email or phone</li>
                    <li>Enquire about or book coaching sessions</li>
                    <li>Take part in coaching sessions (in person or via Microsoft Teams).</li>
                </ul>
                <br/>

                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    3. How do we use your data?
                </p>
                <br/>
                We use your personal data to:
                <br/><br/>
                <ul>
                    <li>Respond to your enquiries</li>
                    <li>Arrange and deliver coaching sessions</li>
                    <li>Keep records required for business and tax purposes.</li>
                </ul>
                <br/>
                We do not use your data for marketing and we do not share your data with third parties.
                <br/><br/><br/>
                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    4. Retention of personal data
                </p>
                <br/>
                We will keep your personal data only as long as needed for coaching purposes and legal obligations (such
                as tax records). Information that is no longer required will be securely deleted.
                <br/><br/><br/>
                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    5. Your data protection rights
                </p>
                <br/>
                You have the right to:
                <br/><br/>
                <ul>
                    <li>Access the data we hold about you</li>
                    <li>Request corrections if it is inaccurate or incomplete</li>
                    <li>Request that we delete your data (where legally possible)</li>
                    <li>Restrict or object to how your data is processed</li>
                    <li>Request a copy of your data in a portable format</li>
                </ul>
                <br/>
                We will respond to any such request within one month.
                <br/><br/><br/>
                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    6. Security of your data
                </p>
                <br/>
                We are committed to keeping your data secure. While no method of transmission over the internet is 100%
                secure, we take appropriate measures to protect the personal data you share with us.
                <br/><br/><br/>
                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    7. Changes to this policy
                </p>
                <br/>
                We keep our privacy policy under regular review and will update it on this page when necessary.
                <br/><br/><br/>

                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    8. Contact us
                </p>
                <br/>
                If you have any questions about this policy or how your data is handled, please contact:
                <br/>
                Email: info@forge-yourway.co.uk
                <br/><br/>
                Or write to us at:
                <br/>
                Forge Your Way
                <br/>
                Little Barn
                <br/>
                Caston
                <br/>
                Norfolk
                <br/>
                NR17 1BW
                <br/><br/><br/>

                <p
                    style={{
                        fontWeight: "bold"
                }}
                >
                    9. Contacting the regulator
                </p>
                <br/>
                If you are unhappy with how your data has been handled, please contact us first. If you are still not
                satisfied, you can raise a complaint with the Information Commissioner’s Office (ICO):
                <br/><br/>
                Website: https://ico.org.uk
                <br/>
                Helpline: 0303 123 1113
                <div
                    style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "1rem",
                    }}
                >
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
                        I understand
                    </button>
                </div>
            </section>
        </div>
        )
}