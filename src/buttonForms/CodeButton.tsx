import React, { useState, useEffect } from 'react';
import Portal from './PortalModal';
import {restoreSelection, saveSelection} from '../helpers/linkHelper';

const CodeButton: React.FC<{}> = () => {
    const [codeSnippet, setCodeSnippet] = useState<string>("");
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
    const [selection, setSelection] = useState<Range[] | null | undefined>(null);
    useEffect(() => setSelection(saveSelection()), [anchorEl]);
    const createCodeSnippet = () => {
        restoreSelection(selection);
        document.execCommand("insertHTML", false, `<code>${codeSnippet}</code>`)
        setAnchorEl(undefined);
        setCodeSnippet("");
    }
    const onCancel = () => {
        setAnchorEl(undefined);
        setCodeSnippet("");
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                <span
                    style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center" }}
                    onClick={(e) => {
                        const selection = document.getSelection();
                        if (selection !== null) {
                            const textSelection: string = selection.toString();
                            setAnchorEl(e.currentTarget)
                            setCodeSnippet(textSelection);
                        }
                    }}
                >{"</>"}</span>
            </div>
            {
                anchorEl &&
                <Portal
                    anchorEl={anchorEl}
                >
                    <div style={{
                        position: "fixed",
                        width: 600,
                        height: 400,
                        top: "calc(50% - 200px)",
                        left: "calc(50% - 300px)",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                        padding: 20,
                        backgroundColor: "white"
                    }}>

                        <textarea
                            style={{ height: 350, width: 550 }}
                            value={codeSnippet}
                            onChange={(e) => setCodeSnippet(e.target.value)}
                        />
                        <div style={{ padding: 10, width: "100%" }}>
                        <button style={{padding: 5, margin: 10}} onClick={onCancel}>Cancel</button>
                        <button style={{padding: 5, margin: 10}} onClick={createCodeSnippet}>Ok</button>
                    </div>
                    </div>

                </Portal>
            }
        </>
    )
}

export default CodeButton;