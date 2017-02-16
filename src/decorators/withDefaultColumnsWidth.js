import createElement from 'inferno-create-element';
import withMiddleState from './withMiddleState.js';
import { defaultMinWidth } from '../params.js';

export default component => withMiddleState((props, state = {}) => {
    if (props.columns === state.prevColumns) {
        return state;
    }
    return {
        prevColumns: props.columns,
        columns: props.columns.map(column => Object.assign({}, column, {
            width: column.width || column.minWidth || defaultMinWidth
        }))
    };
})(component);
