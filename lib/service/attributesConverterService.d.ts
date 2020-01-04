import { JSXCSSAttribute } from './cssConverterService';
export declare type HTMLAttributes = "style" | "title" | "class" | "id";
export declare type JSXAttributes = "style" | "title" | "className" | "id";
export interface AttrSanityzerTypes {
    name: HTMLAttributes;
    JSXName: JSXAttributes;
}
export declare const AttributesConvert: AttrSanityzerTypes[];
export declare type AttributesWithoutCSS = Exclude<JSXAttributes, "style">;
export declare type AllJSXAttributes = Partial<Record<AttributesWithoutCSS, string> & JSXCSSAttribute>;
export declare const getAttrForJSX: (attr: Attr) => Partial<Record<"title" | "id" | "className", string> & JSXCSSAttribute>;
export declare const convertAllAttributes: (attributes: NamedNodeMap | undefined) => {} | Partial<Record<"title" | "id" | "className", string> & JSXCSSAttribute>;
