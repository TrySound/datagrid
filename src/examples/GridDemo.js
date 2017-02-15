import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import withScrollTopProp from '../decorators/withScrollTopProp.js';
import Grid from '../Grid.js';
import DefaultHeaderColumn from '../DefaultHeaderColumn.js';
import { defaultBorder } from '../defaults.js';

const TrackedGrid = withScrollTopProp(Grid);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'RESIZE':
            return {
                columns: state.columns.map(item => {
                    if (item.name === action.payload.columnName) {
                        return Object.assign({}, item, {
                            width: action.payload.columnWidth
                        });
                    }
                    return item;
                })
            };

        case 'MOVING':
            return {
                columns: state.columns.map((item, index) => {
                    if (index === action.payload.between[0]) {
                        return Object.assign({}, item, {
                            moveLeft: true,
                            moveRight: false
                        });
                    }
                    if (index === action.payload.between[1]) {
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

        case 'MOVE':
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
                    ...columns.slice(0, action.payload.between[0] + 1)
                              .filter(item => item.name !== action.payload.columnName),
                    ...columns.filter(item => item.name === action.payload.columnName),
                    ...columns.slice(action.payload.between[1])
                              .filter(item => item.name !== action.payload.columnName)
                ]
            };

        default:
            return state;
    }
};

export default class Viewport extends Component {
    constructor() {
        super();

        this.state = {
            columns: [
                {
                    name: 'col1',
                    width: 100,
                    enableFiltering: true,
                    enableSorting: true
                },
                {
                    name: 'col2',
                    minWidth: 60,
                    width: 150,
                    resizing: true
                },
                {
                    name: 'col3',
                    displayName: 'Column 3',
                    width: 200,
                    maxWidth: 300,
                    moving: true
                }
            ],
            data: Array(500000).fill(0).map((item, i) => ({
                col1: i,
                col2: `Title ${i}`,
                col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }))
        };

        this.callback = this.callback.bind(this);
    }

    callback(action) {
        this.setState(reducer(this.state, action));
    }

    render({}, { columns, data }) {
        return (
            <div>
                <h2>Grid example</h2>
                <TrackedGrid
                    viewportWidth={600}
                    viewportHeight={360}
                    columns={columns}
                    data={data}
                    rowHeight={30}
                    headerColumnComponent={DefaultHeaderColumn}
                    rowComponent={undefined}
                    callback={this.callback}
                />
            </div>
        );
    }
}
