export default (column, width) => Math.min(Math.max(column.minWidth || 0, width), column.maxWidth || Infinity);
