// App.jsx (or App.tsx if using TypeScript)
import React from "react";
import Collapsible from "./components/collapsible_toggle.jsx"; // adjust path if needed

const App = () => {
    return (
        <div>
            <h1>My App</h1>
            <Collapsible title="More Info" open={true}>
                <p>This section can be toggled.</p>
            </Collapsible>
        </div>
    );
};

export default App;
