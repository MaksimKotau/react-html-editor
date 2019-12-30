import React from 'react';


const UnorderedListButton: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%"
            }}
            onClick={() => {
                document.execCommand("insertUnorderedList", false, "");
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingTop: 2,
                paddingBottom: 2
            }}>
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        backgroundColor: "black",
                        marginRight:2
                    }}
                />
                <div
                    style={{
                        width: "50%",
                        height: 2,
                        margin: 1,
                        backgroundColor: "black",
                        marginTop: 1
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingTop: 2,
                paddingBottom: 2
            }}>
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        backgroundColor: "black",
                        marginRight:2
                    }}
                />
                <div
                    style={{
                        width: "50%",
                        height: 2,
                        margin: 1,
                        backgroundColor: "black",
                        marginTop: 1
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingTop: 2,
                paddingBottom: 2
            }}>
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        backgroundColor: "black",
                        marginRight:2
                    }}
                />
                <div
                    style={{
                        width: "50%",
                        height: 2,
                        margin: 1,
                        backgroundColor: "black",
                        marginTop: 1
                    }}
                />
            </div>
        </div>
    );
}

export default UnorderedListButton;