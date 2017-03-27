const filterRowByColumns = (row, columns) =>
    columns.every(column => String(row[column.name]).toLowerCase().indexOf(column.filter) !== -1);

const sortRowsByColumns = (a, b, column) => {
    if (a[column.name] === b[column.name]) {
        return 0;
    }
    if (column.sort === 'asc') {
        return a[column.name] < b[column.name] ? -1 : 1;
    }
    return a[column.name] > b[column.name] ? -1 : 1;
};

export default (state, data) => {
    const filteredColumns = state.columns.filter(column => column.filter);
    const sortedColumn = state.columns.find(column => column.sort === 'asc' || column.sort === 'desc');
    const filtered
        = filteredColumns.length
        ? data.filter(datum => filterRowByColumns(datum, filteredColumns))
        : data;
    const sorted
        = sortedColumn
        ? filtered.slice().sort((a, b) => sortRowsByColumns(a, b, sortedColumn))
        : filtered;
    const pager = state.gridState && state.gridState.pager;
    const sliced
        = pager
        ? sorted.slice(pager.page * pager.size, pager.page * pager.size + pager.size)
        : sorted;
    return sliced;
};
