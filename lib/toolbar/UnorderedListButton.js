"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UnorderedListButton = () => {
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
        }, onClick: () => {
            document.execCommand("insertUnorderedList", false, "");
        } },
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingTop: 2,
                paddingBottom: 2
            } },
            react_1.default.createElement("div", { style: {
                    width: "4px",
                    height: "4px",
                    backgroundColor: "black",
                    marginRight: 2
                } }),
            react_1.default.createElement("div", { style: {
                    width: "50%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black",
                    marginTop: 1
                } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingTop: 2,
                paddingBottom: 2
            } },
            react_1.default.createElement("div", { style: {
                    width: "4px",
                    height: "4px",
                    backgroundColor: "black",
                    marginRight: 2
                } }),
            react_1.default.createElement("div", { style: {
                    width: "50%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black",
                    marginTop: 1
                } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingTop: 2,
                paddingBottom: 2
            } },
            react_1.default.createElement("div", { style: {
                    width: "4px",
                    height: "4px",
                    backgroundColor: "black",
                    marginRight: 2
                } }),
            react_1.default.createElement("div", { style: {
                    width: "50%",
                    height: 2,
                    margin: 1,
                    backgroundColor: "black",
                    marginTop: 1
                } }))));
};
exports.default = UnorderedListButton;
