import "../styles/textContent.css"

export default function TextContent({ children, className, width }) {
    return (
        <div className={"rectangle text " + (className || "")}
             style={{
                 fontWeight: "bold",
                 color: "#2E3363",
                 ...width ? { width } : {}}}>
            {children}
        </div>
    )
}