
import {JSXCSSParam, JSXCSSAttribute, getCSSForJSX} from './cssConverterService';

export type HTMLAttributes = "style" | "title" | "class" | "id";
export type JSXAttributes = "style" | "title" | "className" | "id";

export interface AttrSanityzerTypes {
    name: HTMLAttributes;
    JSXName: JSXAttributes;
};

export const AttributesConvert: AttrSanityzerTypes[] = [
    {
        name: "style",
        JSXName: "style",
    },
    {
        name: "title",
        JSXName: "title"
    },
    {
        name: "class",
        JSXName: "className"
    },
    {
        name: "id",
        JSXName: "id"
    }
];

type AttributesWithoutCSS = Exclude<JSXAttributes, "style">;

export type AllJSXAttributes = Partial<Record<AttributesWithoutCSS, string> & JSXCSSAttribute>;



export const getAttrForJSX = (attr: Attr): AllJSXAttributes => {
    let foundJSXCSSPAram:  AllJSXAttributes = {};
    AttributesConvert.forEach(attribute => {
        if (attribute.name === attr.name && attr.name !== "style") {
            foundJSXCSSPAram[attribute.JSXName] = attr.value;
        }else if (attribute.name === attr.name && attr.name === "style"){
            foundJSXCSSPAram["style"] = getCSSForJSX(attr).style;
        }
    })
    return foundJSXCSSPAram;
}



export const convertAllAttributes = (attributes: NamedNodeMap | undefined): AllJSXAttributes | {} => {
    let allAttributes: AllJSXAttributes | {} = {};
    if (typeof attributes !== "undefined"){
        for (let i = 0; i < attributes.length; i++) {
            let currentItem: (Attr | null) = attributes.item(i);
            if (currentItem !== null) {
               allAttributes = {...allAttributes, ...getAttrForJSX(currentItem)}
            }
        }
    }
    return allAttributes;
}
