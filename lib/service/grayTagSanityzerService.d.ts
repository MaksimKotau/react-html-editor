import { AllJSXAttributes } from './attributesConverterService';
export declare const attributeJSSanitizer: (value: string) => string;
export declare const GrayHTMLTags: {
    a: string;
    img: string;
};
declare type GrayTagTypes = "a" | "img";
declare type ATagAttributes = "href" | "target" | "rel";
declare type ImgTagAttributes = "src" | "alt" | "height" | "width";
declare type AllAttributesType = ATagAttributes | ImgTagAttributes;
interface AttrConfig {
    attrName: AllAttributesType;
    attrCleaner: (value: string) => string;
}
export declare type IAttrConfiguration = {
    tagName: GrayTagTypes;
    attrConfig: AttrConfig[];
};
export declare const GrayTagConfiguration: IAttrConfiguration[];
export declare const getGrayAttrForJSX: (attr: Attr, config: IAttrConfiguration) => Partial<Record<"title" | "id" | "className", string> & import("./cssConverterService").JSXCSSAttribute>;
export declare type WhiteAndGrayAttributes = AllJSXAttributes & Partial<Record<AllAttributesType, string>>;
export declare const sanitizeGrayTags: (tagName: string, attributes: NamedNodeMap | undefined) => WhiteAndGrayAttributes;
export {};
