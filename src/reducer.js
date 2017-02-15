export default (state, action) => {
    switch (action.type) {
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

        case 'MARK_MOVE_DEST':
            return {
                columns: state.columns.map(item => {
                    if (item.name === action.left) {
                        return Object.assign({}, item, {
                            moveLeft: true,
                            moveRight: false
                        });
                    }
                    if (item.name === action.right) {
                        return Object.assign({}, item, {
                            moveLeft: false,
                            moveRight: true
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
            const leftIndex = columns.findIndex(item => item.name === action.left);
            const leftColumns = leftIndex === -1 ? [] : columns.slice(0, leftIndex + 1);
            const rightIndex = columns.findIndex(item => item.name === action.right);
            const rightColumns = rightIndex === -1 ? [] : columns.slice(rightIndex);
            return {
                columns: [
                    ...leftColumns.filter(item => item.name !== action.name),
                    ...columns.filter(item => item.name === action.name),
                    ...rightColumns.filter(item => item.name !== action.name)
                ]
            };

        default:
            return state;
    }
};
