import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import TableDemo from './TableDemo.js';
import ListDemo from './ListDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

Inferno.render(
    <div style={{ display: 'flex' }}>
        {/*<TableDemo />*/}
        {/*<div style={{ width: 30 }}></div>*/}
        <ListDemo />
    </div>,
    container
);
