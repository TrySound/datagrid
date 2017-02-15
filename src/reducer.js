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
                columns: state.columns.map((item, index) => {
                    if (index === action.left) {
                        return Object.assign({}, item, {
                            moveLeft: true,
                            moveRight: false
                        });
                    }
                    if (index === action.right) {
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
            const columns = state.columns.map((item, index) => {
                if (item.moveLeft || item.moveRight) {
                    return Object.assign({}, item, {
                        moveLeft: false,
                        moveRight: false
                    });
                }
                return item;
            });
            return {
                columns: [
                    ...columns.slice(0, action.left + 1)
                              .filter(item => item.name !== action.name),
                    ...columns.filter(item => item.name === action.name),
                    ...columns.slice(action.right)
                              .filter(item => item.name !== action.name)
                ]
            };

        default:
            return state;
    }
};
