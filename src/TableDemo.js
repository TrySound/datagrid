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

        this.ref = this.ref.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onResizing = this.onResizing.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMoving = this.onMoving.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    ref(element) {
        this.element = element;
        this.setState({
            scrollTop: element.scrollTop,
            viewportHeight: element.clientHeight
        });
    };

    onScroll(e) {
        this.setState({
            scrollTop: e.target.scrollTop
        });
    };

    onResizing(columnName, ghostPosition) {
        this.setState({
            dragging: true,
            ghost: true,
            ghostX: ghostPosition
        });
    }

    onResize(columnName, columnWidth) {
        this.setState({
            dragging: false,
            ghost: false,
            columns: this.state.columns.map(item => {
                if (item.name === columnName) {
                    return Object.assign({}, item, {
                        width: columnWidth
                    });
                }
                return item;
            })
        });
    }

    onMoving(columnName, between) {
        this.setState({
            dragging: true,
            columns: this.state.columns.map((item, index) => {
                if (index === between[0]) {
                    return Object.assign({}, item, {
                        move: 'left'
                    });
                }
                if (index === between[1]) {
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
    }

    onMove(columnName, between) {
        const columns = this.state.columns.map((item, index) => {
            if (item.move) {
                return Object.assign({}, item, {
                    move: null
                });
            }
            return item;
        });
        this.setState({
            dragging: false,
            columns: [
                ...columns.slice(0, between[0] + 1).filter(item => item.name !== columnName),
                ...columns.filter(item => item.name === columnName),
                ...columns.slice(between[1]).filter(item => item.name !== columnName)
            ]
        });
    }

    render({}, { columns, data, scrollTop, viewportHeight, ghost, ghostX, dragging }) {
        return (
            <div className="viewport" style={{
                width: 800,
                height: 400,
                overflow: 'auto',
                position: 'relative',
                pointerEvents: dragging ? 'none' : '',
                userSelect: dragging ? 'none' : ''
            }}
                onScroll={this.onScroll}
                ref={this.ref}>
                <div style={{ minWidth: columns.reduce((acc, item) => acc + item.width, 0) }}>
                    <div style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 2,
                        background: 'var(--header-bg)',
                        borderTop: 'var(--header-border)',
                        borderBottom: 'var(--header-border)'
                    }}>
                        <Header
                            columns={this.state.columns}
                            component={HeaderColumn}
                            onMove={this.onMove}
                            onMoving={this.onMoving}
                            onResize={this.onResize}
                            onResizing={this.onResizing} />
                    </div>
                    <Table
                        columns={columns}
                        data={data}
                        scrollTop={scrollTop}
                        viewportHeight={viewportHeight}
                        rowHeight={30} />
                    {ghost && <ResizeGhost x={ghostX} />}
                </div>
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
