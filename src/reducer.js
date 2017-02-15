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
            const currentColumn = columns.find(item => item.name === action.name);
            const otherColumns = columns.filter(item => item.name !== action.name);
            const leftIndex = otherColumns.findIndex(item => item.name === action.left);
            const rightIndex = otherColumns.findIndex(item => item.name === action.right);
            return {
                columns: [
                    ...(leftIndex === -1 ? [] : otherColumns.slice(0, leftIndex + 1)),
                    currentColumn,
                    ...(rightIndex === -1 ? [] : otherColumns.slice(rightIndex))
                ]
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
