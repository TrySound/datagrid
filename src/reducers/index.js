import columnsReducer from './columns.js';
import columnStateReducer from './columnState.js';
import rowStateReducer from './rowState.js';

export default (state = {}, action) => Object.assign({}, state, {
    columns: columnsReducer(state.columns, action),
    columnState: columnStateReducer(state.columnState, action),
    rowState: rowStateReducer(state.rowState, action)
});
