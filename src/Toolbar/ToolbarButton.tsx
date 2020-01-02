import React from 'react';

export interface ToolbarButtonProps {
    element: JSX.Element;
}

const ToolbarButton: React.SFC<ToolbarButtonProps> = (props) => {
    return (
        <div className="toolBarButton">
            {props.element}
        </div>
    );
};

export default ToolbarButton;