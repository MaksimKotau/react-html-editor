import React, { useState } from 'react';
import Portal from './PortalModal';

enum HeaderType {
    H1 = "Header 1",
    H2 = "Header 2",
    H3 = "Header 3",
    H4 = "Header 4",
    H5 = "Header 5",
    H6 = "Header 6"
}


const HeaderButton: React.FC<{}> = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
    const addHeader = (header: string) => {
        document.execCommand('formatBlock',false, `<${header}>`)
        setShowModal(false);
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                <span
                    style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontStyle: "bold" }}
                    onClick={(e) => {
                        setAnchorEl(e.currentTarget)
                        setShowModal(true)
                    }}
                >H</span>
            </div>
            {showModal && <Portal
                anchorEl={anchorEl!}
            >
                <div
                    style={{
                        position: "fixed",
                        width: 200,
                        height: 280,
                        top: "calc(50% - 150px)",
                        left: "calc(50% - 150px)",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                        padding: 20,
                        backgroundColor: "white"
                    }}
                >
                    {
                        Object.values(HeaderType).map((el, i) => {
                            return (
                                <div
                                    className="listElement"
                                    key={`Header_type_${el}`}
                                    style={{
                                        fontSize: 25 - i * 2,
                                        width: "100%",
                                        height: 40,
                                        display: "flex",
                                        boxSizing: "border-box",
                                        alignItems: "center  ",
                                        paddingLeft: 15
                                    }}
                                    onClick={() => {addHeader(`h${i + 1}`)}}
                                    >
                                    <span style={{ textDecoration: "none" }}>{el}</span>
                                </div>
                            )
                        })
                    }
                    <button
                    style={{
                        padding: "7px 20px",
                        marginTop: 10
                    }}
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </button>
                </div>


            </Portal>}
        </>
    )
}

export default HeaderButton;