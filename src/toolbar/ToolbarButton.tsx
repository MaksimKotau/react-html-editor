import React from 'react';

export interface ToolbarButtonProps {
    element: JSX.Element;
}

const toolBarButtonStyle: React.CSSProperties = {
    userSelect:"none",
    MozUserSelect:"none",
    WebkitUserSelect:"none",
    border: "1px solid #999",
    textAlign: "center",
    minWidth: 30,
    minHeight: 25,
    borderRadius: 2,
    width: "fit-content",
    margin: 5,
    display: "flex",
}

const ToolbarButton: React.SFC<ToolbarButtonProps> = (props) => {
    return (
        <div style={toolBarButtonStyle}>
            {props.element}
        </div>
    );
};

export default ToolbarButton;