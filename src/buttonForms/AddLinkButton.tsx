import React, { useState, useEffect } from 'react';
import Portal from './PortalModal';
import { restoreSelection, saveSelection } from '../helpers/linkHelper';

const AddLinkButton: React.SFC<{}> = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
    const [linkAddress, setLinkAddress] = useState<string>("");
    const [targetBlank, setTargetBlank] = useState<boolean>(false);
    const [linkText, setLinkText] = useState<string>("");
    const [selection, setSelection] = useState<Range[] | null | undefined>(null);
    useEffect(() => setSelection(saveSelection()), [showModal]);
    const createLink = () => {
        restoreSelection(selection);
        document.execCommand("insertHTML", false, `<a href="${linkAddress}" ${targetBlank ? "target=_blank" : ""}>${linkText}</a>`)
        setShowModal(false);
        setAnchorEl(undefined);
        setLinkAddress("");
        setTargetBlank(false);
    }
    return (
        <React.Fragment>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                <span
                    style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontWeight: 800 }}
                    onClick={(e) => {
                        const selection = document.getSelection();
                        if (selection !== null) {
                            const textSelection: string = selection.toString();
                            setAnchorEl(e.currentTarget)
                            setShowModal(true);
                            setLinkText(textSelection);
                        }
                    }}
                >&#128279;</span>
            </div>
            {showModal && <Portal
                anchorEl={anchorEl!}
            >
                <div style={{
                    position: "fixed",
                    width: 400,
                    height: 150,
                    top: "calc(50% - 150px)",
                    left: "calc(50% - 150px)",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                    padding: 20,
                }}>
                    <div style={{ padding: 10, width: "100%" }}>
                        <label>Adress: </label>
                        <input style={{height: 30, width: 300}} type="text" onChange={(e) => setLinkAddress(e.target.value)} value={linkAddress} />
                    </div>
                    <div style={{ padding: 10, width: "100%" }}>
                        <input style={{marginRight: 20}} type="checkbox" checked={targetBlank} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTargetBlank(e.currentTarget.checked)} />
                        <label>Target: blank</label>
                    </div>
                    <div style={{ padding: 10, width: "100%" }}>
                        <button style={{padding: 5, margin: 10}} onClick={() => setShowModal(false)}>Cancel</button>
                        <button style={{padding: 5, margin: 10}} onClick={createLink}>Ok</button>
                    </div>
                </div>
            </Portal>}
        </React.Fragment>
    );
};

export default AddLinkButton;