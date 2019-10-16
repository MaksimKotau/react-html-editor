export type CSSParams = "color" | "background-color" | "margin" | "margin-left" | "margin-right" | "margin-top" | "margin-bottom" 
                        | "border" | "padding" | "padding-right" | "padding-left" | "padding-top" | "padding-bottom" | "text-align";
export type JSXCSSParam = "color" | "backgroundColor" | "margin" | "marginLeft" | "marginRight" | "marginTop" | "marginBottom" 
                        | "border" | "padding" | "paddingRight" | "paddingLeft" | "paddingTop" | "paddingBottom" | "textAlign";

export interface CSSSanityzerTypes {
    name: CSSParams;
    JSXName: JSXCSSParam;
}

export const CSSAttributes: CSSSanityzerTypes[] = [
    {
        name: "color",
        JSXName: "color",
    },
    {
        name: "background-color",
        JSXName: "backgroundColor"
    },
    {
        name: "margin",
        JSXName: "margin"
    },
    {
        name: "margin-left",
        JSXName: "marginLeft"
    },
    {
        name: "margin-right",
        JSXName: "marginRight"
    },
    {
        name: "margin-top",
        JSXName: "marginTop"
    },
    {
        name: "margin-bottom",
        JSXName: "marginBottom"
    },
    {
        name: "border",
        JSXName: "border"
    },
    {
        name: "padding",
        JSXName: "padding"
    },
    {
        name: "padding-right",
        JSXName: "paddingRight"
    },
    {
        name: "padding-left",
        JSXName: "paddingLeft"
    },
    {
        name: "padding-top",
        JSXName: "paddingTop"
    },
    {
        name: "padding-bottom",
        JSXName: "paddingBottom"
    },
    {
        name: "text-align",
        JSXName: "textAlign"
    }
]

export type JSXCSSAttribute = {style:{[key in JSXCSSParam]?: string}}

export const getCSSForJSX = (attr: Attr): JSXCSSAttribute => {
    let foundJSXCSSParam: JSXCSSAttribute = {style: {}};
    let allStyles: string[] = attr.value.split(";").filter(at => at.indexOf(":") > -1);
    allStyles.forEach(attribute => {
        var splitedParamValue: string[] = attribute.split(":");
        CSSAttributes.forEach(el => {
            if (el.name ===splitedParamValue[0].trim()){
                foundJSXCSSParam.style[el.JSXName] = splitedParamValue[1].trim()
            }
        })
    })
    console.log('----');
    console.log(attr);
    console.log(foundJSXCSSParam)
    return foundJSXCSSParam;
}