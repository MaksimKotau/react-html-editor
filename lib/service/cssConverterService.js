"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSAttributes = [
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
];
exports.getCSSForJSX = (attr) => {
    let foundJSXCSSParam = { style: {} };
    let allStyles = attr.value.split(";").filter(at => at.indexOf(":") > -1);
    allStyles.forEach(attribute => {
        var splitedParamValue = attribute.split(":");
        exports.CSSAttributes.forEach(el => {
            if (el.name === splitedParamValue[0].trim()) {
                foundJSXCSSParam.style[el.JSXName] = splitedParamValue[1].trim();
            }
        });
    });
    return foundJSXCSSParam;
};
