import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import ListDemo from './ListDemo.js';
import GridDemo from './GridDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

Inferno.render(
    <div>
        <GridDemo />
        <div style={{ height: 30 }}></div>
        <ListDemo />
        <div style={{ height: 30 }}></div>
    </div>,
    container
);
