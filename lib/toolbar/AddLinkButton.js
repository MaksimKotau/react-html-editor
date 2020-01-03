"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PortalModal_1 = __importDefault(require("./PortalModal"));
const linkHelper_1 = require("./helpers/linkHelper");
const grayTagSanityzerService_1 = require("../service/grayTagSanityzerService");
const AddLinkButton = () => {
    const [showModal, setShowModal] = react_1.useState(false);
    const [anchorEl, setAnchorEl] = react_1.useState(undefined);
    const [linkAddress, setLinkAddress] = react_1.useState("");
    const [targetBlank, setTargetBlank] = react_1.useState(false);
    const [linkText, setLinkText] = react_1.useState("");
    const [selection, setSelection] = react_1.useState(null);
    const [rel, setRel] = react_1.useState("");
    react_1.useEffect(() => setSelection(linkHelper_1.saveSelection()), [showModal]);
    const createLink = () => {
        if (linkAddress.length !== 0) {
            linkHelper_1.restoreSelection(selection);
            document.execCommand("insertHTML", false, `<a href="${grayTagSanityzerService_1.attributeJSSanitizer(linkAddress)}" ${rel.length === 0 ? "" : ("rel='" + rel + "'")} ${targetBlank ? "target=_blank" : ""}>${linkText}</a>`);
            setShowModal(false);
            setAnchorEl(undefined);
            setLinkAddress("");
            setTargetBlank(false);
            setRel("");
        }
    };
    const onCancel = () => {
        setShowModal(false);
        setAnchorEl(undefined);
        setLinkAddress("");
        setTargetBlank(false);
        setRel("");
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", width: "100%" } },
            react_1.default.createElement("span", { style: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", fontWeight: 800 }, onClick: (e) => {
                    const selection = document.getSelection();
                    if (selection !== null) {
                        const textSelection = selection.toString();
                        setAnchorEl(e.currentTarget);
                        setShowModal(true);
                        setLinkText(textSelection);
                    }
                } }, "\uF517")),
        showModal && react_1.default.createElement(PortalModal_1.default, { anchorEl: anchorEl },
            react_1.default.createElement("div", { style: {
                    position: "fixed",
                    width: 400,
                    height: 200,
                    top: "calc(50% - 100px)",
                    left: "calc(50% - 200px)",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)",
                    padding: 20,
                    backgroundColor: "white"
                } },
                react_1.default.createElement("div", { style: { padding: 10, width: "100%" } },
                    react_1.default.createElement("label", null, "Adress: "),
                    react_1.default.createElement("input", { style: { height: 30, width: 300 }, type: "text", onChange: (e) => setLinkAddress(e.target.value), value: linkAddress })),
                react_1.default.createElement("div", { style: { padding: 10, width: "100%" } },
                    react_1.default.createElement("label", null,
                        "Rel:",
                        react_1.default.createElement("select", { value: rel, style: { width: 250, height: 30, marginLeft: 15 }, onChange: (e) => { setRel(e.target.value); } }, relTypes.sort().map(el => {
                            return (react_1.default.createElement("option", { key: el, value: el }, el));
                        })))),
                react_1.default.createElement("div", { style: { width: "100%", padding: 10 } },
                    react_1.default.createElement("label", null,
                        "Target: blank ",
                        react_1.default.createElement("input", { style: { marginRight: 20 }, type: "checkbox", checked: targetBlank, onChange: (e) => setTargetBlank(e.currentTarget.checked) }))),
                react_1.default.createElement("div", { style: { padding: 10, width: "100%" } },
                    react_1.default.createElement("button", { style: { padding: 5, margin: 10 }, onClick: onCancel }, "Cancel"),
                    react_1.default.createElement("button", { style: { padding: 5, margin: 10 }, onClick: createLink }, "Ok"))))));
};
exports.default = AddLinkButton;
//https://wiki.whatwg.org/wiki/RelExtensions
const relTypes = [
    "",
    "pronunciation",
    "accessibility",
    "acquaintance",
    "admin",
    "ajax",
    "alternate",
    "answer",
    "application-manifest",
    "archives",
    "author",
    "bookmark",
    "canonical",
    "canonical-domain",
    "canonical-first",
    "canonical-human",
    "canonical-organization",
    "canonical-wwwnone",
    "chapter",
    "child",
    "co-resident",
    "co-worker",
    "colleague",
    "contact",
    "contributor",
    "crush",
    "date",
    "dns-prefetch",
    "edit",
    "edituri",
    "enclosure",
    "enlarged",
    "external",
    "extension",
    "first",
    "friend",
    "gallery",
    "glossary",
    "help",
    "hub",
    "i18nrules",
    "icon",
    "index",
    "jump",
    "kin",
    "last",
    "latest-version",
    "license",
    "login",
    "logout",
    "longdesc",
    "map",
    "me",
    "met",
    "meta",
    "muse",
    "neighbor",
    "next",
    "next-archive",
    "nofollow",
    "noreferrer",
    "noprefetch",
    "note",
    "openid.delegate",
    "openid.server",
    "openid2.local_id",
    "openid2.provider",
    "parent",
    "payment",
    "pgpkey",
    "pingback",
    "prefetch",
    "prerender",
    "presentation",
    "prev",
    "prev-archive",
    "print",
    "profile",
    "question",
    "related",
    "reply",
    "resource-package",
    "resources",
    "reviewer",
    "script",
    "search",
    "self",
    "service",
    "shortlink",
    "sibling",
    "sidebar",
    "spouse",
    "statechart",
    "stylesheet",
    "subresource",
    "sweetheart",
    "tag",
    "technicalauthor",
    "thread",
    "timesheet",
    "topic",
    "translatedfrom",
    "translator",
    "up",
    "us",
    "webmaster",
    "widget",
    "wlwmanifest"
];
