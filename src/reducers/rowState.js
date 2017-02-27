export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_ROW':
            return Object.assign({}, state, {
                selectedIndex: action.rowIndex
            });

        default:
            return state;
    }
};
