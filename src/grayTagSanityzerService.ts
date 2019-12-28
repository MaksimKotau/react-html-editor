import {AllJSXAttributes, convertAllAttributes} from './attributesConverterService';
import { AriaAttributes, ImgHTMLAttributes } from 'react';

const attributeJSSanitizer = (value: string): string => {
    return value.toLowerCase().indexOf('javascript') > -1 ? "" : value;
}

export const GrayHTMLTags = {
    a: "a",
    img: "img"
};

type GrayTagTypes = "a" | "img";



type ATagAttributes = "href" | "target" | "rel";
type ImgTagAttributes = "src" | "alt" | "height" | "width";
type AllAttributesType =  ATagAttributes | ImgTagAttributes

interface AttrConfig {
    attrName: AllAttributesType,
    attrCleaner: (value: string)=> string
};

export type IAttrConfiguration = {
    tagName: GrayTagTypes,
    attrConfig: AttrConfig[]
}

export const GrayTagConfiguration: IAttrConfiguration[] = [
    {
        tagName: "a",
        attrConfig: [
            {
                attrName: "href",
                attrCleaner: attributeJSSanitizer
            },
            {
                attrName: "target",
                attrCleaner: attributeJSSanitizer
            },
            {
                attrName: "rel",
                attrCleaner: attributeJSSanitizer
            }
        ]
    },
    {
        tagName: "img",
        attrConfig: [
            {
                attrName: "src",
                attrCleaner: attributeJSSanitizer
            },
            {
                attrName: "alt",
                attrCleaner: attributeJSSanitizer
            },
            {
                attrName: "height",
                attrCleaner: attributeJSSanitizer
            },
            {
                attrName: "width",
                attrCleaner: attributeJSSanitizer
            }
        ]
    },
];

type AllAttributes = AllJSXAttributes & Partial<Record<AllAttributesType, string>>

export const getGrayAttrForJSX = (attr: Attr, config: IAttrConfiguration): AllJSXAttributes => {
    let foundJSXCSSParam:  AllAttributes = {};
    let foundConfig: AttrConfig | undefined = config.attrConfig.find(el => el.attrName === attr.name);
    if (foundConfig){
        foundJSXCSSParam[foundConfig.attrName] = foundConfig.attrCleaner(attr.value);
    }
    return foundJSXCSSParam;
}


export type WhiteAndGrayAttributes = AllJSXAttributes & Partial<Record<AllAttributesType, string>>;

export const sanitizeGrayTags = (tagName: string, attributes: NamedNodeMap | undefined): WhiteAndGrayAttributes => {
    let foundJSXParams: WhiteAndGrayAttributes = {};
    if (typeof attributes !== "undefined"){
        for (let i = 0; i < attributes.length; i++) {
            let currentItem: (Attr | null) = attributes.item(i);
            if (currentItem !== null) {
                let foundGrayConfig: IAttrConfiguration | undefined = GrayTagConfiguration.find(el => el.tagName === tagName);
                if (foundGrayConfig){
                    let foundAttr: AttrConfig | undefined = foundGrayConfig.attrConfig.find(el => el.attrName === currentItem!.name)
                    if (foundAttr){
                        foundJSXParams = {...foundJSXParams, ...getGrayAttrForJSX(currentItem, foundGrayConfig)};
                    }
                }
            }
        }
        foundJSXParams = {...foundJSXParams, ...convertAllAttributes(attributes)}
    }
    return foundJSXParams
}