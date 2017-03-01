export const markMoveDest = (name, left, right) => ({
    type: 'MARK_MOVE_DEST',
    name,
    left,
    right
});

export const moveColumn = (name, left, right) => ({
    type: 'MOVE_COLUMN',
    name,
    left,
    right
});

export const moveResizeGhost = (name, position) => ({
    type: 'MOVE_RESIZE_GHOST',
    name,
    position
});

export const resizeColumn = (name, size) => ({
    type: 'RESIZE_COLUMN',
    name,
    size
});

export const filterColumn = (name, filter) => ({
    type: 'FILTER_COLUMN',
    name,
    filter
});

export const sortColumn = name => ({
    type: 'SORT_COLUMN',
    name
});

export const selectRow = rowIndex => ({
    type: 'SELECT_ROW',
    rowIndex
});
