import React from 'react';

const UndoButton: React.FC = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
            <span
            style={{display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", transform: "rotate(90deg)", fontWeight: 800, fontSize: 20}}
                onClick={() => {
                    document.execCommand("undo", false)
                }}
            >&#10553;</span>
        </div>
    )
}

export default UndoButton