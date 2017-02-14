import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import ListDemo from './examples/ListDemo.js';
import TableDemo from './examples/TableDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

Inferno.render(
    <div style={{ display: 'flex' }}>
        <ListDemo />
        <div style={{ width: 30 }}></div>
        <TableDemo />
    </div>,
    container
);
