import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { withScrollProps } from '../decorators/index.js';
import { Grid, reducer } from '../index.js';

const TrackedGrid = withScrollProps(Grid);

const data = Array(100000).fill(0).map((item, i) => ({
    col11: `Pinned left ${i}`,
    col1: i,
    col2: `Title ${i}`,
    col21: `Pinned right ${i}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

const filterRowByColumns = (row, columns) =>
    columns.every(column => row[column.name].indexOf(column.value) !== -1);

const sortRowsByColumns = (a, b, column) => {
    if (a[column.name] === b[column.name]) {
        return 0;
    }
    if (column.sort === 'asc') {
        if (a[column.name] < b[column.name]) {
            return -1;
        }
        if (a[column.name] > b[column.name]) {
            return 1;
        }
    }
    if (column.sort === 'desc') {
        if (a[column.name] > b[column.name]) {
            return -1;
        }
        if (a[column.name] < b[column.name]) {
            return 1;
        }
    }
    return 0;
};

const selectDataByColumns = (data, columns) => {
    const filteredColumns = columns.filter(column => column.value);
    const sortedColumn = columns.find(column => column.sort);
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

export default class Viewport extends Component {
    constructor() {
        super();

        this.state = {
            gridState: {
                columns: [
                    {
                        name: 'col1',
                        enableSorting: true
                    },
                    {
                        name: 'col11',
                        width: 120,
                        pinnedLeft: true
                    },
                    {
                        name: 'col2',
                        minWidth: 60,
                        enableFiltering: true,
                        width: 150,
                        resizing: true
                    },
                    {
                        name: 'col21',
                        width: 120,
                        pinnedRight: true
                    },
                    {
                        name: 'col3',
                        displayName: 'Column 3',
                        width: 200,
                        maxWidth: 300,
                        moving: true
                    }
                ]
            },
            data,
            originalData: data
        };

        this.callback = this.callback.bind(this);
    }

    callback(action) {
        console.log(action);
        switch (action.type) {
            case 'FILTER_COLUMN':
            case 'SORT_COLUMN': {
                const gridState = reducer(this.state.gridState, action);
                this.setState({
                    gridState,
                    data: selectDataByColumns(this.state.originalData, gridState.columns)
                });
                break;
            }

            default:
                this.setState({
                    gridState: reducer(this.state.gridState, action)
                });
                break;
        }
    }

    render({}, { gridState, data }) {
        return (
            <div>
                <h2>Grid example</h2>
                <TrackedGrid
                    viewportWidth={600}
                    viewportHeight={360}
                    headerHeight={60}
                    rowHeight={30}
                    data={data}
                    columnComponent={undefined}
                    rowComponent={undefined}
                    columns={gridState.columns}
                    callback={this.callback}
                />
            </div>
        );
    }
}
