"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSelection = () => {
    if (window.getSelection) {
        let sel = window.getSelection();
        if (sel && sel.getRangeAt && sel.rangeCount) {
            let ranges = [];
            for (let i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    }
    else {
        return null;
    }
};
exports.restoreSelection = (savedSel) => {
    if (savedSel) {
        let sel = window.getSelection();
        sel.removeAllRanges();
        for (var i = 0, len = savedSel.length; i < len; ++i) {
            sel.addRange(savedSel[i]);
        }
    }
};
