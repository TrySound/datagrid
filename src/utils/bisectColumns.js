import findColumn from './findColumn.js';

export default (columns, position) => {
    if (columns.length < 2) {
        return [-1, 0];
    }
    const [columnIndex, columnPosition] = findColumn(columns, position);
    if (columnIndex === -1) {
        return [-1, 0];
    }
    if (columnIndex === columns.length) {
        return [columns.length - 1, -1];
    }
    const width = columns[columnIndex].width;
    if (columnPosition < width / 2) {
        return [columnIndex - 1, columnIndex];
    } else if (columnIndex === columns.length - 1) {
        return [columnIndex, -1];
    } else {
        return [columnIndex, columnIndex + 1];
    }
};
