export default (state = [], action) => {
    switch (action.type) {
        case 'MOVE_COLUMN':
            if (action.left || action.right) {
                const index
                    = action.left
                    ? state.findIndex(item => item.name === action.left) + 1
                    : state.findIndex(item => item.name === action.right);
                return [
                    ...state.slice(0, index).filter(item => item.name !== action.name),
                    ...state.filter(item => item.name === action.name),
                    ...state.slice(index).filter(item => item.name !== action.name)
                ];
            }
            return state;

        case 'RESIZE_COLUMN':
            return state.map(item => {
                if (item.name === action.name) {
                    return Object.assign({}, item, {
                        width: action.size
                    });
                }
                return item;
            });

        case 'FILTER_COLUMN':
            return state.map(item => {
                if (item.name === action.name) {
                    return Object.assign({}, item, {
                        value: action.value
                    });
                }
                return item;
            });

        case 'SORT_COLUMN':
            return state.map(item => {
                if (item.name === action.name) {
                    return Object.assign({}, item, {
                        sort: !item.sort && 'asc' || item.sort === 'asc' && 'desc' || item.sort === 'desc' && null
                    });
                }
                if (item.sort) {
                    return Object.assign({}, item, {
                        sort: null
                    });
                }
                return item;
            });

        default:
            return state;
    }
};
