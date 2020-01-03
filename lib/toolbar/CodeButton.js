"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PortalModal_1 = __importDefault(require("./PortalModal"));
const linkHelper_1 = require("./helpers/linkHelper");
const CodeButton = () => {
    const [codeSnippet, setCodeSnippet] = react_1.useState("");
    const [anchorEl, setAnchorEl] = react_1.useState(undefined);
    const [selection, setSelection] = react_1.useState(null);
    react_1.useEffect(() => setSelection(linkHelper_1.saveSelection()), [anchorEl]);
    const createCodeSnippet = () => {
        linkHelper_1.restoreSelection(selection);
        document.execCommand("insertHTML", false, `<code>${codeSnippet}</code>`);
        setAnchorEl(undefined);
        setCodeSnippet("");
    };
    const onCancel = () => {
        setAnchorEl(undefined);
        setCodeSnippet("");
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%" } },
            react_1.default.createElement("span", { style: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center" }, onClick: (e) => {
                    const selection = document.getSelection();
                    if (selection !== null) {
                        const textSelection = selection.toString();
                        setAnchorEl(e.currentTarget);
                        setCodeSnippet(textSelection);
                    }
                } }, "</>")),
        anchorEl &&
            react_1.default.createElement(PortalModal_1.default, { anchorEl: anchorEl },
                react_1.default.createElement("div", { style: {
                        position: "fixed",
                        width: 600,
                        height: 400,
                        top: "calc(50% - 200px)",
                        left: "calc(50% - 300px)",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                        padding: 20,
                        backgroundColor: "white"
                    } },
                    react_1.default.createElement("textarea", { style: { height: 350, width: 550 }, value: codeSnippet, onChange: (e) => setCodeSnippet(e.target.value) }),
                    react_1.default.createElement("div", { style: { padding: 10, width: "100%" } },
                        react_1.default.createElement("button", { style: { padding: 5, margin: 10 }, onClick: onCancel }, "Cancel"),
                        react_1.default.createElement("button", { style: { padding: 5, margin: 10 }, onClick: createCodeSnippet }, "Ok"))))));
};
exports.default = CodeButton;
