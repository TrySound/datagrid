import columnsReducer from './columns.js';
import gridStateReducer from './gridState.js';

export default (state = {}, action) => Object.assign({}, state, {
    columns: columnsReducer(state.columns, action),
    gridState: gridStateReducer(state.gridState, action)
});
