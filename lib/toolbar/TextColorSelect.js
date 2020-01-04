"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TextColorSelect = () => {
    const colorEl = react_1.useRef(null);
    const [color, setColor] = react_1.useState("black");
    const onChange = (e) => {
        document.execCommand("forecolor", false, e.target.value);
        setColor(e.target.value);
    };
    const onLabelClick = (event) => {
        event.preventDefault();
        document.execCommand("forecolor", false, color);
    };
    return (react_1.default.createElement("div", { style: { display: "flex", flexGrow: 1 } },
        react_1.default.createElement("div", { style: { flexGrow: 5, flexDirection: "column", display: "flex" } },
            react_1.default.createElement("div", { style: { flexGrow: 1, justifyContent: "center", display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { onClick: onLabelClick }, "T"))),
            react_1.default.createElement("div", { style: { width: "100%", height: 5, backgroundColor: color } })),
        react_1.default.createElement("div", { style: { borderLeft: "1px solid gray", width: 8, display: "flex", flexDirection: "column" } },
            react_1.default.createElement("label", { htmlFor: "toolBarButtonColorChooser", style: { flexGrow: 1, display: "flex", fontSize: 13, transform: "rotate(180deg)" } }, "^"),
            react_1.default.createElement("input", { id: "toolBarButtonColorChooser", ref: colorEl, type: "color", style: { width: 8, height: 7, padding: 0, margin: 0, border: 0, opacity: 0 }, onChange: onChange }))));
};
exports.default = TextColorSelect;
