export default (state, action) => {
    switch (action.type) {
        case 'MARK_MOVE_DEST':
            return {
                columns: state.columns.map(item => {
                    if (item.name === action.left) {
                        return Object.assign({}, item, {
                            moveLeft: false,
                            moveRight: true
                        });
                    }
                    if (item.name === action.right) {
                        return Object.assign({}, item, {
                            moveLeft: true,
                            moveRight: false
                        });
                    }
                    if (item.moveLeft || item.moveRight) {
                        return Object.assign({}, item, {
                            moveLeft: false,
                            moveRight: false
                        });
                    }
                    return item;
                })
            };

        case 'MOVE_COLUMN':
            const columns = state.columns.map(item => {
                if (item.moveLeft || item.moveRight) {
                    return Object.assign({}, item, {
                        moveLeft: false,
                        moveRight: false
                    });
                }
                return item;
            });
            if (action.left || action.right) {
                const index
                    = action.left
                    ? columns.findIndex(item => item.name === action.left) + 1
                    : columns.findIndex(item => item.name === action.right);
                return {
                    columns: [
                        ...columns.slice(0, index).filter(item => item.name !== action.name),
                        ...columns.filter(item => item.name === action.name),
                        ...columns.slice(index).filter(item => item.name !== action.name)
                    ]
                };
            }
            return {
                columns
            };

        case 'RESIZE_COLUMN':
            return {
                columns: state.columns.map(item => {
                    if (item.name === action.name) {
                        return Object.assign({}, item, {
                            width: action.size
                        });
                    }
                    return item;
                })
            };

        default:
            return state;
    }
};
