import { defaultMinWidth } from '../params.js';

export default (column, width) =>
    Math.min(Math.max(column.minWidth || defaultMinWidth, width), column.maxWidth || Infinity);
