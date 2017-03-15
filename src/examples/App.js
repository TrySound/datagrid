import createElement from 'inferno-create-element';
import nav from './nav.js';
import './App.css';

export default props => (
    <div className='App__viewport'>
        <div className='App__container'>
            <div className='App__nav'>
                {nav.map(item =>
                    <a key={item.href} className='App__link' href={`#${item.href}`}>
                        {item.title}
                    </a>
                )}
            </div>
            <div className='App__main'>
                {props.children}
            </div>
        </div>
    </div>
);
