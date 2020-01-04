"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const toolBarButtonStyle = {
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    border: "1px solid #999",
    textAlign: "center",
    minWidth: 30,
    minHeight: 25,
    borderRadius: 2,
    width: "fit-content",
    margin: 5,
    display: "flex",
};
const ToolbarButton = (props) => {
    return (react_1.default.createElement("div", { style: toolBarButtonStyle }, props.element));
};
exports.default = ToolbarButton;
