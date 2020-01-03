"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./HTMLEditor.css");
const tagReplaceService_1 = require("./service/tagReplaceService");
const Toolbar_1 = __importDefault(require("./toolbar/Toolbar"));
class HTMLEditor extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", null,
            !this.props.readonly && react_1.default.createElement(Toolbar_1.default, null),
            react_1.default.createElement("div", null,
                react_1.default.createElement(tagReplaceService_1.ArticleDOMNode, { onChange: this.props.onChange, value: this.props.value, readonly: this.props.readonly }))));
    }
}
exports.default = HTMLEditor;
