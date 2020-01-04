"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const OrderedListButton = () => {
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
        }, onClick: () => {
            document.execCommand("insertOrderedList", false, "");
        } },
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
            } },
            react_1.default.createElement("div", { style: {
                    fontSize: "8px",
                    lineHeight: "8px"
                } }, "1"),
            react_1.default.createElement("div", { style: {
                    width: "50%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black",
                    marginTop: 3
                } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
            } },
            react_1.default.createElement("div", { style: {
                    fontSize: "8px",
                    lineHeight: "8px"
                } }, "2"),
            react_1.default.createElement("div", { style: {
                    width: "50%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black",
                    marginTop: 3
                } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
            } },
            react_1.default.createElement("div", { style: {
                    fontSize: "8px",
                    lineHeight: "8px"
                } }, "3"),
            react_1.default.createElement("div", { style: {
                    width: "50%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black",
                    marginTop: 3
                } }))));
};
exports.default = OrderedListButton;
