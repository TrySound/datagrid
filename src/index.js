import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import ListDemo from './examples/ListDemo.js';
import TableDemo from './examples/TableDemo.js';
import GridDemo from './examples/GridDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

const Div = () => (
    <div style={{ width: 30, flexShrink: 0 }}></div>
);

Inferno.render(
    <div style={{ display: 'flex', flexFlow: 'wrap' }}>
        <ListDemo />
        <Div />
        <TableDemo />
        <Div />
        <GridDemo />
    </div>,
    container
);
