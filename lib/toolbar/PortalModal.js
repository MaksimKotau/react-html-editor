"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
class PortalModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.el = null;
        this.componentDidMount = () => {
            this.props.anchorEl.appendChild(this.el);
        };
        this.componentWillUnmount = () => {
            this.props.anchorEl.removeChild(this.el);
        };
        this.el = document.createElement("div");
        this.el.style.cssText = "position:absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 12000;";
    }
    render() {
        const { children } = this.props;
        return react_dom_1.default.createPortal(children, this.el);
    }
}
exports.default = PortalModal;
