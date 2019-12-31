import React from 'react';

const StrikeTextButton: React.SFC<{}> = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
            <span
            style={{display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", textDecoration: "line-through"}}
                onClick={() => {
                    document.execCommand("strikeThrough", false)
                }}
            >S</span>
        </div>
    );
};




export default StrikeTextButton;