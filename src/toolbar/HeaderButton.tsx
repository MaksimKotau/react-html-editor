import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {restoreSelection, saveSelection} from './helpers/linkHelper'

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
    const [selection, setSelection] = useState<Range[] | null | undefined>(null);
    useEffect(() => setSelection(saveSelection()), [showModal]);
    const addHeader = (header: string) => {
        restoreSelection(selection);
        document.execCommand('formatBlock', false, `<${header}>`)
        setShowModal(false);
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                <span
                    style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontStyle: "bold" }}
                    onClick={(e) => {
                        setShowModal(true)
                    }}
                >H</span>
            </div>
            {showModal && <Dialog
                open={showModal}
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
                                onClick={() => { addHeader(`h${i + 1}`) }}
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
            </Dialog>}
        </>
    )
}

export default HeaderButton;