"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextAlignCenter = () => {
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
        }, onClick: () => {
            document.execCommand("JustifyCenter", false, "");
        } },
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
            } },
            react_1.default.createElement("div", { style: {
                    width: "45%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black"
                } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
            } },
            react_1.default.createElement("div", { style: {
                    width: "60%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black"
                } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
            } },
            react_1.default.createElement("div", { style: {
                    width: "45%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black"
                } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
            } },
            react_1.default.createElement("div", { style: {
                    width: "30%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black"
                } }))));
};
exports.default = TextAlignCenter;