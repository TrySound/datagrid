import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import TableDemo from './TableDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

Inferno.render(<TableDemo />, container);
