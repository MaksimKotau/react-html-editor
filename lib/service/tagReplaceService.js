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
const attributesConverterService_1 = require("./attributesConverterService");
const server_1 = require("react-dom/server");
const grayTagSanityzerService_1 = require("./grayTagSanityzerService");
const WhiteHTMLTags = {
    p: "p",
    b: "b",
    u: "u",
    i: "i",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    pre: "pre",
    code: "code",
    strong: "strong",
    em: "em",
    span: "span",
    ul: "ul",
    ol: "ol",
    li: "li",
    hr: "hr",
    q: "q",
    s: "s",
    samp: "samp",
    sub: "sub",
    sup: "sup",
    font: "font"
};
const getRootDOMNode = (value) => {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(value, "text/xml");
    return xmlDoc.childNodes[0];
};
exports.ChildNodes = (props) => {
    let rootNode = getRootDOMNode(props.value);
    let childNodes = rootNode.childNodes;
    let arrayOfChildNodes = Array.from(childNodes);
    console.log(arrayOfChildNodes);
    let allNodes = arrayOfChildNodes.map((el, index) => {
        if (el.tagName in WhiteHTMLTags) {
            let attributes = attributesConverterService_1.convertAllAttributes(el.attributes);
            return getTag({
                value: el.outerHTML,
                uniq_key: `${props.uniq_key}_${el.tagName}_${index}`,
                tagName: el.tagName,
                attributes
            });
        }
        else if (el.tagName in grayTagSanityzerService_1.GrayHTMLTags) {
            let attributes = grayTagSanityzerService_1.sanitizeGrayTags(el.tagName, el.attributes);
            return getTag({
                value: el.outerHTML,
                uniq_key: `${props.uniq_key}_${el.tagName}_${index}`,
                tagName: el.tagName,
                attributes
            });
        }
        else if (el.nodeName === "#text") {
            if (props.uniq_key.indexOf("p") === -1) {
                return getTag({ value: `<p>${el.nodeValue}</p>`, uniq_key: `${props.uniq_key}_p_${index}`, tagName: 'p' });
            }
            return getTextNode({ value: el.nodeValue, uniq_key: `${props.uniq_key}_text_${index}`, tagName: "text" });
        }
        else
            return null;
    });
    if (rootNode.nodeName === 'article' && allNodes.filter(Boolean).length === 0) {
        allNodes.push(getTag({ value: `<p></p>`, uniq_key: `${props.uniq_key}_p_${0}`, tagName: 'p' }));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, allNodes));
};
class ArticleDOMNode extends react_1.Component {
    constructor() {
        super(...arguments);
        this.articleRef = undefined;
        this.onDomeNodeChange = (value) => {
            this.props.onChange(value);
        };
    }
    componentDidMount() {
        this.articleRef.addEventListener('DOMSubtreeModified', (e) => this.onDomeNodeChange(`<article>${this.articleRef.outerHTML.replace(/<article[^>]*>/, '').replace('</article>', '')}</article>`));
        this.articleRef.addEventListener('paste', (e) => {
            e.preventDefault();
            const html = (e.originalEvent || e).clipboardData.getData('text/html');
            window.document.execCommand('insertHTML', false, server_1.renderToString(react_1.default.createElement(exports.ChildNodes, { value: html, uniq_key: "clipboard_unique_key" })));
        });
    }
    shouldComponentUpdate(nextProps) {
        let response = `<article>${this.articleRef.innerHTML}</article>` !== nextProps.value;
        return response;
    }
    render() {
        return (react_1.default.createElement("article", { style: { border: this.props.readonly ? undefined : "1px solid #999", minHeight: "1.5rem" }, ref: (elem) => this.articleRef = elem, suppressContentEditableWarning: true, contentEditable: !this.props.readonly, key: 'article_editor' },
            react_1.default.createElement(exports.ChildNodes, { value: `<article>${this.props.value.replace(/<article[^>]*>/, '').replace('</article>', '')}</article>`, uniq_key: 'article_editor' })));
    }
}
exports.ArticleDOMNode = ArticleDOMNode;
const getTag = (props) => {
    return react_1.default.createElement(props.tagName, Object.assign({ key: props.uniq_key }, props.attributes), react_1.default.createElement(exports.ChildNodes, { value: props.value, uniq_key: props.uniq_key }));
};
const getTextNode = (props) => {
    return react_1.default.createElement(react_1.default.Fragment, { key: props.uniq_key }, props.value);
};
