import React from 'react';
import { Link } from 'react-router-dom';
import nav from './nav.js';
import './App.css';

export default props => (
    <div className='App__viewport'>
        <div className='App__container'>
            <div className='App__nav'>
                {nav.map(item =>
                    <Link key={item.href} className='App__link' to={item.href}>
                        {item.title}
                    </Link>
                )}
            </div>
            <div className='App__main'>
                {props.children}
            </div>
        </div>
    </div>
);
