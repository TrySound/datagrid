import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import Ghost from './Ghost.js';
import { swap } from './utils.js';

/*
Один callback чтоб править всеми

Будет что-то вроде редьюсера, который сможет обработать любые действия грида на свое усмотрение

*/

const Column = ({ column, index }) => (
    <div style={{
        width: column.width || '',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 8px',
        overflow: 'hidden',
        borderLeft: 'var(--header-border)',
        borderRight: 'var(--header-border)',
        background: 'var(--header-bg)'
    }}>
        {column.displayName || column.name}
        {/*<div style={{
            position: 'absolute',
            zIndex: 2,
            top: 0,
            bottom: 0,
            right: -2,
            width: 4,
            background: '#000'
        }}></div>*/}
    </div>
);

class Viewport extends Component {
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
                    ghostX: action.payload.position
                });
                break;
            case 'RESIZE':
                this.setState({
                    ghost: false,
                    columns: this.state.columns.map(item => {
                        if (item.name === action.payload.column) {
                            return Object.assign({}, item, {
                                width: action.payload.width
                            });
                        }
                        return item;
                    })
                });
                break;
            case 'SWAP':
                this.setState({
                    columns: swap(
                        this.state.columns,
                        d => d.name === action.payload.target,
                        d => d.name === action.payload.source
                    )
                });
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
                {ghost && <Ghost x={ghostX} />}
            </div>
        );
    }
}

const container = document.createElement('div');
container.classList.add('app');
const style = document.createElement('style');
style.textContent = `
    :root {
        --header-bg: linear-gradient(to top, #eeeeee, #ffffff);
        --header-border: 1px solid #d4d4d4;
    }
`;
document.body.appendChild(container);
document.body.appendChild(style);

Inferno.render(<Viewport />, container);
