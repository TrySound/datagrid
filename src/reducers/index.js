import columnsReducer from './columns.js';

export default (state = {}, action) => ({
    columns: columnsReducer(state.columns, action)
});
