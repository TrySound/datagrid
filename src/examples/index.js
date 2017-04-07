import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App.js';
import Page from './Page.js';
import nav from './nav.js';

const navLinked = nav.map(item => Object.assign({}, item, {
    component: () => <Page {...item} />
}));

ReactDOM.render(
    <Router>
        <App>
            {navLinked.map(item =>
                <Route key={item.href} path={item.href} component={item.component} />
            )}
        </App>
    </Router>,
    document.body.appendChild(document.createElement('div'))
);
