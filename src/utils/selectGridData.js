const filterRowByColumns = (row, columns) =>
    columns.every(column => row[column.name].toLowerCase().indexOf(column.value) !== -1);

const sortRowsByColumns = (a, b, column) => {
    if (a[column.name] === b[column.name]) {
        return 0;
    }
    if (column.sort === 'asc') {
        return a[column.name] < b[column.name] ? -1 : 1;
    }
    return a[column.name] > b[column.name] ? -1 : 1;
};

export default (gridState, data) => {
    const filteredColumns = gridState.columns.filter(column => column.value);
    const sortedColumn = gridState.columns.find(column => column.sort === 'asc' || column.sort === 'desc');
    const filtered
        = filteredColumns.length
        ? data.filter(datum => filterRowByColumns(datum, filteredColumns))
        : data;
    const sorted
        = sortedColumn
        ? filtered.slice().sort((a, b) => sortRowsByColumns(a, b, sortedColumn))
        : filtered;
    return sorted;
};
