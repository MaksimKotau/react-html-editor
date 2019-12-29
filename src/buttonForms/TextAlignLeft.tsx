import React from 'react';

const TextAlignLeft: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%"
            }}
            onClick={() => {
                document.execCommand("JustifyLeft", false, "");
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "20%"
                }}>
                    <div
                        style={{
                            width: "45%",
                            height: 2,
                            margin: 1,
                            backgroundColor: "black"
                        }}
                    />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "20%"
                }}>
                    <div
                        style={{
                            width: "60%",
                            height: 2,
                            margin: 1,
                            backgroundColor: "black"
                        }}
                    />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "20%"
                }}>
                    <div
                        style={{
                            width: "45%",
                            height: 2,
                            margin: 1,
                            backgroundColor: "black"
                        }}
                    />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "20%"
                }}>
                    <div
                        style={{
                            width: "30%",
                            height: 2,
                            margin: 1,
                            backgroundColor: "black"
                        }}
                    />
            </div>
        </div>
    );
}

export default TextAlignLeft;