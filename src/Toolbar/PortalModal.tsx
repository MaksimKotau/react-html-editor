import React from 'react';
import ReactDOM from 'react-dom'

interface OwnProps {
    anchorEl: HTMLElement
}

export default class PortalModal extends React.Component<OwnProps> {
    private el: HTMLDivElement | null = null; 
    constructor(props: OwnProps) {
      super(props);
      this.el = document.createElement("div");
      this.el.style.cssText="position:absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 12000;";
    }
  
    componentDidMount = () => {
        this.props.anchorEl.appendChild(this.el!);
    };
  
    componentWillUnmount = () => {
        this.props.anchorEl.removeChild(this.el!);
    };
  
    render() {
      const { children } = this.props;
      return ReactDOM.createPortal(children, this.el!);
    }
  }