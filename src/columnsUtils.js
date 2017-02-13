const defaultMinWidth = 60;

export const trimColumnWidth = (column, width) =>
    Math.min(Math.max(column.minWidth || defaultMinWidth, width), column.maxWidth || Infinity);

export const getColumnWidth = column =>
    column.width || column.minWidth || defaultMinWidth;

export const bisectColumns = (columns, position) => {
    if (columns.length < 2) {
        return [-1, 0];
    }
    let last = 0;
    return columns.reduce((acc, { width }, index) => {
        const left = last;
        const relative = position - left;
        const half = width / 2;
        last = left + width;
        if (index === 0 && relative < half) {
            return [index - 1, index];
        }
        if (index === columns.length - 1 && half <= relative) {
            return [index, index + 1];
        }
        if (half <= relative && relative <= width) {
            return [index, index + 1];
        }
        if (0 <= relative && relative <= half) {
            return [index - 1, index];
        }
        return acc;
    }, []);
};
