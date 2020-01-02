export const saveSelection = (): (undefined | null | Range[]) => {
    if (window.getSelection) {
        let sel: Selection | null = window.getSelection();
        if (sel && sel.getRangeAt && sel.rangeCount) {
            let ranges = [];
            for (let i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    } else {
        return null;
    }
}

export const restoreSelection = (savedSel: (undefined | null | Range[])) => {
    if (savedSel) {
        let sel: Selection | null = window.getSelection();
        sel!.removeAllRanges();
        for (var i = 0, len = savedSel.length; i < len; ++i) {
            sel!.addRange(savedSel[i]);
        }
    }
}
