"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cssConverterService_1 = require("./cssConverterService");
;
exports.AttributesConvert = [
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
exports.getAttrForJSX = (attr) => {
    let foundJSXCSSPAram = {};
    exports.AttributesConvert.forEach(attribute => {
        if (attribute.name === attr.name && attr.name !== "style") {
            foundJSXCSSPAram[attribute.JSXName] = attr.value;
        }
        else if (attribute.name === attr.name && attr.name === "style") {
            foundJSXCSSPAram["style"] = cssConverterService_1.getCSSForJSX(attr).style;
        }
    });
    return foundJSXCSSPAram;
};
exports.convertAllAttributes = (attributes) => {
    let allAttributes = {};
    if (typeof attributes !== "undefined") {
        for (let i = 0; i < attributes.length; i++) {
            let currentItem = attributes.item(i);
            if (currentItem !== null) {
                allAttributes = Object.assign({}, allAttributes, exports.getAttrForJSX(currentItem));
            }
        }
    }
    return allAttributes;
};
