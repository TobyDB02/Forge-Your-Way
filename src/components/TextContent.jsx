import "../styles/textContent.css"

export default function TextContent({ children, className, width, image, style }) {
    return (
        <div className={"rectangle text " + (className || "")}
             style={{
                 fontWeight: "bold",
                 color: "#2E3363",
                 ...(width ? { width } : {}),
                 ...style }}>
            {image && (
                <div className="textcontent-img">
                    <img src={image} alt="Decorative" />
                </div>
            )}
            <div className="textcontent-body">
                {children}
            </div>
        </div>
    )
}