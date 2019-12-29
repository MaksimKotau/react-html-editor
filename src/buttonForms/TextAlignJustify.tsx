import React from 'react';

const TextAlignJustify: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%"
            }}
            onClick={() => {
                document.execCommand("JustifyFull", false, "");
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "center",
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
        </div>
    );
}

export default TextAlignJustify;