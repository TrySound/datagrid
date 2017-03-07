import { compose, checkProps } from '../utils/index.js';
import withProps from './withProps.js';
import withPropsOnChange from './withPropsOnChange.js';
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

export default () => compose(
    withProps(props => ({
        columns: props.state.columns,
        columnState: props.state.columnState || defaultState,
        rowState: props.state.rowState || defaultState
    })),
    withProps(props => ({
        columnComponent: props.columnComponent || DefaultColumn,
        rowComponent: props.rowComponent || DefaultRow
    })),
    withPropsOnChange(checkProps('columns', 'viewportWidth'), props => ({
        columns: props.columns.map(column => Object.assign({}, column, {
            width: parseWidth(column.width, props.viewportWidth)
        }))
    })),
    withPropsOnChange(checkProps('columns'), props => ({
        columns: props.columns.map(column => Object.assign({}, column, {
            minWidth: column.minWidth || defaultMinWidth,
            width: Math.max(column.width || 0, column.minWidth || defaultMinWidth)
        }))
    }))
);
