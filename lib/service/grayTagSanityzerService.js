"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attributesConverterService_1 = require("./attributesConverterService");
exports.attributeJSSanitizer = (value) => {
    return value.toLowerCase().indexOf('javascript') > -1 ? "" : value;
};
exports.GrayHTMLTags = {
    a: "a",
    img: "img"
};
;
exports.GrayTagConfiguration = [
    {
        tagName: "a",
        attrConfig: [
            {
                attrName: "href",
                attrCleaner: exports.attributeJSSanitizer
            },
            {
                attrName: "target",
                attrCleaner: exports.attributeJSSanitizer
            },
            {
                attrName: "rel",
                attrCleaner: exports.attributeJSSanitizer
            }
        ]
    },
    {
        tagName: "img",
        attrConfig: [
            {
                attrName: "src",
                attrCleaner: exports.attributeJSSanitizer
            },
            {
                attrName: "alt",
                attrCleaner: exports.attributeJSSanitizer
            },
            {
                attrName: "height",
                attrCleaner: exports.attributeJSSanitizer
            },
            {
                attrName: "width",
                attrCleaner: exports.attributeJSSanitizer
            }
        ]
    },
];
exports.getGrayAttrForJSX = (attr, config) => {
    let foundJSXCSSParam = {};
    let foundConfig = config.attrConfig.find(el => el.attrName === attr.name);
    if (foundConfig) {
        foundJSXCSSParam[foundConfig.attrName] = foundConfig.attrCleaner(attr.value);
    }
    return foundJSXCSSParam;
};
exports.sanitizeGrayTags = (tagName, attributes) => {
    let foundJSXParams = {};
    if (typeof attributes !== "undefined") {
        for (let i = 0; i < attributes.length; i++) {
            let currentItem = attributes.item(i);
            if (currentItem !== null) {
                let foundGrayConfig = exports.GrayTagConfiguration.find(el => el.tagName === tagName);
                if (foundGrayConfig) {
                    let foundAttr = foundGrayConfig.attrConfig.find(el => el.attrName === currentItem.name);
                    if (foundAttr) {
                        foundJSXParams = Object.assign(Object.assign({}, foundJSXParams), exports.getGrayAttrForJSX(currentItem, foundGrayConfig));
                    }
                }
            }
        }
        foundJSXParams = Object.assign(Object.assign({}, foundJSXParams), attributesConverterService_1.convertAllAttributes(attributes));
    }
    return foundJSXParams;
};
