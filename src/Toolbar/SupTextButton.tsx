import React from 'react';

const SupTextButton: React.SFC<{}> = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
            <span
                style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center" }}
                onClick={() => {
                    document.execCommand("superscript", false)
                }}
            >
                <div style={{ display: "block" }}>
                    X<sup>2</sup>
                </div>
            </span>
        </div>
    );
};

export default SupTextButton;