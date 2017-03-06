import { compose } from '../utils/index.js';
import withProps from './withProps.js';
import withPropsOnChange from './withPropsOnChange.js';
import DefaultColumn from '../DefaultColumn.js';
import DefaultRow from '../DefaultRow.js';

const defaultState = {};
const defaultMinWidth = 60;

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
    withPropsOnChange((props, nextProps) => props.columns !== nextProps.columns, ({ columns }) => ({
        columns: columns.map(column => Object.assign({}, column, {
            minWidth: column.minWidth || defaultMinWidth,
            width: column.width || column.minWidth || defaultMinWidth
        }))
    }))
);
