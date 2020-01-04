import React from 'react';
interface OwnProps {
    anchorEl: HTMLElement;
}
export default class PortalModal extends React.Component<OwnProps> {
    private el;
    constructor(props: OwnProps);
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    render(): React.ReactPortal;
}
export {};
