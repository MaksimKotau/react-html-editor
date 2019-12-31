import React from 'react';

const SubTextButton: React.SFC<{}> = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
            <span
                style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center" }}
                onClick={() => {
                    document.execCommand("subscript", false)
                }}
            >
                <div style={{ display: "block" }}>
                    X<sub>2</sub>
                </div>
            </span>
        </div>
    );
};

export default SubTextButton;