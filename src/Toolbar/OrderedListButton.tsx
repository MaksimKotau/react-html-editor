import React from 'react';


const OrderedListButton: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%"
            }}
            onClick={() => {
                document.execCommand("insertOrderedList", false, "");
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
                }}>
                    <div
                        style={{
                            fontSize: "8px",
                            lineHeight: "8px"
                        }}
                    >
                        1
                    </div>
                    <div
                        style={{
                            width: "50%",
                            height: 2,
                            margin: 1,
                            backgroundColor: "black",
                            marginTop: 3
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
                            fontSize: "8px",
                            lineHeight: "8px"
                        }}
                    >
                        2
                    </div>
                    <div
                        style={{
                            width: "50%",
                            height: 2,
                            margin: 1,
                            backgroundColor: "black",
                            marginTop: 3
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
                            fontSize: "8px",
                            lineHeight: "8px"
                        }}
                    >
                        3
                    </div>
                    <div
                        style={{
                            width: "50%",
                            height: 2,
                            margin: 1,
                            backgroundColor: "black",
                            marginTop: 3
                        }}
                    />
            </div>
        </div>
    );
}

export default OrderedListButton;