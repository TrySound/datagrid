import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import HeaderDemo from './HeaderDemo.js';
import TableDemo from './TableDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

const App = () => (
    <div style={{ display: 'flex' }}>
        <HeaderDemo />
        <div style={{ width: 30 }}></div>
        <TableDemo />
    </div>
);

Inferno.render(<App />, container);
