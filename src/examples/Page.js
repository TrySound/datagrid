import createElement from 'inferno-create-element';
import Code from './Code.js';
import './Page.css';

export default props => (
    <div className='Page__container'>
        <div className='Page__header'>{props.title}</div>
        <div className='Page__content'>
            <div className='Page__demo'>
                <props.component />
            </div>
            <div className='Page__code'>
                <Code value={props.code} />
            </div>
        </div>
    </div>
);
