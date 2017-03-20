export default (state = {}, action) => {
    switch (action.type) {
        case 'MARK_MOVE_DEST':
            return Object.assign({}, state, {
                moving: {
                    name: action.name,
                    left: action.left,
                    right: action.right
                }
            });

        case 'MOVE_COLUMN':
            return Object.assign({}, state, {
                moving: null
            });

        case 'RESIZE_COLUMN':
            return Object.assign({}, state, {
                resizing: null
            });

        case 'SELECT_ROW':
            return Object.assign({}, state, {
                selectedIndex: action.rowIndex
            });

        case 'FILTER_COLUMN':
        case 'SORT_COLUMN':
            return Object.assign({}, state, {
                pager: state.pager ? Object.assign({}, state.pager, { page: 0 }) : null
            });

        default:
            return state;
    }
};
