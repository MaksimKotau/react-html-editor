"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SubTextButton = () => {
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%" } },
        react_1.default.createElement("span", { style: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center" }, onClick: () => {
                document.execCommand("subscript", false);
            } },
            react_1.default.createElement("div", { style: { display: "block" } },
                "X",
                react_1.default.createElement("sub", null, "2")))));
};
exports.default = SubTextButton;
