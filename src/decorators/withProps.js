import createElement from 'inferno-create-element';

export default config => component => props => createElement(component, Object.assign({}, props, config));
