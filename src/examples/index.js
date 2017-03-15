import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import { Router, Route } from 'inferno-router';
import createHashHistory from 'history/createHashHistory';
import App from './App.js';
import Page from './Page.js';
import nav from './nav.js';

const navLinked = nav.map(item => Object.assign({}, item, {
    component: () => <Page {...item} />
}));

Inferno.render(
    <Router history={createHashHistory()}>
        <Route component={App}>
            {navLinked.map(item =>
                <Route key={item.href} path={item.href} component={item.component} />
            )}
        </Route>
    </Router>,
    document.body.appendChild(document.createElement('div'))
);
