"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UndoButton = () => {
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%" } },
        react_1.default.createElement("span", { style: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", transform: "rotate(90deg)", fontWeight: 800, fontSize: 20 }, onClick: () => {
                document.execCommand("undo", false);
            } }, "\u2939")));
};
exports.default = UndoButton;
