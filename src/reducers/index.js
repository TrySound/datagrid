import columnsReducer from './columns.js';
import rowStateReducer from './rowState.js';

export default (state = {}, action) => Object.assign({}, state, {
    columns: columnsReducer(state.columns, action),
    rowState: rowStateReducer(state.rowState, action)
});
