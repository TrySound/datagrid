import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import ListDemo from './ListDemo.js';
import GridDemo from './GridDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

Inferno.render(
    <div style={{ display: 'flex', flexFlow: 'wrap' }}>
        <ListDemo />
        <div style={{ width: 30, flexShrink: 0 }}></div>
        <GridDemo />
    </div>,
    container
);
