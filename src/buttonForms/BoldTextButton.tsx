import React from 'react';

const BoldTextButton: React.SFC<{}> = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
            <span
            style={{display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontWeight: 800}}
                onClick={() => {
                    document.execCommand("bold", false)
                }}
            >B</span>
        </div>
    );
};

export default BoldTextButton;