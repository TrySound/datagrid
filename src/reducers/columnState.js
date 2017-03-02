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

        case 'MOVE_RESIZE_GHOST':
            return Object.assign({}, state, {
                resizing: {
                    name: action.name,
                    position: action.position
                }
            });

        case 'RESIZE_COLUMN':
            return Object.assign({}, state, {
                resizing: null
            });

        default:
            return state;
    }
};
