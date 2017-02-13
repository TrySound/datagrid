import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import Table from './Table.js';

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

        this.reducer = this.reducer.bind(this);

        this.state = {
            scrollTop: 0,
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
                    width: 150
                },
                {
                    name: 'col3',
                    displayName: 'Column 3',
                    width: 200,
                    maxWidth: 300
                }
            ],
            data: Array(500000).fill(0).map((item, i) => ({
                col1: i,
                col2: `Title ${i}`,
                col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }))
        };

        this.ref = element => {
            this.element = element;
            this.setState({
                scrollTop: element.scrollTop,
                viewportHeight: element.clientHeight
            });
        };

        this.onScroll = e => {
            this.setState({
                scrollTop: e.target.scrollTop
            });
        };
    }

    reducer(action) {
        console.log(action);
        switch (action.type) {
            case 'RESIZING':
                this.setState({
                    ghost: true,
                    ghostX: action.ghostPosition
                });
                break;
            case 'RESIZE':
                this.setState({
                    ghost: false,
                    columns: this.state.columns.map(item => {
                        if (item.name === action.column) {
                            return Object.assign({}, item, {
                                width: action.columnWidth
                            });
                        }
                        return item;
                    })
                });
                break;
            case 'MOVING':
                this.setState({
                    columns: this.state.columns.map((item, index) => {
                        if (index === action.between[0]) {
                            return Object.assign({}, item, {
                                move: 'left'
                            });
                        }
                        if (index === action.between[1]) {
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
            case 'MOVE': {
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
                        ...columns.slice(0, action.between[0] + 1).filter(item => item.name !== action.column),
                        ...columns.filter(item => item.name === action.column),
                        ...columns.slice(action.between[1]).filter(item => item.name !== action.column)
                    ]
                });
            }
        }
    }

    render({}, { columns, data, scrollTop, viewportHeight, ghost, ghostX }) {
        return (
            <div className="viewport" style={{ width: 800, height: 400, overflow: 'auto', position: 'relative', }}
                onScroll={this.onScroll}
                ref={this.ref}>
                <div style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 2,
                    background: 'var(--header-bg)',
                    borderTop: 'var(--header-border)',
                    borderBottom: 'var(--header-border)'
                }}>
                    <Header columns={this.state.columns} component={HeaderColumn} callback={this.reducer} />
                </div>
                <Table
                    columns={columns}
                    data={data}
                    scrollTop={scrollTop}
                    viewportHeight={viewportHeight}
                    rowHeight={30} />
                {ghost && <ResizeGhost x={ghostX} />}
            </div>
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
