
import "../styles/textContent.css"

export default function TextContent({
    children,
    className,
    width,
    image,
    mobileImage,
    style
}) {
    return (
        <div
            className={
                "rectangle text " +
                (className || "")
            }
            style={{
                color: "#2E3363",
                ...(width ? { width } : {}),
                ...style
            }}
        >
            {image && (
                <div
                    className="textcontent-img"
                    style={{
                        maxWidth: "25vw",
                        width: "25vw"
                    }}
                >
                    <img
                        src={image}
                        alt="Decorative"
                    />
                </div>
            )}

            {mobileImage && (
                <div className="textcontent-mobile-img">
                    <img
                        src={mobileImage}
                        alt="Decorative"
                    />
                </div>
            )}

            <div className="textcontent-body">
                {children}
            </div>
        </div>
    )
}
