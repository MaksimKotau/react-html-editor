import React from 'react';

const ItalicTextButton: React.SFC<{}> = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
            <span
            style={{display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontStyle: "italic"}}
                onClick={() => {
                    document.execCommand("italic", false)
                }}
            >I</span>
        </div>
    );
};

export default ItalicTextButton;