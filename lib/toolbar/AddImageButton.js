"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PortalModal_1 = __importDefault(require("./PortalModal"));
const linkHelper_1 = require("./helpers/linkHelper");
const grayTagSanityzerService_1 = require("../service/grayTagSanityzerService");
const AddImageButton = () => {
    const [anchorEl, setAnchorEl] = react_1.useState(undefined);
    const [selection, setSelection] = react_1.useState(null);
    const [src, setSrc] = react_1.useState("");
    const [alt, setAlt] = react_1.useState("");
    const [width, setWidth] = react_1.useState(undefined);
    const [height, setHeight] = react_1.useState(undefined);
    react_1.useEffect(() => setSelection(linkHelper_1.saveSelection()), [anchorEl]);
    const onCancel = () => {
        setAnchorEl(undefined);
        setSelection(undefined);
        setSrc("");
        setAlt("");
        setHeight(undefined);
        setWidth(undefined);
    };
    const addImage = () => {
        if (src.length !== 0) {
            linkHelper_1.restoreSelection(selection);
            document.execCommand("insertHTML", false, `<img src="${grayTagSanityzerService_1.attributeJSSanitizer(src)}" ${alt.length === 0 ? "" : ("alt='" + alt + "'")} ${width ? ("width='" + width + "'") : ""} ${height ? ("height='" + height + "'") : ""} />`);
            setAnchorEl(undefined);
            setSelection(undefined);
            setSrc("");
            setAlt("");
            setHeight(undefined);
            setWidth(undefined);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%" } },
            react_1.default.createElement("span", { style: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontWeight: 800 }, onClick: (e) => {
                    setAnchorEl(e.currentTarget);
                } }, "\uF304")),
        anchorEl && react_1.default.createElement(PortalModal_1.default, { anchorEl: anchorEl },
            react_1.default.createElement("div", { style: {
                    position: "fixed",
                    width: 400,
                    height: 300,
                    top: "calc(50% - 150px)",
                    left: "calc(50% - 200px)",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                    padding: 20,
                    backgroundColor: "white"
                } },
                react_1.default.createElement("div", { style: { padding: 10, width: "100%" } },
                    react_1.default.createElement("label", null, "Src: "),
                    react_1.default.createElement("input", { style: { height: 30, width: 300 }, type: "text", onChange: (e) => setSrc(e.target.value), value: src })),
                react_1.default.createElement("div", { style: { width: "100%", padding: 10 } },
                    react_1.default.createElement("label", null,
                        "Alt: ",
                        react_1.default.createElement("input", { style: { marginRight: 20 }, type: "text", value: alt, onChange: (e) => setAlt(e.target.value) }))),
                react_1.default.createElement("div", { style: { width: "100%", padding: 10 } },
                    react_1.default.createElement("label", null,
                        "Width: ",
                        react_1.default.createElement("input", { style: { marginRight: 20 }, type: "text", value: width, onChange: (e) => setWidth(e.target.value === "" ? undefined : parseFloat(e.target.value)) }))),
                react_1.default.createElement("div", { style: { width: "100%", padding: 10 } },
                    react_1.default.createElement("label", null,
                        "Height: ",
                        react_1.default.createElement("input", { style: { marginRight: 20 }, type: "text", value: height, onChange: (e) => setHeight(e.target.value === "" ? undefined : parseFloat(e.target.value)) }))),
                react_1.default.createElement("div", { style: { padding: 10, width: "100%" } },
                    react_1.default.createElement("button", { style: { padding: 5, margin: 10 }, onClick: onCancel }, "Cancel"),
                    react_1.default.createElement("button", { style: { padding: 5, margin: 10 }, onClick: addImage }, "Ok"))))));
};
exports.default = AddImageButton;
