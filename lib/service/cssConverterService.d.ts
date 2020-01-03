export declare type CSSParams = "color" | "background-color" | "margin" | "margin-left" | "margin-right" | "margin-top" | "margin-bottom" | "border" | "padding" | "padding-right" | "padding-left" | "padding-top" | "padding-bottom" | "text-align";
export declare type JSXCSSParam = "color" | "backgroundColor" | "margin" | "marginLeft" | "marginRight" | "marginTop" | "marginBottom" | "border" | "padding" | "paddingRight" | "paddingLeft" | "paddingTop" | "paddingBottom" | "textAlign";
export interface CSSSanityzerTypes {
    name: CSSParams;
    JSXName: JSXCSSParam;
}
export declare const CSSAttributes: CSSSanityzerTypes[];
export declare type JSXCSSAttribute = {
    style: {
        [key in JSXCSSParam]?: string;
    };
};
export declare const getCSSForJSX: (attr: Attr) => JSXCSSAttribute;
