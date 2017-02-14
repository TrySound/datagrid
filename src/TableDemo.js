import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import withScrollTopProp from './decorators/withScrollTopProp.js';
import Grid from './Grid.js';

const TrackedGrid = withScrollTopProp(Grid);

const HeaderColumn = ({ column, index, ghost }) => (
    <div style={{
        height: 30,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 8px',
        overflow: 'hidden',
        borderLeft: column.move === 'right' ? '2px solid black' : 'var(--header-border)',
        borderRight: column.move === 'left' ? '2px solid black' : 'var(--header-border)',
        background: 'var(--header-bg)',
        opacity: ghost ? .8 : 1
    }}>
        {column.displayName || column.name}
    </div>
);

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
        console.log(action);
        switch (action.type) {
            case 'RESIZE':
                this.setState({
                    columns: this.state.columns.map(item => {
                        if (item.name === action.payload.columnName) {
                            return Object.assign({}, item, {
                                width: action.payload.columnWidth
                            });
                        }
                        return item;
                    })
                });
                break;

            case 'MOVING':
                this.setState({
                    columns: this.state.columns.map((item, index) => {
                        if (index === action.payload.between[0]) {
                            return Object.assign({}, item, {
                                move: 'left'
                            });
                        }
                        if (index === action.payload.between[1]) {
                            return Object.assign({}, item, {
                                move: 'right'
                            });
                        }
                        if (item.move) {
                            return Object.assign({}, item, {
                                move: null
                            });
                        }
                        return item;
                    })
                });
                break;

            case 'MOVE':
                const columns = this.state.columns.map((item, index) => {
                    if (item.move) {
                        return Object.assign({}, item, {
                            move: null
                        });
                    }
                    return item;
                });
                this.setState({
                    columns: [
                        ...columns.slice(0, action.payload.between[0] + 1)
                                  .filter(item => item.name !== action.payload.columnName),
                        ...columns.filter(item => item.name === action.payload.columnName),
                        ...columns.slice(action.payload.between[1])
                                  .filter(item => item.name !== action.payload.columnName)
                    ]
                });
                break;
        }
    }

    render({}, { columns, data }) {
        return (
            <TrackedGrid
                width={800}
                height={400}
                viewportHeight={400}
                columns={columns}
                data={data}
                rowHeight={30}
                headerColumnComponent={HeaderColumn}
                rowComponent={undefined}
                callback={this.callback}
            />
        );
    }
}

const style = document.createElement('style');
style.textContent = `
    :root {
        --header-bg: linear-gradient(to top, #eeeeee, #ffffff);
        --header-border: 1px solid #d4d4d4;
    }
`;
document.body.appendChild(style);
