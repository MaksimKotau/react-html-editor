"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const PortalModal_1 = __importDefault(require("./PortalModal"));
var HeaderType;
(function (HeaderType) {
    HeaderType["H1"] = "Header 1";
    HeaderType["H2"] = "Header 2";
    HeaderType["H3"] = "Header 3";
    HeaderType["H4"] = "Header 4";
    HeaderType["H5"] = "Header 5";
    HeaderType["H6"] = "Header 6";
})(HeaderType || (HeaderType = {}));
const HeaderButton = () => {
    const [showModal, setShowModal] = react_1.useState(false);
    const [anchorEl, setAnchorEl] = react_1.useState(undefined);
    const addHeader = (header) => {
        document.execCommand('formatBlock', false, `<${header}>`);
        setShowModal(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%" } },
            react_1.default.createElement("span", { style: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontStyle: "bold" }, onClick: (e) => {
                    setAnchorEl(e.currentTarget);
                    setShowModal(true);
                } }, "H")),
        showModal && react_1.default.createElement(PortalModal_1.default, { anchorEl: anchorEl },
            react_1.default.createElement("div", { style: {
                    position: "fixed",
                    width: 200,
                    height: 280,
                    top: "calc(50% - 150px)",
                    left: "calc(50% - 150px)",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                    padding: 20,
                    backgroundColor: "white"
                } },
                Object.values(HeaderType).map((el, i) => {
                    return (react_1.default.createElement("div", { className: "listElement", key: `Header_type_${el}`, style: {
                            fontSize: 25 - i * 2,
                            width: "100%",
                            height: 40,
                            display: "flex",
                            boxSizing: "border-box",
                            alignItems: "center  ",
                            paddingLeft: 15
                        }, onClick: () => { addHeader(`h${i + 1}`); } },
                        react_1.default.createElement("span", { style: { textDecoration: "none" } }, el)));
                }),
                react_1.default.createElement("button", { style: {
                        padding: "7px 20px",
                        marginTop: 10
                    }, onClick: () => setShowModal(false) }, "Cancel")))));
};
exports.default = HeaderButton;
