import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import HeaderDemo from './HeaderDemo.js';
import ListDemo from './ListDemo.js';

const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

const App = () => (
    <div style={{ display: 'flex' }}>
        <HeaderDemo />
        <div style={{ width: 30 }}></div>
        <ListDemo />
    </div>
);

Inferno.render(<App />, container);
