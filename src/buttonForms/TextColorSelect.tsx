import React, { useState, useRef } from 'react';


const TextColorSelect: React.SFC = () => {
    const colorEl = useRef(null);
    const [color, setColor] = useState<string>("black")
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        document.execCommand("forecolor", false, e.target.value);
        setColor(e.target.value);
    }
    const onLabelClick = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        event.preventDefault();
        document.execCommand("forecolor", false, color);
    }
    return (
        <div style={{ display: "flex", flexGrow: 1 }}>
            <div style={{ flexGrow: 5, flexDirection: "column", display: "flex" }}>
                <div style={{ flexGrow: 1, justifyContent: "center", display: "flex", flexDirection: "column" }}>
                    <div>
                        <label onClick={onLabelClick}>T</label>
                    </div>
                </div>
                <div style={{ width: "100%", height: 5, backgroundColor: color }}></div>
            </div>
            <div style={{ borderLeft: "1px solid gray", width: 8, display: "flex", flexDirection: "column" }}>
            <label htmlFor="toolBarButtonColorChooser" style={{ flexGrow: 1, display: "flex", fontSize: 13, transform: "rotate(180deg)" }}>^</label>
                <input id="toolBarButtonColorChooser" ref={colorEl} type="color" style={{ width: 8, height: 7, padding: 0, margin: 0, border: 0, opacity: 0 }} onChange={onChange} />
                
            </div>

        </div>


    );
};

export default TextColorSelect;