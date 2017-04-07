import { compose, withProps, withPropsOnChange } from 'recompose';
import { transform } from '../utils/index.js';
import DefaultColumn from '../DefaultColumn.js';
import DefaultRow from '../DefaultRow.js';

const defaultState = {};
const defaultMinWidth = 60;

const parseWidth = (width, viewportWidth) => {
    if (typeof width === 'string' && width[width.length - 1] === '%') {
        return viewportWidth * Number(width.slice(0, -1)) / 100;
    }
    return width;
};

const transformStub = data => data;

export default () => compose(
    withProps(props => ({
        headerHeight: props.headerHeight || 0,
        rowHeight: props.rowHeight || 30,
        gridState: props.gridState || defaultState
    })),
    withProps(props => ({
        columnComponent: props.columnComponent || DefaultColumn,
        rowComponent: props.rowComponent || DefaultRow
    })),
    withPropsOnChange(['columns', 'viewportWidth'], props => ({
        columns: props.columns.map(column => Object.assign({}, column, {
            width: parseWidth(column.width, props.viewportWidth)
        }))
    })),
    withPropsOnChange(['columns'], props => ({
        columns: props.columns.map(column => Object.assign({}, column, {
            minWidth: column.minWidth || defaultMinWidth,
            width: Math.max(column.width || 0, column.minWidth || defaultMinWidth)
        }))
    })),
    withPropsOnChange(['transform'], props => ({
        transform:
            typeof props.transform === 'function' && props.transform ||
            props.transform === false && transformStub ||
            transform
    }))
);
