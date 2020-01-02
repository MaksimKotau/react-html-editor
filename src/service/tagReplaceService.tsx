import React, { Component } from 'react';
import { convertAllAttributes, AllJSXAttributes } from './attributesConverterService';
import { renderToString } from 'react-dom/server';
import  {GrayHTMLTags, sanitizeGrayTags, WhiteAndGrayAttributes} from './grayTagSanityzerService';

const WhiteHTMLTags =
{
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



interface TagProps extends ChildNodeProps {
    tagName: string;
    attributes?: AllJSXAttributes;
    uniq_key: string;
    value: string;
}

interface ChildNodeProps {
    value?: string;
    uniq_key: string;
}


const getRootDOMNode = (value: string): ChildNode => {
    let parser: DOMParser = new DOMParser();
    let xmlDoc: Document = parser.parseFromString(value, "text/xml");
    return xmlDoc.childNodes[0];
}

export const ChildNodes: React.SFC<ChildNodeProps> = (props) => {
    let rootNode: ChildNode = getRootDOMNode(props.value!);
    let childNodes: NodeListOf<ChildNode> = rootNode.childNodes;
    let arrayOfChildNodes: HTMLElement[] = Array.from(childNodes) as HTMLElement[];
    console.log(arrayOfChildNodes);
    let allNodes = arrayOfChildNodes.map((el, index) => {
        if (el.tagName in WhiteHTMLTags) {
            let attributes: WhiteAndGrayAttributes = convertAllAttributes(el.attributes);
            return getTag({
                value: el.outerHTML,
                uniq_key: `${props.uniq_key}_${el.tagName}_${index}`,
                tagName: el.tagName,
                attributes
            })
        } else if (el.tagName in GrayHTMLTags) {
            let attributes: WhiteAndGrayAttributes = sanitizeGrayTags(el.tagName, el.attributes);
            return getTag({
                value: el.outerHTML,
                uniq_key: `${props.uniq_key}_${el.tagName}_${index}`,
                tagName: el.tagName,
                attributes
            })
        } else if (el.nodeName === "#text") {
            if (props.uniq_key.indexOf("p") === -1) {
                return getTag({ value: `<p>${el.nodeValue!}</p>`, uniq_key: `${props.uniq_key}_p_${index}`, tagName: 'p' })
            }
            return getTextNode({ value: el.nodeValue!, uniq_key: `${props.uniq_key}_text_${index}`, tagName: "text" })
        } else
            return null;

    });
    if (rootNode.nodeName === 'article' && allNodes.filter(Boolean).length === 0) {
        allNodes.push(getTag({ value: `<p></p>`, uniq_key: `${props.uniq_key}_p_${0}`, tagName: 'p' }))
    }
    return (<React.Fragment>{allNodes}</React.Fragment>)
}


interface HTMLEditorProps {
    value: string;
    onChange(value: string): void;
}

export class ArticleDOMNode extends Component<HTMLEditorProps> {
    private articleRef: HTMLElement | undefined = undefined;
    componentDidMount() {
        this.articleRef!.addEventListener('DOMSubtreeModified', (e) => this.onDomeNodeChange(`<article>${this.articleRef!.outerHTML.replace(/<article[^>]*>/, '').replace('</article>', '')}</article>`))
        //this.articleRef!.addEventListener('DOMSubtreeModified', (e) => this.props.onChange(`<article>${this.articleRef!.innerHTML}</article>`))
        this.articleRef!.addEventListener('paste', (e: ClipboardEvent) => {
            e.preventDefault();
            const html = ((e as any).originalEvent || e).clipboardData.getData('text/html');
            window.document.execCommand('insertHTML', false, renderToString(<ChildNodes value={html} uniq_key="clipboard_unique_key" />));
        });
    }
    onDomeNodeChange = (value: string) => {
        this.props.onChange(value)
    }
    shouldComponentUpdate(nextProps: HTMLEditorProps) {
        let response: boolean = `<article>${this.articleRef!.innerHTML}</article>` !== nextProps.value;
        return response;
    }
    render() {
        return (
            <article ref={(elem: HTMLElement) => this.articleRef = elem!} suppressContentEditableWarning={true} contentEditable key={'article_editor'}><ChildNodes value={`<article>${this.props.value.replace(/<article[^>]*>/, '').replace('</article>', '')}</article>`} uniq_key={'article_editor'} /></article>
        )
    }
}



const getTag: React.SFC<TagProps> = (props) => {
    return React.createElement(props.tagName, { key: props.uniq_key, ...props.attributes }, <ChildNodes value={props.value} uniq_key={props.uniq_key} />)
}

const getTextNode: React.SFC<TagProps> = (props) => {
    return <React.Fragment key={props.uniq_key}>{props.value}</React.Fragment>;
}



