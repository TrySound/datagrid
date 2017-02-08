import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';

const Column = ({ column, index, ghost }) => (
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

        this.switcher = this.switcher.bind(this);

        this.state = {
            columns: [
                {
                    name: 'col0',
                    width: 100,
                    enableFiltering: true,
                    enableSorting: true
                },
                {
                    name: 'col1',
                    minWidth: 60,
                    width: 100
                },
                {
                    name: 'col2',
                    displayName: 'Column 2',
                    width: 200,
                    maxWidth: 300
                }
            ]
        };
    }

    switcher(action) {
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
                        if (action.between.length === 1) {
                            const first = 0;
                            const last = this.state.columns.length - 1;
                            if (index === first && action.between[0] === first) {
                                return Object.assign({}, item, {
                                    move: 'right'
                                });
                            }
                            if (index === last && action.between[0] === last) {
                                return Object.assign({}, item, {
                                    move: 'left'
                                });
                            }
                        }
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

    render({}, { ghost, ghostX }) {
        return (
            <div style={{
                width: 600,
                height: 300,
                background: '#ccc',
                position: 'relative',
                overflow: 'auto'
            }}>
                <div style={{
                    background: 'var(--header-bg)'
                }}>
                    <Header columns={this.state.columns} component={Column} callback={this.switcher} />
                </div>
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
