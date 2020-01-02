import React, { useState, useEffect } from 'react';
import Portal from './PortalModal';
import { restoreSelection, saveSelection } from './helpers/linkHelper';
import { attributeJSSanitizer } from '../service/grayTagSanityzerService'

const AddImageButton: React.SFC<{}> = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
    const [selection, setSelection] = useState<Range[] | null | undefined>(null);
    const [src, setSrc] = useState<string>("");
    const [alt, setAlt] = useState<string>("");
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [height, setHeight] = useState<number | undefined>(undefined);
    useEffect(() => setSelection(saveSelection()), [anchorEl]);
    const onCancel = () => {
        setAnchorEl(undefined);
        setSelection(undefined);
        setSrc("");
        setAlt("");
        setHeight(undefined);
        setWidth(undefined);
    }
    const addImage = () => {
        if (src.length !== 0) {
            restoreSelection(selection);
            document.execCommand("insertHTML", false, `<img src="${attributeJSSanitizer(src)}" ${alt.length === 0 ? "" : ("alt='" + alt + "'")} ${width ? ("width='" + width + "'") : ""} ${height ? ("height='" + height + "'") : ""} />`)
            setAnchorEl(undefined);
            setSelection(undefined);
            setSrc("");
            setAlt("");
            setHeight(undefined);
            setWidth(undefined);
        }
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                <span
                    style={{ display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontWeight: 800 }}
                    onClick={(e) => {
                        setAnchorEl(e.currentTarget)
                    }}
                >&#127748;</span>
            </div>
            {anchorEl && <Portal
                anchorEl={anchorEl!}
            >
                <div style={{
                    position: "fixed",
                    width: 400,
                    height: 300,
                    top: "calc(50% - 150px)",
                    left: "calc(50% - 200px)",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                    padding: 20,
                    backgroundColor: "white"
                }}>
                    <div style={{ padding: 10, width: "100%" }}>
                        <label>Src: </label>
                        <input style={{ height: 30, width: 300 }} type="text" onChange={(e) => setSrc(e.target.value)} value={src} />
                    </div>
                    <div style={{ width: "100%", padding: 10 }}>
                        <label>
                            Alt: <input style={{ marginRight: 20 }} type="text" value={alt} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlt(e.target.value)} />
                        </label>
                    </div>
                    <div style={{ width: "100%", padding: 10 }}>
                        <label>
                            Width: <input style={{ marginRight: 20 }} type="text" value={width} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWidth(e.target.value === "" ? undefined : parseFloat(e.target.value))} />
                        </label>
                    </div>
                    <div style={{ width: "100%", padding: 10 }}>
                        <label>
                            Height: <input style={{ marginRight: 20 }} type="text" value={height} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeight(e.target.value === "" ? undefined : parseFloat(e.target.value))} />
                        </label>
                    </div>
                    <div style={{ padding: 10, width: "100%" }}>
                        <button style={{ padding: 5, margin: 10 }} onClick={onCancel}>Cancel</button>
                        <button style={{ padding: 5, margin: 10 }} onClick={addImage}>Ok</button>
                    </div>
                </div>
            </Portal>}
        </>
    );
};

export default AddImageButton;