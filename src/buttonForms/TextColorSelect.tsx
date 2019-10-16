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
            <div style={{float: "left"}}>
                <label style={{paddingLeft: 6, paddingRight: 6}} htmlFor="HTMLEditor_textColor_button" onClick={onLabelClick}>T</label>
                <div style={{width: 21, position: "absolute", height: 3, backgroundColor: color}}>
                <input  ref={colorEl} id="HTMLEditor_textColor_button" type="color" style={{width:18, height: 1}} onChange={onChange}/>
                </div>
            </div>
    );
};

export default TextColorSelect;