import React from 'react';

const TextAlignCenter: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%"
            }}
            onClick={() => {
                document.execCommand("JustifyCenter", false, "");
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
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
                justifyContent: "center",
                width: "100%"
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
                justifyContent: "center",
                width: "100%"
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
                justifyContent: "center",
                width: "100%"
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

export default TextAlignCenter;