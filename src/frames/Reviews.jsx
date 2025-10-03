import "../styles/layout.css"
import TextContent from "../components/TextContent.jsx";

export default function Reviews() {
    return (
        <div
            style={{
                overflowX: "auto",
                width: "100%"
        }}
        >
            <div
                className="container-row"
                style={{
                    justifyContent: "center",
                    gap: "1rem",
                    paddingLeft: "2rem",
                    flexWrap: "nowrap",
                    display: "flex",
                    minWidth: "fit-content"
            }}
            >
                <TextContent
                    style={{
                        padding: "0rem",
                        backgroundColor: "white",
                        width: "20rem",
                        height: "20rem",
                        overflowY: "auto",
                        justifyContent: "left",
                        flexWrap: "wrap"
                }}
                >
                    <div
                        className='cotainer-col'>
                        <p
                            style={{
                                textAlign: "left"
                        }}
                        >
                            - Sue B
                        </p>
                        <p
                            style={{
                                fontSize: "1vw",
                                paddingLeft: "0rem",
                                paddingRight: "0rem",
                                fontWeight: 'lightest',
                                fontStyle: 'italic'
                        }}
                        >
                            <br/>
                            "I highly recommend that anyone approaching this stage in life joins this programme, with
                            Morna’s safe and empowering support you’ll soon be navigating  menopause in ways that you
                            thought you couldn’t."
                        </p>
                    </div>

                </TextContent>

                <TextContent
                    style={{
                        padding: "0rem",
                        backgroundColor: "white",
                        width: "20rem",
                        height: "20rem",
                        overflowY: "auto",
                        justifyContent: "left",
                        flexWrap: "wrap"
                }}
                >
                    <div
                        className='cotainer-col'>
                        <p
                            style={{
                                textAlign: "left"
                        }}
                        >
                            - Michelle H
                        </p>
                        <p
                            style={{
                                fontSize: "1vw",
                                paddingLeft: "0rem",
                                paddingRight: "0rem",
                                fontWeight: 'lightest',
                                fontStyle: 'italic'
                        }}
                        >
                            <br/>
                            "Morna is fully invested in you 100% from the start, and makes you feel so comfortable in
                            her presence. I went from feeling quite low in week 1 to feeling much more enthusiastic and
                            hopeful after week 7."
                        </p>
                    </div>

                </TextContent>

                <TextContent
                    style={{
                        padding: "0rem",
                        backgroundColor: "white",
                        width: "20rem",
                        height: "20rem",
                        overflowY: "auto",
                        justifyContent: "left",
                        flexWrap: "wrap"
                }}
                >

                    <div
                        className='cotainer-col'>
                        <p
                            style={{
                                textAlign: "left"
                        }}
                        >
                            - Helen T
                        </p>
                        <p
                            style={{
                                fontSize: "1vw",
                                paddingLeft: "0rem",
                                paddingRight: "0rem",
                                fontWeight: 'lightest',
                                fontStyle: 'italic'
                        }}
                        >
                            <br/>
                            "Morna is understanding, empathetic, thorough, honest and genuine. She really understands
                            and is so knowledgeable on the subject of the menopause."
                        </p>
                    </div>

                </TextContent>

                <TextContent
                    style={{
                        padding: "0rem",
                        backgroundColor: "white",
                        width: "20rem",
                        height: "20rem",
                        overflowY: "auto",
                        justifyContent: "left",
                        flexWrap: "wrap"
                }}
                >
                    <div
                        className='cotainer-col'>
                        <p
                            style={{
                                textAlign: "left"
                        }}
                        >
                            - Sara K
                        </p>
                        <p
                            style={{
                                fontSize: "1vw",
                                paddingLeft: "0rem",
                                paddingRight: "0rem",
                                fontWeight: 'lightest',
                                fontStyle: 'italic'
                        }}
                        >
                            <br/>
                            "I’d like to say how much I have enjoyed the process and how much I have learned, with many
                            'aha' moments along the way. I’d ike to thank Morna for her time, care and dedication to
                            supporting me over the last couple of months."
                        </p>
                    </div>
                </TextContent>

                <TextContent
                    style={{
                        padding: "0rem",
                        backgroundColor: "white",
                        width: "20rem",
                        height: "20rem",
                        overflowY: "auto",
                        justifyContent: "left",
                        flexWrap: "wrap" }}>

                    <div
                        className='cotainer-col'>
                        <p
                            style={{
                                textAlign: "left"
                        }}
                        >
                            - Muffi D
                        </p>
                        <p
                            style={{
                                fontSize: "1vw",
                                paddingLeft: "0rem",
                                paddingRight: "0rem",
                                fontWeight: 'lightest',
                                fontStyle: 'italic'
                        }}
                        >
                            <br/>
                            "I would like to thank Morna for the coaching on Menopause which she has given to me over
                            several weeks. I have gained a better understanding ‘what I am going through’. I have gone
                            from being confused to being in control, and in a much stronger place. I have really valued
                            all the sessions with you, I felt I could be open and honest with you, I even smile again."
                            <br/><br/>
                            So thank you so much.
                        </p>
                    </div>

                </TextContent>
                <div
                    style={{ paddingRight: '1rem'}}/>
            </div>
        </div>
    )
}