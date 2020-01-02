import React from 'react';

const UnderlinedTextButton: React.SFC<{}> = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
            <span
            style={{display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", textDecoration: "underline"}}
                onClick={() => {
                    document.execCommand("underline", false)
                }}
            >U</span>
        </div>
    );
};




export default UnderlinedTextButton;