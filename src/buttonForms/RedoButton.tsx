import React from 'react';

const RedoButton: React.FC = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
            <span
            style={{display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", transform: "rotate(270deg)", fontWeight: 800, fontSize: 20}}
                onClick={() => {
                    document.execCommand("redo", false)
                }}
            >&#10552;</span>
        </div>
    )
}

export default RedoButton