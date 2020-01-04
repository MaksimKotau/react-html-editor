"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ToolbarButton_1 = __importDefault(require("./ToolbarButton"));
const TextColorSelect_1 = __importDefault(require("./TextColorSelect"));
const BoldTextButton_1 = __importDefault(require("./BoldTextButton"));
const ItalicTextButton_1 = __importDefault(require("./ItalicTextButton"));
const UnderlinedTextButton_1 = __importDefault(require("./UnderlinedTextButton"));
const AddLinkButton_1 = __importDefault(require("./AddLinkButton"));
const HeaderButton_1 = __importDefault(require("./HeaderButton"));
const TextAlignRight_1 = __importDefault(require("./TextAlignRight"));
const TextAlignLeft_1 = __importDefault(require("./TextAlignLeft"));
const TextAlignCenter_1 = __importDefault(require("./TextAlignCenter"));
const TextAlignJustify_1 = __importDefault(require("./TextAlignJustify"));
const CodeButton_1 = __importDefault(require("./CodeButton"));
const OrderedListButton_1 = __importDefault(require("./OrderedListButton"));
const UnorderedListButton_1 = __importDefault(require("./UnorderedListButton"));
const UndoButton_1 = __importDefault(require("./UndoButton"));
const RedoButton_1 = __importDefault(require("./RedoButton"));
const StrikeTextButton_1 = __importDefault(require("./StrikeTextButton"));
const SubTextButton_1 = __importDefault(require("./SubTextButton"));
const SupTextButton_1 = __importDefault(require("./SupTextButton"));
const AddImageButton_1 = __importDefault(require("./AddImageButton"));
const buttons = [
    {
        element: react_1.default.createElement(BoldTextButton_1.default, null)
    },
    {
        element: react_1.default.createElement(ItalicTextButton_1.default, null)
    },
    {
        element: react_1.default.createElement(UnderlinedTextButton_1.default, null)
    },
    {
        element: react_1.default.createElement(StrikeTextButton_1.default, null)
    },
    {
        element: react_1.default.createElement(SubTextButton_1.default, null)
    },
    {
        element: react_1.default.createElement(SupTextButton_1.default, null)
    },
    {
        element: react_1.default.createElement(AddLinkButton_1.default, null)
    },
    {
        element: react_1.default.createElement(TextColorSelect_1.default, null)
    },
    {
        element: react_1.default.createElement(HeaderButton_1.default, null)
    },
    {
        element: react_1.default.createElement(TextAlignLeft_1.default, null)
    },
    {
        element: react_1.default.createElement(TextAlignCenter_1.default, null)
    },
    {
        element: react_1.default.createElement(TextAlignRight_1.default, null)
    },
    {
        element: react_1.default.createElement(TextAlignJustify_1.default, null)
    },
    {
        element: react_1.default.createElement(CodeButton_1.default, null)
    },
    {
        element: react_1.default.createElement(OrderedListButton_1.default, null)
    },
    {
        element: react_1.default.createElement(UnorderedListButton_1.default, null)
    },
    {
        element: react_1.default.createElement(UndoButton_1.default, null)
    },
    {
        element: react_1.default.createElement(RedoButton_1.default, null)
    },
    {
        element: react_1.default.createElement(AddImageButton_1.default, null)
    }
];
const toolbarStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap"
};
const Toolbar = () => {
    return (react_1.default.createElement("div", { id: "htmleditor_toolbar", style: Object.assign({}, toolbarStyle) }, buttons.map((el, index) => (react_1.default.createElement(ToolbarButton_1.default, { key: `HTML_Editor_Button_${index}`, element: el.element })))));
};
exports.default = Toolbar;
